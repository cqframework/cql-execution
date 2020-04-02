{ Uncertainty } = require './uncertainty'
{ jsDate,
  normalizeMillisecondsField,
  normalizeMillisecondsFieldInString,
  getTimezoneSeparatorFromString } = require '../util/util'
moment = require 'moment'

class DateTime
  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isDateTime:
      get: -> true

  @Unit: { YEAR: 'year', MONTH: 'month', WEEK: 'week', DAY: 'day', HOUR: 'hour', MINUTE: 'minute', SECOND: 'second', MILLISECOND: 'millisecond' }
  @FIELDS: [@Unit.YEAR, @Unit.MONTH, @Unit.DAY, @Unit.HOUR, @Unit.MINUTE, @Unit.SECOND, @Unit.MILLISECOND]

  @parse: (string) ->
    return null if string is null

    matches = /(\d{4})(-(\d{2}))?(-(\d{2}))?(T((\d{2})(\:(\d{2})(\:(\d{2})(\.(\d+))?)?)?)?(Z|(([+-])(\d{2})(\:?(\d{2}))?))?)?/.exec string

    return null unless matches?
    years= matches[1]
    months= matches[3]
    days= matches[5]
    hours= matches[8]
    minutes= matches[10]
    seconds= matches[12]
    milliseconds= matches[14]
    milliseconds= normalizeMillisecondsField(milliseconds) if milliseconds?
    string = normalizeMillisecondsFieldInString(string, matches[14]) if milliseconds?

    return null if !isValidDateTimeStringFormat(string)

    args = [years, months, days, hours, minutes, seconds, milliseconds]
    # convert them all to integers
    args = ((if arg? then parseInt(arg,10)) for arg in args)
    # convert timezone offset to decimal and add it to arguments
    if matches[18]?
      num = parseInt(matches[18],10) + (if matches[20]? then parseInt(matches[20],10) / 60 else 0)
      args.push(if matches[17] is '+' then num else num * -1)
    else if matches[15] == 'Z'
      args.push(0)
    new DateTime(args...)

  @fromJSDate: (date, timezoneOffset) -> #This is from a JS Date, not a CQL Date
    if (date instanceof DateTime) then return date
    if timezoneOffset?
      date = new jsDate(date.getTime() + (timezoneOffset * 60 * 60 * 1000))
      new DateTime(
        date.getUTCFullYear(),
        date.getUTCMonth() + 1,
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds(),
        timezoneOffset)
    else
      new DateTime(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds())

  constructor: (@year=null, @month=null, @day=null, @hour=null, @minute=null, @second=null, @millisecond=null, @timezoneOffset) ->
    # from the spec: If no timezone is specified, the timezone of the evaluation request timestamp is used.
    # NOTE: timezoneOffset will be explicitly null for the Time overload, whereas
    # it will be undefined if simply unspecified
    if typeof(@timezoneOffset) is 'undefined'
      @timezoneOffset = (new jsDate()).getTimezoneOffset() / 60 * -1

  copy: () ->
    new DateTime(@year, @month, @day, @hour, @minute, @second, @millisecond, @timezoneOffset)

  successor: () ->
    if @millisecond?
      @add(1,DateTime.Unit.MILLISECOND)
    else if @second?
      @add(1,DateTime.Unit.SECOND)
    else if @minute?
      @add(1,DateTime.Unit.MINUTE)
    else if @hour?
      @add(1,DateTime.Unit.HOUR)
    else if @day?
      @add(1,DateTime.Unit.DAY)
    else if @month?
      @add(1,DateTime.Unit.MONTH)
    else if @year?
      @add(1,DateTime.Unit.YEAR)

  predecessor: () ->
    if @millisecond?
      @add(-1,DateTime.Unit.MILLISECOND)
    else if @second?
      @add(-1,DateTime.Unit.SECOND)
    else if @minute?
      @add(-1,DateTime.Unit.MINUTE)
    else if @hour?
      @add(-1,DateTime.Unit.HOUR)
    else if @day?
      @add(-1,DateTime.Unit.DAY)
    else if @month?
      @add(-1,DateTime.Unit.MONTH)
    else if @year?
      @add(-1,DateTime.Unit.YEAR)

  convertToTimezoneOffset: (timezoneOffset = 0) ->
    d = DateTime.fromJSDate(@toJSDate(), timezoneOffset)
    d.reducedPrecision(@getPrecision())

  differenceBetween: (other, unitField) ->
    other = @_implicitlyConvert(other)
    if not(other?.isDateTime) then return null

    # According to CQL spec, to calculate difference, you can just floor lesser precisions and do a duration
    # Make copies since we'll be flooring values and mucking with timezones
    a = @copy()
    b = other.copy()
    # Use moment.js for day or finer granularity due to the daylight savings time fall back/spring forward
    if unitField == DateTime.Unit.MONTH || unitField == DateTime.Unit.YEAR || unitField == DateTime.Unit.WEEK || unitField == DateTime.Unit.DAY
      # The dates need to agree on where the boundaries are, so we must normalize to the same time zone
      if a.timezoneOffset isnt b.timezoneOffset
        b = b.convertToTimezoneOffset(a.timezoneOffset)
      # JS always represents dates in the current locale, but in locales with DST, we want to account for the
      # potential difference in offset from one date to the other.  We try to simulate them being in the same
      # timezone, because we don't want midnight to roll back to 11:00pm since that will mess up day boundaries.
      if (!a.isUTC() || !b.isUTC())
        aJS = a.toJSDate(true)
        bJS = b.toJSDate(true)
        tzDiff = aJS.getTimezoneOffset() - bJS.getTimezoneOffset()
        if (tzDiff != 0)
          # Since we'll be doing duration later, account for timezone offset by adding to the time (if possible)
          if b.year? and b.month? and b.day? and b.hour? and b.minute? then b = b.add(tzDiff, DateTime.Unit.MINUTE)
          else if b.year? and b.month? and b.day? and b.hour? then b = b.add(tzDiff/60, DateTime.Unit.HOUR)
          else b.timezoneOffset = b.timezoneOffset + (tzDiff/60)
    # Now floor lesser precisions before we go on to calculate duration
    if unitField == DateTime.Unit.YEAR
      a = new DateTime(a.year, 1, 1, 12, 0, 0, 0, a.timezoneOffset)
      b = new DateTime(b.year, 1, 1, 12, 0, 0, 0, b.timezoneOffset)
    else if unitField == DateTime.Unit.MONTH
      a = new DateTime(a.year, a.month, 1, 12, 0, 0, 0, a.timezoneOffset)
      b = new DateTime(b.year, b.month, 1, 12, 0, 0, 0, b.timezoneOffset)
    else if unitField == DateTime.Unit.WEEK
      a = @_floorWeek(a)
      b = @_floorWeek(b)
    else if unitField == DateTime.Unit.DAY
      a = new DateTime(a.year, a.month, a.day, 12, 0, 0, 0, a.timezoneOffset)
      b = new DateTime(b.year, b.month, b.day, 12, 0, 0, 0, b.timezoneOffset)
    else if unitField == DateTime.Unit.HOUR
      a = new DateTime(a.year, a.month, a.day, a.hour, 30, 0, 0, a.timezoneOffset)
      b = new DateTime(b.year, b.month, b.day, b.hour, 30, 0, 0, b.timezoneOffset)
    else if unitField == DateTime.Unit.MINUTE
      a = new DateTime(a.year, a.month, a.day, a.hour, a.minute, 0, 0, a.timezoneOffset)
      b = new DateTime(b.year, b.month, b.day, b.hour, b.minute, 0, 0, b.timezoneOffset)
    else if unitField == DateTime.Unit.SECOND
      a = new DateTime(a.year, a.month, a.day, a.hour, a.minute, a.second, 0, a.timezoneOffset)
      b = new DateTime(b.year, b.month, b.day, b.hour, b.minute, b.second, 0, b.timezoneOffset)

    # Because moment.js handles years and months differently, use the existing durationBetween for those
    # Finer granularity times can be handled by the DST-aware moment.js library.
    if unitField == DateTime.Unit.YEAR || unitField == DateTime.Unit.MONTH
      a.durationBetween(b, unitField)
    else
      aUncertainty = a.toUncertainty()
      bUncertainty = b.toUncertainty()
      aLowMoment = moment(aUncertainty.low).utc()
      aHighMoment = moment(aUncertainty.high).utc()
      bLowMoment = moment(bUncertainty.low).utc()
      bHighMoment = moment(bUncertainty.high).utc()
      # moment uses the plural form of the unitField
      new Uncertainty(bLowMoment.diff(aHighMoment, unitField + 's'), bHighMoment.diff(aLowMoment, unitField + 's'))

  _floorWeek: (d) ->
    # To "floor" a week, we need to go back to the last Sunday (that's when getDay() == 0 in javascript)
    # But if we don't know the day, then just return it as-is
    if (not d.day?) then return d
    floored = new jsDate(d.year, d.month-1, d.day)
    floored.setDate(floored.getDate() - 1) while floored.getDay() > 0
    new DateTime(floored.getFullYear(), floored.getMonth()+1, floored.getDate(), 12, 0, 0, 0, d.timezoneOffset)

  durationBetween: (other, unitField) ->
    other = @_implicitlyConvert(other)
    if not(other?.isDateTime) then return null
    a = @toUncertainty()
    b = other.toUncertainty()
    new Uncertainty(@_durationBetweenDates(a.high, b.low, unitField), @_durationBetweenDates(a.low, b.high, unitField))

  # NOTE: a and b are real JS dates -- not DateTimes
  _durationBetweenDates: (a, b, unitField) ->
    # DurationBetween is different than DifferenceBetween in that DurationBetween counts whole elapsed time periods, but
    # DifferenceBetween counts boundaries.  For example:
    # difference in days between @2012-01-01T23:59:59.999 and @2012-01-02T00:00:00.0 calculates to 1 (since it crosses day boundary)
    # days between @2012-01-01T23:59:59.999 and @2012-01-02T00:00:00.0 calculates to 0 (since there are no full days between them)
    msDiff = b.getTime() - a.getTime()

    if msDiff == 0 then return 0
    # If it's a negative delta, we need to use ceiling instead of floor when truncating
    truncFunc = if msDiff > 0 then Math.floor else Math.ceil
    # For ms, s, min, hr, day, and week this is trivial
    if unitField == DateTime.Unit.MILLISECOND then msDiff
    else if unitField == DateTime.Unit.SECOND then truncFunc(msDiff / 1000)
    else if unitField == DateTime.Unit.MINUTE then truncFunc(msDiff / (60 * 1000))
    else if unitField == DateTime.Unit.HOUR then truncFunc(msDiff / (60 * 60 * 1000))
    else if unitField == DateTime.Unit.DAY
      truncFunc(msDiff / (24 * 60 * 60 * 1000))
    else if unitField == DateTime.Unit.WEEK
      truncFunc(msDiff / (7 * 24 * 60 * 60 * 1000))
    # Months and years are trickier since months are variable length
    else if unitField == DateTime.Unit.MONTH or unitField == DateTime.Unit.YEAR
      # First get the rough months, essentially counting month "boundaries"
      months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth())
      # Now we need to look at the smaller units to see how they compare.  Since we only care about comparing
      # days and below at this point, it's much easier to bring a up to b so it's in the same month, then
      # we can compare on just the remaining units.
      aInMonth = new jsDate(a.getTime())
      # Remember the original timezone offset because if it changes when we bring it up a month, we need to fix it
      aInMonthOriginalOffset = aInMonth.getTimezoneOffset()
      aInMonth.setMonth(a.getMonth() + months)
      if aInMonthOriginalOffset != aInMonth.getTimezoneOffset()
        aInMonth.setMinutes(aInMonth.getMinutes() + (aInMonthOriginalOffset - aInMonth.getTimezoneOffset()))
      # When a is before b, then if a's smaller units are greater than b's, a whole month hasn't elapsed, so adjust
      if msDiff > 0 and aInMonth > b then months = months - 1
      # When b is before a, then if a's smaller units are less than b's, a whole month hasn't elaspsed backwards, so adjust
      else if msDiff < 0 and aInMonth < b then months = months + 1
      # If this is months, just return them, but if it's years, we need to convert
      if unitField == DateTime.Unit.MONTH
        months
      else
        truncFunc(months/12)
    else
      null

  isUTC: () ->
    # A timezoneOffset of 0 indicates UTC time.
    !@timezoneOffset

  getPrecision: () ->
    result = null
    if @year? then result = DateTime.Unit.YEAR else return result
    if @month? then result = DateTime.Unit.MONTH else return result
    if @day? then result = DateTime.Unit.DAY else return result
    if @hour? then result = DateTime.Unit.HOUR else return result
    if @minute? then result = DateTime.Unit.MINUTE else return result
    if @second? then result = DateTime.Unit.SECOND else return result
    if @millisecond? then result = DateTime.Unit.MILLISECOND
    result

  toUncertainty: (ignoreTimezone = false) ->
    low = @toJSDate(ignoreTimezone)
    high = (new DateTime(
      @year,
      @month ? 12,
      # see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
      @day ? (new jsDate(@year, @month ? 12, 0)).getDate(),
      @hour ? 23,
      @minute ? 59,
      @second ? 59,
      @millisecond ? 999,
      @timezoneOffset)).toJSDate(ignoreTimezone)
    new Uncertainty(low, high)

  toJSDate: (ignoreTimezone = false) ->
    [y, mo, d, h, mi, s, ms] = [ @year, (if @month? then @month-1 else 0), @day ? 1, @hour ? 0, @minute ? 0, @second ? 0, @millisecond ? 0 ]
    if @timezoneOffset? and not ignoreTimezone
      date = new jsDate(jsDate.UTC(y, mo, d, h, mi, s, ms) - (@timezoneOffset * 60 * 60 * 1000))
      # TODO: This fixes any case that would not cross the year boundary due to a timezone.
      # Mainly used to solve the issue with the MIN_DATETIME_VALUE being converted from
      # year 0001 to year 1900 because of strange JSDate behavior between year 0 and 100
      # Also else case below
      if y < 100 then date.setUTCFullYear(y)
      return date
    else
      date = new jsDate(y, mo, d, h, mi, s, ms)
      if y < 100 then date.setFullYear(y)
      return date

  toJSON: () ->
    @toString()

  _pad: (num) ->
    String("0" + num).slice(-2)

  toString: () ->
    if @isTime() then @toStringTime() else @toStringDateTime()

  toStringTime: () ->
    str = ''
    if @hour?
      str += + @_pad(@hour)
      if @minute?
        str += ':' + @_pad(@minute)
        if @second?
          str += ':' + @_pad(@second)
          if @millisecond?
            str += '.' + String("00" + @millisecond).slice(-3)

    str

  toStringDateTime: () ->
    str = ''
    if @year?
      str += @year
      if @month?
        str += '-' + @_pad(@month)
        if @day?
          str += '-' + @_pad(@day)
          if @hour?
            str += 'T' + @_pad(@hour)
            if @minute?
              str += ':' + @_pad(@minute)
              if @second?
                str += ':' + @_pad(@second)
                if @millisecond?
                  str += '.' + String("00" + @millisecond).slice(-3)

    if str.indexOf('T') != -1 and @timezoneOffset?
      str += if @timezoneOffset < 0 then '-' else '+'
      offsetHours = Math.floor(Math.abs(@timezoneOffset))
      str += @_pad(offsetHours)
      offsetMin = (Math.abs(@timezoneOffset) - offsetHours) * 60
      str += ':' + @_pad(offsetMin)

    str

  getDateTime: () ->
    @

  getDate: () ->
    new Date(@year, @month, @day)

  getTime: () ->
    # Times no longer have timezoneOffets, so we must explicitly set it to null
    new DateTime(0, 1, 1, @hour, @minute, @second, @millisecond, null)

  isTime: () ->
    @year == 0 && @month == 1 && @day == 1

  _implicitlyConvert: (other) ->
    if (other?.isDate) then return other.getDateTime()
    return other

  reducedPrecision: (unitField = DateTime.Unit.MILLISECOND) ->
    reduced = @copy()
    if unitField isnt DateTime.Unit.MILLISECOND
      fieldIndex = DateTime.FIELDS.indexOf unitField
      fieldsToRemove = DateTime.FIELDS.slice(fieldIndex + 1)
      reduced[field] = null for field in fieldsToRemove
    reduced



class Date
  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isDate:
      get: -> true

  @Unit: { YEAR: 'year', MONTH: 'month', WEEK: 'week', DAY: 'day' }
  @FIELDS: [@Unit.YEAR, @Unit.MONTH, @Unit.DAY]

  @parse: (string) ->
    return null if string is null

    matches = /(\d{4})(-(\d{2}))?(-(\d{2}))?/.exec string

    return null unless matches?
    years= matches[1]
    months= matches[3]
    days= matches[5]

    return null if !isValidDateStringFormat(string)

    args = [years, months, days]
    # convert them all to integers
    args = ((if arg? then parseInt(arg,10)) for arg in args)
    new Date(args...)

  constructor: (@year=null, @month=null, @day=null) ->
    return

  copy: () ->
    new Date(@year, @month, @day)

  successor: () ->
    if @day?
      @add(1,Date.Unit.DAY)
    else if @month?
      @add(1,Date.Unit.MONTH)
    else if @year?
      @add(1,Date.Unit.YEAR)

  predecessor: () ->
    if @day?
      @add(-1,Date.Unit.DAY)
    else if @month?
      @add(-1,Date.Unit.MONTH)
    else if @year?
      @add(-1,Date.Unit.YEAR)

  differenceBetween: (other, unitField) ->
    if (other?.isDateTime) then return this.getDateTime().differenceBetween(other, unitField)
    if not(other?.isDate) then return null

    a = @
    b = other
    # According to CQL spec, to calculate difference, you can just floor lesser precisions and do a duration
    if unitField == Date.Unit.YEAR
      a = new Date(a.year, 1, 1)
      b = new Date(b.year, 1, 1)
    else if unitField == Date.Unit.MONTH
      a = new Date(a.year, a.month, 1)
      b = new Date(b.year, b.month, 1)
    else if unitField == Date.Unit.WEEK
      a = @_floorWeek(a)
      b = @_floorWeek(b)

    a.durationBetween(b, unitField)

  _floorWeek: (d) ->
    # To "floor" a week, we need to go back to the last Sunday (that's when getDay() == 0 in javascript)
    # But if we don't know the day, then just return it as-is
    if (not d.day?) then return d
    floored = new jsDate(d.year, d.month-1, d.day)
    floored.setDate(floored.getDate() - 1) while floored.getDay() > 0
    new Date(floored.getFullYear(), floored.getMonth()+1, floored.getDate())

  durationBetween: (other, unitField) ->
    if (other?.isDateTime) then return this.getDateTime().durationBetween(other, unitField)
    if not(other?.isDate) then return null

    a = @toUncertainty()
    b = other.toUncertainty()
    new Uncertainty(@_durationBetweenDates(a.high, b.low, unitField), @_durationBetweenDates(a.low, b.high, unitField))

  # NOTE: a and b are real JS dates -- not DateTimes. Also this expects time components to be zero!
  _durationBetweenDates: (a, b, unitField) ->
    #we need to fix offsets to match so we dont get any JS DST interference, to avoid crossing day boundaries put it in the middle of the day
    #DST stuff should only be +/- one hour so this should work
    a.setTime(a.getTime() + (12*60*60*1000))
    b.setTime(b.getTime() + (12*60*60*1000))
    tzdiff = a.getTimezoneOffset() - b.getTimezoneOffset()
    b.setTime(b.getTime() + (tzdiff*60*1000))

    # DurationBetween is different than DifferenceBetween in that DurationBetween counts whole elapsed time periods, but
    # DifferenceBetween counts boundaries.  For example:
    # difference in days between @2012-01-01T23:59:59.999 and @2012-01-02T00:00:00.0 calculates to 1 (since it crosses day boundary)
    # days between @2012-01-01T23:59:59.999 and @2012-01-02T00:00:00.0 calculates to 0 (since there are no full days between them)
    msDiff = b.getTime() - a.getTime()

    if msDiff == 0 then return 0
    # If it's a negative delta, we need to use ceiling instead of floor when truncating
    truncFunc = if msDiff > 0 then Math.floor else Math.ceil
    # For ms, s, min, hr, day, and week this is trivial
    if unitField == Date.Unit.DAY
      truncFunc(msDiff / (24 * 60 * 60 * 1000))
    else if unitField == Date.Unit.WEEK
      truncFunc(msDiff / (7 * 24 * 60 * 60 * 1000))
    # Months and years are trickier since months are variable length
    else if unitField == Date.Unit.MONTH or unitField == Date.Unit.YEAR
      # First get the rough months, essentially counting month "boundaries"
      months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth())
      # Now we need to look at the smaller units to see how they compare.  Since we only care about comparing
      # days and below at this point, it's much easier to bring a up to b so it's in the same month, then
      # we can compare on just the remaining units.
      aInMonth = new jsDate(a.getTime())
      # Remember the original timezone offset because if it changes when we bring it up a month, we need to fix it
      aInMonthOriginalOffset = aInMonth.getTimezoneOffset()
      aInMonth.setMonth(a.getMonth() + months)
      if aInMonthOriginalOffset != aInMonth.getTimezoneOffset()
        aInMonth.setMinutes(aInMonth.getMinutes() + (aInMonthOriginalOffset - aInMonth.getTimezoneOffset()))
      # When a is before b, then if a's smaller units are greater than b's, a whole month hasn't elapsed, so adjust
      if msDiff > 0 and aInMonth > b then months = months - 1
      # When b is before a, then if a's smaller units are less than b's, a whole month hasn't elaspsed backwards, so adjust
      else if msDiff < 0 and aInMonth < b then months = months + 1
      # If this is months, just return them, but if it's years, we need to convert
      if unitField == Date.Unit.MONTH
        months
      else
        truncFunc(months/12)
    else
      null

  getPrecision: () ->
    result = null
    if @year? then result = Date.Unit.YEAR else return result
    if @month? then result = Date.Unit.MONTH else return result
    if @day? then result = Date.Unit.DAY else return result
    result

  toUncertainty: () ->
    low = @toJSDate()
    high = new Date(
      @year,
      @month ? 12,
      # see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
      @day ? (new jsDate(@year, @month ? 12, 0)).getDate()
    ).toJSDate()

    new Uncertainty(low, high)

  toJSDate: () ->
    [y, mo, d] = [ @year, (if @month? then @month-1 else 0), @day ? 1 ]
    new jsDate(y, mo, d)

  @fromJSDate: (date) ->
    if (date instanceof Date) then return date
    new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate())

  toJSON: () ->
    @toString()

  toString: () ->
    str = ''
    if @year?
      str += @year.toString()
      if @month?
        str += '-' + @month.toString().padStart(2,"0")
        if @day?
          str += '-' + @day.toString().padStart(2,"0")
    str

  getDateTime: () ->
    # from the spec: the result will be a DateTime with the time components set to zero,
    # except for the timezone offset, which will be set to the timezone offset of the evaluation
    # request timestamp. (this last part is acheived by just not passing in timezone offset)
    if @year? and @month? and @day?
      new DateTime(@year, @month, @day, 0, 0, 0, 0)
    # from spec: no component may be specified at a precision below an unspecified precision.
    # For example, hour may be null, but if it is, minute, second, and millisecond must all be null as well.
    else
      new DateTime(@year, @month, @day)

  reducedPrecision: (unitField = Date.Unit.DAY) ->
    reduced = @copy()
    if unitField isnt Date.Unit.DAY
      fieldIndex = Date.FIELDS.indexOf unitField
      fieldsToRemove = Date.FIELDS.slice(fieldIndex + 1)
      reduced[field] = null for field in fieldsToRemove
    reduced

# Shared Funtions For Date and DateTime
DateTime.prototype.isPrecise = Date.prototype.isPrecise = () ->
    @constructor.FIELDS.every (field) => @[field]?

DateTime.prototype.isImprecise = Date.prototype.isImprecise = () ->
    not @isPrecise()

# This function can take another Date-ish object, or a precision string (e.g. 'month')
DateTime.prototype.isMorePrecise = Date.prototype.isMorePrecise = (other) ->
    if typeof other is 'string' and other in @constructor.FIELDS
      return false if not @[other]?

    else
      for field in @constructor.FIELDS
        if (other[field]? and not @[field]?) then return false

    not @isSamePrecision(other)

# This function can take another Date-ish object, or a precision string (e.g. 'month')
DateTime.prototype.isLessPrecise = Date.prototype.isLessPrecise = (other) ->
    not @isSamePrecision(other) and not @isMorePrecise(other)

# This function can take another Date-ish object, or a precision string (e.g. 'month')
DateTime.prototype.isSamePrecision = Date.prototype.isSamePrecision = (other) ->
    if typeof other is 'string' and other in @constructor.FIELDS
      return other == @getPrecision()

    for field in @constructor.FIELDS
      if (@[field]? and not other[field]?) then return false
      if (not @[field]? and other[field]?) then return false
    true

DateTime.prototype.equals = Date.prototype.equals = (other) ->
  compareWithDefaultResult(@, other, null)

DateTime.prototype.equivalent = Date.prototype.equivalent = (other) ->
  compareWithDefaultResult(@, other, false)


DateTime.prototype.sameAs = Date.prototype.sameAs = (other, precision) ->
  if not((other.isDate) or (other.isDateTime))
    return null
  else if @.isDate and other.isDateTime
    return @getDateTime().sameAs(other, precision)
  else if @.isDateTime and other.isDate
    other = other.getDateTime()

  if precision? && @constructor.FIELDS.indexOf(precision) < 0
    throw new Error("Invalid precision: #{precision}")

  # make a copy of other in the correct timezone offset if they don't match.
  if (@timezoneOffset != other.timezoneOffset)
    other = other.convertToTimezoneOffset(@timezoneOffset)

  for field in @constructor.FIELDS
    # if both have this precision defined
    if @[field]? and other[field]?
      # if they are different then return with false
      if @[field] != other[field]
        return false

    # if both dont have this precision, return true of precision is not defined
    else if !@[field]? and !other[field]?
      if !precision?
        return true
      else # we havent met precision yet
        return null

    # otherwise they have inconclusive precision, return null
    else
      return null

    # if precision is defined and we have reached expected precision, we can leave the loop
    break if precision? and precision is field

  # if we made it here, then all fields matched.
  true

DateTime.prototype.sameOrBefore = Date.prototype.sameOrBefore = (other, precision) ->
  if not((other.isDate) or (other.isDateTime))
    return null
  else if @.isDate and other.isDateTime
    return @getDateTime().sameOrBefore(other, precision)
  else if @.isDateTime and other.isDate
    other = other.getDateTime()

  if precision? && @constructor.FIELDS.indexOf(precision) < 0
    throw new Error("Invalid precision: #{precision}")

  # make a copy of other in the correct timezone offset if they don't match.
  if (@timezoneOffset != other.timezoneOffset)
    other = other.convertToTimezoneOffset(@timezoneOffset)

  for field in @constructor.FIELDS
    # if both have this precision defined
    if @[field]? and other[field]?
      # if this value is less than the other return with true. this is before other
      if @[field] < other[field]
        return true
      # if this value is greater than the other return with false. this is after
      else if @[field] > other[field]
        return false
      # execution continues if the values are the same

    # if both dont have this precision, return true if precision is not defined
    else if !@[field]? and !other[field]?
      if !precision?
        return true
      else # we havent met precision yet
        return null

    # otherwise they have inconclusive precision, return null
    else
      return null

    # if precision is defined and we have reached expected precision, we can leave the loop
    break if precision? and precision is field

  # if we made it here, then all fields matched and they are same
  true

DateTime.prototype.sameOrAfter = Date.prototype.sameOrAfter = (other, precision) ->
  if not((other.isDate) or (other.isDateTime))
    return null
  else if @.isDate and other.isDateTime
    return @getDateTime().sameOrAfter(other, precision)
  else if @.isDateTime and other.isDate
    other = other.getDateTime()

  if precision? && @constructor.FIELDS.indexOf(precision) < 0
    throw new Error("Invalid precision: #{precision}")

  # make a copy of other in the correct timezone offset if they don't match.
  if (@timezoneOffset != other.timezoneOffset)
    other = other.convertToTimezoneOffset(@timezoneOffset)

  for field in @constructor.FIELDS
    # if both have this precision defined
    if @[field]? and other[field]?
      # if this value is greater than the other return with true. this is after other
      if @[field] > other[field]
        return true
      # if this value is greater than the other return with false. this is before
      else if @[field] < other[field]
        return false
      # execution continues if the values are the same

    # if both dont have this precision, return true if precision is not defined
    else if !@[field]? and !other[field]?
      if !precision?
        return true
      else # we havent met precision yet
        return null

    # otherwise they have inconclusive precision, return null
    else
      return null

    # if precision is defined and we have reached expected precision, we can leave the loop
    break if precision? and precision is field

  # if we made it here, then all fields matched and they are same
  true

DateTime.prototype.before = Date.prototype.before = (other, precision) ->
  if not((other.isDate) or (other.isDateTime))
    return null
  else if @.isDate and other.isDateTime
    return @getDateTime().before(other, precision)
  else if @.isDateTime and other.isDate
    other = other.getDateTime()

  if precision? && @constructor.FIELDS.indexOf(precision) < 0
    throw new Error("Invalid precision: #{precision}")

  # make a copy of other in the correct timezone offset if they don't match.
  if (@timezoneOffset != other.timezoneOffset)
    other = other.convertToTimezoneOffset(@timezoneOffset)

  for field in @constructor.FIELDS
    # if both have this precision defined
    if @[field]? and other[field]?
      # if this value is less than the other return with true. this is before other
      if @[field] < other[field]
        return true
      # if this value is greater than the other return with false. this is after
      else if @[field] > other[field]
        return false
      # execution continues if the values are the same

    # if both dont have this precision, return false if precision is not defined
    else if !@[field]? and !other[field]?
      if !precision?
        return false
      else # we havent met precision yet
        return null

    # otherwise they have inconclusive precision, return null
    else
      return null

    # if precision is defined and we have reached expected precision, we can leave the loop
    break if precision? and precision is field

  # if we made it here, then all fields matched and they are same
  false

DateTime.prototype.after = Date.prototype.after = (other, precision) ->
  if not((other.isDate) or (other.isDateTime))
    return null
  else if @.isDate and other.isDateTime
    return @getDateTime().after(other, precision)
  else if @.isDateTime and other.isDate
    other = other.getDateTime()

  if precision? && @constructor.FIELDS.indexOf(precision) < 0
    throw new Error("Invalid precision: #{precision}")

  # make a copy of other in the correct timezone offset if they don't match.
  if (@timezoneOffset != other.timezoneOffset)
    other = other.convertToTimezoneOffset(@timezoneOffset)

  for field in @constructor.FIELDS
    # if both have this precision defined
    if @[field]? and other[field]?
      # if this value is greater than the other return with true. this is after other
      if @[field] > other[field]
        return true
      # if this value is greater than the other return with false. this is before
      else if @[field] < other[field]
        return false
      # execution continues if the values are the same

    # if both dont have this precision, return false if precision is not defined
    else if !@[field]? and !other[field]?
      if !precision?
        return false
      else # we havent met precision yet
        return null

    # otherwise they have inconclusive precision, return null
    else
      return null

    # if precision is defined and we have reached expected precision, we can leave the loop
    break if precision? and precision is field

  # if we made it here, then all fields matched and they are same
  false

DateTime.prototype.add = Date.prototype.add = (offset, field) ->
  result = @copy()
  return result if offset == 0

  # If weeks, convert to days
  if field == @constructor.Unit.WEEK
    offset = offset * 7
    field = @constructor.Unit.DAY


  offsetIsMorePrecise = not result[field]? #whether the quantity we are adding is more precise than @
  # From the spec: "The operation is performed by converting the time-based quantity to the most precise value
  # specified in the date/time (truncating any resulting decimal portion) and then adding it to the date/time value."
  # However, since you can't really convert e.g. days to months,  if @ is less precise than the field being added, we can
  # "floor" UP to the incoming field precision, then add the offset, then reduce back down to original precision.
  # For negative offsets, we use the cieling
  if offsetIsMorePrecise
    result.year = new jsDate().getFullYear() if not @year #in case there is no year, proceed as if in this year, year will be nullified later
    fieldFloorOrCiel = if offset >= 0 then @getFieldFloor else @getFieldCieling
    for f in @constructor.FIELDS # this relies on FIELDS being sorted least to most precise
      result[f] = result[f] ? fieldFloorOrCiel.call(result,f)
      break if result[field]?

  # Increment the field, then round-trip to JS date and back for calendar math
  result[field] = result[field] + offset
  normalized = @constructor.fromJSDate(result.toJSDate(), @timezoneOffset)
  for field in @constructor.FIELDS when result[field]?
    result[field] = normalized[field]

  # remove any fields we added (go back to original precision)
  if offsetIsMorePrecise
    for f in @constructor.FIELDS
      result[f] = null if not @[f]?

  result

DateTime.prototype.getFieldFloor = Date.prototype.getFieldFloor = (field) ->
  if field == 'month'
    return 1
  if field == 'day'
    return 1
  if field == 'hour'
    return 0
  if field == 'minute'
    return 0
  if field == 'second'
    return 0
  if field == 'millisecond'
    return 0
  throw new Error('Tried to floor a field that has no floor value: ' + field)


DateTime.prototype.getFieldCieling = Date.prototype.getFieldCieling = (field) ->
  if field == 'month'
    return 12
  if field == 'day'
    return daysInMonth(@year, @month)
  if field == 'hour'
    return 23
  if field == 'minute'
    return 59
  if field == 'second'
    return 59
  if field == 'millisecond'
    return 999
  throw new Error('Tried to clieling a field that has no cieling value: ' + field)

compareWithDefaultResult = (a, b, defaultResult) ->
  # return false there is a type mismatch
  unless (a.isDate and b.isDate) or (a.isDateTime and b.isDateTime)
    return false

  # make a copy of other in the correct timezone offset if they don't match.
  if (a.timezoneOffset != b.timezoneOffset)
    b = b.convertToTimezoneOffset(a.timezoneOffset)

  for field in a.constructor.FIELDS
    # if both have this precision defined
    if a[field]? and b[field]?
      # For the purposes of comparison, seconds and milliseconds are combined
      # as a single precision using a decimal, with decimal equality semantics
      if field is 'second'
        # NOTE: if millisecond is null it will calcualte like this anyway, but
        # if millisecond is undefined, using it will result in NaN calculations
        aMillisecond = if a['millisecond']? then a['millisecond'] else 0
        aSecondAndMillisecond = a[field] + aMillisecond / 1000
        bMillisecond = if b['millisecond']? then b['millisecond'] else 0
        bSecondAndMillisecond = b[field] + bMillisecond / 1000

        # second/millisecond is the most precise comparison, so we can directly return
        return aSecondAndMillisecond == bSecondAndMillisecond

      # if they are different then return with false
      if a[field] != b[field]
        return false

    # if both dont have this precision, return true
    else if !a[field]? and !b[field]?
      return true

    # otherwise they have inconclusive precision, return defaultResult
    else
      return defaultResult
  # if we made it here, then all fields matched.
  true

daysInMonth = (year, month) ->
  if not (year? and month?)
    throw new Error('daysInMonth requires year and month as arguments')
  # Month is 1-indexed here because of the 0 day
  return new jsDate(year, month, 0).getDate()

normalizeMillisecondsField = (msString) ->
  # fix up milliseconds by padding zeros and/or truncating (5 --> 500, 50 --> 500, 54321 --> 543, etc.)
  msString = (msString + "00").substring(0, 3)

isValidDateStringFormat = (string) ->
  return false if typeof string isnt 'string'
  cqlFormats = ['YYYY',
                'YYYY-MM',
                'YYYY-MM-DD']

  cqlFormatStringWithLength = {}
  cqlFormatStringWithLength[format.length] = format for format in cqlFormats

  return false if !cqlFormatStringWithLength[string.length]?

  strict = true
  moment(string, cqlFormatStringWithLength[string.length], strict).isValid()

isValidDateTimeStringFormat = (string) ->
  return false if typeof string isnt 'string'
  cqlFormats = ['YYYY',
                'YYYY-MM',
                'YYYY-MM-DD',
                'YYYY-MM-DDTZ',
                'YYYY-MM-DDT+hh',
                'YYYY-MM-DDT+hh:mm',
                'YYYY-MM-DDT-hh',
                'YYYY-MM-DDT-hh:mm',
                'YYYY-MM-DDThh',
                'YYYY-MM-DDThhZ',
                'YYYY-MM-DDThh+hh',
                'YYYY-MM-DDThh+hh:mm',
                'YYYY-MM-DDThh-hh',
                'YYYY-MM-DDThh-hh:mm',
                'YYYY-MM-DDThh:mm',
                'YYYY-MM-DDThh:mmZ',
                'YYYY-MM-DDThh:mm+hh',
                'YYYY-MM-DDThh:mm+hh:mm',
                'YYYY-MM-DDThh:mm-hh',
                'YYYY-MM-DDThh:mm-hh:mm',
                'YYYY-MM-DDThh:mm:ss',
                'YYYY-MM-DDThh:mm:ssZ',
                'YYYY-MM-DDThh:mm:ss+hh',
                'YYYY-MM-DDThh:mm:ss+hh:mm',
                'YYYY-MM-DDThh:mm:ss-hh',
                'YYYY-MM-DDThh:mm:ss-hh:mm',
                'YYYY-MM-DDThh:mm:ss.fff',
                'YYYY-MM-DDThh:mm:ss.fffZ',
                'YYYY-MM-DDThh:mm:ss.fff+hh',
                'YYYY-MM-DDThh:mm:ss.fff+hh:mm',
                'YYYY-MM-DDThh:mm:ss.fff-hh',
                'YYYY-MM-DDThh:mm:ss.fff-hh:mm']

  cqlFormatStringWithLength = {}
  cqlFormatStringWithLength[format.length] = format for format in cqlFormats

  return false if !cqlFormatStringWithLength[string.length]?

  # Moment.js has 2 options for parsing, strict or forgiving.
  # Strict parsing requires that the format and input match exactly, including delimeters.
  # Due to CQL using slightly different delimiters than moment, we need to use forgiving.
  strict = false
  moment(string, cqlFormatStringToMomentFormatString(cqlFormatStringWithLength[string.length]), strict).isValid()

cqlFormatStringToMomentFormatString = (string) ->
  # CQL: 'YYYY-MM-DDThh:mm:ss.fff-hh:mm', Moment: 'YYYY-MM-DD[T]hh:mm:ss.SSS[Z]'
  [yearMonthDay, timeAndTimeZoneOffset] = string.split('T')

  if timeAndTimeZoneOffset?
    timezoneSeparator = getTimezoneSeparatorFromString(timeAndTimeZoneOffset)

  momentString = yearMonthDay
  momentString += '[T]' if string.match(/T/)?
  if !!timezoneSeparator
    momentString += timeAndTimeZoneOffset.substring(0, timeAndTimeZoneOffset.search(timezoneSeparator)) + '[Z]'
  else
    momentString += timeAndTimeZoneOffset

  momentString = momentString.replace /f/g, 'S'


module.exports.DateTime = DateTime
module.exports.Date = Date
// Generated by CoffeeScript 1.12.7
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HealthcareService, HealthcareServiceAvailableTimeComponent, HealthcareServiceNotAvailableTimeComponent, HumanName, Identifier, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, ServiceTypeComponent, Timing,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  DT = require('../cql-datatypes');

  CORE = require('./core');

  Element = CORE.Element;

  Resource = CORE.Resource;

  Timing = CORE.Timing;

  Period = CORE.Period;

  Parameters = CORE.Parameters;

  Coding = CORE.Coding;

  Resource = CORE.Resource;

  Range = CORE.Range;

  Quantity = CORE.Quantity;

  Attachment = CORE.Attachment;

  BackboneElement = CORE.BackboneElement;

  DomainResource = CORE.DomainResource;

  ContactPoint = CORE.ContactPoint;

  ElementDefinition = CORE.ElementDefinition;

  Extension = CORE.Extension;

  HumanName = CORE.HumanName;

  Address = CORE.Address;

  Ratio = CORE.Ratio;

  SampledData = CORE.SampledData;

  Reference = CORE.Reference;

  CodeableConcept = CORE.CodeableConcept;

  Identifier = CORE.Identifier;

  Narrative = CORE.Narrative;

  Element = CORE.Element;


  /** 
  Embedded class
  @class ServiceTypeComponent
  @exports  ServiceTypeComponent as ServiceTypeComponent
   */

  ServiceTypeComponent = (function(superClass) {
    extend(ServiceTypeComponent, superClass);

    function ServiceTypeComponent(json) {
      this.json = json;
      ServiceTypeComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The specific type of service being delivered or performed.
    @returns {CodeableConcept}
     */

    ServiceTypeComponent.prototype.type = function() {
      if (this.json['type']) {
        return new CodeableConcept(this.json['type']);
      }
    };


    /**
    Collection of Specialties handled by the Service Site. This is more of a Medical Term.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    ServiceTypeComponent.prototype.specialty = function() {
      var i, item, len, ref, results;
      if (this.json['specialty']) {
        ref = this.json['specialty'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };

    return ServiceTypeComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class HealthcareServiceAvailableTimeComponent
  @exports  HealthcareServiceAvailableTimeComponent as HealthcareServiceAvailableTimeComponent
   */

  HealthcareServiceAvailableTimeComponent = (function(superClass) {
    extend(HealthcareServiceAvailableTimeComponent, superClass);

    function HealthcareServiceAvailableTimeComponent(json) {
      this.json = json;
      HealthcareServiceAvailableTimeComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Indicates which Days of the week are available between the Start and End Times.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    HealthcareServiceAvailableTimeComponent.prototype.daysOfWeek = function() {
      var i, item, len, ref, results;
      if (this.json['daysOfWeek']) {
        ref = this.json['daysOfWeek'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    Is this always available? (hence times are irrelevant) e.g. 24 hour service.
    @returns {Array} an array of {@link boolean} objects
     */

    HealthcareServiceAvailableTimeComponent.prototype.allDay = function() {
      return this.json['allDay'];
    };


    /**
    The opening time of day (the date is not included). Note: If the AllDay flag is set, then this time is ignored.
    @returns {Array} an array of {@link Date} objects
     */

    HealthcareServiceAvailableTimeComponent.prototype.availableStartTime = function() {
      if (this.json['availableStartTime']) {
        return DT.DateTime.parse(this.json['availableStartTime']);
      }
    };


    /**
    The closing time of day (the date is not included). Note: If the AllDay flag is set, then this time is ignored.
    @returns {Array} an array of {@link Date} objects
     */

    HealthcareServiceAvailableTimeComponent.prototype.availableEndTime = function() {
      if (this.json['availableEndTime']) {
        return DT.DateTime.parse(this.json['availableEndTime']);
      }
    };

    return HealthcareServiceAvailableTimeComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class HealthcareServiceNotAvailableTimeComponent
  @exports  HealthcareServiceNotAvailableTimeComponent as HealthcareServiceNotAvailableTimeComponent
   */

  HealthcareServiceNotAvailableTimeComponent = (function(superClass) {
    extend(HealthcareServiceNotAvailableTimeComponent, superClass);

    function HealthcareServiceNotAvailableTimeComponent(json) {
      this.json = json;
      HealthcareServiceNotAvailableTimeComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The reason that can be presented to the user as to why this time is not available.
    @returns {Array} an array of {@link String} objects
     */

    HealthcareServiceNotAvailableTimeComponent.prototype.description = function() {
      return this.json['description'];
    };


    /**
    Service is not available (seasonally or for a public holiday) from this date.
    @returns {Array} an array of {@link Date} objects
     */

    HealthcareServiceNotAvailableTimeComponent.prototype.startDate = function() {
      if (this.json['startDate']) {
        return DT.DateTime.parse(this.json['startDate']);
      }
    };


    /**
    Service is not available (seasonally or for a public holiday) until this date.
    @returns {Array} an array of {@link Date} objects
     */

    HealthcareServiceNotAvailableTimeComponent.prototype.endDate = function() {
      if (this.json['endDate']) {
        return DT.DateTime.parse(this.json['endDate']);
      }
    };

    return HealthcareServiceNotAvailableTimeComponent;

  })(BackboneElement);


  /**
  (informative) The details of a Healthcare Service available at a location.
  @class HealthcareService
  @exports HealthcareService as HealthcareService
   */

  HealthcareService = (function(superClass) {
    extend(HealthcareService, superClass);

    function HealthcareService(json) {
      this.json = json;
      HealthcareService.__super__.constructor.call(this, this.json);
    }


    /**
    External Ids for this item.
    @returns {Array} an array of {@link Identifier} objects
     */

    HealthcareService.prototype.identifier = function() {
      var i, item, len, ref, results;
      if (this.json['identifier']) {
        ref = this.json['identifier'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Identifier(item));
        }
        return results;
      }
    };


    /**
    The location where this healthcare service may be provided.
    @returns {Reference}
     */

    HealthcareService.prototype.location = function() {
      if (this.json['location']) {
        return new Reference(this.json['location']);
      }
    };


    /**
    Identifies the broad category of service being performed or delivered. Selecting a Service Category then determines the list of relevant service types that can be selected in the Primary Service Type.
    @returns {CodeableConcept}
     */

    HealthcareService.prototype.serviceCategory = function() {
      if (this.json['serviceCategory']) {
        return new CodeableConcept(this.json['serviceCategory']);
      }
    };


    /**
    A specific type of service that may be delivered or performed.
    @returns {Array} an array of {@link ServiceTypeComponent} objects
     */

    HealthcareService.prototype.serviceType = function() {
      var i, item, len, ref, results;
      if (this.json['serviceType']) {
        ref = this.json['serviceType'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new ServiceTypeComponent(item));
        }
        return results;
      }
    };


    /**
    Further description of the service as it would be presented to a consumer while searching.
    @returns {Array} an array of {@link String} objects
     */

    HealthcareService.prototype.serviceName = function() {
      return this.json['serviceName'];
    };


    /**
    Additional description of the  or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
    @returns {Array} an array of {@link String} objects
     */

    HealthcareService.prototype.comment = function() {
      return this.json['comment'];
    };


    /**
    Extra details about the service that can't be placed in the other fields.
    @returns {Array} an array of {@link String} objects
     */

    HealthcareService.prototype.extraDetails = function() {
      return this.json['extraDetails'];
    };


    /**
    The free provision code provides a link to the Free Provision reference entity to enable the selection of one free provision type.
    @returns {CodeableConcept}
     */

    HealthcareService.prototype.freeProvisionCode = function() {
      if (this.json['freeProvisionCode']) {
        return new CodeableConcept(this.json['freeProvisionCode']);
      }
    };


    /**
    Does this service have specific eligibility requirements that need to be met in order to use the service.
    @returns {CodeableConcept}
     */

    HealthcareService.prototype.eligibility = function() {
      if (this.json['eligibility']) {
        return new CodeableConcept(this.json['eligibility']);
      }
    };


    /**
    The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
    @returns {Array} an array of {@link String} objects
     */

    HealthcareService.prototype.eligibilityNote = function() {
      return this.json['eligibilityNote'];
    };


    /**
    Indicates whether or not a prospective consumer will require an appointment for a particular service at a Site to be provided by the Organization. Indicates if an appointment is required for access to this service. If this flag is 'NotDefined', then this flag is overridden by the Site's availability flag. (ConditionalIndicator Enum).
    @returns {CodeableConcept}
     */

    HealthcareService.prototype.appointmentRequired = function() {
      if (this.json['appointmentRequired']) {
        return new CodeableConcept(this.json['appointmentRequired']);
      }
    };


    /**
    If there is an image associated with this Service Site, its URI can be included here.
    @returns {Array} an array of {@link String} objects
     */

    HealthcareService.prototype.imageURI = function() {
      return this.json['imageURI'];
    };


    /**
    A Collection of times that the Service Site is available.
    @returns {Array} an array of {@link HealthcareServiceAvailableTimeComponent} objects
     */

    HealthcareService.prototype.availableTime = function() {
      var i, item, len, ref, results;
      if (this.json['availableTime']) {
        ref = this.json['availableTime'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new HealthcareServiceAvailableTimeComponent(item));
        }
        return results;
      }
    };


    /**
    Not avail times - need better description.
    @returns {Array} an array of {@link HealthcareServiceNotAvailableTimeComponent} objects
     */

    HealthcareService.prototype.notAvailableTime = function() {
      var i, item, len, ref, results;
      if (this.json['notAvailableTime']) {
        ref = this.json['notAvailableTime'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new HealthcareServiceNotAvailableTimeComponent(item));
        }
        return results;
      }
    };


    /**
    A description of Site availability exceptions, e.g., public holiday availability. Succinctly describing all possible exceptions to normal Site availability as details in the Available Times and Not Available Times.
    @returns {Array} an array of {@link String} objects
     */

    HealthcareService.prototype.availabilityExceptions = function() {
      return this.json['availabilityExceptions'];
    };


    /**
    The public part of the 'keys' allocated to an Organization by an accredited body to support secure exchange of data over the internet. To be provided by the Organization, where available.
    @returns {Array} an array of {@link String} objects
     */

    HealthcareService.prototype.publicKey = function() {
      return this.json['publicKey'];
    };


    /**
    Program Names that can be used to categorize the service.
    @returns {Array} an array of {@link String} objects
     */

    HealthcareService.prototype.programName = function() {
      return this.json['programName'];
    };


    /**
    List of contacts related to this specific healthcare service. If this is empty, then refer to the location's contacts.
    @returns {Array} an array of {@link ContactPoint} objects
     */

    HealthcareService.prototype.contactPoint = function() {
      var i, item, len, ref, results;
      if (this.json['contactPoint']) {
        ref = this.json['contactPoint'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new ContactPoint(item));
        }
        return results;
      }
    };


    /**
    Collection of Characteristics (attributes).
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    HealthcareService.prototype.characteristic = function() {
      var i, item, len, ref, results;
      if (this.json['characteristic']) {
        ref = this.json['characteristic'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    Ways that the service accepts referrals.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    HealthcareService.prototype.referralMethod = function() {
      var i, item, len, ref, results;
      if (this.json['referralMethod']) {
        ref = this.json['referralMethod'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    The setting where this service can be provided, such is in home, or at location in organisation.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    HealthcareService.prototype.setting = function() {
      var i, item, len, ref, results;
      if (this.json['setting']) {
        ref = this.json['setting'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    Collection of Target Groups for the Service Site (The target audience that this service is for).
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    HealthcareService.prototype.targetGroup = function() {
      var i, item, len, ref, results;
      if (this.json['targetGroup']) {
        ref = this.json['targetGroup'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    Need better description.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    HealthcareService.prototype.coverageArea = function() {
      var i, item, len, ref, results;
      if (this.json['coverageArea']) {
        ref = this.json['coverageArea'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    Need better description.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    HealthcareService.prototype.catchmentArea = function() {
      var i, item, len, ref, results;
      if (this.json['catchmentArea']) {
        ref = this.json['catchmentArea'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    List of the specific.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    HealthcareService.prototype.serviceCode = function() {
      var i, item, len, ref, results;
      if (this.json['serviceCode']) {
        ref = this.json['serviceCode'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };

    return HealthcareService;

  })(DomainResource);

  module.exports.HealthcareService = HealthcareService;

}).call(this);

//# sourceMappingURL=healthcareservice.js.map
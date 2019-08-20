// @Test: Is
define IsTrueInteger: 5 is Integer
define IsFalseInteger: '5' is Integer
define IsTrueDecimal: 5.0 is Decimal
define IsFalseDecimal: 5 is Decimal
define IsTrueString: '5' is String
define IsFalseString: 5 is String
define IsTrueDateTime: DateTime(2012) is DateTime
define IsFalseDateTime: Date(2012) is DateTime
define IsTrueDate: Date(2012) is Date
define IsFalseDate: DateTime(2012) is Date
define IsTrueTime: Time(12) is Time
define IsFalseTime: DateTime(2012) is Time
define IsTrueQuantity: 1 'mm' is Quantity
define IsFalseQuantity: 'one millimeter' is Quantity
define IsTrueBoolean: true is Boolean
define IsFalseBoolean: 'true' is Boolean
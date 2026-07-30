library AgeAtMP version '1'

// NOTE: This example uses a custom data model that is very simplistic and suitable only for
// demonstration and testing purposes.  Real-world CQL should use a more appropriate model.
using Simple version '1.0.0'

parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1, 0, 0, 0, 0), DateTime(2014, 1, 1, 0, 0, 0, 0))

context Patient

define InDemographic:
    AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18

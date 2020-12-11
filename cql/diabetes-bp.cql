library diabetesBP version '1'

using FHIR version '4.0.0'
include FHIRHelpers version '4.0.0' called FHIRHelpers

codesystem "SNOMED-CT": 'urn:oid:2.16.840.1.113883.6.96' version '20200301'

// members may be identified as having diabetes during the measurement year or the year prior to the measurement year
parameter MeasurementPeriod default Interval[@2018-12-31T00:00:00.0, @2020-12-31T00:00:00.0)
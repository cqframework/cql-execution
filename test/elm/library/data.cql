// @Test: In Age Demographic
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define InDemographic:
AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18

// @Test: CommonLib
library Common
using Simple version '1.0.0'
include Common2 called common2

codesystem "SNOMEDCT": '2.16.840.1.113883.6.96'
code "directReferenceCode": '428371000124100' from "SNOMEDCT" display 'directReferenceCode'

parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define InDemographic:
AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18

define function foo (a Integer, b Integer) :
  a + b

define SupportLibDef:
  common2.TheParameter + common2.TwoPlusOne + common2.TwoTimesThree

// @Test: Using CommonLib
using Simple version '1.0.0'

include Common called common
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define ID: common.InDemographic

define L : Length(Patient.name)
define FuncTest : common.foo(2, 5)
define supportLibCode: common."directReferenceCode"

// @Test: CommonLib2
library Common2
using Simple version '1.0.0'
parameter SomeNumber default 17
parameter AnotherNumber default 20

context Patient

define TheParameter:
  SomeNumber

define function addToParameter(a Integer):
  SomeNumber + a

define AnotherParameter:
  AnotherNumber

define function addToAnotherParameter(a Integer):
  AnotherNumber + a

define function multiply(a Integer, b Integer) :
  a * b

define function square(a Integer):
  multiply(a, a)

define TwoTimesThree:
  multiply(2, 3)

define Two:
  2

define function addTwo(a Integer):
  a + Two

define TwoPlusOne:
  Two + 1

define SortUsingFunction:
  ({1, 3, 2, 5, 4}) N return Tuple{N: N} sort by square(N)

// @Test: Using CommonLib2
using Simple version '1.0.0'
include Common2 called common2

context Patient

define ExprUsesParam: common2.TheParameter
define ExprUsesParamDirectly: common2.SomeNumber
define ExprUsesAnotherParam: common2.AnotherParameter
define ExprUsesAnotherParamDirectly: common2.AnotherNumber
define FuncUsesAnotherParam: common2.addToAnotherParameter(5)
define FuncUsesParam: common2.addToParameter(5)
define ExprCallsFunc: common2.TwoTimesThree
define FuncCallsFunc: common2.square(5)
define ExprUsesExpr: common2.TwoPlusOne
define FuncUsesExpr: common2.addTwo(5)
define ExprSortsOnFunc: common2.SortUsingFunction


// @Test: Using CommonLib and CommonLib2
using Simple version '1.0.0'
include Common2 called common2
include Common called common

context Patient

define testCommonLib: common.SupportLibDef
define testCommon2Lib: common2.SortUsingFunction

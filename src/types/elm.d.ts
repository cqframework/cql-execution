export = ELM;
export as namespace ELM;

declare namespace ELM {
  /*
The Element type defines the abstract base type for all library elements in ELM.
*/
  interface AbstractElement {
    localId?: string;
    locator?: string;
    resultTypeName?: string;
    annotation?: any[];
    resultTypeSpecifier?: TypeSpecifier;
  }

  /*
TypeSpecifier is the abstract base type for all type specifiers.
*/
  interface AbstractTypeSpecifier extends AbstractElement {}

  /*
NamedTypeSpecifier defines a type identified by a name, such as Integer, String, Patient, or Encounter.
*/
  interface NamedTypeSpecifier extends AbstractTypeSpecifier {
    type: 'NamedTypeSpecifier';
    name: string;
  }

  /*
IntervalTypeSpecifier defines an interval type by specifying the point type. Any type can serve as the point type for an interval, so long as it supports comparison operators, minimum and maximum value determination, as well as predecessor and successor functions.
*/
  interface IntervalTypeSpecifier extends AbstractTypeSpecifier {
    type: 'IntervalTypeSpecifier';
    pointType: TypeSpecifier;
  }

  /*
ListTypeSpecifier defines a list type by specifying the type of elements the list may contain.
*/
  interface ListTypeSpecifier extends AbstractTypeSpecifier {
    type: 'ListTypeSpecifier';
    elementType: TypeSpecifier;
  }

  /*
TupleElementDefinition defines the name and type of a single element within a TupleTypeSpecifier.
*/
  interface TupleElementDefinition extends AbstractElement {
    name: string;
    type?: TypeSpecifier;
    elementType?: TypeSpecifier;
  }

  /*
TupleTypeSpecifier defines the possible elements of a tuple.
*/
  interface TupleTypeSpecifier extends AbstractTypeSpecifier {
    type: 'TupleTypeSpecifier';
    element?: TupleElementDefinition[];
  }

  /*
ChoiceTypeSpecifier defines the possible types of a choice type.
*/
  interface ChoiceTypeSpecifier extends AbstractTypeSpecifier {
    type: 'ChoiceTypeSpecifier';
    choice?: TypeSpecifier[];
  }

  /*
The Expression type defines the abstract base type for all expressions used in the ELM expression language.
*/
  interface AbstractExpression extends AbstractElement {}

  /*
The Operator type defines the abstract base type for all built-in operators used in the ELM expression language. This explicitly excludes FunctionRef, which is the concrete type for all function invocations.
*/
  interface AbstractOperatorExpression extends AbstractExpression {
    signature?: TypeSpecifier[];
  }

  /*
The UnaryExpression type defines the abstract base type for expressions that take a single argument.
*/
  interface AbstractUnaryExpression extends AbstractOperatorExpression {
    operand: Expression;
  }

  /*
The BinaryExpression type defines the abstract base type for expressions that take two arguments.
*/
  interface AbstractBinaryExpression extends AbstractOperatorExpression {
    operand: Expression[];
  }

  /*
The TernaryExpression type defines the abstract base type for expressions that take three arguments.
*/
  interface AbstractTernaryExpression extends AbstractOperatorExpression {
    operand: Expression[];
  }

  /*
The NaryExpression type defines an abstract base class for an expression that takes any number of arguments, including zero.
*/
  interface AbstractNaryExpression extends AbstractOperatorExpression {
    operand?: Expression[];
  }

  /*
The ExpressionDef type defines an expression and an associated name that can be referenced by any expression in the artifact. The name must be unique within the artifact.
			The context attribute specifies the context of the execution and is used by the environment to determine whether or not to filter the data returned from retrieves based on the current context.
*/
  interface ExpressionDef extends AbstractElement {
    name?: string;
    context?: string;
    accessLevel?: AccessModifier;
    expression?: Expression;
  }

  /*
The FunctionDef type defines a named function that can be invoked by any expression in the artifact. Function names must be unique within the artifact. Functions may take any number of operands.
*/
  interface FunctionDef extends AbstractElement {
    type: 'FunctionDef';
    external?: boolean;
    fluent?: boolean;
    operand?: OperandDef[];
    name?: string;
    context?: string;
    accessLevel?: AccessModifier;
    expression?: Expression;
  }

  /*
The ExpressionRef type defines an expression that references a previously defined NamedExpression. The result of evaluating an ExpressionReference is the result of evaluating the referenced NamedExpression.
*/
  interface ExpressionRef extends AbstractExpression {
    type: 'ExpressionRef';
    name?: string;
    libraryName?: string;
  }

  /*
The FunctionRef type defines an expression that invokes a previously defined function. The result of evaluating each operand is passed to the function.
*/
  interface FunctionRef extends AbstractExpression {
    type: 'FunctionRef';
    signature?: TypeSpecifier[];
    operand?: Expression[];
    name?: string;
    libraryName?: string;
  }

  /*
The ParameterDef type defines a parameter that can be referenced by name anywhere within an expression.
Parameters are defined at the artifact level, and may be provided as part of the payload for an evaluation request.
If no parameter value is provided, the default element is used to provide the value for the parameter.
If no parameter or default is provided, the parameter is defined to be null.
Note that the expression specified in the default element must be able to be evaluated at compile-time (i.e. without reference to any run-time capabilities such as data, terminology, and library references, both local and included).
*/
  interface ParameterDef extends AbstractElement {
    name?: string;
    parameterType?: string;
    accessLevel?: AccessModifier;
    default?: Expression;
    parameterTypeSpecifier?: TypeSpecifier;
  }

  /*
The ParameterRef expression allows the value of a parameter to be referenced as part of an expression.
*/
  interface ParameterRef extends AbstractExpression {
    type: 'ParameterRef';
    name?: string;
    libraryName?: string;
  }

  /*
The OperandDef type defines an operand to a function that can be referenced by name anywhere within the body of a function definition.
*/
  interface OperandDef extends AbstractElement {
    name?: string;
    operandType?: string;
    operandTypeSpecifier?: TypeSpecifier;
  }

  /*
The OperandRef expression allows the value of an operand to be referenced as part of an expression within the body of a function definition.
*/
  interface OperandRef extends AbstractExpression {
    type: 'OperandRef';
    name?: string;
  }

  /*
The IdentifierRef type defines an expression that references an identifier that is either unresolved, or has been resolved to an attribute in an unambiguous iteration scope such as a sort. Implementations should attempt to resolve the identifier, only throwing an error at compile-time (or run-time for an interpretive system) if the identifier reference cannot be resolved.
*/
  interface IdentifierRef extends AbstractExpression {
    type: 'IdentifierRef';
    name?: string;
    libraryName?: string;
  }

  /*
The Literal type defines a single scalar value. For example, the literal 5, the boolean value true or the string "antithrombotic".
*/
  interface Literal extends AbstractExpression {
    type: 'Literal';
    valueType: string;
    value?: any;
  }

  /*
The TupleElement is used within a Tuple expression to provide the value of a specific element within a tuple literal expression.
*/
  interface TupleElement {
    name: string;
    value: Expression;
  }

  /*
The Tuple expression allows tuples of any type to be built up as an expression. The tupleType attribute specifies the type of the tuple being built, if any, and the list of tuple elements specify the values for the elements of the tuple. Note that the value of an element may be any expression, including another Tuple.
*/
  interface Tuple extends AbstractExpression {
    type: 'Tuple';
    element?: TupleElement[];
  }

  /*
The InstanceElement is used within an Instance expression to provide the value of a specific element within an object literal expression.
*/
  interface InstanceElement {
    name: string;
    value: Expression;
  }

  /*
The Instance expression allows class instances of any type to be built up as an expression. The classType attribute specifies the type of the class instance being built, and the list of instance elements specify the values for the elements of the class instance. Note that the value of an element may be any expression, including another Instance.
*/
  interface Instance extends AbstractExpression {
    type: 'Instance';
    classType: string;
    element?: InstanceElement[];
  }

  /*
The Interval selector defines an interval value. An interval must be defined using a point type that supports comparison, as well as Successor and Predecessor operations, and Minimum and Maximum Value operations.
The low and high bounds of the interval may each be defined as open or closed. Following standard terminology usage in interval mathematics, an open interval is defined to exclude the specified point, whereas a closed interval includes the point. The default is closed, indicating an inclusive interval.
The low and high elements are both optional. If the low element is not specified, the low bound of the resulting interval is null. If the high element is not specified, the high bound of the resulting interval is null.
The static type of the low bound determines the type of the interval, and the high bound must be of the same type.
If the low bound of the interval is null and open, the low bound of the interval is interpreted as unknown, and computations involving the low boundary will result in null.
If the low bound of the interval is null and closed, the interval is interpreted to start at the minimum value of the point type, and computations involving the low boundary will be performed with that value.
If the high bound of the interval is null and open, the high bound of the interval is unknown, and computations involving the high boundary will result in null.
If the high bound of the interval is null and closed, the interval is interpreted to end at the maximum value of the point type, and computations involving the high boundary will be performed with that interpretation.
*/
  interface Interval extends AbstractExpression {
    type: 'Interval';
    lowClosed?: boolean;
    highClosed?: boolean;
    low?: Expression;
    lowClosedExpression?: Expression;
    high?: Expression;
    highClosedExpression?: Expression;
  }

  /*
The List selector returns a value of type List, whose elements are the result of evaluating the arguments to the List selector, in order.
If a typeSpecifier element is provided, the list is of that type. Otherwise, the static type of the first argument determines the type of the resulting list, and each subsequent argument must be of that same type.
If any argument is null, the resulting list will have null for that element.
*/
  interface List extends AbstractExpression {
    type: 'List';
    typeSpecifier?: TypeSpecifier;
    element?: Expression[];
  }

  /*
The And operator returns the logical conjunction of its arguments. Note that this operator is defined using 3-valued logic semantics. This means that if either argument is false, the result is false; if both arguments are true, the result is true; otherwise, the result is null. Note also that ELM does not prescribe short-circuit evaluation.
*/
  interface And extends AbstractBinaryExpression {
    type: 'And';
  }

  /*
The Or operator returns the logical disjunction of its arguments. Note that this operator is defined using 3-valued logic semantics. This means that if either argument is true, the result is true; if both arguments are false, the result is false; otherwise, the result is null. Note also that ELM does not prescribe short-circuit evaluation.
*/
  interface Or extends AbstractBinaryExpression {
    type: 'Or';
  }

  /*
The Xor operator returns the exclusive or of its arguments. Note that this operator is defined using 3-valued logic semantics. This means that the result is true if and only if one argument is true and the other is false, and that the result is false if and only if both arguments are true or both arguments are false. If either or both arguments are null, the result is null.
*/
  interface Xor extends AbstractBinaryExpression {
    type: 'Xor';
  }

  /*
The Implies operator returns the logical implication of its arguments. Note that this operator is defined using 3-valued logic semantics. This means that if the left operand evaluates to true, this operator returns the boolean evaluation of the right operand. If the left operand evaluates to false, this operator returns true. Otherwise, this operator returns true if the right operand evaluates to true, and null otherwise.
Note that implies may use short-circuit evaluation in the case that the first operand evaluates to false.
*/
  interface Implies extends AbstractBinaryExpression {
    type: 'Implies';
  }

  /*
The Not operator returns the logical negation of its argument. If the argument is true, the result is false; if the argument is false, the result is true; otherwise, the result is null.
*/
  interface Not extends AbstractUnaryExpression {
    type: 'Not';
  }

  /*
The If operator evaluates a condition, and returns the then argument if the condition evaluates to true; if the condition evaluates to false or null, the result of the else argument is returned. The static type of the then argument determines the result type of the conditional, and the else argument must be of that same type.
*/
  interface If extends AbstractExpression {
    type: 'If';
    condition: Expression;
    then: Expression;
    else: Expression;
  }
  interface CaseItem extends AbstractElement {
    when: Expression;
    then: Expression;
  }

  /*
The Case operator allows for multiple conditional expressions to be chained together in a single expression, rather than having to nest multiple If operators. In addition, the comparand operand provides a variant on the case that allows a single value to be compared in each conditional.
If a comparand is not provided, the type of each when element of the caseItems within the Case is expected to be boolean. If a comparand is provided, the type of each when element of the caseItems within the Case is expected to be of the same type as the comparand. An else element must always be provided.
The static type of the then argument within the first caseItem determines the type of the result, and the then argument of each subsequent caseItem and the else argument must be of that same type.
*/
  interface Case extends AbstractExpression {
    type: 'Case';
    comparand?: Expression;
    caseItem: CaseItem[];
    else: Expression;
  }

  /*
The Null operator returns a null, or missing information marker. To avoid the need to cast this result, the operator is allowed to return a typed null.
*/
  interface Null extends AbstractExpression {
    type: 'Null';
    valueType?: string;
  }

  /*
The IsNull operator determines whether or not its argument evaluates to null. If the argument evaluates to null, the result is true; otherwise, the result is false.
*/
  interface IsNull extends AbstractUnaryExpression {
    type: 'IsNull';
  }

  /*
The IsTrue operator determines whether or not its argument evaluates to true. If the argument evaluates to true, the result is true; if the argument evaluates to false or null, the result is false.
*/
  interface IsTrue extends AbstractUnaryExpression {
    type: 'IsTrue';
  }

  /*
The IsFalse operator determines whether or not its argument evaluates to false. If the argument evaluates to false, the result is true; if the argument evaluates to true or null, the result is false.
*/
  interface IsFalse extends AbstractUnaryExpression {
    type: 'IsFalse';
  }

  /*
The Coalesce operator returns the first non-null result in a list of arguments. If all arguments evaluate to null, the result is null. The static type of the first argument determines the type of the result, and all subsequent arguments must be of that same type.
*/
  interface Coalesce extends AbstractNaryExpression {
    type: 'Coalesce';
  }

  /*
The Is operator allows the type of a result to be tested. The language must support the ability to test against any type. If the run-time type of the argument is of the type being tested, the result of the operator is true; otherwise, the result is false.
*/
  interface Is extends AbstractUnaryExpression {
    type: 'Is';
    isType?: string;
    isTypeSpecifier?: TypeSpecifier;
  }

  /*
The As operator allows the result of an expression to be cast as a given target type. This allows expressions to be written that are statically typed against the expected run-time type of the argument. If the argument is not of the specified type, and the strict attribute is false (the default), the result is null. If the argument is not of the specified type and the strict attribute is true, an exception is thrown.
*/
  interface As extends AbstractUnaryExpression {
    type: 'As';
    asType?: string;
    strict?: boolean;
    asTypeSpecifier?: TypeSpecifier;
  }

  /*
The Convert operator converts a value to a specific type. The result of the operator is the value of the argument converted to the target type, if possible.
If no valid conversion exists from the actual value to the target type, the result is null.
This operator supports conversion:
Between String and each of Boolean, Integer, Long, Decimal, Quantity, Ratio, Date, DateTime, and Time
as well as:
From Integer to Long, Decimal or Quantity
From Decimal to Quantity
Between Date and DateTime
From Code to Concept
Between Concept and List<Code>
Conversion between String and Date/DateTime/Time is performed using the ISO-8601 standard format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm.
*/
  interface Convert extends AbstractUnaryExpression {
    type: 'Convert';
    toType?: string;
    toTypeSpecifier?: TypeSpecifier;
  }

  /*
The CanConvert operator returns true if the given value can be converted to a specific type, and false otherwise.
This operator returns true for conversion:
Between String and each of Boolean, Integer, Long, Decimal, Quantity, Ratio, Date, DateTime, and Time,
as well as:
From Integer to Long, Decimal, or Quantity
From Decimal to Quantity
Between Date and DateTime
From Code to Concept
Between Concept and List<Code>
Conversion between String and Date/DateTime/Time is checked using the ISO-8601 standard format: YYYY-MM-DDThh:mm:ss(+|-)hh:mm.
*/
  interface CanConvert extends AbstractUnaryExpression {
    type: 'CanConvert';
    toType?: string;
    toTypeSpecifier?: TypeSpecifier;
  }

  /*
The ToBoolean operator converts the value of its argument to a Boolean value.
The operator accepts 'true', 't', 'yes', 'y', and '1' as string representations of true, and 'false', 'f', 'no', 'n', and '0' as string representations of false, ignoring case.
If the input is an Integer or Long, the result is true if the integer is 1, false if the integer is 0.
If the input is a Decimal, the result is true if the decimal is 1.0, false if the decimal is 0.0.
If the input cannot be interpreted as a valid Boolean value, the result is null.
If the argument is null the result is null.
*/
  interface ToBoolean extends AbstractUnaryExpression {
    type: 'ToBoolean';
  }

  /*
The ConvertsToBoolean operator returns true if the value of its argument is or can be converted to a Boolean value.
The operator accepts 'true', 't', 'yes', 'y', and '1' as string representations of true, and 'false', 'f', 'no', 'n', and '0' as string representations of false, ignoring case.
If the input is an Integer or Long, the result is true if the integer is 1 or 0.
If the input is a Decimal, the result is true if the decimal is 1.0 or 0.0.
If the input cannot be interpreted as a valid Boolean value, the result is false.
If the argument is null the result is null.
*/
  interface ConvertsToBoolean extends AbstractUnaryExpression {
    type: 'ConvertsToBoolean';
  }

  /*
The ToConcept operator converts a value of type Code to a Concept value with the given Code as its primary and only Code. If the Code has a display value, the resulting Concept will have the same display value.
If the input is a list of Codes, the resulting Concept will have all the input Codes, and will not have a display value.
If the argument is null, the result is null.
*/
  interface ToConcept extends AbstractUnaryExpression {
    type: 'ToConcept';
  }

  /*
The ConvertsToDate operator returns true if the value of its argument is or can be converted to a Date value.
For String values, The operator expects the string to be formatted using the ISO-8601 date representation:
YYYY-MM-DD
In addition, the string must be interpretable as a valid date value.
Note that the operator can take time formatted strings and will ignore the time portions.
If the input string is not formatted correctly, or does not represent a valid date value, the result is false.
As with date literals, date values may be specified to any precision.
If the argument is null, the result is null.
*/
  interface ConvertsToDate extends AbstractUnaryExpression {
    type: 'ConvertsToDate';
  }

  /*
The ToDate operator converts the value of its argument to a Date value.
For String values, The operator expects the string to be formatted using the ISO-8601 date representation:
YYYY-MM-DD
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
In addition, the string must be interpretable as a valid date value.
Note that the operator can take datetime formatted strings and will ignore the time portions.
If the input string is not formatted correctly, or does not represent a valid date value, the result is null.
As with date literals, date values may be specified to any precision.
For DateTime values, the result is equivalent to extracting the Date component of the DateTime value.
If the argument is null, the result is null.
*/
  interface ToDate extends AbstractUnaryExpression {
    type: 'ToDate';
  }

  /*
The ConvertsToDateTime operator returns true if the value of its argument is or can be converted to a DateTime value.
For String values, the operator expects the string to be formatted using the ISO-8601 datetime representation:
YYYY-MM-DDThh:mm:ss.fff(Z|((+|-)hh:mm))
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
In addition, the string must be interpretable as a valid DateTime value.
If the input string is not formatted correctly, or does not represent a valid DateTime value, the result is false.
As with Date and Time literals, DateTime values may be specified to any precision. If no timezone offset is supplied, the timezone offset of the evaluation request timestamp is assumed.
If the argument is null, the result is null.
*/
  interface ConvertsToDateTime extends AbstractUnaryExpression {
    type: 'ConvertsToDateTime';
  }

  /*
The ToDateTime operator converts the value of its argument to a DateTime value.
For String values, the operator expects the string to be formatted using the ISO-8601 datetime representation:
YYYY-MM-DDThh:mm:ss.fff(Z|((+|-)hh:mm))
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
In addition, the string must be interpretable as a valid DateTime value.
If the input string is not formatted correctly, or does not represent a valid DateTime value, the result is null.
As with Date and Time literals, DateTime values may be specified to any precision. If no timezone offset is supplied, the timezone offset of the evaluation request timestamp is assumed.
For Date values, the result is a DateTime with the time components unspecified, except the timezone offset, which is set to the timezone offset of the evaluation request timestamp.
If the argument is null, the result is null.
*/
  interface ToDateTime extends AbstractUnaryExpression {
    type: 'ToDateTime';
  }

  /*
The ConvertsToDecimal operator returns true if the value of its argument is or can be converted to a Decimal value. The operator accepts strings using the following format:
(+|-)?#0(.0#)?
Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit, followed optionally by a decimal point, at least one digit, and any number of additional digits (including none).
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
Note that for this operator to return true, the input value must be limited in precision and scale to the maximum precision and scale representable for Decimal values within CQL.
If the input string is not formatted correctly, or cannot be interpreted as a valid Decimal value, the result is false.
If the input is a Boolean, the result is true.
If the argument is null, the result is null.
*/
  interface ConvertsToDecimal extends AbstractUnaryExpression {
    type: 'ConvertsToDecimal';
  }

  /*
The ToDecimal operator converts the value of its argument to a Decimal value. The operator accepts strings using the following format:
(+|-)?#0(.0#)?
Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit, followed optionally by a decimal point, at least one digit, and any number of additional digits (including none).
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
Note that the decimal value returned by this operator must be limited in precision and scale to the maximum precision and scale representable for Decimal values within CQL.
If the input string is not formatted correctly, or cannot be interpreted as a valid Decimal value, the result is null.
If the input is Boolean, true will result in 1.0, false will result in 0.0.
If the argument is null, the result is null.
*/
  interface ToDecimal extends AbstractUnaryExpression {
    type: 'ToDecimal';
  }

  /*
The ConvertsToInteger operator returns true if the value of its argument is or can be converted to an Integer value. The operator accepts strings using the following format:
(+|-)?#0
Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit.
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
Note that for this operator to return true, the input must be a valid value in the range representable for Integer values in CQL.
If the input string is not formatted correctly, or cannot be interpreted as a valid Integer value, the result is false.
If the input is a Boolean, the result is true.
If the argument is null, the result is null.
*/
  interface ConvertsToInteger extends AbstractUnaryExpression {
    type: 'ConvertsToInteger';
  }

  /*
The ToInteger operator converts the value of its argument to an Integer value. The operator accepts strings using the following format:
(+|-)?#0
Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit.
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
Note that the integer value returned by this operator must be a valid value in the range representable for Integer values in CQL.
If the input string is not formatted correctly, or cannot be interpreted as a valid Integer value, the result is null.
If the input is Boolean, true will result in 1, false will result in 0.
If the argument is null, the result is null.
*/
  interface ToInteger extends AbstractUnaryExpression {
    type: 'ToInteger';
  }

  /*
The ConvertsToLong operator returns true if the value of its argument is or can be converted to a Long value. The operator accepts strings using the following format:
(+|-)?#0
Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit.
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
Note that for this operator to return true, the input must be a valid value in the range representable for Long values in CQL.
If the input string is not formatted correctly, or cannot be interpreted as a valid Long value, the result is false.
If the input is a Boolean, the result is true.
If the argument is null, the result is null.
*/
  interface ConvertsToLong extends AbstractUnaryExpression {
    type: 'ConvertsToLong';
  }

  /*
The ToLong operator converts the value of its argument to a Long value. The operator accepts strings using the following format:
(+|-)?#0
Meaning an optional polarity indicator, followed by any number of digits (including none), followed by at least one digit.
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
Note that the long value returned by this operator must be a valid value in the range representable for Long values in CQL.
If the input string is not formatted correctly, or cannot be interpreted as a valid Long value, the result is null.
If the argument is null, the result is null.
*/
  interface ToLong extends AbstractUnaryExpression {
    type: 'ToLong';
  }

  /*
The ConvertsToQuantity operator returns true if the value of its argument is or can be converted to a Quantity value. The operator may be used with Integer, Decimal, Ratio, or String values.
For String values, the operator accepts strings using the following format:
(+|-)?#0(.0#)?('<unit>')?
Meaning an optional polarity indicator, followed by any number of digits (including none) followed by at least one digit, optionally followed by a decimal point, at least one digit, and any number of additional digits, all optionally followed by a unit designator as a string literal specifying a valid UCUM unit of measure or calendar duration keyword, singular or plural. Spaces are allowed between the quantity value and the unit designator.
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
Note that the decimal value of the quantity returned by this operator must be a valid value in the range representable for Decimal values in CQL.
If the input string is not formatted correctly, or cannot be interpreted as a valid Quantity value, the result is false.
For Integer, Decimal, and Ratio values, the operator simply returns true.
If the argument is null, the result is null.
*/
  interface ConvertsToQuantity extends AbstractUnaryExpression {
    type: 'ConvertsToQuantity';
  }

  /*
The ToQuantity operator converts the value of its argument to a Quantity value. The operator may be used with Integer, Decimal, Ratio, or String values. The operation does not perform any unit conversion, that capability is supported by the ConvertQuantity operator.
For String values, the operator accepts strings using the following format:
(+|-)?#0(.0#)?('<unit>')?
Meaning an optional polarity indicator, followed by any number of digits (including none) followed by at least one digit, optionally followed by a decimal point, at least one digit, and any number of additional digits, all optionally followed by a unit designator as a string literal specifying a valid UCUM unit of measure or calendar duration keyword, singular or plural. Spaces are allowed between the quantity value and the unit designator.
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
Note that the decimal value of the quantity returned by this operator must be a valid value in the range representable for Decimal values in CQL.
If the input string is not formatted correctly, or cannot be interpreted as a valid Quantity value, the result is null.
For Integer and Decimal values, the result is a Quantity with the value of the integer or decimal input, and the default unit ('1').
For Ratio values, the operation is equivalent to the result of dividing the numerator of the ratio by the denominator.
If the argument is null, the result is null.
*/
  interface ToQuantity extends AbstractUnaryExpression {
    type: 'ToQuantity';
  }

  /*
The ConvertsToRatio operator returns true if the value of its argument is or can be converted to a Ratio value. The operator accepts strings using the following format:
<quantity>:<quantity>
Meaning a quantity, followed by a colon (:), followed by another quantity. The operator accepts quantity strings using the same format as the ToQuantity operator.
If the input string is not formatted correctly, or cannot be interpreted as a valid Ratio value, the result is false.
If the argument is null, the result is null.
*/
  interface ConvertsToRatio extends AbstractUnaryExpression {
    type: 'ConvertsToRatio';
  }

  /*
The ToRatio operator converts the value of its argument to a Ratio value. The operator accepts strings using the following format:
<quantity>:<quantity>
Meaning a quantity, followed by a colon (:), followed by another quantity. The operator accepts quantity strings using the same format as the ToQuantity operator.
If the input string is not formatted correctly, or cannot be interpreted as a valid Ratio value, the result is null.
If the argument is null, the result is null.
*/
  interface ToRatio extends AbstractUnaryExpression {
    type: 'ToRatio';
  }

  /*
The ToList operator returns its argument as a List value. The operator accepts a singleton value of any type and returns a list with the value as the single element.
If the argument is null, the operator returns an empty list.
The operator is effectively shorthand for "if operand is null then { } else { operand }".
The operator is used to implement list promotion efficiently.
*/
  interface ToList extends AbstractUnaryExpression {
    type: 'ToList';
  }

  /*
The ToChars operator takes a string and returns a list with one string for each character in the input, in the order in which they appear in the string.
If the argument is null, the result is null.
*/
  interface ToChars extends AbstractUnaryExpression {
    type: 'ToChars';
  }

  /*
The ConvertsToString operator returns true if the value of its argument is or can be converted to a String value.
The operator returns true if the argument is any of the following types:
Boolean
Integer
Long
Decimal
DateTime
Date
Time
Quantity
Ratio
String
If the argument is null, the result is null.
*/
  interface ConvertsToString extends AbstractUnaryExpression {
    type: 'ConvertsToString';
  }

  /*
The ToString operator converts the value of its argument to a String value. The operator uses the following string representations for each type:
Boolean true|false
Integer (-)?#0
Long (-)?#0
Decimal (-)?#0.0#
Quantity (-)?#0.0# '<unit>'
Date YYYY-MM-DD
DateTime YYYY-MM-DDThh:mm:ss.fff(+|-)hh:mm
Time	hh:mm:ss.fff
Ratio <quantity>:<quantity>
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
If the argument is null, the result is null.
*/
  interface ToString extends AbstractUnaryExpression {
    type: 'ToString';
  }

  /*
The ConvertsToTime operator returns true if the value of its argument is or can be converted to a Time value.
For String values, the operator expects the string to be formatted using ISO-8601 time representation:
hh:mm:ss.fff
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
In addition, the string must be interpretable as a valid time-of-day value.
If the input string is not formatted correctly, or does not represent a valid time-of-day value, the result is false.
As with time-of-day literals, time-of-day values may be specified to any precision.
If the argument is null, the result is null.
*/
  interface ConvertsToTime extends AbstractUnaryExpression {
    type: 'ConvertsToTime';
  }

  /*
The ToTime operator converts the value of its argument to a Time value.
For String values, the operator expects the string to be formatted using ISO-8601 time representation:
hh:mm:ss.fff
See the Formatting Strings topic in the CQL Reference (Appendix B) of the CQL Specification for a description of formatting strings.
In addition, the string must be interpretable as a valid time-of-day value.
If the input string is not formatted correctly, or does not represent a valid time-of-day value, the result is null.
As with time-of-day literals, time-of-day values may be specified to any precision.
For DateTime values, the result is the same as extracting the Time component from the DateTime value.
If the argument is null, the result is null.
*/
  interface ToTime extends AbstractUnaryExpression {
    type: 'ToTime';
  }

  /*
The CanConvertQuantity operator returns true if the Quantity can be converted to an equivalent Quantity with the given Unit. Otherwise, the result is false.
Note that implementations are not required to support quantity conversion, and so may return false, even if the conversion is valid. Implementations that do support unit conversion shall do so according to the conversion specified by UCUM.
If either argument is null, the result is null.
*/
  interface CanConvertQuantity extends AbstractBinaryExpression {
    type: 'CanConvertQuantity';
  }

  /*
The ConvertQuantity operator converts a Quantity to an equivalent Quantity with the given unit. If the unit of the input quantity can be converted to the target unit, the result is an equivalent Quantity with the target unit. Otherwise, the result is null.
Note that implementations are not required to support quantity conversion. Implementations that do support unit conversion shall do so according to the conversion specified by UCUM. Implementations that do not support unit conversion shall throw an error if an unsupported unit conversion is requested with this operation.
If either argument is null, the result is null.
*/
  interface ConvertQuantity extends AbstractBinaryExpression {
    type: 'ConvertQuantity';
  }

  /*
The Equal operator returns true if the arguments are equal; false if the arguments are known unequal, and null otherwise. Equality semantics are defined to be value-based.
For simple types, this means that equality returns true if and only if the result of each argument evaluates to the same value.
For string values, equality is strictly lexical based on the Unicode values for the individual characters in the strings.
For decimal values, trailing zeroes are ignored.
For quantities, this means that the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' are comparable, but units of 'cm2' and 'cm' are not. Attempting to operate on quantities with invalid units will result in null. When a quantity has no units specified, it is treated as a quantity with the default unit ('1').
For time-valued quantities, UCUM definite-time duration quantities above days (and weeks) are not comparable to calendar duration quantities above days (and weeks). Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) results in null.
For ratios, this means that the numerator and denominator must be the same, using quantity equality semantics.
For tuple types, this means that equality returns true if and only if the tuples are of the same type, and the values for all elements that have values, by name, are equal.
For list types, this means that equality returns true if and only if the lists contain elements of the same type, have the same number of elements, and for each element in the lists, in order, the elements are equal using equality semantics, with the exception that null elements are considered equal.
For interval types, equality returns true if and only if the intervals are over the same point type, and they have the same value for the starting and ending points of the interval as determined by the Start and End operators.
For Date, Time, and DateTime values, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the values are different, the comparison stops and the result is false. If one input has a value for the precision and the other does not, the comparison stops and the result is null; if neither input has a value for the precision or the last precision has been reached, the comparison stops and the result is true. For the purposes of comparison, seconds and milliseconds are combined as a single precision using a decimal, with decimal equality semantics.
If either argument is null, the result is null.
*/
  interface Equal extends AbstractBinaryExpression {
    type: 'Equal';
  }

  /*
The Equivalent operator returns true if the arguments are the same value, or if they are both null; and false otherwise.
With the exception of null behavior and the semantics for specific types defined below, equivalence is the same as equality.
For string values, equivalence returns true if the strings are the same value while ignoring case and locale, and normalizing whitespace. Normalizing whitespace means that all whitespace characters are treated as equivalent, with whitespace characters as defined in the whitespace lexical category.
For decimals, equivalent means the values are the same with the comparison done on values rounded to the least precision of the least precise operand; trailing zeroes after the decimal are ignored in determining precision for equivalent comparison.
For quantities, equivalent means the values are the same quantity when considering unit conversion (e.g. 100 'cm' ~ 1 'm') and using decimal equivalent semantics for the value. Note that implementations are not required to support unit conversion and so are allowed to return false for equivalence of quantities with different units.
For time-valued quantities, UCUM definite-time duration quantities above days (and weeks) are considered equivalent to their calendar duration counterparts. Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to the calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) uses the approximations of 365 days in a year, and 30 days in a month.
For ratios, equivalent means that the numerator and denominator represent the same ratio (e.g. 1:100 ~ 10:1000).
For tuple types, this means that two tuple values are equivalent if and only if the tuples are of the same type, and the values for all elements by name are equivalent.
For list types, this means that two lists are equivalent if and only if the lists contain elements of the same type, have the same number of elements, and for each element in the lists, in order, the elements are equivalent.
For interval types, this means that two intervals are equivalent if and only if the intervals are over the same point type, and the starting and ending points of the intervals as determined by the Start and End operators are equivalent.
For Date, Time, and DateTime values, the comparison is performed in the same way as it is for equality, except that if one input has a value for a given precision and the other does not, the comparison stops and the result is false, rather than null. As with equality, the second and millisecond precisions are combined as a single precision using a decimal, with decimal equivalence semantics.
For Code values, equivalence is defined based on the code and system elements only. The display and version elements are ignored for the purposes of determining Code equivalence.
For Concept values, equivalence is defined as a non-empty intersection of the codes in each Concept.
Note that this operator will always return true or false, even if either or both of its arguments are null or contain null components.
*/
  interface Equivalent extends AbstractBinaryExpression {
    type: 'Equivalent';
  }

  /*
The NotEqual operator returns true if its arguments are not the same value.
The NotEqual operator is a shorthand for invocation of logical negation of the Equal operator.
*/
  interface NotEqual extends AbstractBinaryExpression {
    type: 'NotEqual';
  }

  /*
The Less operator returns true if the first argument is less than the second argument.
For comparisons involving quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' are comparable, but units of 'cm2' and 'cm' are not. Attempting to operate on quantities with invalid units will result in a null. When a quantity has no units specified, it is treated as a quantity with the default unit ('1').
For time-valued quantities, the UCUM definite-quantity durations above days (and weeks) are not comparable to calendar durations. Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) results in null.
For Date, Time, and DateTime values, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is less than the second, the result is true; if the first value is greater than the second, the result is false; if one input has a value for the precision and the other does not, the comparison stops and the result is null; if neither input has a value for the precision or the last precision has been reached, the comparison stops and the result is false. For the purposes of comparison, seconds and milliseconds are combined as a single precision using a decimal, with decimal comparison semantics.
If either argument is null, the result is null.
The Less operator is defined for the Integer, Long, Decimal, String, Date, DateTime, Time, and Quantity types.
Note that relative ratio comparisons are not directly supported due to the variance of uses within healthcare. See the discussion in Ratio Operators in the Author's Guide for more information.
*/
  interface Less extends AbstractBinaryExpression {
    type: 'Less';
  }

  /*
The Greater operator returns true if the first argument is greater than the second argument.
The Greater operator is defined for the Integer, Long, Decimal, String, Date, DateTime, Time, and Quantity types.
For comparisons involving quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' are comparable, but units of 'cm2' and 'cm' are not. Attempting to operate on quantities with invalid units will result in null. When a quantity has no units specified, it is treated as a quantity with the default unit ('1').
For time-valued quantities, the UCUM definite-quantity durations above days (and weeks) are not comparable to calendar durations. Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) results in null.
For Date, Time, and DateTime values, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is greater than the second, the result is true; if the first value is less than the second, the result is false; if one input has a value for the precision and the other does not, the comparison stops and the result is null; if neither input has a value for the precision or the last precision has been reached, the comparison stops and the result is false. For the purposes of comparison, seconds and milliseconds are combined as a single precision using a decimal, with decimal comparison semantics.
When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.
If either argument is null, the result is null.
Note that relative ratio comparisons are not directly supported due to the variance of uses within healthcare. See the discussion in Ratio Operators in the Author's Guide for more information.
*/
  interface Greater extends AbstractBinaryExpression {
    type: 'Greater';
  }

  /*
The LessOrEqual operator returns true if the first argument is less than or equal to the second argument.
The LessOrEqual operator is defined for the Integer, Long, Decimal, String, Date, DateTime, Time, and Quantity types.
For comparisons involving quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' are comparable, but units of 'cm2' and 'cm' are not. Attempting to operate on quantities with invalid units will result in a null. When a quantity has no units specified, it is treated as a quantity with the default unit ('1').
For time-valued quantities, the UCUM definite-quantity durations above days (and weeks) are not comparable to calendar durations. Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) results in null.
For Date, Time, and DateTime values, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is less than the second, the result is true; if the first value is greater than the second, the result is false; if one input has a value for the precision and the other does not, the comparison stops and the result is null; if neither input has a value for the precision or the last precision has been reached, the comparison stops and the result is true. For the purposes of comparison, seconds and milliseconds are combined as a single precision using a decimal, with decimal comparison semantics.
When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.
If either argument is null, the result is null.
Note that relative ratio comparisons are not directly supported due to the variance of uses within healthcare. See the discussion in Ratio Operators in the Author's Guide for more information.
*/
  interface LessOrEqual extends AbstractBinaryExpression {
    type: 'LessOrEqual';
  }

  /*
The GreaterOrEqual operator returns true if the first argument is greater than or equal to the second argument.
The GreaterOrEqual operator is defined for the Integer, Long, Decimal, String, Date, DateTime, Time, and Quantity types.
For comparisons involving quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' are comparable, but units of 'cm2' and 'cm' are not. Attempting to operate on quantities with invalid units will result in a null. When a quantity has no units specified, it is treated as a quantity with the default unit ('1').
For time-valued quantities, the UCUM definite-quantity durations above days (and weeks) are not comparable to calendar durations. Definite-time duration unit conversions shall be performed as specified in ISO-8601, while calendar-time duration unit conversions shall be performed according to calendar duration semantics. In particular, unit conversion between variable length calendar durations (i.e. years and months) and definite-time durations (i.e. days or below) results in null.
For Date, Time, and DateTime values, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is greater than the second, the result is true; if the first value is less than the second, the result is false; if one input has a value for the precision and the other does not, the comparison stops and the result is null; if neither input has a value for the precision or the last precision has been reached, the comparison stops and the result is true. For the purposes of comparison, seconds and milliseconds are combined as a single precision using a decimal, with decimal comparison semantics.
When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.
If either argument is null, the result is null.
Note that relative ratio comparisons are not directly supported due to the variance of uses within healthcare. See the discussion in Ratio Operators in the Author's Guide for more information.
*/
  interface GreaterOrEqual extends AbstractBinaryExpression {
    type: 'GreaterOrEqual';
  }

  /*
The Add operator performs numeric addition of its arguments.
When adding quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' can be added, but units of 'cm2' and 'cm' cannot. The unit of the result will be the most granular unit of either input. Attempting to operate on quantities with invalid units will result in a run-time error.
The Add operator is defined for the Integer, Long, Decimal, and Quantity types. In addition, a time-valued Quantity can be added to a Date, DateTime or Time using this operator.
For Date, DateTime, and Time values, the operator returns the value of the first argument, incremented by the time-valued quantity, respecting variable length periods for calendar years and months.
For Date values, the quantity unit must be one of years, months, weeks, or days.
For DateTime values, the quantity unit must be one of years, months, weeks, days, hours, minutes, seconds, or milliseconds.
For Time values, the quantity unit must be one of hours, minutes, seconds, or milliseconds.
Note that as with any Date, Time, or DateTime operations, temporal units may be specified with either singular, plural, or UCUM units. However, to avoid the potential confusion of calendar-based date and time arithmetic with definite-duration date and time arithmetic, it is an error to attempt to add a definite-duration time-valued unit above days (and weeks), a calendar duration must be used.
For precisions above seconds, any decimal portion of the time-valued quantity is ignored, since date/time arithmetic above seconds is performed with calendar duration semantics.
For partial date/time values where the time-valued quantity is more precise than the partial date/time, the operation is performed by converting the time-based quantity to the highest specified granularity in the first argument (truncating any resulting decimal portion) and then adding it to the first argument.
If either argument is null, the result is null.
If the result of the addition cannot be represented (i.e. arithmetic overflow), the result is null.
*/
  interface Add extends AbstractBinaryExpression {
    type: 'Add';
  }

  /*
The Subtract operator performs numeric subtraction of its arguments.
When subtracting quantities, the dimensions of each quantity must be the same, but not necessarily the unit. For example, units of 'cm' and 'm' can be subtracted, but units of 'cm2' and 'cm' cannot. The unit of the result will be the most granular unit of either input. Attempting to operate on quantities with invalid units will result in a run-time error.
The Subtract operator is defined for the Integer, Long, Decimal, and Quantity types. In addition, a time-valued Quantity can be subtracted from a Date, DateTime, or Time using this operator.
For Date, DateTime, Time values, the operator returns the value of the first argument, decremented by the time-valued quantity, respecting variable length periods for calendar years and months.
For Date values, the quantity unit must be one of years, months, weeks, or days.
For DateTime values, the quantity unit must be one of years, months, weeks, days, hours, minutes, seconds, or milliseconds.
For Time values, the quantity unit must be one of hours, minutes, seconds, or milliseconds.
Note that as with any Date, Time, or DateTime operations, temporal units may be specified with either singular, plural, or UCUM units. However, to avoid the potential confusion of calendar-based date and time arithmetic with definite-duration date and time arithmetic, it is an error to attempt to subtract a definite-duration time-valued unit above days (and weeks), a calendar duration must be used.
For precisions above seconds, any decimal portion of the time-valued quantity is ignored, since date/time arithmetic above seconds is performed with calendar duration semantics.
For partial date/time values where the time-valued quantity is more precise than the partial date/time, the operation is performed by converting the time-based quantity to the highest specified granularity in the first argument (truncating any resulting decimal portion) and then subtracting it from the first argument.
If either argument is null, the result is null.
If the result of the operation cannot be represented, the result is null.
*/
  interface Subtract extends AbstractBinaryExpression {
    type: 'Subtract';
  }

  /*
The Multiply operator performs numeric multiplication of its arguments.
For multiplication operations involving quantities, the resulting quantity will have the appropriate unit.
If either argument is null, the result is null.
If the result of the operation cannot be represented, the result is null.
The Multiply operator is defined for the Integer, Long, Decimal and Quantity types.
*/
  interface Multiply extends AbstractBinaryExpression {
    type: 'Multiply';
  }

  /*
The Divide operator performs numeric division of its arguments. Note that the result type of Divide is Decimal, even if its arguments are of type Integer. For integer division, use the truncated divide operator.
For division operations involving quantities, the resulting quantity will have the appropriate unit.
If either argument is null, the result is null.
If the result of the division cannot be represented, or the right argument is 0, the result is null.
The Divide operator is defined for the Decimal and Quantity types.
*/
  interface Divide extends AbstractBinaryExpression {
    type: 'Divide';
  }

  /*
The TruncatedDivide operator performs integer division of its arguments.
If either argument is null, the result is null.
If the result of the operation cannot be represented, or the right argument is 0, the result is null.
The TruncatedDivide operator is defined for the Integer, Long, Decimal, and Quantity types.
For TruncatedDivide operations involving quantities, the resulting quantity will have the appropriate unit.
*/
  interface TruncatedDivide extends AbstractBinaryExpression {
    type: 'TruncatedDivide';
  }

  /*
The Modulo operator computes the remainder of the division of its arguments.
If either argument is null, the result is null.
If the result of the modulo cannot be represented, or the right argument is 0, the result is null.
The Modulo operator is defined for the Integer, Long, Decimal, and Quantity types.
For Modulo operations involving quantities, the resulting quantity will have the appropriate unit.
*/
  interface Modulo extends AbstractBinaryExpression {
    type: 'Modulo';
  }

  /*
The Ceiling operator returns the first integer greater than or equal to the argument.
If the argument is null, the result is null.
*/
  interface Ceiling extends AbstractUnaryExpression {
    type: 'Ceiling';
  }

  /*
The Floor operator returns the first integer less than or equal to the argument.
If the argument is null, the result is null.
*/
  interface Floor extends AbstractUnaryExpression {
    type: 'Floor';
  }

  /*
The Truncate operator returns the integer component of its argument.
If the argument is null, the result is null.
*/
  interface Truncate extends AbstractUnaryExpression {
    type: 'Truncate';
  }

  /*
The Abs operator returns the absolute value of its argument.
When taking the absolute value of a quantity, the unit is unchanged.
If the argument is null, the result is null.
If the result of taking the absolute value of the argument cannot be represented (e.g. Abs(minimum Integer)), the result is null.
The Abs operator is defined for the Integer, Long, Decimal, and Quantity types.
*/
  interface Abs extends AbstractUnaryExpression {
    type: 'Abs';
  }

  /*
The Negate operator returns the negative of its argument.
When negating quantities, the unit is unchanged.
If the argument is null, the result is null.
If the result of negating the argument cannot be represented (e.g. -(minimum Integer)), the result is null.
The Negate operator is defined for the Integer, Long, Decimal, and Quantity types.
*/
  interface Negate extends AbstractUnaryExpression {
    type: 'Negate';
  }

  /*
The Round operator returns the nearest integer to its argument. The semantics of round are defined as a traditional round, meaning that a decimal value of 0.5 or higher will round to 1.
If the argument is null, the result is null.
Precision determines the decimal place at which the rounding will occur. If precision is not specified or null, 0 is assumed.
*/
  interface Round extends AbstractOperatorExpression {
    type: 'Round';
    operand: Expression;
    precision?: Expression;
  }

  /*
The Ln operator computes the natural logarithm of its argument.
If the argument is null, the result is null.
If the result of the operation cannot be represented, the result is null.
*/
  interface Ln extends AbstractUnaryExpression {
    type: 'Ln';
  }

  /*
The Exp operator returns e raised to the given power.
If the argument is null, the result is null.
If the result of the operation cannot be represented, the result is null.
*/
  interface Exp extends AbstractUnaryExpression {
    type: 'Exp';
  }

  /*
The Log operator computes the logarithm of its first argument, using the second argument as the base.
If either argument is null, the result is null.
If the result of the operation cannot be represented, the result is null.
*/
  interface Log extends AbstractBinaryExpression {
    type: 'Log';
  }

  /*
The Power operator raises the first argument to the power given by the second argument.
If either argument is null, the result is null.
If the result of the operation cannot be represented, the result is null.
*/
  interface Power extends AbstractBinaryExpression {
    type: 'Power';
  }

  /*
The Successor operator returns the successor of the argument. For example, the successor of 1 is 2. If the argument is already the maximum value for the type, a run-time error is thrown.
The Successor operator is defined for the Integer, Long, Decimal, Date, DateTime, and Time types.
For Integer, Successor is equivalent to adding 1.
For Long, Successor is equivalent to adding 1L.
For Decimal, Successor is equivalent to adding the minimum precision value for the Decimal type, or 10^-08.
For Date, DateTime, and Time values, Successor is equivalent to adding a time-unit quantity for the lowest specified precision of the value. For example, if the DateTime is fully specified, Successor is equivalent to adding 1 millisecond; if the DateTime is specified to the second, Successor is equivalent to adding one second, etc.
If the argument is null, the result is null.
If the result of the operation cannot be represented, the result is null.
*/
  interface Successor extends AbstractUnaryExpression {
    type: 'Successor';
  }

  /*
The Predecessor operator returns the predecessor of the argument. For example, the predecessor of 2 is 1. If the argument is already the minimum value for the type, a run-time error is thrown.
The Predecessor operator is defined for the Integer, Long, Decimal, Date, DateTime, and Time types.
For Integer, Predecessor is equivalent to subtracting 1.
For Long, Predecessor is equivalent to subtracting 1L.
For Decimal, Predecessor is equivalent to subtracting the minimum precision value for the Decimal type, or 10^-08.
For Date, DateTime, and Time values, Predecessor is equivalent to subtracting a time-unit quantity for the lowest specified precision of the value. For example, if the DateTime is fully specified, Predecessor is equivalent to subtracting 1 millisecond; if the DateTime is specified to the second, Predecessor is equivalent to subtracting one second, etc.
If the argument is null, the result is null.
If the result of the operation cannot be represented, the result is null.
*/
  interface Predecessor extends AbstractUnaryExpression {
    type: 'Predecessor';
  }

  /*
The MinValue operator returns the minimum representable value for the given type.
The MinValue operator is defined for the Integer, Long, Decimal, Date, DateTime, and Time types.
For Integer, MinValue returns the minimum signed 32-bit integer, -(2^31).
For Long, MinValue returns the minimum signed 64-bit integer, -(2^63).
For Decimal, MinValue returns the minimum representable Decimal value, (-10^28 + 1) / 10^8 (-99999999999999999999.99999999).
For Date, MinValue returns the minimum representable Date value, Date(1, 1, 1).
For DateTime, MinValue returns the minimum representable DateTime value, DateTime(1, 1, 1, 0, 0, 0, 0).
For Time, MinValue returns the minimum representable Time value, Time(0, 0, 0, 0).
For any other type, attempting to invoke MinValue results in an error.
Note that implementations may choose to represent the minimum DateTime value using a constant offset such as UTC.
*/
  interface MinValue extends AbstractExpression {
    type: 'MinValue';
    valueType: string;
  }

  /*
The MaxValue operator returns the maximum representable value for the given type.
The MaxValue operator is defined for the Integer, Long, Decimal, Date, DateTime, and Time types.
For Integer, MaxValue returns the maximum signed 32-bit integer, 2^31 - 1.
For Long, MaxValue returns the maximum signed 64-bit integer, 2^63 - 1.
For Decimal, MaxValue returns the maximum representable Decimal value, (10^28 - 1) / 10^8 (99999999999999999999.99999999).
For Date, MaxValue returns the maximum representable Date value, Date(9999, 12, 31).
For DateTime, MaxValue returns the maximum representable DateTime value, DateTime(9999, 12, 31, 23, 59, 59, 999).
For Time, MaxValue returns the maximum representable Time value, Time(23, 59, 59, 999).
For any other type, attempting to invoke MaxValue results in an error.
Note that implementations may choose to represent the maximum DateTime value using a constant offset such as UTC.
*/
  interface MaxValue extends AbstractExpression {
    type: 'MaxValue';
    valueType: string;
  }

  /*
The Precision operator returns the number of digits of precision in the input value.
The operator can be used with Decimal, Date, DateTime, and Time values.
For Decimal values, the operator returns the number of digits of precision after the decimal place in the input value.
Precision(1.58700) // 5
For Date and DateTime values, the operator returns the number of digits of precision in the input value.
Precision(@2014) // 4
Precision(@2014-01-05T10:30:00.000) // 17
Precision(@T10:30) // 4
Precision(@T10:30:00.000) // 9
If the argument is null, the result is null.
*/
  interface Precision extends AbstractUnaryExpression {
    type: 'Precision';
  }

  /*
The LowBoundary operator returns the least possible value of the input to the specified precision.
If no precision is specified, the greatest precision of the type of the input value is used (i.e. at least 8 for Decimal, 4 for Date, at least 17 for DateTime, and at least 9 for Time).
If the precision is greater than the maximum possible precision of the implementation, the result is null.
The operator can be used with Decimal, Date, DateTime, and Time values.
LowBoundary(1.587, 8) // 1.58700000
LowBoundary(@2014, 6) // @2014-01
LowBoundary(@2014-01-01T08, 17) // @2014-01-01T08:00:00.000
LowBoundary(@T10:30, 9) // @T10:30:00.000
If the input value is null, the result is null.
*/
  interface LowBoundary extends AbstractBinaryExpression {
    type: 'LowBoundary';
  }

  /*
The HighBoundary operator returns the greatest possible value of the input to the specified precision.
If no precision is specified, the greatest precision of the type of the input value is used (i.e. at least 8 for Decimal, 4 for Date, at least 17 for DateTime, and at least 9 for Time).
If the precision is greater than the maximum possible precision of the implementation, the result is null.
The operator can be used with Decimal, Date, DateTime, and Time values.
HighBoundary(1.587, 8) // 1.58799999
HighBoundary(@2014, 6) // @2014-12
HighBoundary(@2014-01-01T08, 17) // @2014-01-01T08:59:59.999
HighBoundary(@T10:30, 9) // @T10:30:59.999
If the input value is null, the result is null.
*/
  interface HighBoundary extends AbstractBinaryExpression {
    type: 'HighBoundary';
  }

  /*
The Concatenate operator performs string concatenation of its arguments.
If any argument is null, the result is null.
*/
  interface Concatenate extends AbstractNaryExpression {
    type: 'Concatenate';
  }

  /*
The Combine operator combines a list of strings, optionally separating each string with the given separator.
If either argument is null the result is null.  If the source list is empty, the result is an empty string ('').
For consistency with aggregate operator behavior, null elements in the input list are ignored.
*/
  interface Combine extends AbstractOperatorExpression {
    type: 'Combine';
    source: Expression;
    separator?: Expression;
  }

  /*
The Split operator splits a string into a list of strings using a separator.
If the stringToSplit argument is null, the result is null.
If the stringToSplit argument does not contain any appearances of the separator, the result is a list of strings containing one element that is the value of the stringToSplit argument.
*/
  interface Split extends AbstractOperatorExpression {
    type: 'Split';
    stringToSplit: Expression;
    separator?: Expression;
  }

  /*
The SplitOnMatches operator splits a string into a list of strings using matches of a regex pattern.
The separatorPattern argument is a regex pattern, following the same semantics as the Matches operator.
If the stringToSplit argument is null, the result is null.
If the stringToSplit argument does not contain any appearances of the separator pattern, the result is a list of strings containing one element that is the input value of the stringToSplit argument.
*/
  interface SplitOnMatches extends AbstractOperatorExpression {
    type: 'SplitOnMatches';
    stringToSplit: Expression;
    separatorPattern: Expression;
  }

  /*
The Length operator returns the length of its argument.
For strings, the length is the number of characters in the string.
For lists, the length is the number of elements in the list.
If the argument is null, the result is 0.
*/
  interface Length extends AbstractUnaryExpression {
    type: 'Length';
  }

  /*
The Upper operator returns the given string with all characters converted to their upper case equivalents.
Note that the definition of uppercase for a given character is a locale-dependent determination, and is not specified by CQL. Implementations are expected to provide appropriate and consistent handling of locale for their environment.
If the argument is null, the result is null.
*/
  interface Upper extends AbstractUnaryExpression {
    type: 'Upper';
  }

  /*
The Lower operator returns the given string with all characters converted to their lowercase equivalents.
Note that the definition of lowercase for a given character is a locale-dependent determination, and is not specified by CQL. Implementations are expected to provide appropriate and consistent handling of locale for their environment.
If the argument is null, the result is null.
*/
  interface Lower extends AbstractUnaryExpression {
    type: 'Lower';
  }

  /*
The Indexer operator returns the indexth element in a string or list.
Indexes in strings and lists are defined to be 0-based.
If the index is less than 0 or greater than the length of the string or list being indexed, the result is null.
If either argument is null, the result is null.
*/
  interface Indexer extends AbstractBinaryExpression {
    type: 'Indexer';
  }

  /*
The PositionOf operator returns the 0-based index of the beginning given pattern in the given string.
If the pattern is not found, the result is -1.
If either argument is null, the result is null.
*/
  interface PositionOf extends AbstractOperatorExpression {
    type: 'PositionOf';
    pattern: Expression;
    string: Expression;
  }

  /*
The LastPositionOf operator returns the 0-based index of the beginning of the last appearance of the given pattern in the given string.
If the pattern is not found, the result is -1.
If either argument is null, the result is null.
*/
  interface LastPositionOf extends AbstractOperatorExpression {
    type: 'LastPositionOf';
    pattern: Expression;
    string: Expression;
  }

  /*
The Substring operator returns the string within stringToSub, starting at the 0-based index startIndex, and consisting of length characters.
If length is ommitted, the substring returned starts at startIndex and continues to the end of stringToSub.
If stringToSub or startIndex is null, or startIndex is out of range, the result is null.
*/
  interface Substring extends AbstractOperatorExpression {
    type: 'Substring';
    stringToSub: Expression;
    startIndex: Expression;
    length?: Expression;
  }

  /*
The StartsWith operator returns true if the given string starts with the given prefix.
If the prefix is the empty string, the result is true.
If either argument is null, the result is null.
*/
  interface StartsWith extends AbstractBinaryExpression {
    type: 'StartsWith';
  }

  /*
The EndsWith operator returns true if the given string ends with the given suffix.
If the suffix is the empty string, the result is true.
If either argument is null, the result is null.
*/
  interface EndsWith extends AbstractBinaryExpression {
    type: 'EndsWith';
  }

  /*
The Matches operator returns true if the given string matches the given regular expression pattern. Regular expressions should function consistently, regardless of any culture- and locale-specific settings in the environment, should be case-sensitive, use single line mode, and allow Unicode characters.
If either argument is null, the result is null.
Platforms will typically use native regular expression implementations. These are typically fairly similar, but there will always be small differences. As such, CQL does not prescribe a particular dialect, but recommends the use of the [PCRE](http://www.pcre.org) dialect.
*/
  interface Matches extends AbstractBinaryExpression {
    type: 'Matches';
  }

  /*
The ReplaceMatches operator matches the given string using the regular expression pattern, replacing each match with the given substitution. The substitution string may refer to identified match groups in the regular expression. Regular expressions should function consistently, regardless of any culture- and locale-specific settings in the environment, should be case-sensitive, use single line mode and allow Unicode characters.
If any argument is null, the result is null.
Platforms will typically use native regular expression implementations. These are typically fairly similar, but there will always be small differences. As such, CQL does not prescribe a particular dialect, but recommends the use of the [PCRE](http://www.pcre.org) dialect.
*/
  interface ReplaceMatches extends AbstractTernaryExpression {
    type: 'ReplaceMatches';
  }

  /*
The DurationBetween operator returns the number of whole calendar periods for the specified precision between the first and second arguments. If the first argument is after the second argument, the result is negative. The result of this operation is always an integer; any fractional periods are dropped.
For Date values, precision must be one of Year, Month, Week, or Day.
For Time values, precision must be one of Hour, Minute, Second, or Millisecond.
For calculations involving weeks, the duration of a week is equivalent to 7 days.
When calculating duration between DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.
If either argument is null, the result is null.
Note that this operator can be implemented using Uncertainty as described in the CQL specification, Chapter 5, Precision-Based Timing.
*/
  interface DurationBetween extends AbstractBinaryExpression {
    type: 'DurationBetween';
    precision?: DateTimePrecision;
  }

  /*
The DifferenceBetween operator returns the number of boundaries crossed for the specified precision between the first and second arguments. If the first argument is after the second argument, the result is negative. Because this operation is only counting boundaries crossed, the result is always an integer.
For Date values, precision must be one of Year, Month, Week, or Day.
For Time values, precision must be one of Hour, Minute, Second, or Millisecond.
For calculations involving weeks, Sunday is considered to be the first day of the week for the purposes of determining boundaries.
When calculating difference between DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.
If either argument is null, the result is null.
Note that this operator can be implemented using Uncertainty as described in the CQL specification, Chapter 5, Precision-Based Timing.
*/
  interface DifferenceBetween extends AbstractBinaryExpression {
    type: 'DifferenceBetween';
    precision?: DateTimePrecision;
  }

  /*
The DateFrom operator returns the date (with no time components specified) of the argument.
If the argument is null, the result is null.
*/
  interface DateFrom extends AbstractUnaryExpression {
    type: 'DateFrom';
  }

  /*
The TimeFrom operator returns the Time of the argument.
When extracting the time from a DateTime value, implementations should normalize to the timezone offset of the evaluation request timestamp.
If the argument is null, the result is null.
*/
  interface TimeFrom extends AbstractUnaryExpression {
    type: 'TimeFrom';
  }

  /*
DEPRECATED (as of 1.4): The TimezoneFrom operator returns the timezone offset of the argument.
If the argument is null, the result is null.
*/
  interface TimezoneFrom extends AbstractUnaryExpression {
    type: 'TimezoneFrom';
  }

  /*
The TimezoneOffsetFrom operator returns the timezone offset of the argument.
If the argument is null, the result is null.
*/
  interface TimezoneOffsetFrom extends AbstractUnaryExpression {
    type: 'TimezoneOffsetFrom';
  }

  /*
The DateTimeComponentFrom operator returns the specified component of the argument.
If the argument is null, the result is null.
The precision must be one of Year, Month, Day, Hour, Minute, Second, or Millisecond. Note specifically that since there is variability how weeks are counted, Week precision is not supported, and will result in an error.
*/
  interface DateTimeComponentFrom extends AbstractUnaryExpression {
    type: 'DateTimeComponentFrom';
    precision?: DateTimePrecision;
  }

  /*
The TimeOfDay operator returns the time-of-day of the start timestamp associated with the evaluation request. See the Now operator for more information on the rationale for defining the TimeOfDay operator in this way.
*/
  interface TimeOfDay extends AbstractOperatorExpression {
    type: 'TimeOfDay';
  }

  /*
The Today operator returns the date (with no time component) of the start timestamp associated with the evaluation request. See the Now operator for more information on the rationale for defining the Today operator in this way.
*/
  interface Today extends AbstractOperatorExpression {
    type: 'Today';
  }

  /*
The Now operator returns the date and time of the start timestamp associated with the evaluation request. Now is defined in this way for two reasons:
1) The operation will always return the same value within any given evaluation, ensuring that the result of an expression containing Now will always return the same result.
2) The operation will return the timestamp associated with the evaluation request, allowing the evaluation to be performed with the same timezone offset information as the data delivered with the evaluation request.
*/
  interface Now extends AbstractOperatorExpression {
    type: 'Now';
  }

  /*
The Date operator constructs a date value from the given components.
At least one component must be specified, and no component may be specified at a precision below an unspecified precision. For example, month may be null, but if it is, day must be null as well.
*/
  interface Date extends AbstractOperatorExpression {
    type: 'Date';
    year: Expression;
    month?: Expression;
    day?: Expression;
  }

  /*
The DateTime operator constructs a DateTime value from the given components.
At least one component other than timezoneOffset must be specified, and no component may be specified at a precision below an unspecified precision. For example, hour may be null, but if it is, minute, second, and millisecond must all be null as well.
Although the milliseconds are specified with a separate component, seconds and milliseconds are combined and represented as a Decimal for the purposes of comparison.
If timezoneOffset is not specified, it is defaulted to the timezone offset of the evaluation request.
*/
  interface DateTime extends AbstractOperatorExpression {
    type: 'DateTime';
    year: Expression;
    month?: Expression;
    day?: Expression;
    hour?: Expression;
    minute?: Expression;
    second?: Expression;
    millisecond?: Expression;
    timezoneOffset?: Expression;
  }

  /*
The Time operator constructs a time value from the given components.
At least one component must be specified, and no component may be specified at a precision below an unspecified precision. For example, minute may be null, but if it is, second, and millisecond must all be null as well.
Although the milliseconds are specified with a separate component, seconds and milliseconds are combined and represented as a [.id]#Decimal# for the purposes of comparison.
*/
  interface Time extends AbstractOperatorExpression {
    type: 'Time';
    hour: Expression;
    minute?: Expression;
    second?: Expression;
    millisecond?: Expression;
  }

  /*
The SameAs operator is defined for Date, DateTime, and Time values, as well as intervals.
For the Interval overloads, the SameAs operator returns true if the intervals start and end at the same value, using the semantics described in the Start and End operator to determine interval boundaries.
The SameAs operator compares two Date, Time, or DateTime values to the specified precision for equality. Individual component values are compared starting from the year component down to the specified precision. If all values are specified and have the same value for each component, then the result is true. If a compared component is specified in both dates, but the values are not the same, then the result is false. Otherwise the result is null, as there is not enough information to make a determination.
If no precision is specified, the comparison is performed beginning with years (or hours for time values) and proceeding to the finest precision specified in either input.
For Date values, precision must be one of year, month, or day.
For DateTime values, precision must be one of year, month, day, hour, minute, second, or millisecond.
For Time values, precision must be one of hour, minute, second, or millisecond.
Note specifically that due to variability in the way week numbers are determined, comparisons involving weeks are not supported.
When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.
If either argument is null, the result is null.
*/
  interface SameAs extends AbstractBinaryExpression {
    type: 'SameAs';
    precision?: DateTimePrecision;
  }

  /*
The SameOrBefore operator is defined for Date, DateTime, and Time values, as well as intervals.
For the Interval overload, the SameOrBefore operator returns true if the first interval ends on or before the second one starts. In other words, if the ending point of the first interval is less than or equal to the starting point of the second interval, using the semantics described in the Start and End operators to determine interval boundaries.
The SameOrBefore operator compares two Date, DateTime, or Time values to the specified precision to determine whether the first argument is the same or before the second argument. The comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is less than the second, the result is true; if the first value is greater than the second, the result is false; if either input has no value for the precision, the comparison stops and the result is null; if the specified precision has been reached, the comparison stops and the result is true.
If no precision is specified, the comparison is performed beginning with years (or hours for time values) and proceeding to the finest precision specified in either input.
For Date values, precision must be one of year, month, or day.
For DateTime values, precision must be one of year, month, day, hour, minute, second, or millisecond.
For Time values, precision must be one of hour, minute, second, or millisecond.
Note specifically that due to variability in the way week numbers are determined, comparisons involving weeks are not supported.
When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.
If either argument is null, the result is null.
*/
  interface SameOrBefore extends AbstractBinaryExpression {
    type: 'SameOrBefore';
    precision?: DateTimePrecision;
  }

  /*
The SameOrAfter operator is defined for Date, DateTime, and Time values, as well as intervals.
For the Interval overload, the SameOrAfter operator returns true if the first interval starts on or after the second one ends. In other words, if the starting point of the first interval is greater than or equal to the ending point of the second interval, using the semantics described in the Start and End operators to determine interval boundaries.
For the Date, DateTime, and Time overloads, this operator compares two Date, DateTime, or Time values to the specified precision to determine whether the first argument is the same or after the second argument. The comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is greater than the second, the result is true; if the first value is less than the second, the result is false; if either input has no value for the precision, the comparison stops and the result is null; if the specified precision has been reached, the comparison stops and the result is true.
If no precision is specified, the comparison is performed beginning with years (or hours for time values) and proceeding to the finest precision specified in either input.
For Date values, precision must be one of year, month, or day.
For DateTime values, precision must be one of year, month, day, hour, minute, second, or millisecond.
For Time values, precision must be one of hour, minute, second, or millisecond.
Note specifically that due to variability in the way week numbers are determined, comparisons involving weeks are not supported.
When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.
If either argument is null, the result is null.
*/
  interface SameOrAfter extends AbstractBinaryExpression {
    type: 'SameOrAfter';
    precision?: DateTimePrecision;
  }

  /*
The PointFrom expression extracts the single point from the source interval. The source interval must be a unit interval (meaning an interval with the same starting and ending boundary), otherwise, a run-time error is thrown. If the source interval is null, the result is null.
*/
  interface PointFrom extends AbstractUnaryExpression {
    type: 'PointFrom';
  }

  /*
The Width operator returns the width of an interval. The result of this operator is equivalent to invoking: End(i) - Start(i)
Note that this operator is not defined for intervals of type Date, DateTime, and Time.
If the argument is null, the result is null.
*/
  interface Width extends AbstractUnaryExpression {
    type: 'Width';
  }

  /*
The Size operator returns the size of an interval.
The result of this operator is equivalent to invoking: End(i) - Start(i) + point-size, where the point-size for the point type of the interval is determined by: Successor(Minimum_T) - Minimum_T.
Note that this operator is not defined for intervals of type Date, DateTime, and Time.
If the argument is null, the result is null.
*/
  interface Size extends AbstractUnaryExpression {
    type: 'Size';
  }

  /*
The Start operator returns the starting point of an interval.
If the low boundary of the interval is open, this operator returns the Successor of the low value of the interval. Note that if the low value of the interval is null, the result is null.
If the low boundary of the interval is closed and the low value of the interval is not null, this operator returns the low value of the interval. Otherwise, the result is the minimum value of the point type of the interval.
If the argument is null, the result is null.
*/
  interface Start extends AbstractUnaryExpression {
    type: 'Start';
  }

  /*
The End operator returns the ending point of an interval.
If the high boundary of the interval is open, this operator returns the Predecessor of the high value of the interval. Note that if the high value of the interval is null, the result is null.
If the high boundary of the interval is closed and the high value of the interval is not null, this operator returns the high value of the interval. Otherwise, the result is the maximum value of the point type of the interval.
If the argument is null, the result is null.
*/
  interface End extends AbstractUnaryExpression {
    type: 'End';
  }

  /*
The Contains operator returns true if the first operand contains the second.
There are two overloads of this operator:
	List, T : The type of T must be the same as the element type of the list.
	Interval, T : The type of T must be the same as the point type of the interval.
For the List, T overload, this operator returns true if the given element is in the list, using equality semantics.
For the Interval, T overload, this operator returns true if the given point is equal to the starting or ending point of the interval, or greater than the starting point and less than the ending point. For open interval boundaries, exclusive comparison operators are used. For closed interval boundaries, if the interval boundary is null, the result of the boundary comparison is considered true. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If the first argument is null, the result is false. If the second argument is null, the result is null.
*/
  interface Contains extends AbstractBinaryExpression {
    type: 'Contains';
    precision?: DateTimePrecision;
  }

  /*
The ProperContains operator returns true if the first operand properly contains the second.
There are two overloads of this operator:
	List, T: The type of T must be the same as the element type of the list.
	Interval, T : The type of T must be the same as the point type of the interval.
For the List, T overload, this operator returns true if the given element is in the list, and it is not the only element in the list, using equality semantics.
For the Interval, T overload, this operator returns true if the given point is greater than the starting point of the interval, and less than the ending point of the interval, as determined by the Start and End operators.  If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If the first argument is null, the result is false. If the second argument is null, the result is null.
*/
  interface ProperContains extends AbstractBinaryExpression {
    type: 'ProperContains';
    precision?: DateTimePrecision;
  }

  /*
The In operator tests for membership in an interval or list.
There are two overloads of this operator:
	T, List : The type of T must be the same as the element type of the list.
	T, Interval : The type of T must be the same as the point type of the interval.
For the T, List overload, this operator returns true if the given element is in the given list, using equality semantics.
For the T, Interval overload, this operator returns true if the given point is equal to the starting or ending point of the interval, or greater than the starting point and less than the ending point. For open interval boundaries, exclusive comparison operators are used. For closed interval boundaries, if the interval boundary is null, the result of the boundary comparison is considered true. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If the first argument is null, the result is null. If the second argument is null the result is false.
*/
  interface In extends AbstractBinaryExpression {
    type: 'In';
    precision?: DateTimePrecision;
  }

  /*
The ProperIn operator tests for proper membership in an interval or list.
There are two overloads of this operator:
	T, List : The type of T must be the same as the element type of the list.
	T, Interval : The type of T must be the same as the point type of the interval.
For the T, List overload, this operator returns if the given element is in the given list, and it is not the only element in the list, using equality semantics.
For the T, Interval overload, this operator returns true if the given point is greater than the starting point, and less than the ending point of the interval, as determined by the Start and End operators. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If the first argument is null, the result is null. If the second argument is null the result is false.
*/
  interface ProperIn extends AbstractBinaryExpression {
    type: 'ProperIn';
    precision?: DateTimePrecision;
  }

  /*
The Includes operator returns true if the first operand completely includes the second.
There are two overloads of this operator:
	List, List : The element type of both lists must be the same.
	Interval, Interval : The point type of both intervals must be the same.
For the List, List overload, this operator returns true if the first operand includes every element of the second operand, using equality semantics.
For the Interval, Interval overload, this operator returns true if starting point of the first interval is less than or equal to the starting point of the second interval, and the ending point of the first interval is greater than or equal to the ending point of the second interval. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If either argument is null, the result is null.
*/
  interface Includes extends AbstractBinaryExpression {
    type: 'Includes';
    precision?: DateTimePrecision;
  }

  /*
The IncludedIn operator returns true if the first operand is completely included in the second.
There are two overloads of this operator:
	List, List : The element type of both lists must be the same.
	Interval, Interval : The point type of both intervals must be the same.
For the List, List overload, this operator returns true if every element in the first list is included in the second list, using equality semantics.
For the Interval, Interval overload, this operator returns true if the starting point of the first interval is greater than or equal to the starting point of the second interval, and the ending point of the first interval is less than or equal to the ending point of the second interval. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If either argument is null, the result is null.
*/
  interface IncludedIn extends AbstractBinaryExpression {
    type: 'IncludedIn';
    precision?: DateTimePrecision;
  }

  /*
The ProperIncludes operator returns true if the first operand includes the second, and is strictly larger.
There are two overloads of this operator:
	List, List : The element type of both lists must be the same.
	Interval, Interval : The point type of both intervals must be the same.
For the List, List overload, this operator returns true if the first list includes every element of the second list, using equality semantics, and the first list is strictly larger.
For the Interval, Interval overload, this operator returns true if the first interval includes the second interval, and the intervals are not equal. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If either argument is null, the result is null.
*/
  interface ProperIncludes extends AbstractBinaryExpression {
    type: 'ProperIncludes';
    precision?: DateTimePrecision;
  }

  /*
The ProperIncludedIn operator returns true if the first operand is included in the second, and is strictly smaller.
There are two overloads of this operator:
	List, List : The element type of both lists must be the same.
	Interval, Interval : The point type of both intervals must be the same.
For the List, List overload, this operator returns true if every element of the first list is included in the second list, using equality semantics, and the first list is strictly smaller.
For the Interval, Interval overload, this operator returns true if the first interval is included in the second interval, and the intervals are not equal. If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If either argument is null, the result is null.
*/
  interface ProperIncludedIn extends AbstractBinaryExpression {
    type: 'ProperIncludedIn';
    precision?: DateTimePrecision;
  }

  /*
The Before operator is defined for Intervals, as well as Date, DateTime, and Time values.
For the Interval overload, the Before operator returns true if the first interval ends before the second one starts. In other words, if the ending point of the first interval is less than the starting point of the second interval, using the semantics described in the Start and End operators to determine interval boundaries.
For the Date, DateTime, and Time overloads, the comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is less than the second, the result is true; if the first value is greater than the second, the result is false; if either input has no value for the precision, the comparison stops and the result is null; if the specified precision has been reached, the comparison stops and the result is false.
If no precision is specified, the comparison is performed beginning with years (or hours for time values) and proceeding to the finest precision specified in either input.
For Date values, precision must be one of year, month, or day.
For DateTime values, precision must be one of year, month, day, hour, minute, second, or millisecond.
For Time values, precision must be one of hour, minute, second, or millisecond.
Note specifically that due to variability in the way week numbers are determined, comparisons involving weeks are not supported.
When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.
If either argument is null, the result is null.
*/
  interface Before extends AbstractBinaryExpression {
    type: 'Before';
    precision?: DateTimePrecision;
  }

  /*
The After operator is defined for Intervals, as well as Date, DateTime, and Time values.
For the Interval overload, the After operator returns true if the first interval starts after the second one ends. In other words, if the starting point of the first interval is greater than the ending point of the second interval using the semantics described in the Start and End operators to determine interval boundaries.
For the Date, DateTime, and Time overloads, the After operator returns true if the first datetime is after the second datetime at the specified level of precision. The comparison is performed by considering each precision in order, beginning with years (or hours for time values). If the values are the same, comparison proceeds to the next precision; if the first value is greater than the second, the result is true; if the first value is less than the second, the result is false; if either input has no value for the precision, the comparison stops and the result is null; if the specified precision has been reached, the comparison stops and the result is false.
If no precision is specified, the comparison is performed beginning with years (or hours for time values) and proceeding to the finest precision specified in either input.
For Date values, precision must be one of year, month, or day.
For DateTime values, precision must be one of year, month, day, hour, minute, second, or millisecond.
For Time values, precision must be one of hour, minute, second, or millisecond.
Note specifically that due to variability in the way week numbers are determined, comparisons involving weeks are not supported.
When comparing DateTime values with different timezone offsets, implementations should normalize to the timezone offset of the evaluation request timestamp, but only when the comparison precision is hours, minutes, seconds, or milliseconds.
If either argument is null, the result is null.
*/
  interface After extends AbstractBinaryExpression {
    type: 'After';
    precision?: DateTimePrecision;
  }

  /*
The Meets operator returns true if the first interval ends immediately before the second interval starts, or if the first interval starts immediately after the second interval ends. In other words, if the ending point of the first interval is equal to the predecessor of the starting point of the second, or if the starting point of the first interval is equal to the successor of the ending point of the second.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If either argument is null, the result is null.
*/
  interface Meets extends AbstractBinaryExpression {
    type: 'Meets';
    precision?: DateTimePrecision;
  }

  /*
The MeetsBefore operator returns true if the first interval ends immediately before the second interval starts. In other words, if the ending point of the first interval is equal to the predecessor of the starting point of the second.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If either argument is null, the result is null.
*/
  interface MeetsBefore extends AbstractBinaryExpression {
    type: 'MeetsBefore';
    precision?: DateTimePrecision;
  }

  /*
The MeetsAfter operator returns true if the first interval starts immediately after the second interval ends. In other words, if the starting point of the first interval is equal to the successor of the ending point of the second.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If either argument is null, the result is null.
*/
  interface MeetsAfter extends AbstractBinaryExpression {
    type: 'MeetsAfter';
    precision?: DateTimePrecision;
  }

  /*
The Overlaps operator returns true if the first interval overlaps the second. In other words, if the starting or ending point of either interval is in the other, or if the ending point of the first interval is greater than or equal to the starting point of the second interval, and the starting point of the first interval is less than or equal to the ending point of the second interval.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If either argument is null, the result is null.
*/
  interface Overlaps extends AbstractBinaryExpression {
    type: 'Overlaps';
    precision?: DateTimePrecision;
  }

  /*
The OverlapsBefore operator returns true if the first interval starts before and overlaps the second. In other words, if the first interval starts before and ends on or after the start of the second interval.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If either argument is null, the result is null.
*/
  interface OverlapsBefore extends AbstractBinaryExpression {
    type: 'OverlapsBefore';
    precision?: DateTimePrecision;
  }

  /*
The OverlapsAfter operator returns true if the first interval overlaps and ends after the second. In other words, if the first interval ends after and starts on or before the end of the second interval.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If either argument is null, the result is null.
*/
  interface OverlapsAfter extends AbstractBinaryExpression {
    type: 'OverlapsAfter';
    precision?: DateTimePrecision;
  }

  /*
The Starts operator returns true if the first interval starts the second. In other words, if the starting point of the first is equal to the starting point of the second interval and the ending point of the first interval is less than or equal to the ending point of the second interval.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If either argument is null, the result is null.
*/
  interface Starts extends AbstractBinaryExpression {
    type: 'Starts';
    precision?: DateTimePrecision;
  }

  /*
The Ends operator returns true if the first interval ends the second. In other words, if the starting point of the first interval is greater than or equal to the starting point of the second, and the ending point of the first interval is equal to the ending point of the second.
This operator uses the semantics described in the Start and End operators to determine interval boundaries.
If precision is specified and the point type is a Date, DateTime, or Time type, comparisons used in the operation are performed at the specified precision.
If either argument is null, the result is null.
*/
  interface Ends extends AbstractBinaryExpression {
    type: 'Ends';
    precision?: DateTimePrecision;
  }

  /*
The Collapse operator returns the unique set of intervals that completely covers the ranges present in the given list of intervals. In other words, adjacent intervals within a sorted list are merged if they either overlap or meet.
The operation is performed by combining successive intervals in the input that either overlap or meet, using the semantics defined for the Overlaps and Meets operators. Note that because those operators are themselves defined in terms of interval successor and predecessor operators, sets of Date-, DateTime-, or Time-based intervals that are only defined to a particular precision will calculate meets and overlaps at that precision. For example, a list of DateTime-based intervals where the boundaries are all specified to the hour will collapse at the hour precision, unless the collapse precision is overridden with the per argument.
The per argument determines the precision at which the collapse is computed and must be a quantity-valued expression compatible with the interval point type. For numeric intervals, this means a quantity with the default unit '1' (not to be confused with the quantity value, which may be any valid positive decimal). For Date-, DateTime-, and Time-valued intervals, this means a quantity with a temporal unit (e.g., 'year', 'month', etc).
Conceptually, the per argument to the collapse operator partitions the value-space for the operation into units of size 'per', and the intervals will be collapsed aligning with those partitions. Note that the 'per' partitions start from the starting boundary of the first input interval, ordered.
If the per argument is null, a per value will be constructed based on the coarsest precision of the boundaries of the intervals in the input set. For example, a list of DateTime-based intervals where the boundaries are a mixture of hours and minutes will collapse at the hour precision.
If the list of intervals is empty, the result is empty. If the list of intervals contains a single interval, the result is a list with that interval. If the list of intervals contains nulls, they will be excluded from the resulting list.
If the source argument is null, the result is null.
*/
  interface Collapse extends AbstractBinaryExpression {
    type: 'Collapse';
  }

  /*
The Expand operator returns the set of intervals of size per for all the ranges present in the given list of intervals, or the list of points covering the range of the given interval, if invoked on a single interval.
The per argument determines the size of the resulting intervals and must be a quantity-valued expression compatible with the interval point type. For numeric intervals, this means a quantity with the default unit '1' (not to be confused with the quantity value, which may be any valid positive decimal). For Date-, DateTime-, and Time-valued intervals, this means a quantity with a temporal unit (e.g., 'year', 'month', etc).
Conceptually, the per argument to the expand operator partitions the value-space for the operation into units of size 'per', and the intervals will be expanded aligning with those partitions. Note that the 'per' partitions start from the starting boundary of the first input interval, ordered.
If the per argument is null, a per value will be constructed based on the coarsest precision of the boundaries of the intervals in the input set. For example, a list of DateTime-based intervals where the boundaries are a mixture of hours and minutes will expand at the hour precision.
Note that if the values in the intervals are more precise than the per quantity, the more precise values will be truncated to the precision specified by the per quantity.
If the input argument is an interval, rather than a list of intervals, the result is a list of points, rather than a list of intervals. In this case, the calculation is performed the same way, but the starting point of each resulting interval is returned, rather than the interval.
If the list of intervals is empty, the result is empty. If the list of intervals contains nulls, they will be excluded from the resulting list.
If the source argument is null, the result is null.
*/
  interface Expand extends AbstractBinaryExpression {
    type: 'Expand';
  }

  /*
The Union operator returns the union of its arguments.
This operator has two overloads:
	List
	Interval
For the list overload, this operator returns a list with all unique elements from both arguments, using equality semantics, with the exception that null elements are considered equal.
For the interval overload, this operator returns the interval that starts at the earliest starting point in either argument, and ends at the latest starting point in either argument. If the arguments do not overlap or meet, this operator returns null.
If either argument is null, the operation is performed as though the argument was an empty list.
*/
  interface Union extends AbstractNaryExpression {
    type: 'Union';
  }

  /*
The Intersect operator returns the intersection of its arguments.
This operator has two overloads:
	List
	Interval
For the list overload, this operator returns a list with the elements that appear in both lists, using equality semantics with the exception that null elements are considered equal for the purposes of the intersection. The operator is defined with set semantics, meaning that each element will appear in the result at most once, and that there is no expectation that the order of the inputs will be preserved in the results.
For the interval overload, this operator returns the interval that defines the overlapping portion of both arguments. If the arguments do not overlap, this operator returns null.
If either argument is null, the result is null.
*/
  interface Intersect extends AbstractNaryExpression {
    type: 'Intersect';
  }

  /*
The Except operator returns the set difference of the two arguments.
This operator has two overloads:
	List, List
	Interval, Interval
For the list overload, this operator returns a list with the elements that appear in the first operand, that do not appear in the second operand, using equality semantics, with the exception that null elements are considered equal for the purposes of determining the result. The operator is defined with set semantics, meaning that each element will appear in the result at most once, and that there is no expectation that the order of the inputs will be preserved in the results.
For the interval overload, this operator returns the portion of the first interval that does not overlap with the second. If the second argument is properly contained within the first and does not start or end it, this operator returns null.
If the first argument is null, the result is null. If the second argument is null, the operation is performed as though the second argument was an empty list.
*/
  interface Except extends AbstractNaryExpression {
    type: 'Except';
  }

  /*
The Exists operator returns true if the list contains any elements.
If the argument is null, the result is false.
*/
  interface Exists extends AbstractUnaryExpression {
    type: 'Exists';
  }

  /*
The Times operator performs the cartesian product of two lists of tuples. The return type of a Times operator is a tuple with all the components from the tuple types of both arguments. The result will contain a tuple for each possible combination of tuples from both arguments with the values for each component derived from the pairing of the source tuples.
If either argument is null, the result is null.
*/
  interface Times extends AbstractBinaryExpression {
    type: 'Times';
  }

  /*
The Filter operator returns a list with only those elements in the source list for which the condition element evaluates to true.
If the source argument is null, the result is null.
*/
  interface Filter extends AbstractExpression {
    type: 'Filter';
    scope?: string;
    source: Expression;
    condition: Expression;
  }

  /*
The First operator returns the first element in a list. If the order by attribute is specified, the list is sorted by that ordering prior to returning the first element.
If the argument is null, the result is null.
*/
  interface First extends AbstractOperatorExpression {
    type: 'First';
    orderBy?: string;
    source?: Expression;
  }

  /*
The Last operator returns the last element in a list. If the order by attribute is specified, the list is sorted by that ordering prior to returning the last element.
If the argument is null, the result is null.
*/
  interface Last extends AbstractOperatorExpression {
    type: 'Last';
    orderBy?: string;
    source?: Expression;
  }

  /*
The Slice operator returns a portion of the elements in a list, beginning at the start index and ending just before the ending index.
If the source list is null, the result is null.
If the startIndex is null, the slice begins at the first element of the list.
If the endIndex is null, the slice continues to the last element of the list.
If the startIndex or endIndex is less than 0, or if the endIndex is less than the startIndex, the result is an empty list.
*/
  interface Slice extends AbstractOperatorExpression {
    type: 'Slice';
    source?: Expression;
    startIndex?: Expression;
    endIndex?: Expression;
  }

  /*
The IndexOf operator returns the 0-based index of the given element in the given source list.
The operator uses equality semantics as defined in the Equal operator to determine the index. The search is linear, and returns the index of the first element for which the equality comparison returns true.
If the list is empty, or no element is found, the result is -1.
If either argument is null, the result is null.
*/
  interface IndexOf extends AbstractOperatorExpression {
    type: 'IndexOf';
    source: Expression;
    element: Expression;
  }

  /*
The Flatten operator flattens a list of lists into a single list.
If the argument is null, the result is null.
*/
  interface Flatten extends AbstractUnaryExpression {
    type: 'Flatten';
  }

  /*
The Sort operator returns a list with all the elements in source, sorted as described by the by element.
When the sort elements do not provide a unique ordering (i.e. there is a possibility of duplicate sort values in the result), the order of duplicates is unspecified.
If the argument is null, the result is null.
*/
  interface Sort extends AbstractExpression {
    type: 'Sort';
    source?: Expression;
    by: SortByItem[];
  }

  /*
The ForEach expression iterates over the list of elements in the source element, and returns a list with the same number of elements, where each element in the new list is the result of evaluating the element expression for each element in the source list.
If the source argument is null, the result is null.
If the element argument evaluates to null for some item in the source list, the resulting list will contain a null for that element.
*/
  interface ForEach extends AbstractExpression {
    type: 'ForEach';
    scope?: string;
    source: Expression;
    element: Expression;
  }

  /*
The Repeat expression performs successive ForEach until no new elements are returned.
The operator uses equality comparison semantics as defined in the Equal operator.
If the source argument is null, the result is null.
If the element argument evaluates to null for some item in the source list, the resulting list will contain a null for that element.
*/
  interface Repeat extends AbstractExpression {
    type: 'Repeat';
    scope?: string;
    source: Expression;
    element: Expression;
  }

  /*
The Distinct operator takes a list of elements and returns a list containing only the unique elements within the input. For example, given the list of integers { 1, 1, 1, 2, 2, 3, 4, 4 }, the result of Distinct would be { 1, 2, 3, 4 }.
The operator uses equality comparison semantics as defined in the Equal operator, with the exception that nulls are considered equal for the purposes of distinct determination. This means that multiple nulls in the input will result in a single null in the output.
If the source argument is null, the result is null.
*/
  interface Distinct extends AbstractUnaryExpression {
    type: 'Distinct';
  }

  /*
The Current expression returns the value of the object currently in scope. For example, within a ForEach expression, this returns the current element being considered in the iteration.
It is an error to invoke the Current operator outside of a scoped operation.
*/
  interface Current extends AbstractExpression {
    type: 'Current';
    scope?: string;
  }

  /*
The Iteration expression returns the current iteration number of a scoped operation.
*/
  interface Iteration extends AbstractExpression {
    type: 'Iteration';
    scope?: string;
  }

  /*
The Total expression returns the current value of the total aggregation accumulator in an aggregate operation.
*/
  interface Total extends AbstractExpression {
    type: 'Total';
    scope?: string;
  }

  /*
The SingletonFrom expression extracts a single element from the source list. If the source list is empty, the result is null. If the source list contains one element, that element is returned. If the list contains more than one element, a run-time error is thrown. If the source list is null, the result is null.
*/
  interface SingletonFrom extends AbstractUnaryExpression {
    type: 'SingletonFrom';
  }

  /*
Aggregate expressions perform operations on lists of data, either directly on a list of scalars, or indirectly on a list of objects, with a reference to a property present on each object in the list.
Aggregate expressions deal with missing information by excluding missing values from consideration before performing the aggregated operation. For example, in a Sum over Dose, any instance of Medication with no value for Dose would be ignored.
An aggregate operation performed over an empty list is defined to return null, except as noted in the documentation for each operator (Count, AllTrue, and AnyTrue are the exceptions).
*/
  interface AbstractAggregateExpression extends AbstractExpression {
    path?: string;
    signature?: TypeSpecifier[];
    source: Expression;
  }

  /*
The Aggregate operator performs custom aggregation by evaluating an expression for each element of the source.
If a path is specified, the aggregation is performed for value of the property specified by the path for each element of the source.
The iteration expression has access to the $this, $index, and $total variables. At the end of each iteration, the value of the $total variable is updated to the result of the iteration expression. The value of the $total variable is initialized to the result of the initialValue expression, if present.
If the list is null, the result is null.
*/
  interface Aggregate extends AbstractAggregateExpression {
    type: 'Aggregate';
    iteration: Expression;
    initialValue?: Expression;
  }

  /*
The Count operator returns the number of non-null elements in the source.
If a path is specified, the count returns the number of elements that have a value for the property specified by the path.
If the list is empty, the result is 0.
If the list is null, the result is 0.
*/
  interface Count extends AbstractAggregateExpression {
    type: 'Count';
  }

  /*
The Sum operator returns the sum of non-null elements in the source.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the list is null, the result is null.
*/
  interface Sum extends AbstractAggregateExpression {
    type: 'Sum';
  }

  /*
The Product operator returns the geometric product of non-null elements in the source.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the list is null, the result is null.
*/
  interface Product extends AbstractAggregateExpression {
    type: 'Product';
  }

  /*
The Min operator returns the minimum element in the source. Comparison semantics are defined by the comparison operators for the type of the values being aggregated.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the source is null, the result is null.
*/
  interface Min extends AbstractAggregateExpression {
    type: 'Min';
  }

  /*
The Max operator returns the maximum element in the source. Comparison semantics are defined by the comparison operators for the type of the values being aggregated.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the source is null, the result is null.
*/
  interface Max extends AbstractAggregateExpression {
    type: 'Max';
  }

  /*
The Avg operator returns the average of the non-null elements in source.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the source is null, the result is null.
*/
  interface Avg extends AbstractAggregateExpression {
    type: 'Avg';
  }

  /*
The GeometricMean operator returns the geometric mean of the non-null elements in source.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the source is null, the result is null.
*/
  interface GeometricMean extends AbstractAggregateExpression {
    type: 'GeometricMean';
  }

  /*
The Median operator returns the median of the elements in source.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the source is null, the result is null.
*/
  interface Median extends AbstractAggregateExpression {
    type: 'Median';
  }

  /*
The Mode operator returns the statistical mode of the elements in source.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the source is null, the result is null.
*/
  interface Mode extends AbstractAggregateExpression {
    type: 'Mode';
  }

  /*
The Variance operator returns the statistical variance of the elements in source.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the source is null, the result is null.
*/
  interface Variance extends AbstractAggregateExpression {
    type: 'Variance';
  }

  /*
The PopulationVariance operator returns the statistical population variance of the elements in source.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the source is null, the result is null.
*/
  interface PopulationVariance extends AbstractAggregateExpression {
    type: 'PopulationVariance';
  }

  /*
The StdDev operator returns the statistical standard deviation of the elements in source.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the list is null, the result is null.
*/
  interface StdDev extends AbstractAggregateExpression {
    type: 'StdDev';
  }

  /*
The PopulationStdDev operator returns the statistical standard deviation of the elements in source.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, null is returned.
If the source is null, the result is null.
*/
  interface PopulationStdDev extends AbstractAggregateExpression {
    type: 'PopulationStdDev';
  }

  /*
The AllTrue operator returns true if all the non-null elements in source are true.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, true is returned.
If the source is null, the result is true.
*/
  interface AllTrue extends AbstractAggregateExpression {
    type: 'AllTrue';
  }

  /*
The AnyTrue operator returns true if any non-null element in source is true.
If a path is specified, elements with no value for the property specified by the path are ignored.
If the source contains no non-null elements, false is returned.
If the source is null, the result is false.
*/
  interface AnyTrue extends AbstractAggregateExpression {
    type: 'AnyTrue';
  }

  /*
The Property operator returns the value of the property on source specified by the path attribute.
If the result of evaluating source is null, the result is null.
The path attribute may include qualifiers (.) and indexers ([x]). Indexers must be literal integer values.
If the path attribute contains qualifiers or indexers, each qualifier or indexer is traversed to obtain the actual value. If the object of the property access at any point in traversing the path is null, the result is null.
If a scope is specified, the name is used to resolve the scope in which the path will be resolved. Scopes can be named by operators such as Filter and ForEach.
Property expressions can also be used to access the individual points and closed indicators for interval types using the property names low, high, lowClosed, and highClosed.
*/
  interface Property extends AbstractExpression {
    type: 'Property';
    path: string;
    scope?: string;
    source?: Expression;
  }

  /*
The AliasedQuerySource element defines a single source for inclusion in a query scope. The type of the source is determined by the expression element, and the source can be accessed within the query scope by the given alias.
*/
  interface AliasedQuerySource extends AbstractElement {
    alias: string;
    expression?: Expression;
  }

  /*
The LetClause element allows any number of expression definitions to be introduced within a query scope. Defined expressions can be referenced by name within the query scope.
*/
  interface LetClause extends AbstractElement {
    identifier: string;
    expression?: Expression;
  }

  /*
The RelationshipClause element allows related sources to be used to restrict the elements included from another source in a query scope. Note that the elements referenced by the relationship clause can only be accessed within the suchThat condition, and that elements of the related source are not included in the query scope.
*/
  interface AbstractRelationshipClause extends AbstractElement {
    suchThat: Expression;
    alias: string;
    expression?: Expression;
  }

  /*
The With clause restricts the elements of a given source to only those elements that have elements in the related source that satisfy the suchThat condition. This operation is known as a semi-join in database languages.
*/
  interface With extends AbstractRelationshipClause {
    type: 'With';
    alias: string;
    expression?: Expression;
  }

  /*
The Without clause restricts the elements of a given source to only those elements that do not have elements in the related source that satisfy the suchThat condition. This operation is known as a semi-difference in database languages.
*/
  interface Without extends AbstractRelationshipClause {
    type: 'Without';
    alias: string;
    expression?: Expression;
  }
  interface AbstractSortByItem extends AbstractElement {
    direction?: SortDirection;
  }

  /*
The ByDirection element specifies that the sort should be performed using the given direction. This approach is used when the result of the query is a list of non-tuple elements and only the sort direction needs to be specified.
*/
  interface ByDirection extends AbstractSortByItem {
    type: 'ByDirection';
  }

  /*
The ByColumn element specifies that the sort should be performed using the given column and direction. This approach is used to specify the sort order for a query when the result is a list of tuples.
*/
  interface ByColumn extends AbstractSortByItem {
    type: 'ByColumn';
    path?: string;
  }

  /*
The ByExpression element specifies that the sort should be performed using the given expression and direction. This approach is used to specify the sort order as a calculated expression.
*/
  interface ByExpression extends AbstractSortByItem {
    type: 'ByExpression';
    expression: Expression;
  }

  /*
The SortClause element defines the sort order for the query.
*/
  interface SortClause extends AbstractElement {
    by: SortByItem[];
  }

  /*
The ReturnClause element defines the shape of the result set of the query.
*/
  interface ReturnClause extends AbstractElement {
    distinct?: boolean;
    expression: Expression;
  }

  /*
The AggregateClause element defines the result of the query in terms of an aggregation expression performed for each item in the query.
*/
  interface AggregateClause extends AbstractElement {
    identifier: string;
    distinct?: boolean;
    expression: Expression;
    starting?: Expression;
  }

  /*
The Query operator represents a clause-based query. The result of the query is determined by the type of sources included, as well as the clauses used in the query.
*/
  interface Query extends AbstractExpression {
    type: 'Query';
    source: (AliasedQuerySource | RelationshipClause | With | Without)[];
    let?: LetClause[];
    relationship?: RelationshipClause[];
    where?: Expression;
    return?: ReturnClause;
    aggregate?: AggregateClause;
    sort?: SortClause;
  }

  /*
The AliasRef expression allows for the reference of a specific source within the scope of a query.
*/
  interface AliasRef extends AbstractExpression {
    type: 'AliasRef';
    name?: string;
  }

  /*
The QueryLetRef expression allows for the reference of a specific let definition within the scope of a query.
*/
  interface QueryLetRef extends AbstractExpression {
    type: 'QueryLetRef';
    name?: string;
  }

  /*
For structured types, the Children operator returns a list of all the values of the elements of the type. List-valued elements are expanded and added to the result individually, rather than as a single list.
For list types, the result is the same as invoking Children on each element in the list and flattening the resulting lists into a single result.
If the source is null, the result is null.
*/
  interface Children extends AbstractOperatorExpression {
    type: 'Children';
    source: Expression;
  }

  /*
For structured types, the Descendents operator returns a list of all the values of the elements of the type, recursively. List-valued elements are expanded and added to the result individually, rather than as a single list.
For list types, the result is the same as invoking Descendents on each element in the list and flattening the resulting lists into a single result.
If the source is null, the result is null.
*/
  interface Descendents extends AbstractOperatorExpression {
    type: 'Descendents';
    source: Expression;
  }

  /*
The Message operator is used to support errors, warnings, messages, and tracing in an ELM evaluation environment.
The operator is defined to return the input source.
If the severity is Error, the operator is expected to raise a run-time error and return the message to the calling environment. This is the only severity that stops processing. All other severities continue evaluation of the expression.
If the severity is Trace, the operator is expected to make the message available to a tracing mechanism such as a debug log in the calling environment.
If the severity is Warning, the operator is expected to provide the message as a warning to the calling environment.
If the severity is Message, the operator is expected to provide the message as information to the calling environment.
*/
  interface Message extends AbstractOperatorExpression {
    type: 'Message';
    source: Expression;
    condition?: Expression;
    code?: Expression;
    severity?: Expression;
    message?: Expression;
  }

  /*
The IncludeElement type specifies include information for an include within a retrieve.
*/
  interface IncludeElement extends AbstractElement {
    relatedDataType: string;
    relatedProperty?: string;
    relatedSearch?: string;
    isReverse?: boolean;
  }

  /*
The retrieve expression defines clinical data that will be used by the artifact. This expression allows clinically relevant filtering criteria to be provided in a well-defined and computable way. This operation defines the integration boundary for artifacts. The result of a retrieve is defined to return the same data for subsequent invocations within the same evaluation request. This means in particular that patient data updates made during the evaluation request are not visible to the artifact. In effect, the patient data is a snapshot of the data as of the start of the evaluation. This ensures strict deterministic and functional behavior of the artifact, and allows the implementation engine freedom to cache intermediate results in order to improve performance.
*/
  interface Retrieve extends AbstractExpression {
    type: 'Retrieve';
    dataType: string;
    templateId?: string;
    idProperty?: string;
    idSearch?: string;
    contextProperty?: string;
    contextSearch?: string;
    codeProperty?: string;
    codeSearch?: string;
    codeComparator?: string;
    valueSetProperty?: string;
    dateProperty?: string;
    dateLowProperty?: string;
    dateHighProperty?: string;
    dateSearch?: string;
    id?: Expression;
    codes?: Expression;
    dateRange?: Expression;
    context?: Expression;
    include?: IncludeElement[];
  }

  /*
The CodeSystemDef type defines a code system identifier that can then be used to identify code systems involved in value set definitions.
*/
  interface CodeSystemDef extends AbstractElement {
    name: string;
    id: string;
    version?: string;
    accessLevel?: AccessModifier;
  }

  /*
The ValueSetDef type defines a value set identifier that can be referenced by name anywhere within an expression.
The id specifies the globally unique identifier for the value set. This may be an HL7 OID, a FHIR URL, or a CTS2 value set URL.
If version is specified, it will be used to resolve the version of the value set definition to be used. Otherwise, the most current published version of the value set is assumed.
If codeSystems are specified, they will be used to resolve the code systems used within the value set definition to construct the expansion set.
Note that the recommended approach to statically binding to an expansion set is to use a value set definition that specifies the version of each code system used. The codeSystemVersions attribute is provided only to ensure static binding can be achieved when the value set definition does not specify code system versions as part of the definition header.
*/
  interface ValueSetDef extends AbstractElement {
    name?: string;
    id: string;
    version?: string;
    accessLevel?: AccessModifier;
    codeSystem?: CodeSystemRef[];
  }

  /*
The CodeDef type defines a code identifier that can then be used to reference single codes anywhere within an expression.
*/
  interface CodeDef extends AbstractElement {
    name: string;
    id: string;
    display?: string;
    accessLevel?: AccessModifier;
    codeSystem?: CodeSystemRef;
  }

  /*
The ConceptDef type defines a concept identifier that can then be used to reference single concepts anywhere within an expression.
*/
  interface ConceptDef extends AbstractElement {
    name: string;
    display?: string;
    accessLevel?: AccessModifier;
    code: CodeRef[];
  }

  /*
The CodeSystemRef expression allows a previously defined named code system to be referenced within an expression. Conceptually, referencing a code system returns the set of codes in the code system. Note that this operation should almost never be performed in practice. Code system references are allowed in order to allow for testing of code membership in a particular code system.
*/
  interface CodeSystemRef extends AbstractExpression {
    type: 'CodeSystemRef';
    name?: string;
    libraryName?: string;
  }

  /*
The ValueSetRef expression allows a previously defined named value set to be referenced within an expression. Conceptually, referencing a value set returns the expansion set for the value set as a list of codes.
*/
  interface ValueSetRef extends AbstractExpression {
    type: 'ValueSetRef';
    name?: string;
    libraryName?: string;
  }

  /*
The CodeRef expression allows a previously defined code to be referenced within an expression.
*/
  interface CodeRef extends AbstractExpression {
    type: 'CodeRef';
    name?: string;
    libraryName?: string;
  }

  /*
The ConceptRef expression allows a previously defined concept to be referenced within an expression.
*/
  interface ConceptRef extends AbstractExpression {
    type: 'ConceptRef';
    name?: string;
    libraryName?: string;
  }

  /*
The Code type represents a literal code selector.
*/
  interface Code extends AbstractExpression {
    type: 'Code';
    code: string;
    display?: string;
    system?: CodeSystemRef;
  }

  /*
The Concept type represents a literal concept selector.
*/
  interface Concept extends AbstractExpression {
    type: 'Concept';
    display?: string;
    code: Code[];
  }

  /*
The InCodeSystem operator returns true if the given code is in the given code system.
The first argument is expected to be a String, Code, or Concept.
The second argument is expected to be of type CodeSystem. When this argument is statically a CodeSystemRef, this allows for both static analysis of the code system references within an artifact, as well as the implementation of code system membership by the target environment as a service call to a terminology server, if desired.
*/
  interface InCodeSystem extends AbstractOperatorExpression {
    type: 'InCodeSystem';
    code?: Expression;
    codesystem?: Expression;
  }

  /*
The AnyInCodeSystem operator returns true if any of the given codes are in the given code system.
The first argument is expected to be a list of String, Code, or Concept.
The second argument is expected to be of type CodeSystem. When this argument is statically a CodeSystemRef, this allows for both static analysis of the code system references within an artifact, as well as the implementation of code system membership by the target environment as a service call to a terminology server, if desired.
*/
  interface AnyInCodeSystem extends AbstractOperatorExpression {
    type: 'AnyInCodeSystem';
    codes?: Expression;
    codesystem?: Expression;
  }

  /*
The InValueSet operator returns true if the given code is in the given value set.
The first argument is expected to be a String, Code, or Concept.
The second argument is expected to be of type ValueSet. When this argument is statically a ValueSetRef, this allows for both static analysis of the value set references within an artifact, as well as the implementation of valueset membership by the target environment as a service call to a terminology server, if desired.
*/
  interface InValueSet extends AbstractOperatorExpression {
    type: 'InValueSet';
    code?: Expression;
    valueset?: Expression;
  }

  /*
The AnyInValueSet operator returns true if any of the given codes are in the given value set.
The first argument is expected to be a list of String, Code, or Concept.
The second argument is expected to be of type ValueSet. When this argument is statically a ValueSetRef, this allows for both static analysis of the value set references within an artifact, as well as the implementation of valueset membership by the target environment as a service call to a terminology server, if desired.
*/
  interface AnyInValueSet extends AbstractOperatorExpression {
    type: 'AnyInValueSet';
    codes?: Expression;
    valueset?: Expression;
  }

  /*
The Subsumes operator returns true if the given codes are equivalent, or if the first code subsumes the second (i.e. the first code is an ancestor of the second in a subsumption hierarchy), and false otherwise.
For the Concept overload, this operator returns true if any code in the first concept subsumes any code in the second.
If either or both arguments are null, the result is null.
*/
  interface Subsumes extends AbstractBinaryExpression {
    type: 'Subsumes';
  }

  /*
The SubsumedBy operator returns true if the given codes are equivalent, or if the first code is subsumed by the second code (i.e. the first code is a descendent of the second code in a subsumption hierarchy), and false otherwise.
For the Concept overload, this operator returns true if any code in the first concept is subsumed by any code in the second.
If either or both arguments are null, the result is null.
*/
  interface SubsumedBy extends AbstractBinaryExpression {
    type: 'SubsumedBy';
  }

  /*
The Quantity type defines a clinical quantity. For example, the quantity 10 days or 30 mmHg. The value is a decimal, while the unit is expected to be a valid UCUM unit or calendar duration keyword, singular or plural.
*/
  interface Quantity extends AbstractExpression {
    type: 'Quantity';
    value?: number;
    unit?: string;
  }

  /*
The Ratio type defines a ratio between two quantities. For example, the titre 1:128, or the concentration ratio 5 mg/10 mL. The numerator and denominator are both quantities.
*/
  interface Ratio extends AbstractExpression {
    type: 'Ratio';
    numerator?: Quantity;
    denominator?: Quantity;
  }

  /*
Calculates the age in the specified precision of a person born on the given date.
The CalculateAge operator is defined for Date and DateTime.
For the Date overload, the calculation is performed using Today(), the precision must be one of year, month, week, or day, and the result is the number of whole calendar periods that have elapsed between the given date and today.
For the DateTime overload, the calculation is performed using Now(), and the result is the number of whole calendar periods that have elapsed between the given datetime and now.
*/
  interface CalculateAge extends AbstractUnaryExpression {
    type: 'CalculateAge';
    precision?: DateTimePrecision;
  }

  /*
Calculates the age in the specified precision of a person born on a given date, as of another given date.
The CalculateAgeAt operator has two signatures:
  (Date, Date)
  (DateTime, DateTime)
For the Date overload, precision must be one of year, month, week, or day, and the result is the number of whole calendar periods that have elapsed between the first date and the second date.
For the DateTime overload, the result is the number of whole calendar periods that have elapsed between the first datetime and the second datetime.
*/
  interface CalculateAgeAt extends AbstractBinaryExpression {
    type: 'CalculateAgeAt';
    precision?: DateTimePrecision;
  }

  /*
VersionedIdentifier is composed of three parts: (1) an optional system, or
        namespace, which provides a globally unique, stable scope for the identifier,
        (2) an identifier which identifies the set of all versions of a given resource, and
        (3) the actual version of the instance of interest in this set. The VersionedIdentifier
        therefore points to an individual 'versioned' instance of a resource such as the third
        version of a library.
*/
  interface VersionedIdentifier {
    id?: string;
    system?: string;
    version?: string;
  }

  /*
Defines a data model that is available within the artifact.
*/
  interface UsingDef extends AbstractElement {
    localIdentifier: string;
    uri: string;
    version?: string;
  }

  /*
Includes a library for use within the artifact.
*/
  interface IncludeDef extends AbstractElement {
    localIdentifier: string;
    mediaType?: string;
    path: string;
    version?: string;
  }

  /*
The ContextDef type defines a context definition statement. Note that this is a placeholder for the context statement within the library. The effect of the context definition is applied by the translator to the definitions that follow.
*/
  interface ContextDef extends AbstractElement {
    name?: string;
  }

  /*
A Library is an instance of a CQL-ELM library.
*/
  interface Library extends AbstractElement {
    identifier?: VersionedIdentifier;
    schemaIdentifier?: VersionedIdentifier;
    usings?: {
      def?: UsingDef[];
    };
    includes?: {
      def?: IncludeDef[];
    };
    parameters?: {
      def?: ParameterDef[];
    };
    codeSystems?: {
      def?: CodeSystemDef[];
    };
    valueSets?: {
      def?: ValueSetDef[];
    };
    codes?: {
      def?: CodeDef[];
    };
    concepts?: {
      def?: ConceptDef[];
    };
    contexts?: {
      def?: ContextDef[];
    };
    statements?: {
      def?: (ExpressionDef | FunctionDef)[];
    };
  }

  /*
The AccessModifier type is used to specify the access level for the various definitions within a library such as parameters, expressions, and functions. If no access modifier is specified, public is assumed. Private definitions can only be accessed within the library in which they are defined.
*/
  type AccessModifier = 'Public' | 'Private';

  /*
The DateTimePrecision type specifies the units of precision available for temporal operations such as DurationBetween, SameAs, SameOrBefore, SameOrAfter, and DateTimeComponentFrom.
*/
  type DateTimePrecision =
    | 'Year'
    | 'Month'
    | 'Week'
    | 'Day'
    | 'Hour'
    | 'Minute'
    | 'Second'
    | 'Millisecond';
  type SortDirection = 'asc' | 'ascending' | 'desc' | 'descending';

  type Element =
    | TypeSpecifier
    | TupleElementDefinition
    | Expression
    | ExpressionDef
    | FunctionDef
    | ParameterDef
    | OperandDef
    | CaseItem
    | AliasedQuerySource
    | LetClause
    | RelationshipClause
    | SortByItem
    | SortClause
    | ReturnClause
    | AggregateClause
    | IncludeElement
    | CodeSystemDef
    | ValueSetDef
    | CodeDef
    | ConceptDef
    | UsingDef
    | IncludeDef
    | ContextDef
    | Library;
  type TypeSpecifier =
    | NamedTypeSpecifier
    | IntervalTypeSpecifier
    | ListTypeSpecifier
    | TupleTypeSpecifier
    | ChoiceTypeSpecifier;
  type Expression =
    | OperatorExpression
    | ExpressionRef
    | FunctionRef
    | ParameterRef
    | OperandRef
    | IdentifierRef
    | Literal
    | Tuple
    | Instance
    | Interval
    | List
    | If
    | Case
    | Null
    | MinValue
    | MaxValue
    | Filter
    | Sort
    | ForEach
    | Repeat
    | Current
    | Iteration
    | Total
    | AggregateExpression
    | Property
    | Query
    | AliasRef
    | QueryLetRef
    | Retrieve
    | CodeSystemRef
    | ValueSetRef
    | CodeRef
    | ConceptRef
    | Code
    | Concept
    | Quantity
    | Ratio;
  type OperatorExpression =
    | UnaryExpression
    | BinaryExpression
    | TernaryExpression
    | NaryExpression
    | Round
    | Combine
    | Split
    | SplitOnMatches
    | PositionOf
    | LastPositionOf
    | Substring
    | TimeOfDay
    | Today
    | Now
    | Date
    | DateTime
    | Time
    | First
    | Last
    | Slice
    | IndexOf
    | Children
    | Descendents
    | Message
    | InCodeSystem
    | AnyInCodeSystem
    | InValueSet
    | AnyInValueSet;
  type BinaryExpression =
    | And
    | Or
    | Xor
    | Implies
    | CanConvertQuantity
    | ConvertQuantity
    | Equal
    | Equivalent
    | NotEqual
    | Less
    | Greater
    | LessOrEqual
    | GreaterOrEqual
    | Add
    | Subtract
    | Multiply
    | Divide
    | TruncatedDivide
    | Modulo
    | Log
    | Power
    | LowBoundary
    | HighBoundary
    | Indexer
    | StartsWith
    | EndsWith
    | Matches
    | DurationBetween
    | DifferenceBetween
    | SameAs
    | SameOrBefore
    | SameOrAfter
    | Contains
    | ProperContains
    | In
    | ProperIn
    | Includes
    | IncludedIn
    | ProperIncludes
    | ProperIncludedIn
    | Before
    | After
    | Meets
    | MeetsBefore
    | MeetsAfter
    | Overlaps
    | OverlapsBefore
    | OverlapsAfter
    | Starts
    | Ends
    | Collapse
    | Expand
    | Times
    | Subsumes
    | SubsumedBy
    | CalculateAgeAt;
  type UnaryExpression =
    | Not
    | IsNull
    | IsTrue
    | IsFalse
    | Is
    | As
    | Convert
    | CanConvert
    | ToBoolean
    | ConvertsToBoolean
    | ToConcept
    | ConvertsToDate
    | ToDate
    | ConvertsToDateTime
    | ToDateTime
    | ConvertsToDecimal
    | ToDecimal
    | ConvertsToInteger
    | ToInteger
    | ConvertsToLong
    | ToLong
    | ConvertsToQuantity
    | ToQuantity
    | ConvertsToRatio
    | ToRatio
    | ToList
    | ToChars
    | ConvertsToString
    | ToString
    | ConvertsToTime
    | ToTime
    | Ceiling
    | Floor
    | Truncate
    | Abs
    | Negate
    | Ln
    | Exp
    | Successor
    | Predecessor
    | Precision
    | Length
    | Upper
    | Lower
    | DateFrom
    | TimeFrom
    | TimezoneFrom
    | TimezoneOffsetFrom
    | DateTimeComponentFrom
    | PointFrom
    | Width
    | Size
    | Start
    | End
    | Exists
    | Flatten
    | Distinct
    | SingletonFrom
    | CalculateAge;
  type NaryExpression = Coalesce | Concatenate | Union | Intersect | Except;
  type TernaryExpression = ReplaceMatches;
  type AggregateExpression =
    | Aggregate
    | Count
    | Sum
    | Product
    | Min
    | Max
    | Avg
    | GeometricMean
    | Median
    | Mode
    | Variance
    | PopulationVariance
    | StdDev
    | PopulationStdDev
    | AllTrue
    | AnyTrue;
  type RelationshipClause = With | Without;
  type SortByItem = ByDirection | ByColumn | ByExpression;
}

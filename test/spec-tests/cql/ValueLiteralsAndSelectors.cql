library ValueLiteralsAndSelectors version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "Null": Tuple{
  "Null": Tuple{
    expression: null,
    output: null
  }
}

define "Boolean": Tuple{
  "BooleanFalse": Tuple{
    expression: false,
    output: false
  },
  "BooleanTrue": Tuple{
    expression: true,
    output: true
  }
}

define "Integer": Tuple{
  "IntegerZero": Tuple{
    expression: 0,
    output: 0
  },
  "IntegerPosZero": Tuple{
    expression: +0,
    output: 0
  },
  "IntegerNegZero": Tuple{
    expression: -0,
    output: 0
  },
  "IntegerOne": Tuple{
    expression: 1,
    output: 1
  },
  "IntegerPosOne": Tuple{
    expression: +1,
    output: 1
  },
  "IntegerNegOne": Tuple{
    expression: -1,
    output: -1
  },
  "IntegerTwo": Tuple{
    expression: 2,
    output: 2
  },
  "IntegerPosTwo": Tuple{
    expression: +2,
    output: 2
  },
  "IntegerNegTwo": Tuple{
    expression: -2,
    output: -2
  },
  "Integer10Pow9": Tuple{
    expression: Power(10,9),
    output: 1000000000
  },
  "IntegerPos10Pow9": Tuple{
    expression: +Power(10,9),
    output: 1000000000
  },
  "IntegerNeg10Pow9": Tuple{
    expression: -Power(10,9),
    output: -1000000000
  },
  "Integer2Pow31ToZero1IntegerMaxValue": Tuple{
    expression: Power(2,30)-1+Power(2,30),
    output: 2147483647
  },
  "IntegerPos2Pow31ToZero1IntegerMaxValue": Tuple{
    expression: +Power(2,30)-1+Power(2,30),
    output: 2147483647
  },
  "IntegerNeg2Pow31ToZero1": Tuple{
    expression: -Power(2,30)+1-Power(2,30),
    output: -2147483647
  },
  "Integer2Pow31": Tuple{
    expression: 2147483648,
    invalid: true
  },
  "IntegerPos2Pow31": Tuple{
    expression: +2147483648,
    invalid: true
  },
  "IntegerNeg2Pow31IntegerMinValue": Tuple{
    expression: -Power(2,30)-Power(2,30),
    output: -2147483648
  },
  "Integer2Pow31ToInf1": Tuple{
    expression: 2147483649,
    invalid: true
  },
  "IntegerPos2Pow31ToInf1": Tuple{
    expression: +2147483649,
    invalid: true
  },
  "IntegerNeg2Pow31ToInf1": Tuple{
    expression: -2147483649,
    invalid: true
  }
}

define "Decimal": Tuple{
  "DecimalZero": Tuple{
    expression: 0.0,
    output: 0.0
  },
  "DecimalPosZero": Tuple{
    expression: +0.0,
    output: 0.0
  },
  "DecimalNegZero": Tuple{
    expression: -0.0,
    output: 0.0
  },
  "DecimalOne": Tuple{
    expression: 1.0,
    output: 1.0
  },
  "DecimalPosOne": Tuple{
    expression: +1.0,
    output: 1.0
  },
  "DecimalNegOne": Tuple{
    expression: -1.0,
    output: -1.0
  },
  "DecimalTwo": Tuple{
    expression: 2.0,
    output: 2.0
  },
  "DecimalPosTwo": Tuple{
    expression: +2.0,
    output: 2.0
  },
  "DecimalNegTwo": Tuple{
    expression: -2.0,
    output: -2.0
  },
  "Decimal10Pow9": Tuple{
    expression: Power(10.0,9.0),
    output: 1000000000.0
  },
  "DecimalPos10Pow9": Tuple{
    expression: +Power(10.0,9.0),
    output: 1000000000.0
  },
  "DecimalNeg10Pow9": Tuple{
    expression: -Power(10.0,9.0),
    output: -1000000000.0
  },
  "Decimal2Pow31ToZero1": Tuple{
    expression: Power(2.0,30.0)-1+Power(2.0,30.0),
    output: 2147483647.0
  },
  "DecimalPos2Pow31ToZero1": Tuple{
    expression: +Power(2.0,30.0)-1+Power(2.0,30.0),
    output: 2147483647.0
  },
  "DecimalNeg2Pow31ToZero1": Tuple{
    expression: -Power(2.0,30.0)+1.0-Power(2.0,30.0),
    output: -2147483647.0
  },
  "Decimal2Pow31": Tuple{
    skipped: 'Overflows because it thinks it is an integer'
    /*
    expression: Power(2.0,30.0)+Power(2.0,30.0),
    output: 2147483648.0
    */  },
  "DecimalPos2Pow31": Tuple{
    skipped: 'Overflows because it thinks it is an integer'
    /*
    expression: +Power(2.0,30.0)+Power(2.0,30.0),
    output: 2147483648.0
    */  },
  "DecimalNeg2Pow31": Tuple{
    expression: -Power(2.0,30.0)-Power(2.0,30.0),
    output: -2147483648.0
  },
  "Decimal2Pow31ToInf1": Tuple{
    skipped: 'Overflows because it thinks it is an integer'
    /*
    expression: Power(2.0,30.0)+1.0+Power(2.0,30.0),
    output: 2147483649.0
    */  },
  "DecimalPos2Pow31ToInf1": Tuple{
    skipped: 'Overflows because it thinks it is an integer'
    /*
    expression: +Power(2.0,30.0)+1.0+Power(2.0,30.0),
    output: 2147483649.0
    */  },
  "DecimalNeg2Pow31ToInf1": Tuple{
    skipped: 'Underflows because it thinks it is an integer'
    /*
    expression: -Power(2.0,30.0)-1.0-Power(2.0,30.0),
    output: -2147483649.0
    */  },
  "DecimalZeroStep": Tuple{
    expression: 0.00000000,
    output: 0.00000000
  },
  "DecimalPosZeroStep": Tuple{
    expression: +0.00000000,
    output: 0.00000000
  },
  "DecimalNegZeroStep": Tuple{
    expression: -0.00000000,
    output: 0.00000000
  },
  "DecimalOneStep": Tuple{
    expression: Power(10,-8),
    output: 0.00000001
  },
  "DecimalPosOneStep": Tuple{
    expression: +Power(10,-8),
    output: 0.00000001
  },
  "DecimalNegOneStep": Tuple{
    expression: -Power(10,-8),
    output: -0.00000001
  },
  "DecimalTwoStep": Tuple{
    expression: 2.0*Power(10,-8),
    output: 0.00000002
  },
  "DecimalPosTwoStep": Tuple{
    expression: +2.0*Power(10,-8),
    output: 0.00000002
  },
  "DecimalNegTwoStep": Tuple{
    expression: -2.0*Power(10,-8),
    output: -0.00000002
  },
  "DecimalTenStep": Tuple{
    expression: Power(10,-7),
    output: 0.0000001
  },
  "DecimalPosTenStep": Tuple{
    expression: +Power(10,-7),
    output: 0.0000001
  },
  "DecimalNegTenStep": Tuple{
    expression: -Power(10,-7),
    output: -0.0000001
  },
  "DecimalTenthStep": Tuple{
    expression: 0.000000001,
    invalid: true
  },
  "DecimalPosTenthStep": Tuple{
    expression: +0.000000001,
    invalid: true
  },
  "DecimalNegTenthStep": Tuple{
    expression: -0.000000001,
    invalid: true
  },
  "Decimal10Pow28ToZeroOneStepDecimalMaxValue": Tuple{
    skipped: 'Wrong answer (null vs big number)'
    /*
    expression: 10*1000000000000000000000000000.00000000-0.00000001,
    output: 9999999999999999999999999999.99999999
    */  },
  "DecimalPos10Pow28ToZeroOneStepDecimalMaxValue": Tuple{
    skipped: 'Wrong answer (null vs big number)'
    /*
    expression: +10*1000000000000000000000000000.00000000-0.00000001,
    output: 9999999999999999999999999999.99999999
    */  },
  "DecimalNeg10Pow28ToZeroOneStepDecimalMinValue": Tuple{
    skipped: 'Wrong answer (null vs big number)'
    /*
    expression: -10*1000000000000000000000000000.00000000+0.00000001,
    output: -9999999999999999999999999999.99999999
    */  },
  "Decimal10Pow28": Tuple{
    expression: 10000000000000000000000000000.00000000,
    invalid: true
  },
  "DecimalPos10Pow28": Tuple{
    expression: +10000000000000000000000000000.00000000,
    invalid: true
  },
  "DecimalNeg10Pow28": Tuple{
    expression: -10000000000000000000000000000.00000000,
    invalid: true
  }
}

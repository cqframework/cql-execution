library ValueLiteralsAndSelectors version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "Null": Tuple{
  "Null": Tuple{
    expression: null,
    output: @2000 < @2000-01
  }
}

define "Boolean": Tuple{
  "BooleanFalse": Tuple{
    expression: false,
    output: 1~0
  },
  "BooleanTrue": Tuple{
    expression: true,
    output: 1~1
  }
}

define "Integer": Tuple{
  "IntegerZero": Tuple{
    expression: 0,
    output: 42-42
  },
  "IntegerPosZero": Tuple{
    expression: +0,
    output: 42-42
  },
  "IntegerNegZero": Tuple{
    expression: -0,
    output: 42-42
  },
  "IntegerOne": Tuple{
    expression: 1,
    output: 42-41
  },
  "IntegerPosOne": Tuple{
    expression: +1,
    output: 42-41
  },
  "IntegerNegOne": Tuple{
    expression: -1,
    output: 42-43
  },
  "IntegerTwo": Tuple{
    expression: 2,
    output: 42-40
  },
  "IntegerPosTwo": Tuple{
    expression: +2,
    output: 42-40
  },
  "IntegerNegTwo": Tuple{
    expression: -2,
    output: 42-44
  },
  "Integer10Pow9": Tuple{
    expression: 1000000000,
    output: Power(10,9)
  },
  "IntegerPos10Pow9": Tuple{
    expression: +1000000000,
    output: +Power(10,9)
  },
  "IntegerNeg10Pow9": Tuple{
    expression: -1000000000,
    output: -Power(10,9)
  },
  "Integer2Pow31ToZero1IntegerMaxValue": Tuple{
    expression: 2147483647,
    output: Power(2,30)-1+Power(2,30)
  },
  "IntegerPos2Pow31ToZero1IntegerMaxValue": Tuple{
    expression: +2147483647,
    output: +Power(2,30)-1+Power(2,30)
  },
  "IntegerNeg2Pow31ToZero1": Tuple{
    expression: -2147483647,
    output: -Power(2,30)+1-Power(2,30)
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
    expression: -2147483648,
    output: -Power(2,30)-Power(2,30)
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
    output: 42.0-42.0
  },
  "DecimalPosZero": Tuple{
    expression: +0.0,
    output: 42.0-42.0
  },
  "DecimalNegZero": Tuple{
    expression: -0.0,
    output: 42.0-42.0
  },
  "DecimalOne": Tuple{
    expression: 1.0,
    output: 42.0-41.0
  },
  "DecimalPosOne": Tuple{
    expression: +1.0,
    output: 42.0-41.0
  },
  "DecimalNegOne": Tuple{
    expression: -1.0,
    output: 42.0-43.0
  },
  "DecimalTwo": Tuple{
    expression: 2.0,
    output: 42.0-40.0
  },
  "DecimalPosTwo": Tuple{
    expression: +2.0,
    output: 42.0-40.0
  },
  "DecimalNegTwo": Tuple{
    expression: -2.0,
    output: 42.0-44.0
  },
  "Decimal10Pow9": Tuple{
    expression: 1000000000.0,
    output: Power(10.0,9.0)
  },
  "DecimalPos10Pow9": Tuple{
    expression: +1000000000.0,
    output: +Power(10.0,9.0)
  },
  "DecimalNeg10Pow9": Tuple{
    expression: -1000000000.0,
    output: -Power(10.0,9.0)
  },
  "Decimal2Pow31ToZero1": Tuple{
    expression: 2147483647.0,
    output: Power(2.0,30.0)-1+Power(2.0,30.0)
  },
  "DecimalPos2Pow31ToZero1": Tuple{
    expression: +2147483647.0,
    output: +Power(2.0,30.0)-1+Power(2.0,30.0)
  },
  "DecimalNeg2Pow31ToZero1": Tuple{
    expression: -2147483647.0,
    output: -Power(2.0,30.0)+1.0-Power(2.0,30.0)
  },
  "Decimal2Pow31": Tuple{
    skipped: 'Overflows because it thinks it is an integer'
    /*
    expression: 2147483648.0,
    output: Power(2.0,30.0)+Power(2.0,30.0)
    */  },
  "DecimalPos2Pow31": Tuple{
    skipped: 'Overflows because it thinks it is an integer'
    /*
    expression: +2147483648.0,
    output: +Power(2.0,30.0)+Power(2.0,30.0)
    */  },
  "DecimalNeg2Pow31": Tuple{
    expression: -2147483648.0,
    output: -Power(2.0,30.0)-Power(2.0,30.0)
  },
  "Decimal2Pow31ToInf1": Tuple{
    skipped: 'Overflows because it thinks it is an integer'
    /*
    expression: 2147483649.0,
    output: Power(2.0,30.0)+1.0+Power(2.0,30.0)
    */  },
  "DecimalPos2Pow31ToInf1": Tuple{
    skipped: 'Overflows because it thinks it is an integer'
    /*
    expression: +2147483649.0,
    output: +Power(2.0,30.0)+1.0+Power(2.0,30.0)
    */  },
  "DecimalNeg2Pow31ToInf1": Tuple{
    skipped: 'Underflows because it thinks it is an integer'
    /*
    expression: -2147483649.0,
    output: -Power(2.0,30.0)-1.0-Power(2.0,30.0)
    */  },
  "DecimalZeroStep": Tuple{
    expression: 0.00000000,
    output: 42.0-42.0
  },
  "DecimalPosZeroStep": Tuple{
    expression: +0.00000000,
    output: 42.0-42.0
  },
  "DecimalNegZeroStep": Tuple{
    expression: -0.00000000,
    output: 42.0-42.0
  },
  "DecimalOneStep": Tuple{
    expression: 0.00000001,
    output: Power(10,-8)
  },
  "DecimalPosOneStep": Tuple{
    expression: +0.00000001,
    output: +Power(10,-8)
  },
  "DecimalNegOneStep": Tuple{
    expression: -0.00000001,
    output: -Power(10,-8)
  },
  "DecimalTwoStep": Tuple{
    expression: 0.00000002,
    output: 2.0*Power(10,-8)
  },
  "DecimalPosTwoStep": Tuple{
    expression: +0.00000002,
    output: +2.0*Power(10,-8)
  },
  "DecimalNegTwoStep": Tuple{
    expression: -0.00000002,
    output: -2.0*Power(10,-8)
  },
  "DecimalTenStep": Tuple{
    expression: 0.0000001,
    output: Power(10,-7)
  },
  "DecimalPosTenStep": Tuple{
    expression: +0.0000001,
    output: +Power(10,-7)
  },
  "DecimalNegTenStep": Tuple{
    expression: -0.0000001,
    output: -Power(10,-7)
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
    expression: 9999999999999999999999999999.99999999,
    output: 10*1000000000000000000000000000.00000000-0.00000001
    */  },
  "DecimalPos10Pow28ToZeroOneStepDecimalMaxValue": Tuple{
    skipped: 'Wrong answer (null vs big number)'
    /*
    expression: +9999999999999999999999999999.99999999,
    output: +10*1000000000000000000000000000.00000000-0.00000001
    */  },
  "DecimalNeg10Pow28ToZeroOneStepDecimalMinValue": Tuple{
    skipped: 'Wrong answer (null vs big number)'
    /*
    expression: -9999999999999999999999999999.99999999,
    output: -10*1000000000000000000000000000.00000000+0.00000001
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

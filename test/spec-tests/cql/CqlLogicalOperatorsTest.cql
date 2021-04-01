library CqlLogicalOperatorsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "And": Tuple{
  "TrueAndTrue": Tuple{
    expression: true and true,
    output: true
  },
  "TrueAndFalse": Tuple{
    expression: true and false,
    output: false
  },
  "TrueAndNull": Tuple{
    expression: true and null,
    output: null
  },
  "FalseAndTrue": Tuple{
    expression: false and true,
    output: false
  },
  "FalseAndFalse": Tuple{
    expression: false and false,
    output: false
  },
  "FalseAndNull": Tuple{
    expression: false and null,
    output: false
  },
  "NullAndTrue": Tuple{
    expression: null and true,
    output: null
  },
  "NullAndFalse": Tuple{
    expression: null and false,
    output: false
  },
  "NullAndNull": Tuple{
    expression: null and null,
    output: null
  }
}

define "Implies": Tuple{
  "TrueImpliesTrue": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Implies with signature (System.Boolean,System.Boolean).'
    /*
    expression: true implies true,
    output: true
    */  },
  "TrueImpliesFalse": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Implies with signature (System.Boolean,System.Boolean).'
    /*
    expression: true implies false,
    output: false
    */  },
  "TrueImpliesNull": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Implies with signature (System.Boolean,System.Any).'
    /*
    expression: true implies null,
    output: null
    */  },
  "FalseImpliesTrue": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Implies with signature (System.Boolean,System.Boolean).'
    /*
    expression: false implies true,
    output: true
    */  },
  "FalseImpliesFalse": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Implies with signature (System.Boolean,System.Boolean).'
    /*
    expression: false implies false,
    output: true
    */  },
  "FalseImpliesNull": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Implies with signature (System.Boolean,System.Any).'
    /*
    expression: false implies null,
    output: true
    */  },
  "NullImpliesTrue": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Implies with signature (System.Any,System.Boolean).'
    /*
    expression: null implies true,
    output: true
    */  },
  "NullImpliesFalse": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Implies with signature (System.Any,System.Boolean).'
    /*
    expression: null implies false,
    output: null
    */  },
  "NullImpliesNull": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Implies with signature (System.Any,System.Any).'
    /*
    expression: null implies null,
    output: null
    */  }
}

define "Not": Tuple{
  "NotTrue": Tuple{
    expression: not true,
    output: false
  },
  "NotFalse": Tuple{
    expression: not false,
    output: true
  },
  "NotNull": Tuple{
    expression: not null,
    output: null
  }
}

define "Or": Tuple{
  "TrueOrTrue": Tuple{
    expression: true or true,
    output: true
  },
  "TrueOrFalse": Tuple{
    expression: true or false,
    output: true
  },
  "TrueOrNull": Tuple{
    expression: true or null,
    output: true
  },
  "FalseOrTrue": Tuple{
    expression: false or true,
    output: true
  },
  "FalseOrFalse": Tuple{
    expression: false or false,
    output: false
  },
  "FalseOrNull": Tuple{
    expression: false or null,
    output: null
  },
  "NullOrTrue": Tuple{
    expression: null or true,
    output: true
  },
  "NullOrFalse": Tuple{
    expression: null or false,
    output: null
  },
  "NullOrNull": Tuple{
    expression: null or null,
    output: null
  }
}

define "Xor": Tuple{
  "TrueXorTrue": Tuple{
    expression: true xor true,
    output: false
  },
  "TrueXorFalse": Tuple{
    expression: true xor false,
    output: true
  },
  "TrueXorNull": Tuple{
    expression: true xor null,
    output: null
  },
  "FalseXorTrue": Tuple{
    expression: false xor true,
    output: true
  },
  "FalseXorFalse": Tuple{
    expression: false xor false,
    output: false
  },
  "FalseXorNull": Tuple{
    expression: false xor null,
    output: null
  },
  "NullXorTrue": Tuple{
    expression: null xor true,
    output: null
  },
  "NullXorFalse": Tuple{
    expression: null xor false,
    output: null
  },
  "NullXorNull": Tuple{
    expression: null xor null,
    output: null
  }
}

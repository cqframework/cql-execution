library CqlConditionalOperatorsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "if-then-else": Tuple{
  "IfTrue1": Tuple{
    expression: if 10 > 5 then 5 else 10,
    output: 5
  },
  "IfFalse1": Tuple{
    expression: if 10 = 5 then 10 + 5 else 10 - 5,
    output: 5
  },
  "IfNull1": Tuple{
    expression: if 10 = null then 5 else 10,
    output: 10
  }
}

define "standard case": Tuple{
  "StandardCase1": Tuple{
    expression: case
					when 10 > 5 then 5
					when 5 > 10 then 10
					else null
				end,
    output: 5
  },
  "StandardCase2": Tuple{
    expression: case
					when 5 > 10 then 5 + 10
					when 5 = 10 then 5
					else 10 - 5
				end,
    output: 5
  },
  "StandardCase3": Tuple{
    expression: case
					when null ~ 10 then null + 10
					when null ~ 5 then 5
					else 5 + 10
				end,
    output: 15
  }
}

define "selected case": Tuple{
  "SelectedCase1": Tuple{
    expression: case 5
					when 5 then 12
					when 10 then 10 + 5
					else 10 - 5
				end,
    output: 12
  },
  "SelectedCase2": Tuple{
    expression: case 10
					when 5 then 12
					when 10 then 10 + 5
					else 10 - 5
				end,
    output: 15
  },
  "SelectedCase3": Tuple{
    expression: case 10 + 5
					when 5 then 12
					when 10 then 10 + 5
					else 10 - 5
				end,
    output: 5
  }
}

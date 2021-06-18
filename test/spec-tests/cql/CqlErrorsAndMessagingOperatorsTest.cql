library CqlErrorsAndMessagingOperatorsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "Group1": Tuple{
  "TestMessageInfo": Tuple{
    expression: Message(1, true, '100', 'Message', 'Test Message'),
    output: 1
  },
  "TestMessageWarn": Tuple{
    expression: Message(2, true, '200', 'Warning', 'You have been warned!'),
    output: 2
  },
  "TestMessageTrace": Tuple{
    expression: Message({3, 4, 5}, true, '300', 'Trace', 'This is a trace'),
    output: {3, 4, 5}
  },
  "TestMessageError": Tuple{
    expression: Message(3 + 1, true, '400', 'Error', 'This is an error!'),
    invalid: true
  }
}

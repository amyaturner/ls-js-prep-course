/* Which of the following values are valid keys for an object?

1
'1'
undefined
'hello world'
true
'true'



ANSWER:
'1'
'hello 'world'
'true'

INCORRECT...


SOLUTION:
  All the listed values are valid keys.
  Note, though, that JavaScript coerces the
  non-string key values to strings.
  Given the listed values, 1 and '1' represent the same key,
  as do true and 'true'. For example:

> let myObj = {}
> myObj[true] = 'hello'
> myObj['true'] = 'world'
> myObj[true]
= 'world'

*/
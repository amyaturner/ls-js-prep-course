/* Which of the following values are primitive values?
Which are objects? Which are neither?

"foo"
3.1415
[ 'a', 'b', 'c' ]
false
foo
function bar() { return "bar"; }
undefined
{ a: 1, b: 2 }

ANSWER:
Primitive:
-  'foo'
-  3.1415
-  false
-  undefined

Objects:
-  [ 'a', 'b', 'c' ]
-  { a: 1, b: 2 }

Neither Primitive nor Object:
-  foo  (this is a variable or identifier)
-  function bar() { return "bar"; }    (this is a function)


Almost correct, except...

SOLUTION:
  function bar() { return "bar"; } => functions are, in fact, objects

*/
/* How many primitive values are there
in the following expression?
Identify them. How many objects are there
in the expression? Identify those objects.

[1, 2, ["a", ["b", false]], null, {}]

ANSWER:
6 primitive:
1, 2, "a", "b", false, null

3 objects:
["a", ["b", false]], {}, and ["b", false]


SOLUTION:
Almost correct, but I forgot the outermost object, which is:
[1, 2, ["a", ["b", false]], null, {}]
so there are 4 objects total.
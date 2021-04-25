/*
Add a qux property with value 3 to the myObj object
that we created in the previous exercise.
*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

/* Now, examine the following code snippets:
Without running this code, can you determine whether
these two snippets produce the same output? Why?
*/

// SNIPPET 1:
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// SNIPPET 2:
for (let key in myObj) {
  console.log(key);
}

/* ANSWER: No. A for/in object loop includes keys that
are in an object's parent/prototype.
Whereas, the static method, Object.keys(), does NOT include the
keys of an object's parent/prototype.

BONUS:
How can we make Snippet 2 output the same as Snippet 1?
*/

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}

// CORRECT
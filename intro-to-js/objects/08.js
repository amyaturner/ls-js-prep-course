function copyObj(originalObj, keysArr = Object.keys(originalObj)) {
  let newObj = {};

  keysArr.forEach(key => {
    return newObj[key] = originalObj[key];
  });

  return newObj;
}

let myObj = {
  foo: 1,
  bar: 2,
  qux: 3
};

let hisObj = copyObj(myObj);
console.log(hisObj);

let herObj = copyObj(myObj, ['foo', 'bar']);
console.log(herObj);

let theirObj = copyObj(myObj, ['qux']);
console.log(theirObj);



// CORRECT,
// and more elegant than provided solution b/c I used a 'default perameter' instead:

/* SOLUTION:

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

*/
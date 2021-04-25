let person = { name: "Bob", age: 65, profession: "carpenter" };
let amy = Object.create(person);

console.log(person);
console.log(amy.name);
console.log(amy);

amy.name = "Amy";
amy.age = 39;

console.log(person);
console.log(amy);

amy.weight = "135 lbs";

console.log(person);
console.log(amy);
console.log(person.weight);

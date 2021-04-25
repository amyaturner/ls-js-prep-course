  let person = {
    name: 'Bob',
    age: 30,
    height: '6 ft'
  };

  let amy = Object.create(person);

  amy.weight = "135 lbs";

  for (let prop in amy) {
    if (amy.hasOwnProperty(prop)) {
      console.log(amy[prop]);
    }
  }

  console.log("*******");
  
  let personKeys = Object.keys(amy);
  personKeys.forEach(key => {
    console.log(amy[key])
  }); 
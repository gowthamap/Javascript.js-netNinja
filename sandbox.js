// callbacks & foreach

// const myFunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(function (value) {
//   // do something
//   console.log(value);
// });

// callbacks & foreach

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

const logPerson = (person, index) => {
  console.log(`${index} - heelo ${person}`);
};

people.forEach(logPerson);

// people.forEach((person, index) => {
//   console.log(index, person);
// });

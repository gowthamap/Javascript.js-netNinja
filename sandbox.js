// variables & block scope
const age = 30;
// age = 50;

// if (true) {
//   const age = 40;
//   const names = "shaun";
//   // console.log("inside 1st code block: ", age, names);

//   if (true) {
//     const age = 50;
//     // console.log("inside 2nd code bloc: ", age);
//     var test = "hello";
//   }
// }

// // console.log("outside code block: ", age, names, test);

// // practise arrow functions

// const greet = () => "hello, world";
// const result = greet();
// console.log(result);

// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total = products[i] + products[i] * tax;
//   }
//   return total;
// };

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = products[i] + products[i] * tax;
  }
  return total;
}

console.log(bill([10, 15, 30], 0.2));

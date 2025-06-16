// variables & block scope
const age = 30;
// age = 50;

if (true) {
  const age = 40;
  const names = "shaun";
  console.log("inside 1st code block: ", age, names);

  if (true) {
    const age = 50;
    console.log("inside 2nd code bloc: ", age);
    var test = "hello";
  }
}

console.log("outside code block: ", age, names, test);

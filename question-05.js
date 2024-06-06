const numbers = [4, "hello", 3, true, "Uki", 5];

const newArray = numbers.filter((value) => typeof value === "number");

const outcome = newArray.reduce((sum, num) => sum + num ** 2, 0);

console.log(outcome);

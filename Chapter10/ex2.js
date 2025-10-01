let num1 = [1, 2, 3, 4];
let num2 = [5, 6, 7, 8];
let num3 = [...num1, ...num2];
console.log(num3.reverse());

console.log(Math.max(...num3));
console.log(Math.min(...num3));
console.log(num3.toString());
console.log(num3.join("*"));

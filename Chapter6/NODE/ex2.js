let i = 0;
let num1 = 0;
let num2 = 0;

do {
  let total = i + 1;
  console.log(total); // แสดงเลข 1-n

  if (total % 2 === 0) {
    num1 += total; // บวกเลขคู่
  } else {
    num2 += total; // บวกเลขคี่
  }

  i++;
} while (i < 5);

console.log(`ผลรวมเลขคู่ : ${num1}`);
console.log(`ผลรวมเลขคี่ : ${num2}`);

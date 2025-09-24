console.clear();
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("กรุณาป้อนตัวเลขเพื่อหาตัวประกอบจุ้บๆ : ", function (x) {
  let num = Number(x);
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      process.stdout.write(i.toString());
      if (i < num) process.stdout.write(",");
    }
  }
  rl.close();
  console.log(`\nผลรวมตัวประกอบของ ${num} คือ ${sum}`);
});

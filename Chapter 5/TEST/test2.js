const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
rl.question("ป้อนเลขจำนวนที่ 1 : ", (y) => {
  rl.question("ป้อนเลขจำนวนที่ 2 : ", (x) => {
    const num1 = parseInt(y);
    const num2 = parseInt(x);
    let result = 0;

    if (num1 > num2) {
      result = num1 + num2;
    } else if (num1 < num2) {
      result = num1 - num2;
    } else {
      result = num1 * num2;
    }

    console.log(`ผลลัพธ์ = ${result}`);

    rl.close();
  });
});

// ถ้าตัวเลขตัวแรกมีค่ามากกว่าตัวเลขตัวที่สอง  ให้ทำการแสดงผลการบวกของตัวเลขทั้ง 2 จำนวน
// ถ้าตัวเลขตัวแรกมีค่าน้อยกว่าตัวเลขตัวที่สอง  ให้ทำการแสดงผลการลบของตัวเลขทั้ง 2 จำนวน
// ถ้าตัวเลขทั้งสองมีค่าเท่ากัน ให้ทำการแสดงผลการคูณของตัวเลขทั้ง 2 จำนวน

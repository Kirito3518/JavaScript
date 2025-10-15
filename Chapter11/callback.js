function cal(x, y, callback) {
  console.log(`กำลังคำนวณ ${x} + ${y}`);
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
    console.log("จบการทำงาน");
  }, 3000);
}

function display(result) {
  console.log(`ผลลัพธ์คือ ${result}`);
}

cal(100, 200, display);

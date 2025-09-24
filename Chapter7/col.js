const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("ป้อนจำนวนแถว : ", function (x) {
  rl.question("ป้อนจำนวนคอลัม : ", function (y) {
    const row = parseInt(x);
    const col = parseInt(y);
    for (let i = 1; i <= row; i++) {
      let row = "";
      for (let j = 1; j <= col; j++) {
        row += i * j;
        if (j < col) row += "\t";
      }
      console.log(row);
    }
    rl.close();
  });
});

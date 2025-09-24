const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("ป้อนเลขฐาน : ", function (x) {
  let star = parseInt(x);
  for (let i = 1; i <= star; i++) {
    for (let j = 1; j <= i; j++) process.stdout.write("\t*");
    console.log();
  }
  rl.close();
});

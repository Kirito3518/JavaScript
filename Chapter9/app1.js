const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function inchTocm(inch) {
  return inch * 2.54;
}

rl.question("รับค่าเป็นระยะทางในหน่วยนิ้ว (inch) :", function (x) {
  let sum = inchTocm(x);
  console.log(`${x} นิ้ว มีค่าเท่ากับ ${sum} เซนติเมตร`);
  //   console.log(inchTocm(x));
  rl.close();
});

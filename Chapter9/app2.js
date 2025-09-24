const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function evaluateScore(score) {
  if (score >= 80) {
    return "ระดับผลการประเมิน : ดีเยี่ยม\n";
  } else if (score >= 70) {
    return "ระดับผลการประเมิน : ดี\n";
  } else if (score >= 50) {
    return "ระดับผลการประเมิน : ผ่าน\n";
  } else {
    return "ระดับผลการประเมิน : ไม่ผ่าน\n";
  }
}

rl.question("ป้อนค่าระดับคะแนน :", function (x) {
  const score = parseFloat(x); // แปลงจาก string > float
  console.log(evaluateScore(score));
  rl.close();
});

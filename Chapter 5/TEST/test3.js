const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
rl.question("ป้อนตัวเลขเดือน :", (input) => {
  const month = parseInt(input);

  switch (month) {
    case 1:
      console.log("มกราคม");
      break;
    case 2:
      console.log("กุมภาพันธ์");
      break;
    case 3:
      console.log("มีนาคม");
      break;
    case 4:
      console.log("เมษายน");
      break;
    case 5:
      console.log("พฤษภาคม");
      break;
    case 6:
      console.log("มิถุนายน");
      break;
    case 7:
      console.log("กรกฎาคม");
      break;
    case 8:
      console.log("สิงหาคม");
      break;
    case 9:
      console.log("กันยายน");
      break;
    case 10:
      console.log("ตุลาคม");
      break;
    case 11:
      console.log("พฤศจิกายน");
      break;
    case 12:
      console.log("ธันวาคม");
      break;
    default:
      console.log("กรุณาป้อนตัวเลขระหว่าง 1 ถึง 12");
  }

  rl.close();
});

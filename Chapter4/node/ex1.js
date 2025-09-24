const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ป้อนจำนวนเต็ม : ", num => {
    num = parseInt(num);

    result = num ** 2;
    console.log(`ผลลัพธ์ : ${result}`);

    rl.close();
});
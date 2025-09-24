const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("รับค่าความกว้าง : ", num1 => {
    rl.question("รับค่าความยาว : ", num2 => {

        console.log(`ผลลัพธ์ : ${num1*num2} ตารางเซนติเมตร`);
        rl.close();
    });
});
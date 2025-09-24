const readline = require("readline");
    
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
rl.question("ป้อนระยะทาง (กิโลเมตร) : ", distance => {
    distance = parseFloat(distance);
    m = parentInt(distance * 1000);
    cm = parseInt(distance * 100000);
    console.log(`เมตร : ${m}\nเซนติเมตร : ${cm}`);
    rl.close();

});
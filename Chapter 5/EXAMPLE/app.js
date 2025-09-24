const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.clear()

rl.question('Input Number : ', num => {
    if(num == 1)
        console.log("หนึ่ง")
        else if(num == 2)
        console.log("สอง") 
        else if(num == 3)
        console.log("สาม")
        else if(num == 4)
        console.log("สี่")
        else if(num == 5)
        console.log("ห้า")
    else 
    console.log("ไม่ทราบ")
rl.close()
})


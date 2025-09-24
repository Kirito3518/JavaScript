let Student = {
    id: 6840214118,
    fname: "Bancha",
    lname: "Suphi",
    contact: {
        mail: "krypton.1190@gmail.com",
        phone: "066-014-2633"
    }
}

console.log(`รหัส : ${Student.id}\nชื่อ : ${Student.fname}\nนามสกุล : ${Student.lname}\nชื่อ-นามสกุล : ${Student.fname} ${Student.lname}\nอีเมล : ${Student.contact.mail}\nเบอร์โทร : ${Student.contact.phone}`)
console.log(Student) //แสดงผลเป็น json
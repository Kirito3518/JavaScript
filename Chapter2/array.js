let numbers = [10, 20, 30, 40, 50];

let colors = [
    "Red",
    "Blue", 
    "Yellow",
    "Green"  
];

console.log(numbers[0] + numbers[4]);  // 10 + 50 = 60

// วนลูป array colors จากตัวสุดท้ายไปยังตัวแรก
for(let i = colors.length - 1; i >= 0; i--) {
    // เริ่มจาก colors.length - 1 ตำแหน่งสุดท้ายของ colors
    // ในแต่ละรอบของลูป จะลดค่า i ลงทีละ 1 จนกว่าจะถึง index 0
    console.log(colors[i]);  // แสดงสี: Green, Yellow, Blue, Red
}

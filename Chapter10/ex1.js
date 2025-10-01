// ฟังก์ชัน fullname: รวมคำนำหน้า ชื่อ และนามสกุลเข้าเป็นข้อความเดียว
const fullname = (prefix, fname, lname) =>
  `ชื่อ-นามสกุล : ${prefix} ${fname} ${lname}`;

console.log(fullname("นาย", "บัญชา", "สุภี")); // แสดงผล: ชื่อ-นามสกุล : นาย บัญชา สุภี

// ฟังก์ชัน getMax: หาค่ามากที่สุดจากตัวเลข 3 ตัว
const getMax = (a, b, c) => {
  // return Math.max(a, b, c); // วิธีที่ง่ายกว่า
  if (a < b && b > c) {
    return b;
  } else if (b < c && c > a) {
    return c;
  } else {
    return a;
  }
};
console.log(getMax(300, 605, 90)); // แสดงผล: 605

// ฟังก์ชัน getMin: หาค่าน้อยที่สุดจากตัวเลข 3 ตัว
const getMin = (a, b, c) => {
  // return Math.min(a, b, c); // วิธีที่ง่ายกว่า
  if (a < b && c > a) {
    return a;
  } else if (b < c && a > b) {
    return b;
  } else {
    return c;
  }
};
console.log(getMin(30, 605, 90)); // แสดงผล: 30

// ฟังก์ชัน getSum: หาผลรวมของเลขตั้งแต่ 1 ถึง a
const getSum = (a) => {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i; // บวกค่า i เข้าไปใน sum ทีละรอบ
  }
  return sum; // ผลรวมทั้งหมด
};
console.log(getSum(5)); // แสดงผล: 15 (1+2+3+4+5)

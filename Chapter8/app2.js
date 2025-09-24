let n = [-1, 2, 3, -4, 5, 6, -7, 8, -9];
let count = 0;
let sum = 0;

for (let i = 0; i < n.length; i++) {
  if (n[i] > 0) {
    sum += n[i];
    count++;
  }
}

let average = sum / count;
console.log(average);
// 2. จงเขียนโปรแกรมหาค่าเฉลี่ยของจำนวนเต็มของสมาชิกตัวแปรแถวลำดับต่อไปนี้

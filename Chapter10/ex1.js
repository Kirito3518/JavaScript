fullname = (prefix, fname, lname) =>
  `ชื่อ-นามสกุล : ${prefix} ${fname} ${lname}`;

console.log(fullname("นาย", "บัญชา", "สุภี"));

// GET MAX FUNCTION
getmax = (a, b, c) => {
  if (a < b && b > c) {
    return b;
  } else if (b < c && c > a) {
    return c;
  } else {
    return a;
  }
};

const getMin = (a, b, c) => {
  // return Math.min(a, b, c);
  if (a < b && c > a) {
    return a;
  } else if (b < c && a > b) {
    return b;
  } else {
    return c;
  }
};

const getSum = (a) => {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
};

console.log(getmax(300, 605, 90));
console.log(getMin(30, 605, 90));
console.log(getSum(5));

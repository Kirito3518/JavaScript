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

console.log(getmax(300, 605, 90));

fullname = (prefix, fname, lname) =>
  `ชื่อ-นามสกุล : ${prefix} ${fname} ${lname}`;

console.log(fullname("นาย", "บัญชา", "สุภี"));

// GET MAX FUNCTION
getmax = (a, b) => {
  if (a < b) {
    return b;
  } else {
    return a;
  }
};

console.log(getmax(30, 20));

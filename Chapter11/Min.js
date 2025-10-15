function min(x, y, z) {
  return new Promise((resolve, reject) => {
    if ([x, y, z].some((num) => typeof num !== "number")) {
      reject("ใส่เฉพาะตัวเลขเท่านั้น");
    } else {
      const result = Math.min(x, y, z);
      resolve(`ค่าน้อยที่สุดคือ ${result}`);
    }
  });
}

min(5, 15, 3)
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("จบการทำงาน");
  });

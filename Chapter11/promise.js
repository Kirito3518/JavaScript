function max(x, y) {
  return new Promise((resolve, reject) => {
    if (x > y) {
      resolve(`${x} มาค่ามากกว่า ${y} จริง`);
    } else {
      reject(`${x} มาค่ามากกว่า ${y} ไม่จริง`);
    }
  });
}

max(30, 10)
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("จบการทำงาน");
  });

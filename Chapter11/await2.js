function max(x, y) {
  return new Promise(function (resolve, reject) {
    console.log(`กำลังตรวจสอบค่า ${x} มีค่ามากกว่า ${y} จริงหรือไม่`);
    setTimeout(() => {
      if (x > y) {
        resolve(`${x} มีค่ามากกว่า ${y}`);
      } else {
        reject(`${x} มีค่าน้อยกว่า ${y}`);
      }
    }, 3000);
  });
}

async function start() {
  await max(30, 20)
    .then((result) => {
      console.log(result);
    })
    .catch((result) => {
      console.log(result);
    })
    .finally(() => {
      console.log("จบการทำงาน");
    });
}

start();

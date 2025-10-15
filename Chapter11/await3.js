function ListNum(x) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(`ลำดับการทำงาน : ${x}`);
    }, 1000);
  });
}

async function start() {
  console.log(await ListNum(1));
  console.log(await ListNum(2));
  console.log(await ListNum(3));
  console.log(await ListNum(4));
  console.log(await ListNum(5));
}

start();

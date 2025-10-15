async function say(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name != "") {
        resolve(`สวัสดีคุณ ${name}!`);
      } else {
        reject("ไม่พบข้อมูล");
      }
    }, 1000);
  });
}

async function run() {
  await say("บัญชา")
    .then((result) => {
      console.log(result);
    })
    .catch((result) => {
      console.log(result);
    })
    .finally(() => {
      console.log("............");
    });
}
run();

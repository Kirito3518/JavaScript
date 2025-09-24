const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ohhhh(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

function ahhhhh(rows) {
  for (let i = rows; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

rl.question(
  "คุณต้องการพิมพ์รูปแบบไหน? (1 = ปกติ, 2 = กลับหัว): ",
  function (choice) {
    if (choice !== 1 && choice !== 2) {
      rl.close;
    } else {
      rl.question("ใส่จำนวนแถว: ", function (rows) {
        rows = parseInt(rows);

        if (isNaN(rows) || rows <= 0) {
          console.log("ใส่จำนวนแถวที่มากกว่า 0");
        } else {
          if (choice === "1") {
            ohhhh(rows);
          } else if (choice === "2") {
            ahhhhh(rows);
          }
        }

        rl.close();
      });
    }
  }
);

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     row += "-";
//   }
//   for (let x = 1; x <= 2 * i - 1; x++) {
//     row += "*";
//   }

//   console.log(row);
// }

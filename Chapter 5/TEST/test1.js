const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();

rl.question("ความเร็วลม (mph) : ", (x) => {
  const mph = parseInt(x);

  if (mph <= 74) console.log(`ระดับความแรงต่ำกว่าเกณฑ์`);
  else if (mph <= 95) console.log(`ความเร็ว ${mph} ระดับความแรง 1`);
  else if (mph <= 110) console.log(`ความเร็ว ${mph} ระดับความแรง 2`);
  else if (mph <= 130) console.log(`ความเร็ว ${mph} ระดับความแรง 3`);
  else if (mph <= 155) console.log(`ความเร็ว ${mph} ระดับความแรง 4`);
  else console.log(`ความเร็ว ${mph} ระดับความแรง 5`);
  rl.close();
});

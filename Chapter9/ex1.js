function Line(line, num) {
  for (let i = 0; i < num; i++) process.stdout.write(line);
  console.log();
}

function sum(x, y) {
  return x + y;
}

console.log(sum(5, 5));

Line("!", 8);

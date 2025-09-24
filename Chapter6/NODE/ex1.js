let i = 0;
let sum = 0;

while (i < 10) {
  console.log(i);
  if (i % 2 != 0) sum += i;
  i++;
}

console.log(`ผลรวม ${sum}`);

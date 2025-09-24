let n = [
  [1, 4, 6, 4],
  [5, 2, 8, 3],
  [6, 7, 9, 2],
];

for (i = 0; i < n.length; i++) {
  let sum = 0;
  for (j = 0; j < n[i].length; j++) {
    sum += n[i][j];
  }
  console.log(`${n[i]} = ${sum}`);
}

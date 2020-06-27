// Metszet tétele

const tomb = [2, 3, 4, 5, 1, 10, 7, 8, 9, 6];
const tomb2 = [44, 5, 13, 10, 7, 12, 14, 61];
const metszetTomb = [];
let j;
let k = 0;

for (let i = 0; i < tomb.length; i++) {
  j = 0;

  while (j < tomb2.length && tomb2[j] !== tomb[i]) {
    j++;
  }
  if (j < tomb2.length) {
    metszetTomb[k++] = tomb[i];
  }
}

console.log('A két tömb metszetének elemei: ', metszetTomb);

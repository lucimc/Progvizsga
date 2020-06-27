// Megszámlálás tétele

const tomb = [3, 4, 5, 7, 2, 1, 10];
const vizsgalt = 5;
let szamlalo = 0;

for (let i = 0; i < tomb.length; i++) {
  if (tomb[i] > vizsgalt) {
    szamlalo++;
  }
}
console.log('A tömbben ', szamlalo, 'db ', vizsgalt, '-nél kisebb elem van.');

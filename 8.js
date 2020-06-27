const generateArray = (width, height) => {
  const array = new Array(height);
  for (let i = 0; i < height; i++) {
    array[i] = new Array(width);
  }
  return array;
};
const fillArray = (array) => {
  let number = 2;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      number = number * number;
      array[i][j] = number;
    }
  }
};
const printArray = (array) => {
  console.log(array);
};

const width = 10;
const height = 10;
const array = generateArray(width, height);
fillArray(array);
printArray(array);

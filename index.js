function checkAllVowels(stringBlock) {
    vocals = ['A', 'I', 'U', 'E', 'O'];
    for (let i = 0; i < stringBlock.length; i++) {
        result = false;
        for (let j = 0; j < vocals.length; j++) {
            if (stringBlock[i] == vocals[j]) {
                result = true;
            }
        }
        if (!result) {
            return false;
        }
    }
    return true;
}

function getBlockVowels(array) {
    let counter = 0;
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array[i].length-1; j++) {
            let blockCheck = `${array[i][j]}${array[i][j+1]}${array[i+1][j]}${array[i+1][j+1]}`;
            if (checkAllVowels(blockCheck)) {
                counter++;
            }
        }
    }
    return counter
}

function createNestedArr(row, col) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let hasil = [];
  for (let i = 0; i < row; i++) {
    let barisArray = [];
    for (let j = 0; j < col; j++) {
      barisArray.push(alphabet[Math.floor(Math.random() * (alphabet.length))]);
    }
    hasil.push(barisArray);
  }
  return hasil;
}

let arrays = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I']
];
let randomArrays = createNestedArr(5, 4)

console.log(getBlockVowels(arrays));
console.log(randomArrays);
console.log(getBlockVowels(randomArrays));
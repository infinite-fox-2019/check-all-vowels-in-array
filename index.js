let dummy = [
  ['A','X','C','Y'],
  ['E','O','O','S'],
  ['I','U','I','N'],
  ['M','Y','O','E'],
  ['P','D','A','I']
]

// check block filled with vowel
function checkBlock(arr){
  let counter = 0
for (let i = 0; i < arr.length-1; i++){
  for (let j = 0; j < arr[i].length; j++){
    if (cekVokal(arr[i][j]) && cekVokal(arr[i][j+1]) && cekVokal(arr[i+1][j]) && cekVokal(arr[i+1][j+1])) {
      counter++
    }
  }
}
return counter
}

// check vowel
function cekVokal(huruf){
  let vokal = 'AIUEO'
  let check = false
  for (let i = 0; i<vokal.length;i++){
    if (huruf === vokal[i]){
      check = true
    }
  }
  return check;
}

// create random alphabet array
function createNestedArr(jumlahRow,jumlahCol){
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let output = []
  for (let i = 0; i < jumlahRow; i++){
    let temp = []
    for (let j = 0; j < jumlahCol; j++){
      temp.push(alphabet[Math.floor(Math.random()*26)])
    }
    output.push(temp)
  }
return output;
}

let row = 5
let col = 4

console.log(checkBlock(dummy))
console.log(checkBlock(createNestedArr(row,col)))
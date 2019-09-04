// Fungsi untuk membuat sebuah generate random array
function createRandomArray(x,y){
  const huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let output = [];
  for(let i = 0; i < x; i++){
    output.push([]);
    for(let j = 0; j < y; j++){
      output[i].push(huruf[Math.ceil(Math.random()*25)])
    }
  }
  return output;
}

// Fungsi untuk mengecek apakah semua huruf yang masuk
// adalah huruf vokal
function checkVowels(str){
  const data = ['a','i','u','e','o','A','I','U','E','O'];
  let hasil = []
  for(let i = 0; i < str.length; i++){
    let tanda = false;
    for(let j = 0; j < data.length; j++){
      if(str[i] == data[j]){
        hasil.push(true);
        tanda = true;
      }
    }
    if(!tanda){
      hasil.push(false)
    }
  }
  for(let i = 0; i < hasil.length; i++){
    if(!hasil[i]) return false;
  }
  return true;
}

// Main Function
function checkVowelsInArray(arr){
  let output = 0;
  for(let i = 0; i < arr.length-1; i++){
    for(let j = 0; j < arr[0].length-1; j++){
      var temp = ''
      temp += arr[i][j]
      temp += arr[i][j+1]
      temp += arr[i+1][j]
      temp += arr[i+1][j+1]
      if(checkVowels(temp)){
        output++
      }
    }
  }
  return output;
}

// Test Drive With Fixed Array
console.log(checkVowelsInArray([
  ['A','I','c','y','e'],
  ['E','O','o','s','f'],
  ['i','u','i','n','f'],
  ['m','y','o','e','o'],
  ['p','d','a','i','a'],
  ['p','d','a','i','a']
]))

// Test Drive With Random Array
let testArray = createRandomArray(5,4);
console.log(testArray)
console.log(checkVowelsInArray(testArray))
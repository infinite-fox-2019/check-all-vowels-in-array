function alphaArrGen(row, col){
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arrOut = [];
    let arrIn = [];
    for (let i=0; i<row; i++){
        arrIn = []
        for (let j=0; j<col; j++){
            let num = Math.floor(Math.random()*26)
            arrIn.push(alpha[num])
        }
        arrOut.push(arrIn)
    }
    return arrOut;
}

function indeks(arr, element){
    for (let i=0; i<arr.length; i++){
        if (arr[i] === element){
            return true
        }
    }
    return false
}

function checkAllVow(arr){
    const vow = 'AIUEO';
    let count = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i+1] == undefined) return count;
        for (let j=0; j<arr[i].length; j++){
            if (indeks(vow,arr[i][j]) && indeks(vow,arr[i][j+1]) && indeks(vow,arr[i+1][j]) && indeks(vow,arr[i+1][j+1])){
                count++
            }
        }
    }
    return count;
}
console.log(checkAllVow(alphaArrGen(5,5)));
console.log(checkAllVow(alphaArrGen(5,6)));
console.log(checkAllVow(alphaArrGen(7,3)));

var input = 
[['A','X','C','Y'],
['E','O','O','S'],
['I','U','I','N'],
['M','Y','O','E'],
['P','D','A','I']]; //3

var input1 = 
[['A','X','C','Y'],
['E','O','O','S'],
['I','U','I','N'],
['M','Y','O','E'],
['P','D','A','Z']]; //2

var input2 = 
[['A','O','C','Y'],
['E','O','O','S'],
['I','U','I','N'],
['M','Y','O','E'],
['P','D','A','I']]; // 4


console.log(checkAllVow(input))
console.log(checkAllVow(input1))
console.log(checkAllVow(input2))
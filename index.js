let contoh = [
    ["A", "X", "C", "Y"],
    ["E", "O", "O", "S"],
    ["I", "U", "I", "N"],
    ["M", "Y", "O", "E"],
    ["P", "D", "A", "I"]
]

const kamus = ["A", "I", "U", "E", "O"]

function check2x2 (arr){
let count = 0
for(let i = 0 ; i<arr.length-1 ; i++){
    for(let j = 0 ; j<arr[i].length-1 ; j++){
        if(kamus.indexOf(arr[i][j]) != -1 && kamus.indexOf(arr[i][j+1]) != -1 && kamus.indexOf(arr[i+1][j]) != -1 && kamus.indexOf(arr[i+1][j+1]) != -1){
            count++
        }            
    }
}
return count
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // jumlah 26 atau index 0-25

function createNestedArr (jumlahRow, jumlahCol){
let arr = []
for(let i = 0 ; i < jumlahRow ; i++){
    arr.push([])
    for(let j = 0 ; j < jumlahCol ; j++){
        arr[arr.length-1].push(alphabet[Math.floor(Math.random() * 26)])
    }
}
return arr
}

let randomArr = createNestedArr(5,4)

console.log(randomArr);
console.log(check2x2(randomArr));
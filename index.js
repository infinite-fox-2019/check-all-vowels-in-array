function generateBoard(row,col) {
    let board = [];
    for (let i = 0;i<row;i++) {
        let subBoard = [];
        for (let j = 0;j<col;j++) {
            subBoard.push(' ')
        }
        board.push(subBoard);
    }
    return board;
};

function getRandomAlphabet (arr) {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0;i<arr.length;i++) {
        for (let j = 0;j<arr[i].length;j++) {
            let numRandom = Math.floor(Math.random()*alpha.length);
            arr[i][j] = alpha[numRandom];
        }
    }
    return arr;
};

// var arr1 = [
//     ['A','X','C','Y'],
//     ['E','O','O','S'],
//     ['I','U','I','N'],
//     ['M','Y','O','E'],
//     ['P','D','A','I']
// ]

function getBlockFilledwithVowels(arr) {

let vocals = 'AIUEO';
let vocalCount = 0;
for (let i = 0;i<arr.length-1;i++) {
    for (let j = 0;j<arr[i].length-1;j++) {
        let sumVocal = 0;
        for (let k = 0;k<vocals.length;k++) {
            if (arr[i][j] == vocals[k]) {
                sumVocal++
            }
            if (arr[i][j+1] == vocals[k]) {
                sumVocal++
            }
            if (arr[i+1][j] == vocals[k]) {
                sumVocal++
            }
            if (arr[i+1][j+1] == vocals[k]) {
                sumVocal++
            }
        }
        if (sumVocal == 4) {
            vocalCount++
        }
    }
}

return vocalCount;
};


let board = generateBoard(10,10);
let alphaBoard = getRandomAlphabet(board);
console.log(getBlockFilledwithVowels(alphaBoard))
// console.log(getBlockFilledwithVowels(arr1))




























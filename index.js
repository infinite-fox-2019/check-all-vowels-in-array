function generateBoard(jumlahRow, jumlahCol) {
    let result = [];
    for(let i = 0; i < jumlahRow; i++) {
        result[i] = [];
        for(let j = 0; j < jumlahCol; j++) {
            result[i][j] = String.fromCharCode(Math.floor(Math.random() * Math.floor(26) + 65));
        }
    }
    
    return result;
}

function getBlockFilledWithVowels(arr) {
    let result = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr[i].length - 1; j++) {
            let strBlock = arr[i][j] + arr[i + 1][j] + arr[i][j+ 1] + arr[i + 1][j + 1];
            if(checkAllVowels(strBlock)) {
                result++;
            }
        }
    }
    
    return result;
}

function checkAllVowels(str) {
    let vowels = {A: 'A', E: 'E', I: 'I', O: 'O', U: 'U'};
    if(str === '') {
        return false;
    }
    for(var i = 0; i < str.length; i++) {
        if(!vowels[str[i]]) {
            return false;
        }
    }
    return true;
}

let board = generateBoard(5,4);
console.log(board);
console.log(getBlockFilledWithVowels(board));

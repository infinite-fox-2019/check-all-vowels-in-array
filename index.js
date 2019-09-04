function checkAllVowels (row, col) {
    let array = createNestedArr(row, col);
    let jmlVokal = 0
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array[i].length; j++){
            if(i !== array.length-1 && j!== array[i].length-1){
                if(checkVokal(array[i][j]) && checkVokal(array[i][j+1]) && checkVokal(array[i+1][j+1]) && checkVokal(array[i+1][j])){
                    jmlVokal++
                }
            }
        }
    }
    console.log(array);
    return `jumlah huruf vokal pada block 2x2 sebanyak : ${jmlVokal}`;
};

function checkVokal (huruf) {
    kamus = 'AIUEO';
    for (let i = 0; i < kamus.length; i++) {
        if (huruf === kamus[i]) {
            return true;
        }
    }
    
};

function createNestedArr (row, col) {
    let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = [];
    for (let i = 0; i < row; i++) {
        let temp = [];
        for (let j = 0; j < col; j++) {
            temp.push(huruf[Math.floor(Math.random() * huruf.length)]);
        }
        result.push(temp);
    }
    return result
};

console.log(checkAllVowels(3, 5));
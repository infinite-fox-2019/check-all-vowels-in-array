function createNestedArr(row,col) {
    const alhpabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let result = [];
    for (let i = 0; i < row; i++) {
        result.push([]);
        for (let j = 0; j < col; j++) {
            result[i].push(alhpabets[Math.floor(Math.random() * (26 - 0) ) + 0]);
        }
    }
    return result;
}
function checkAllVowelsArr(arr) {
    console.log(arr);
    const vowels = ['A', 'I', 'U', 'E', 'O'];
    let hasil = 0;
    let isVowel = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            let count = 0;
            for (let k = i; k < i + 2; k++) {
                for (let l = j; l < j + 2; l++) {
                    if (vowels.indexOf(arr[k][l]) != -1) {
                        isVowel = true;
                    } else {
                        isVowel = false;
                    }
                    if (isVowel === true) {
                        count++;
                    }
                }
            }
            if (count === 4) {
                hasil++;
            }
        }
    }
    return hasil;
}
var arr = createNestedArr(10,10);
console.log(checkAllVowelsArr(arr));


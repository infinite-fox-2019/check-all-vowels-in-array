function generateRandomBoard(totalRow, totalCol) {
    let output = [];
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(let i = 0; i < totalRow; i++) {
        let tempArr = [];
        for(let j = 0; j < totalCol; j++) {
            tempArr.push(characters.charAt(Math.floor(Math.random() * characters.length)))
        }
        output.push(tempArr);
    }
    return output;
}

console.log(generateRandomBoard(5, 5));

function checkAllVowelsInArray(arr) {
    let vowels = 'AIUEO';
    let count = 0;

    for(let i = 0; i < arr.length-1; i++) {
        for(let j = 0; j < arr[i].length-1; j++) {
            if((vowels.indexOf(arr[i][j]) !== -1) && (vowels.indexOf(arr[i][j+1]) !== -1) && (vowels.indexOf(arr[i+1][j]) !== -1) && (vowels.indexOf(arr[i+1][j+1]) !== -1)) {
                count++;
            }
        }
    }
    return count;
}

let randomBoard = generateRandomBoard(4, 4);
console.log(checkAllVowelsInArray(randomBoard));
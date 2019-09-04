console.log(`GENERATE BOARD`);
// GENERATE BOARD Release 0
function checkVowelsInArray1(arr){
    console.log(arr);
    let countTrue = 0
    for(let i = 0 ; i < arr.length -1; i++){
        for(let j = 0 ; j < arr[i].length -1; j++){
            let temp = arr[i][j]+arr[i][j+1]+arr[i+1][j]+arr[i+1][j+1]
            let testVowel = checkVowels1(temp)
            if (testVowel == true) {
                countTrue++
            }
        }
    }
    return countTrue
}

function checkVowels1(data){
    let count = 0
    for(let i = 0 ; i < data.length; i++){
        switch (data[i]) {
            case 'A' :{ count++;break;}
            case 'I' :{ count++;break;}
            case 'U' :{ count++;break;}
            case 'E' :{ count++;break;}
            case 'O' :{ count++;break;}
        }
    }
    if (count == 4) {
        return true
    } else {
        return false
    }
}
console.log(checkVowelsInArray1([['A','I','B','S','D'],['U','E','C','T','Y'],['O','A','T','B','J']]));
console.log(checkVowelsInArray1([['A','X','C','Y'],['E','O','O','S'],['I','U','I','N'],['M','Y','O','E'],['P','D','A','I']])); 

console.log(`\n RANDOM ALFABET`);

// GET BLOCK FILLED WITH VOWELS Release 0
function createNestedArr(row,cel){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let output = []
    for(let i = 0; i < row; i++){
        let temp = []
        for(let j = 0 ; j < cel; j++){
            temp.push(alphabet[Math.floor(Math.random() * 25)])
        }
    output.push(temp)
    }
    return output
}

function checkVowelsInArray(row,cel){
    let blockOfObject = createNestedArr(row,cel)
    console.log(blockOfObject);
    let countTrue = 0
    for(let i = 0 ; i < blockOfObject.length -1; i++){
        for(let j = 0 ; j < blockOfObject[i].length -1; j++){
            let temp = blockOfObject[i][j]+blockOfObject[i][j+1]+blockOfObject[i+1][j]+blockOfObject[i+1][j+1]
            let testVowel = checkVowels(temp)
            if (testVowel == true) {
                countTrue++
            }
        }
    }
    return countTrue
}

function checkVowels(data){
    let count = 0
    for(let i = 0 ; i < data.length; i++){
        switch (data[i]) {
            case 'A' :{ count++;break;}
            case 'I' :{ count++;break;}
            case 'U' :{ count++;break;}
            case 'E' :{ count++;break;}
            case 'O' :{ count++;break;}
        }
    }
    if (count == 4) {
        return true
    } else {
        return false
    }
}
console.log(checkVowelsInArray(3,5));
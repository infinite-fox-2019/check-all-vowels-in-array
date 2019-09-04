function checkAllVowels(row, col){
    let arrIn = [];
    // let arrOut = [['A','A','A','B'],['A','A','A','B'],['B','B','B','B'],['B','B','B','B']]
    let arrOut = [];
    const data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let hasil = 0;
    for(let i = 0; i<row; i++){
        arrIn = [];
        for(let j = 0; j<col; j++){
            let randomize = data.charAt(Math.floor(Math.random() * data.length));
            arrIn.push(randomize);
        }
        arrOut.push(arrIn);
    }

    console.log(arrOut);
    
    for(let i = 0; i<arrOut.length - 1; i++){
        for(let j = 0; j<arrOut[i].length - 1; j++){
            let kata = '';
            kata += arrOut[i][j]
            kata += arrOut[i][j+1]
            kata += arrOut[i+1][j]
            kata += arrOut[i+1][j+1]

            hasil += apakahVocal(kata);
        }
    }
    return hasil;
}

function apakahVocal(str) {
    const dataVocal = 'AIUEO';
    let counter = 0;
    for(let i = 0; i<str.length; i++){
        for(let j = 0; j<dataVocal.length; j++){
            if(dataVocal[j] == str[i]){
                counter++;
                break;
            }
        }
    }

    if(counter == 4){
        return 1
    }
    else{
        return 0
    }
}

console.log(checkAllVowels(5,4));

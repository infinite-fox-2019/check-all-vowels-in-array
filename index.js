function generateArray(jumlahRow,jumlahCol){
    let totalAlphabet = jumlahRow*jumlahCol;
    let str = "";
    let arr = [];
    for(let i = 0; i<totalAlphabet;i++){
        let generateAlphabet = Math.floor(Math.random()*25+97);
        str+=String.fromCharCode(generateAlphabet);
    }
    str = str.toUpperCase();
    for(let i = 0; i<jumlahRow;i++){
        arr.push([]);
        for(let j = 0;j<jumlahCol;j++){
            arr[i].push(str[0]);
            str = str.slice(1);
        }
    }
    return arr;
}

var arrGenerated = generateArray(5,4);

arrGenerated = [["A","X","C","Y"],
                ["E","O","O","S"],
                ["I","U","I","N"],
                ["M","Y","O","E"],
                ["P","D","A","I"]];

console.log(arrGenerated)

function checkBoard(arrGen){
    let arr = [["",""],["",""]];
    let jumlah = 0;
    let bool = false;
    let varKonsonan = "bcdfghjklmnpqrstvwxyz";
    varKonsonan = varKonsonan.toUpperCase();
    for(let i = 0;i < arrGen.length-1;i++){
        for(let j = 0;j < arrGen[i].length-1;j++){
            if(!arr[0][0]){
                arr[0][0]=arrGen[i][j];
                arr[0][1]=arrGen[i][j+1];
                arr[1][0]=arrGen[i+1][j];
                arr[1][1]=arrGen[i+1][j+1];
            }
            for(let k = 0;k < varKonsonan.length;k++){
                for(let l = 0; l<arr.length;l++){
                    for(let m = 0; m <arr[l].length;m++){
                        if(arr[l][m]==varKonsonan[k]){
                            bool = true;
                        }
                    }
                }
            }
            arr = [["",""],["",""]];
            if(bool == false){
                jumlah+=1;
            }
            bool = false;
        }
    }
    return jumlah;    
}

console.log(checkBoard(arrGenerated));
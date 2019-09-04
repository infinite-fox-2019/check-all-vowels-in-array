// let input = [
//     ['A', 'X', 'C', 'Y'],
//     ['E', 'O', 'O', 'S'],
//     ['I', 'U', 'I', 'N'],
//     ['M', 'Y', 'O', 'E'],
//     ['P', 'D', 'A', 'I'],
// ]

function checkAllVowels(jlhRow,jlhCol){
    let hasil = []
    let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    for(let i = 0; i < jlhRow; i++){
        let temp = []
        for( let j = 0; j < jlhCol; j++){
            temp.push(huruf[Math.floor(Math.random()*26)])
        }
        hasil.push(temp)
    }

    let vokal = 'AIUEO'
    let counter = 0
    for(let i = 0; i < hasil.length-1; i++){
        for(let j = 0; j < hasil[i].length-1; j++){
            if(vokal.indexOf(hasil[i][j]) != -1 && vokal.indexOf(hasil[i][j+1])!= -1 && vokal.indexOf(hasil[i+1][j]) != -1 && vokal.indexOf(hasil[i+1][j+1]) != -1){
                counter++
            }
        }
    }
    return counter
}

console.log(checkAllVowels(10, 10));
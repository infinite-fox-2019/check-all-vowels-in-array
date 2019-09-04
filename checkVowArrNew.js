function nestedArray(baris, kolom){

    let huruf = "ABCDEFGHIJKLMNOPQSTUVWXYZ"
    let base = []
    for(let i=0; i<baris; i++){
        let row = []
        for(let j=0; j<kolom; j++){
            let str =""
            for(let k=0; k<huruf.length; k++){
                let random = Math.floor(Math.random()*huruf.length)
                str+=huruf[random]
                break
            }
            row.push(str)
        }
        base.push(row)
    }

    return base
    
}

let board = (nestedArray(5,3))

/*
dummy
[
    ["A","X","C","Y"],
    ["E","O","O","S"],
    ["I","U","I","N"],
    ["M","Y","O","E"],
    ["P","D","A","I"]
]
*/

function checkVowel(dummy){
    //console.log(dummy)

    let vowel = ["A","I","U","E","O"]
    let countHasil = 0
    for(let i=0; i<dummy.length-1; i++){ 
        for(let j=0; j<dummy[i].length-1; j++){
            let countVowel = 0
            for(let k=0; k<vowel.length; k++){
                if(vowel[k]===dummy[i][j]){
                    countVowel++
                }
                if(vowel[k]===dummy[i][j+1]){
                    countVowel++
                }
                if(vowel[k]===dummy[i+1][j]){
                    countVowel++
                }
                if(vowel[k]===dummy[i+1][j+1]){
                    countVowel++
                }
            }
            if(countVowel===4){
                countHasil++
            }  
        }
    }

    return countHasil

}

console.log(checkVowel(board))

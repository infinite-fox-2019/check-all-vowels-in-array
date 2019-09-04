function checkVowel(row,column){
    let kamusAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    let len = kamusAlphabet.length
    let arr = []
    for(let i=0; i<row; i++){
        arr[i] = []
        for(let j=0; j<column; j++){
            arr[i].push(kamusAlphabet[Math.floor(Math.random()*len)].toUpperCase())
        }
    }
   
    let count = 0
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr[i].length-1; j++){
            if(vokal(arr[i][j])&&vokal(arr[i][j+1])&&vokal(arr[i+1][j])&&vokal(arr[i+1][j+1])){
                count ++
            }
        }
    }
    return count
}

function vokal (input){
    for(let i=0; i<input.length; i++){
        if(input[i]==='A' || input[i]==='U' || input[i]==='E' || input[i]==='I' || input[i]==='O'){
            return true
        }
    }
    return false
}

console.log(checkVowel(8,8))
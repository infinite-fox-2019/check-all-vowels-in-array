function generateBoard(row,col){
    let array = vowelsInArray (row,col)
    let counter = 0
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array[i].length; j++){
            if(checker(array[i][j]) && checker(array[i][j+1]) && checker(array[i+1][j]) && checker(array[i+1][j+1])){
                counter++
            }
        }
    }
    console.log(array)
    return counter
}



function checker(words){
    let vowels = 'AIUEO'
    for(var i =0; i<vowels.length; i++){
        if(words === vowels[i]){
            return true
        }
    }
}


function vowelsInArray (row,col){

    let output = []
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    for(let i= 0; i<row; i++){
        let temp = []

        for(let j=0; j<col; j++){
            let random = characters.charAt(Math.floor(Math.random() * characters.length))
         
            temp.push(random)
        }

        output.push(temp)
    }
    return output
}

console.log(generateBoard(5,4))



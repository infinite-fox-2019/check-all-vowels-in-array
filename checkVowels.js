



function check(arrIn){

    

    let bigContainer = []
    generateBlock(arrIn)
    console.log(bigContainer)
    let counter = 0
    for(let i = 0; i < bigContainer.length; i++){
        if(vowelsCounter(bigContainer[i]))counter++
    }
    return counter

    function vowelsCounter(input){
        let alphabet = ['A','I','U','E','O']
        let counter = 0
        for(let i = 0; i < input.length; i++){
            for(let j = 0; j < alphabet.length; j++){
                if(input[i] === alphabet[j]){
                    counter++
                }
            }
        }
        if(counter === input.length)return true
        else return false
    }
    
    function generateBlock(input){
        if(input[0].length < 2)return
        for(let i = 0; i < input.length-1; i++){
            let container = []
            for(let j = 0; j < 2; j++){
                container.push(input[i][j])
                container.push(input[i+1][j])
            }
            bigContainer.push(container)
        }
        return generateBlock(deleteFirstArrayElement(input))
    }

    function deleteFirstArrayElement(input){
        let bigContainer = []
        for(let i = 0; i < input.length; i++){
            let container = []
            for(let j = 1; j < input[i].length; j++){
                container.push(input[i][j])
            }
            bigContainer.push(container)
        }
        return bigContainer
    }

}

function createNestedArray(row,col){
    
    let nested = [] 
    for(let i = 0; i < row; i++){
        let container = []
        for(let j = 0; j < col; j++){
            container.push(generateRandomAlphabet())
        }
        nested.push(container)
    }

    return nested

    function generateRandomAlphabet(){
        let alphabet = 'abcdefghijklmopqrstuvwxyz'
        return alphabet[Math.floor(Math.random()*25)].toUpperCase()
    }
}


//TEST CASE
let input = [
    ['A','X','C','Y'],
    ['E','O','O','S'],
    ['I','U','I','N'],
    ['M','Y','O','E'],
    ['P','D','A','I']
   ];

// console.log(check(input))
// console.log(createNestedArray(3,3))
console.log(check(createNestedArray(3,5)))
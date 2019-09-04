function boardChecker(board) {

    let vowels = 'AEIOUaeiou'
    let counter = 0
    for(let i = 0; i<board.length; i++){
        let check = false
        for(let j = 0; j<board[i].length; j++){
            for(let k = 0; k<vowels.length; k++){
                if(i !== board.length-1 && j !== board[i].length-1){
                    if(board[i][j] === vowels[k] && board[i][j+1] === vowels[k]){
                        check = true
                    }
                }
            }
        }
        if(check === true){
            counter++
        }
           
           
    }
    return counter
}
var board = 
[
    ['A','X','C','Y'],
    ['E','O','O','S'],
    ['I','U','I','N'],
    ['M','Y','O','E'],
    ['P','D','A','I']
]
console.log(boardChecker(board))
function generateBoard(row, col) {

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let board = []

    for (let i = 0; i < row; i++) {
        let rowArr = []
        for (let j = 0; j < col; j++) {
            let rand = Math.floor(Math.random() * alphabet.length)

            rowArr.push(alphabet[rand])
        }
        board.push(rowArr)
    }
    return board
}

function isVowel(letter) {
    let vowels = ['A', 'I', 'U', 'E', 'O']

    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            return true
        }
    }
    return false
}

function checkBlock() {
    let gameBoard = generateBoard(14, 6)
    console.log(gameBoard);

    let result = []

    for (let i = 0; i < gameBoard.length - 1; i++) {
        for (let j = 0; j < gameBoard[i].length - 1; j++) {
            let one = gameBoard[i][j]
            let two = gameBoard[i][j + 1]
            let three = gameBoard[i + 1][j]
            let four = gameBoard[i + 1][j + 1]
            if (isVowel(one)
                && isVowel(two)
                && isVowel(three)
                && isVowel(four)) {

                result.push([one, two, three, four])
            }
        }
    }
    return result
}

console.log(checkBlock());
console.log(checkBlock());

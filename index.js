function blockGenerator(jumlahRow, jumlahCol) {
    let result = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < jumlahRow; i++) {
        let store = []
        for (let j = 0; j < jumlahCol; j++) {
            store.push(alphabet[Math.floor(Math.random() * 26)].toUpperCase())
        }
        result.push(store)
    }
    return result
}

function checkVowelBlock (array) {
    let vowels = 'AIUEO'
    let count = 0
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array[i].length - 1; j++) {
            if (vowels.indexOf(array[i][j]) !== -1
                && vowels.indexOf(array[i][j + 1]) !== -1
                && vowels.indexOf(array[i + 1][j]) !== -1
                && vowels.indexOf(array[i + 1][j + 1]) !== -1 )
            {
                count++
            }
        }
    }
    return count
}


let dummy = [
    ['A', 'X', 'C', 'Y', 'O'],
    ['E', 'O', 'O', 'S', 'I'],
    ['I', 'U', 'I', 'A', 'E'],
    ['M', 'Y', 'O', 'E', 'O'],
    ['P', 'D', 'A', 'I', 'X'],
    ['P', 'D', 'A', 'I', 'B'],
]


// TEST CASE
// console.log(dummy)
// console.log(blockGenerator(5, 4))
// console.log(blockGenerator(7, 3))
// console.log(blockGenerator(4, 6))
console.log(checkVowelBlock(dummy))
console.log(checkVowelBlock(blockGenerator(5, 4)))
console.log(checkVowelBlock(blockGenerator(7, 3)))
console.log(checkVowelBlock(blockGenerator(4, 6)))
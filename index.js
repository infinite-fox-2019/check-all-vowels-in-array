function board() {
    let lib = `abcdefghijklmnopqrstuvwxyz`.toLocaleUpperCase()
    let output = []
    for (let i = 0; i < 5; i++) {
        let temp = []
        for (let j = 0; j < 4; j++) {
            let random = Math.floor(Math.random() * lib.length)
            temp.push(lib[random])
        }
        output.push(temp)
    }
    return output
}


const array = board()
let array2 = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I']
]

function checkVowel(array) {
    let lib = 'AUIEO'
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < lib.length; j++) {
            if (array[i] === lib[j]) {
                count++
            }
        }
    }

    return count === 4 ? true : false
}

function checkVowelinArray(array) {
    let row = 5
    let col = 4
    let count = 0
    let vowel = []
    for (let i = 0; i < row - 1; i++) {
        for (let j = 0; j < col - 1; j++) {
            let block = []
            block.push(array[i][j], array[i][j + 1], array[i + 1][j], array[i + 1][j + 1])
            if (checkVowel(block)) {
                count++
                vowel.push(block)
            }
        }
    }

    let display = ''
    for (let k = 0; k < vowel.length; k++) {
        display += `\n(${k + 1}) ${vowel[k]}`
    }

    console.log(array);

    if (count) {
        return `Array diatas memiliki ${count} block yang semuanya berisi hurul vowel, ${display}`
    } else {
        return `Array diatas tidak memiliki block yang berisi huruf vowel.`

    }

}

console.log(checkVowelinArray(array));
console.log('\n');
console.log(checkVowelinArray(array2));
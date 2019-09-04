function generatedBoard(jumlahRow, jumlahCol) {
    let output = []
    let abjad = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase()
    let random 
    for (let i=0; i<jumlahRow; i++) {
        output.push([])
        for (let j=0; j<jumlahCol; j++) {
            random = Math.floor(Math.random()*abjad.length)
            output[i].push(abjad[random])
        }
    }
    return output
}
// console.log(generatedBoard(5,4))

function allVowelInArray(arr) {
    let count = 0
    for (let i=0; i<arr.length-1; i++) {
        for (let j=0; j<arr[i].length-1; j++) {
            let preCount = 0
            for (let k=i; k<i+2; k++) {
                for (let l=j; l<j+2; l++) {
                    if (isVocal(arr[k][l])) preCount++
                }
            }
            if (preCount == 4) count++
        }
    }
    return count
}

function isVocal(char) {
    let vocal = ['A','I','U','E','O']
    for (let i=0; i<vocal.length; i++) {
        if (vocal[i] == char) {
            return true
        }
    }
    return false
}
// console.log('cek vocal =====', isVocal('B'))
let arr = [
    ['A','X','C','Y'],
    ['E','O','O','S'],
    ['I','U','I','N'],
    ['M','Y','O','E'],
    ['P','D','A','I']
]
console.log(allVowelInArray(arr))
console.log(allVowelInArray(generatedBoard(5,4)))
console.log(allVowelInArray(generatedBoard(5,4)))
console.log(allVowelInArray(generatedBoard(5,4)))
console.log(allVowelInArray(generatedBoard(5,4)))
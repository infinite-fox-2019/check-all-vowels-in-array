function allVowels(arr) {
    let count = 0
    let vowels = 'AIUEO'
    for (let i=0; i<arr.length-1; i++) {
        for (let j=0; j<arr.length-1; j++) {
                if ((vowels.indexOf(array[i][j]) !== -1) && (vowels.indexOf(array[i][j+1]) !== -1) && (vowels.indexOf(array[i+1][j]) !== -1) && (vowels.indexOf(array[i+1][j+1]) !== -1)) {
                    count++
                }
        }
    }
    return count
}
let array = 
[
    ['A', 'X', 'C', 'Y'], 
    ['E', 'O', 'O', 'S'], 
    ['I', 'U', 'I', 'N'], 
    ['M', 'Y', 'O', 'E'], 
    ['P', 'D', 'A', 'I']
]
console.log(allVowels(array));

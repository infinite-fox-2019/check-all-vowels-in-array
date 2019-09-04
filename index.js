function checkVowels2x2 (arr) {
  const vowels = {
    'A': 'exist',
    'I': 'exist',
    'E': 'exist',
    'O': 'exist',
    'U': 'exist'
  }
  
  let count = 0

  // loop horizontally

  for (let i = 0; i < arr.length-1; i++) {

    // loop vertically

    for (let j = 0; j < arr[i].length-1; j++) {

      // check if the two horizontal elements exist in the vowels dictionary

      if (vowels[arr[i][j]] !== undefined && vowels[arr[i][j+1]] !== undefined) {

        // check if the two verticals elements exist in the vowels dictionary and add count by 1

        if (vowels[arr[i+1][j]] !== undefined && vowels[arr[i+1][j+1]] !== undefined) {
          count++
        }
      }
    }
  }
  return count
}

let board = 
[
  ['A', 'E', 'S', 'T'],
  ['I', 'I', 'U', 'C'],
  ['F', 'A', 'O', 'K'],
  ['L', 'E', 'E', 'Z'],
  ['A', 'R', 'T', 'I']
]

console.log(checkVowels2x2(board)); // 3

let board2 = 
[
  ['A', 'S', 'S', 'T', 'U'],
  ['I', 'S', 'U', 'E', 'I'],
  ['F', 'O', 'O', 'O', 'O'],
  ['L', 'E', 'E', 'E', 'A'],
  ['A', 'R', 'T', 'I', 'A']
]

console.log(checkVowels2x2(board2));
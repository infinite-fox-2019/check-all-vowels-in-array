const isVowel = str => {
  str = str.toUpperCase()
  if (str == 'A' || str == 'I' || str == 'U' || str == 'E' || str == 'O') {
    return true
  }
  return false
}

const generateData = (row, col) => {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const data = []
  
  for (let i = 0; i < row; i++) {
    const temp = []
    for (let j = 0; j < col; j++) {
      const random = Math.floor(Math.random() * 26)
      const randomAlphabet = alphabets[random]
      temp.push(randomAlphabet)
    }
    data.push(temp)
  }

  return data
}

const checkAllVowels = (row, col) => {
  const data = generateData(row, col)

  let result = 0

  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data[i].length - 1; j++) {
      if (isVowel(data[i][j]) && isVowel(data[i][j + 1]) && isVowel(data[i + 1][j]) && isVowel(data[i + 1][j + 1])) {
        result++
      }
    }
  }
  return result
}

console.log(checkAllVowels(5, 4))
console.log(checkAllVowels(7, 7))

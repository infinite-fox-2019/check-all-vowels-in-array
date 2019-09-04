const checkVowelsArr = () => {
  const arr = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I']
  ]
  
  let allVowelsCount = 0
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr[i].length - 1; j++) {
      const block = []
      block.push(arr[i][j], arr[i+1][j], arr[i][j+1], arr[i+1][j+1])
      if(checkAllVowels(block)) allVowelsCount++
    }
  }
  return allVowelsCount
}

const checkAllVowels = (arr) => {
  const lib = 'AIUEO'
  for(let i = 0; i < arr.length; i++){
    let allVowels = false
    let letter = arr[i]
    for(let j = 0; j < lib.length; j++){
      let vowel = lib[j]
      if(letter === vowel) allVowels = true 
    }
    if(!allVowels) return false
  }
  return true
}

console.log(checkVowelsArr())
function checkVowel(row, column){
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = []
  let vowels = ['A', 'E', 'I', 'O', 'U']
  let vowelCount = 0
  // let dummy1 = [['A', 'X', 'C', 'Y'],['E', 'O', 'O','S'],['I', 'U', 'I', 'N'],['M', 'Y', 'O', 'E'],['P', 'D', 'A', 'I']]
  if(row < 2 || column < 2){
    return 'row and column has to be greater than 1'
  }

  for(let i =0 ; i<=row ; i++){
    let penampung = []
    for(let j=0 ; j<column ; j++){
      let random = alphabet[Math.floor(Math.random()* alphabet.length)]
      penampung.push(random)
    }
    result.push(penampung)
  }

  for(let i=0 ; i<result.length-1 ; i++){
    for(let j=0 ; j<result[i].length -1 ; j++){
      if(vowels.includes(result[i][j]) && vowels.includes(result[i+1][j]) && vowels.includes(result[i][j+1]) && vowels.includes(result[i+1][j+1])){
        vowelCount += 1
      }
    }
  }
  // for(let i=0 ; i<dummy1.length-1 ; i++){
  //   for(let j=0 ; j<dummy1[i].length -1 ; j++){
  //     if(vowels.includes(dummy1[i][j]) && vowels.includes(dummy1[i+1][j]) && vowels.includes(dummy1[i][j+1]) && vowels.includes(dummy1[i+1][j+1])){
  //       vowelCount += 1
  //     }
  //   }
  // }
  return vowelCount
}


console.log(checkVowel(5,4))

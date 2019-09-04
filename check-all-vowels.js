function arrayRandom(row,col){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz' 
    let out = []
    for(let i = 0; i<row;i++){
       out.push([])
        for(let j = 0; j<col;j++){
            out[out.length-1].push(alphabet[Math.floor(Math.random()*26)])
        }
    }return out
}
console.log(arrayRandom(5,4))

let input = [
    ['A','X','C','Y'],
    ['E','O','O','S'],
    ['I','U','I','N'],
    ['M','Y','O','E'],
    ['P','D','A','I']
]

function vowelsArray(arr){
    const vokal = ['A','I','U','E','O']
    let jumlah = 0
    for(let i = 0; i<arr.length-1;i++){
        for(let j = 0; j<arr[i].length-1;j++){
            if(vokal.indexOf(arr[i][j]) !== -1 &&
               vokal.indexOf(arr[i+1][j]) !== -1 &&
               vokal.indexOf(arr[i][j+1]) !== -1 &&
               vokal.indexOf(arr[i+1][j+1]) !== -1)
               {
                jumlah++
            }
        }
    }return jumlah
}
console.log(vowelsArray(input))
console.log(vowelsArray(arrayRandom(5,4)))
console.log(vowelsArray(arrayRandom(10,10)))
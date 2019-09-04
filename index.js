function checkAllVowelsArr(arr) {
    const vowels = ['A', 'I', 'U', 'E', 'O'];
    let hasil = 0;
    let isVowel = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            let count = 0;
            for (let k = i; k < i + 2; k++) {
                for (let l = j; l < j + 2; l++) {
                    if (vowels.indexOf(arr[k][l]) != -1) {
                        isVowel = true;
                    } else {
                        isVowel = false;
                    }
                    if (isVowel === true) {
                        count++;
                    }
                }
            }
            if (count === 4) {
                hasil++;
            }
        }
    }
    return hasil;
}
let arr1 = 
[
    ['A','X','C','Y'],
    ['E','O','O','S'],
    ['I','U','I','N'],
    ['M','Y','O','E'],
    ['P','D','A','I']
];
console.log(checkAllVowelsArr(arr1));
// 3
let arr2 =
[
    ['A','I','B','S','D'],
    ['U','E','C','T','Y'],
    ['O','A','T','B','J']
];
console.log(checkAllVowelsArr(arr2));
// 2

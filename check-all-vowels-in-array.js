function vowels_array(arr) {
    // var arr_vocal = ['A', 'I', 'U', 'E', 'O']
    // var pre_count = 0
    var final_count = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== 'A' && arr[i][j] !== 'I' && arr[i][j] !== 'U' && arr[i][j] !== 'E' && arr[i][j] !== 'O') {
                arr[i][j] = 'X'
            }
        }
    }

    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr[i].length-1; j++) {
            if (arr[i][j] !== 'X' && arr[i][j+1] !== 'X' && arr[i+1][j] !== 'X' && arr[i+1][j+1] !== 'X') {
                final_count++
            }
        }
    }
    return final_count
}

function randomAlphabet(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
       result  = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function nested_array (row, col) {
    let arr_result = []

    for (let i = 0; i < row; i++) {
        arr_result.push([])
        for (let j = 0; j < col; j++) {
            arr_result[i].push(randomAlphabet(1))
        }
    }
    return arr_result
}

// var example = [
//     ['A', 'X', 'C', 'Y'],
//     ['E', 'O', 'O', 'S'],
//     ['I', 'U', 'I', 'N'],
//     ['M', 'Y', 'O', 'E'],
//     ['P', 'D', 'A', 'I']
// ]
// console.log(vowels_array(example));


console.log(nested_array(4, 4));
console.log(vowels_array(nested_array(4, 4)));

function vowels(input){
    if(input === 'A' || input === 'I' || input === 'U' || input === 'E' || input === 'O'){
        return true
    }
    return false
}

function checkAllVowels(jumlahRow,jumlahCol){
    let array = [];
    for(let i=0; i<jumlahRow; i++){
        let arrayIndex = [];
        for(let j=0; j<jumlahCol; j++){
            let randHuruf = Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,1);
            arrayIndex.push(randHuruf.toUpperCase());
        }
        array.push(arrayIndex);
    }
    // return array
    let count = 0 ;
    let lokasi = [];
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array[i].length; j++){
            if(i !== array.length-1 && j !== array[i].length-1){
                if(vowels(array[i][j]) && vowels(array[i][j+1]) && vowels(array[i+1][j+1]) && vowels(array[i+1][j])){
                    count++;
                    lokasi.push(i,j);
                }
            }
        }
    }
    if(count>0){
        console.log(array)
        return `di temukan ${count} Block, dan Lokasinya berada di ${lokasi}`
    }else{
        console.log(array)
        return `belum beruntung belum ada Vowels`
    }
}


console.log(checkAllVowels(10,10));

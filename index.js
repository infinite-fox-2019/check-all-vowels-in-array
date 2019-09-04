function createNestedArr(jumlahRow,jumlahCol){
    let array = []
    for(let i=0; i<jumlahRow; i++){
        let arrayIndex = [];
        for(let j=0; j<jumlahCol; j++){
            let randHuruf = Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,1)
            arrayIndex.push(randHuruf);
        }
        array.push(arrayIndex)
    }
    return array
}

console.log(createNestedArr(5,3));

console.log(createNestedArr(8,5))
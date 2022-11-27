// Counting Duplicates





function duplicateCount(text){
    text = text.toLowerCase().split('').filter((el , index) => text.indexOf(el) !== index);
    return text.length == 0 ? 0 : text.length;
}


console.log(duplicateCount('Indivisibility')) // 2


// not SOLVED yet








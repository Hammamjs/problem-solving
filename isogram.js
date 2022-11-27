// Isograms



/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that
determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.
 */




function isIsogram(str) {
    let arr = [];
    str = str.toLowerCase().split('').map((el , index) => str.toLowerCase().indexOf(el) == index ? arr.push(el) : '')
    return arr.length == str.length;
}

console.log(isIsogram('moOse'));




// remove vowel letters

// first solution
function disemvowel(str) {
    // get all letters except the vowels letters
    return str.match(/[^iouea]/gi).join('');
}
// second solution
function disemvowel(str) {
    // replace all the vowels with Empty String ""
    return str.replace(/[ioeau]/ig , '');
}


console.log(disemvowel('This website is for losers LOL!'))
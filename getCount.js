//  Vowel Count





// Return the vowel letter from string that given



function getCount(str) {
    let counter = 0;
    let string = str.split('').map(e => 
        e == 'i' | e == 'o' | e == 'u' | e == 'e' | e == 'a' ? counter ++ : ''
    );
    return counter;
}

console.log(getCount('abracadabra'));

    // Another solution *************
    // match every vowels word and we replaced any other word with '' to get number of vowels letter in string
String.prototype.getCount = e => { return e.replace(/[^aieou]/g , '').length;} 

console.log(String.prototype.getCount('abracadabra'));




    // Another soltion************
    // using match built function (RegEx) to get all vowels letter
function getCount(e) {return e.match(/[ioeau]/g).length;} 

console.log(getCount('abracadabra'));


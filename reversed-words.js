


// Complete the function that accepts a string parameter, and reverses each word in the string.
//  All spaces in the string should be retained.






function reverseWords(str) {
    str = str.split(' ');
    let arr = [];
    for ( let i = 0; i < str.length ; i++  ) {
        arr.push(str[i].split('').reverse().join(''))
    }
    return arr.join(' ');
}




console.log(reverseWords('double  spaces'));
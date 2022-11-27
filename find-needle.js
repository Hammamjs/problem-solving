// find needle from arr that given



function findNeedle (arr) {
    let message = '';
    arr = arr.map((el , index) => el == 'needle' ? message = 'needle find at position ' + index :'')
    return message;
}

console.log(findNeedle(['hey' , 'hi' , 'wow' , 'word' , 'spam' , 'needle' , 'else' , 'stop']))


// Find position of alphabet






function position(letter) {
    let alpha = 'abcdefghghijklmnopqrstuvwxyz';
    for (let counter = 0; counter < alpha.length; counter++ ) {
        if (letter == alpha[counter]) {
            return `position of alphabet:${counter + 1}`;
        }
    }
    // return null;
}

// Second Solution
function position(letter) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    return alpha.split('').map((el , index) => el === letter.toLocaleLowerCase() ? `position of alphabet:${index + 1}` : '').filter(el => el !== null).join('');
}


// Third Solution 



function position(letter) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    return 'position of alphabet:' + (alpha.indexOf('z') + 1)
}



console.log(position('Z'));

















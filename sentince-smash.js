// sentince smash









// simple solution 
function smash(words) {
    return words.join('')
}

console.log(smash(['this', 'is' , 'my' , 'way']));

// Basic solution


function smash (words) {
    let str = '';
    for ( let i = 0 ; i < words.length ; i++ ) {
        str += " " +  words[i];
    }
    return str.slice(1);
}

console.log(smash(['this', 'is' , 'my' , 'way']));




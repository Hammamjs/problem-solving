// Reversed Strings


// take string and reverse the word and return one sentince not an Array

function solution(str){
    return str.split(' ').reverse().join(' ')
}

// Aother solution 
function solution(str) {
    str = str.split(' ');
    let reversedArray = [];
    for (let i = str.length; i >= 0 ; i--) {
        reversedArray.push(str[i]);
    }
    return reversedArray.join(' ');
}

console.log(solution('hello world'))











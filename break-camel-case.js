// Break camelCase


// Complete the solution so that the function will break up camel casing, using a space between words.







function solution(string) {
    let str = string.split('');
    for ( let i = 0; i < str.length ; i++ ) {
        if (str[i] == str[i].toUpperCase()) {
            str.indexOf(str[i - 1] = str[i - 1] +  ' ')
        }
    }
    return str.join('');
}

console.log(solution('thisIsForTest'));
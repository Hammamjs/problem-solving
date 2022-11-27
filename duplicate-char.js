// Duplicate char 



// First we take string 
// then we convert it to an elements on an array
// then repeat every word twice
// then return the string

function duplicateChar(str) {
    return str.split('').map(el => el + el).join('');
}

console.log(duplicateChar('String'));





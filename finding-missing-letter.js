// find the missing letter

// firstly we create a variable contain all the alpha letters uppercase or lowercase
// then we create a variable start from the given array index (0)
// create loop
// check if alpha string of i equal give array that start from first index + i
// then we return the missing letter if it found

function findMissingLetter(array){
let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    start = alpha.indexOf(array[0]);
    for (let i = 0 ; i < array.length ; i++ ) {
        if (alpha[start + i] != array[i]) {
            return alpha[start + i]
        }
    }
return 'no Missing character';
}


console.log(findMissingLetter(['C','D','E','F','H']));





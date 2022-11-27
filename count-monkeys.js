// Count the Monkeys


// Create new arr
// Create loop
// make counter start from 1
// push i in new arr
// then return new arr


function countMonkey(n) {
    let newArr = [];
    for ( let i = 1 ; i <= n ; i++) {
        newArr.push(i);
    }
    return newArr;
}


// Another solution

// using Array object
// use Array.from => is give array from specific number
// Array =>  create size to the array and return undefined in every index of array
// keys => 

function countMonkey(n) {
    return Array.from(Array(n + 1).keys()).slice(1)
}

console.log(countMonkey(10));












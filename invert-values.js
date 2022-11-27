// return the reverse of the number




// First solution
function invertValues(arr) {
    return arr.map((num) => num * -1)
}

// Second solution
function invertValues(arr) {
    return arr.map((num) => -num )
}

// Third solution

function invertValues(arr) {
    return arr.map((num) => num > 0 ? -num : num * -1)
}

console.log(invertValues([1 ,2 , 3 , 4 , -1 , -2 , -3 , -4]));











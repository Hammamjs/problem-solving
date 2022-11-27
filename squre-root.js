// square root or not sqrt


// we use the Math 0bject to solve this problem
function sqrtOrNotSqrt(arr) {
    return arr.map(num => Math.sqrt(num) != parseInt(Math.sqrt(num)) ? num * num : Math.sqrt(num));
}

// 


console.log(sqrtOrNotSqrt([1 , 4 , 9 , 16 , 5 , 3]))



// Count By x



// create an empty array
// push x to array one time
// create for loop 
// push the element inside the new element


// First solution 
function countByX(x , n) {
    let newArray = [] ;
    let sum = x;
    newArray.push(x);
    for ( let i = 1; i < n ; i ++) {
        newArray.push(x += sum)
    }
    return newArray;
}

// Second solution with multiply sign 

function countByX(x,n) {
    let arr = [];
    for (let i = 1; i <= n ; i++) {
        arr.push(i * x);
    }
    return arr;
}

// Third solution with built-in function
function countByX(x,n) {
    return Array.from(Array(n + 1).keys()).slice(1).map(num => num * x);
}




console.log(countByX(1, 10));










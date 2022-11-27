//Remove the minimum


// we filter the arr if the index of the num is not equal the smallest( Math.min() ) value return arr 
function removeSmallest(numbers) {
    return numbers.filter((el , index) =>  index != numbers.indexOf(Math.min(...numbers)));
}

// Other solution 
// we first make the array sorted then take arr after smallest num

function removeSmallest(numbers) {
    return numbers.sort((a,b) => a - b).slice(1 , -1);
}


console.log(removeSmallest([2,2,1,2,1]))
// 2 1 2
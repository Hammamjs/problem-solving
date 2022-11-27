



// convert numbers to array
// reverse the array 


// first solution
function reverseArray(nums) {
return nums.toString().split('').reverse().map(el => +el)
}

// second solution

function reversArray(nums) {
// convert nums to string and split it
let unreversedArray = nums.toString().split("")
// create an empty array
let reversedArray = [];

// create loop start from last index

for (let i = unreversedArray.length ; i >= 0 ; i--) {
    reversArray.push(+unreversedArray[i]);
}

return reversedArray;
}


console.log(reverseArray(12345))
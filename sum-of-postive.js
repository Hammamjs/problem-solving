
// sum of postive numbers

// first solution


function sumOfPositives(numbers) {
    // intialValue
    let sum = 0;
    // use filter to find positive number and sum it
    numbers.filter(num => num > 0 ? sum += num : '')
    // retur the result
    return sum;
}


// second solution


function sumOfPositives(numbers) {
    // filter the array and return positive value and sum it by reduce 
    return numbers.filter(el => el >= 0).reduce((current , next) => current + next)
}


// third solution without higherOrder function

function sumOfPositives(numbers) {
    // create inital value 
    let sum = 0;
    // loop
    for (let i = 0; i < numbers.length ; i++) {
        // test if value is positive
        if (numbers[i] >= 0) {
            // sum the positive number
            sum += numbers[i];
        }
    }


    return sum;
}



console.log(sumOfPositives([0 ,-22,4,5])) // result  = 20;
// Count of positives / sum of negatives


// if input equal null return 0
// create empty array to put inside it sum and counter
// create to varibles from count postive numbers and sum from negatives numbers
// using map to return count postives and sum negatives numbers




function countPositivesSumNegatives(input) {
    let counter = 0,
    sum = 0;
    if (input == 0) return input = [];
    input.map(el => el > 0 ? counter ++: sum += el);
    return [counter , sum];
}


console.log(countPositivesSumNegatives([1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , -11 , -12 , -13, -14 , -15]));
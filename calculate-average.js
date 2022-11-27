// Calculate the average


// write function which calculate the average of the number in given list

// first solution with built-in function ( reduce )
function find_average(list) {
    if (list == 0) return 0;
    return list.reduce((acc , current) => acc + current)/ list.length;
}


// create empty variable to sum the array number
// create loop 
// sum to the elements of array and push it inside the empty variable
// division the sum over of the array length

function find_average(list) {
    if (list == 0) return 0 ;
    let sum = 0;
    for (let i = 0; i < list.length ; i++) {
        sum += list[i];
    }
    return sum / list.length;
}






console.log(find_average([]));




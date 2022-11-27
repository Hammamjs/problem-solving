

// return 8 -> 36

var summation = function (num) {
    if (num == 1) return 1;
    return num +  summation(num - 1);
}


console.log(summation(8))
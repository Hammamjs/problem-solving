// Sum of Digits




function digitalRoot(n) {
    n = n.toString().split('').map(el => +el).reduce((acc, current) => acc + current, 0);
    let sum = n >= 10 ? digitalRoot(n) : n;
    return sum;
}


console.log(digitalRoot(1555454));




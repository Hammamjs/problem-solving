// No zeros for heros







function noBoringZeros(num) {
    return parseInt(num.toString().replace(/[0]+$/g , ''));
}


console.log(noBoringZeros(-14000000));







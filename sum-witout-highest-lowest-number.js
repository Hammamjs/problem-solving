
function sumWithoutHigestLowestnumber(arr) {
    //first sort the array
    // second slice the maxmum and the minmum value
    // return arr.sort((a,b) => a - b).slice(arr[1] , arr.length - 1).reduce((acc , current) => acc + current)
    // other solve
    return arr.sort((a,b) => a - b).slice(1 , -1).reduce((acc , current) => acc + current)
}


console.log(sumWithoutHigestLowestnumber([1 , 1 , 2 , 4 , 5 , 5]));







// Find the first non-consecutive number










function firstNonConsecutiveNumber(arr) {
    let nonConsecutive = 0;
    for (let i = 1 ; i < arr.length - 1 ; i++) {
        arr[i] + 1 !== arr[i+1] && arr[i] + -1 !== arr[i+1]? nonConsecutive = arr[i + 1] : nonConsecutive = null;  
    }
    return nonConsecutive;
}



console.log(firstNonConsecutiveNumber([1 , 2 ,3, 4 , 6 ]));











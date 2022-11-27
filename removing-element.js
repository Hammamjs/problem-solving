// Removing elements



function RemoveEveryOther(arr) {
    return arr.filter((el , index) => index % 2 == 0)
} 

console.log(RemoveEveryOther(['keep' , 'Remove' , 'Keep' , 'Remove']));


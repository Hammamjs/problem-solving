// count the number of sheep 



function countSheep(arrayOfSheep) {
    if (arrayOfSheep == 0) return 0;
    let numberOfSheep = 0;
    arrayOfSheep = arrayOfSheep.map(el => el ? numberOfSheep ++ : '')
    return numberOfSheep;
}


console.log(countSheep([true, false , true, false]));
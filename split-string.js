// split string

// firstly create an empty variable
// secondry we split the string and stroed it in created variable
// Thirdly we create loop
// we check if length of letter i equal one to concat it with next letter  
// importan to check if the next element not equal undefiend
// then we replace the current value with current letter with next current
// else if the number is not follow conditions we replace the current value with current value + underscore 
// then we filter the array to get every element with length more than one element


function solution(str){
    let string = str.split('');
        for ( let i = 0; i < string.length ; i++ ) {
            if (string[i].length == 1 && string[i + 1] !== undefined) {
                string[i] = string[i] + string[i + 1];
                i++;
            }else {
                string[i] = string[i] + '_'
            }
        }
            return string.filter(ele => ele.length != 1);
}



console.log(solution('abcdefh'));
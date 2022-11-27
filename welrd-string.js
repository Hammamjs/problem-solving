// WeIrD StRiNg CaSe




function toWeirdCase(string){
    return string.split('').map(el => el == 'i' | el == 'w' | el == 'd' | el == 's' | el == 'r' | el == 'n' | el == 'c'? el.toUpperCase() : el).join('');
}


console.log(toWeirdCase('This is a test'));







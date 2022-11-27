


function repString(counter, text) {
    let repeat = text.split(' ')
    for (let i = 1 ; i < counter ; i++) {
        repeat += repeat;
    }
    return repeat;
}



console.log(repString(4 , 'Mohammed'))
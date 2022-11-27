// Create function take three args and return the result






// solution 1
function mathmaticalOperation(operation , val_1 , val_2) {
    let result = operation == '+' ? val_1 + val_2 : operation == '/' ? val_1 / val_2 : operation == '-' ? val_1 - val_2 : operation == '*' ? val_1 * val_2 : '';
    return result;
}

// Another using built-in function in js eval()
function mathmaticalOperation(operation , val_1 , val_2) {
    return eval(val_1 + operation + val_2)
}


console.log(mathmaticalOperation("*" , 1 , 3))



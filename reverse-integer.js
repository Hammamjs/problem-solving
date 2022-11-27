var reverse = function(x) {
    if (x >= 0) {
        x = x.toString().split('').reverse().join('');
        parseInt(x)
    }else {
        x = x.toString().split('').slice(1).reverse().join('')
        x = '-' + parseInt(x)
    }
    return x;
};


console.log(typeof reverse(-123));
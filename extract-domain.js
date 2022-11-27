
// Extract the domain name from a URL


function domainName(url){
    let regEx_1 = /[^www./][a-z]+(?=\.)|\w+?\d+\w+-*?\w+-?\w+/,
        regEx_2 = /\w+?\d+?\w+?-?\w+?/,
        regEx_3 = /\w+-\w+-?\w+?\d+?\w+/,
        regEx_4 = /\d+|\w+-\w+/,
        solution = url.match(regEx_1 , regEx_2 , regEx_3 , regEx_4);
    return url.replace(url , solution);
}




console.log(domainName("https://google.com"))




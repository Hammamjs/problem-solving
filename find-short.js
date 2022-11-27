// find the shortest word


// we take string
// then we convert it to an array
// then we compare every element length
// then we return the smallest word length



function findShort(s){
s = s.split(' ').reduce((current , next) => current.length < next.length ? current : next, 0 )
return s.length;
}

console.log(findShort('what is your name'));



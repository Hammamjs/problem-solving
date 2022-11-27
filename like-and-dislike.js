// return people who like this
function likes(names) {
return  names.length == 1 ? `${ names.join('') } likes this` :
        names.length == 2 ? `${ names.join(' and ') } like this`:
        names.length == 3 ? `${ names[0]}, ${ names[1]} and ${names[2]} like this`:
        names.length > 3 ? `${ names[0]}, ${names[1]} and ${names.length - 2} others like this`:'no one likes this';
}


console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
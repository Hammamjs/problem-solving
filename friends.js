
// return name of your friends from array if the length of your friend name is Exactly equal 4

let friends =  [ 'Ryan', 'Kieran', 'Mark' ];

function friend(friends){
    return friends.filter(el => el.length == 4) ;
}


console.log(friend(friends));
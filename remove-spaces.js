
// Diffiault :  Easy

// remove all the spzce from the string

function noSpace(x){
return x.split(" ").join('');
}

// another solution 
// replace all spaces with empty string

function noSpace(x){  return x.replace(/\s+/g , '');   }


// Another solution


console.log(noSpace(" ask q u es t io n ")) // run the Function

    // result  : askquestion

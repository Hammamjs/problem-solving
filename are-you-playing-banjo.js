// Are you playing danjo


// if your name start with letter 'R' or lowercase 'r' that mean you playing danjo





function playingDanjo(name) {
    // return name.toLowerCase().charAt(0) == 'r' ? name + ' plays banjo' : name + ' does not play banjo';
    return name.match(/^r/i) ? `${name} plays banjo` : `${name} does not play banjo`;
}





console.log(playingDanjo('rami'));




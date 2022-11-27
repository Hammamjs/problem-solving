// Do iget bonus




// s => slaray
// b = bonus

function bonusTime(s,b) {
    return b ? `$${s * 10}` : `$${s}`;
} 

console.log(bonusTime(300 , false));
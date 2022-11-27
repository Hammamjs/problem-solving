// Button state



function likeOrDislike(buttons) {
    let lastState = buttons.slice(length - 1);
    // buttons = buttons.toString().split(' ')
    // buttons = buttons[buttons.length - 1].toLowerCase() == 'like' ? Like 
    // : buttons[buttons.length - 1].toLowerCase() == disLike ? disLike
    // : buttons[buttons.length - 1 , buttons.length - 2] == buttons[buttons.length - 2 , buttons.length - 1] ? 'Nothing' : 'Nothing';
    return buttons.toString();
}



console.log(likeOrDislike([Like,Dislike,Dislike]))



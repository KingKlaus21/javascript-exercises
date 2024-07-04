const repeatString = function(string, num) {
    let yourString = '';
    if (num < 0){
        return('ERROR');
    }
    else {
    for(let r = 0; r < num; r++){
        yourString += string;
    }
    return(yourString);
    }
};

const number = Math.floor(Math.random() * 1000)

repeatString('', number);

// Do not edit below this line
module.exports = repeatString;

const palindromes = function (str) {

    const simplStr = simplifyStr(str);
    const backwardsStr = reverseString(simplStr);

    if (simplStr == backwardsStr) {
        return(true);
    }
    else {
        return(false);
    }
};


const reverseString = function(string) {

    let backwards = '';

    for(let i = -1; i >= -1 * string.length; i--){
        backwards += string.at(i);
    }
    return backwards;

};


function simplifyStr(str) {
    const removeLettersAndNumbers = (str) => str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return removeLettersAndNumbers(str);
  }

// Do not edit below this line
module.exports = palindromes;

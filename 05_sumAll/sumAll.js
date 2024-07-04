const sumAll = function(a, b) {

    let m;
    let l;

    if (typeof a !== 'number' || typeof b !== 'number'){
        return('ERROR');
    }
    else if (a < 0 || b < 0){
        return('ERROR');
    }
    else {
        if(a > b){
            m = b;
            l = a;
        }
        else {
            m = a;
            l = b;
        }
    }

    const n = (l - m) + 1;

    let sum = (n * m) + ((n * (n - 1)) / 2);

    // summation formula for natural numbers

    return sum;

};

sumAll(10, [90, 1]);



// Do not edit below this line
module.exports = sumAll;
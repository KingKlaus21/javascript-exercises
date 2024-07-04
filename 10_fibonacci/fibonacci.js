const fibonacci = function(val) {

    let fib = 0;
    let fibArray = [0,1];

    if (val < 0){
        return ("OOPS");
    }
    else if (val == 0){
        return fib;
    }
    else if (val == 1){
        return ++fib;
    }
    else {
        for(n = 0; n+1 < val; n++){
            fib = fibArray.at(0+n) + fibArray.at(1+n);
            fibArray.push(fib);
        }
        return(fib);
    }

};

// const fibonacci = function(val) {

//     let fib = 0;
//     let fibArray = [0,1];

//     if (val == 0){
//         return fib;
//     }
//     else if (val == 1){
//         return ++fib;
//     }
//     else {
//         for(n = 1; n < val; n++){
//             fib = fibArray.at(n-1) + fibArray.at(n-2);
//             fibArray.at(fibArray.length - 1).push(fib);
//         }
//         return(fib);
//     }

// };



// Do not edit below this line
module.exports = fibonacci;

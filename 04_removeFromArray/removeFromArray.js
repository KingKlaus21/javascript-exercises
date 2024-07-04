const removeFromArray = function(array, ...manyArgs) {
    const theArray = arguments[0];
    const toRemove = manyArgs;
    // console.log(theArray);
    // console.log(toRemove);

    let cleanArray = theArray.filter(item => !toRemove.includes(item));

    return(cleanArray);
};

removeFromArray([1, 2, 3], "1", 3);






/*
function foo() {
    var args = [];
    for (var i = 0; i < arguments.length; ++i) args[i] = arguments[i];
      if (i < 4){
          args.push(i);
      else{
          continue;
      }
      
      return(args);
    // ...
  }
  foo(1,2,3,4,5,6,7);
  */

// Do not edit below this line
module.exports = removeFromArray;

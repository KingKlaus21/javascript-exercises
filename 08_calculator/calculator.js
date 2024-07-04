const add = function(a, b) {
	return(a+b);
};

const subtract = function(a, b) {
  return(a-b);
};

const sum = function(array) {
  let sum = 0;
  const arr = array;
  arr.forEach((item) => {
    sum += item;
  });
  return(sum);
};

const multiply = function(array) {
  let prod = 1;
  const arr = array;
  arr.forEach((item) => {
    prod *= item;
  });
  return(prod);
};

const power = function(a, b) {
	return(Math.pow(a, b));
};

const factorial = function(n) {
  let fact = 1;
  for(let i = 2; i <= n; i++){
      fact *= i;
  }
  return(fact);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

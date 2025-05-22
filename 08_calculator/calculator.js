const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y
};

const sum = function(collection) {
	return collection.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(collection) {
  return collection.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(x, y) {
	return Math.pow(x ,y);
};

const factorial = function(x) {
  let result = 1;
  if(x === 0){
    return 1;
  }else{
    for(let i = x; i != 0; i--){
      result = result * i;
    }
    return result;
  }
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

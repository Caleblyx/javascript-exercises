const add = function() {
  let sum = 0
  for (let num of arguments) {
    sum += num;
  }
	return sum;
};

const subtract = function() {
  let a = arguments[0];
  let b = arguments[1];
  let result = a-b;
  return a - b;
	
};

const sum = function() {
	return arguments[0].reduce((sum, num) => sum + num, 0);
};

const multiply = function() {
  return arguments[0].reduce((product, num) => product * num, 1);
};

const power = function() {
  let a = arguments[0];
  let b = arguments[1];
  if (b==0) {
    return 1;
  }
  let res = a;
  while (b!=1) {
    if (b%2 == 0){
      b/=2;
      res*=a;
    } else {
      b--;
      res*=a;
    }
  }
	return res;
};

const factorial = function() {
  let a = arguments[0];
  if (a == 0) {
    return 1;
  }
  let res = 1;
  for (let i = a; i > 1; i--) {
    res*=i;
  }
	return res;
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

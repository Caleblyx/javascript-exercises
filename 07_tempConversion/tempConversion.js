const ftoc = function(temp) {
    let res = (temp - 32) * 5/9;
    return Math.round(res*10)/10;
};

const ctof = function(temp) {
    let res = temp * 9/5 + 32;
    return Math.round(res*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

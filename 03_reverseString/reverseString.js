const reverseString = function(str) {
    let arr = str.split("");
    let n = arr.length-1
    let mid = n/2;
    for (let i = 0; i<mid; i++) {
        let temp = arr[n-i];
        arr[n-i] = arr[i];
        arr[i] = temp;  
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;

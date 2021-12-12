const fibonacci = function() {
    let a = parseInt(arguments[0]);
    if (a < 0) {
        return "OOPS";
    }
    if (a == 0) {
        return 0;
    }
    let prev = 0;
    let curr = 1;
    for (let i = 1; i < a; i++) {
        let temp = prev + curr;
        prev = curr;
        curr = temp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;

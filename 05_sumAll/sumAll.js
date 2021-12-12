const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0 || typeof(n1) != "number" || typeof(n2) != "number") {
        return "ERROR";
    }
    let low = n1;
    let high = n2;
    if (n1 > n2) {
        low = n2;
        high = n1;
    }

    let sum = 0;
    for (;low<=high; low++) {
        sum+=low;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

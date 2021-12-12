const palindromes = function () {
    let s = arguments[0];
    s = s.toLowerCase();
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    low = 0;
    high = s.length-1;
    while (low < high) {
        if (s[low] != s[high]) {
            return false;
        }
        low++;
        high--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

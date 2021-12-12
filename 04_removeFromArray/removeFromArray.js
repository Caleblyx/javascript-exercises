const removeFromArray = function() {
    args = Array.from(arguments);
    arr = args[0];
    for (let i = 1; i < args.length; i++) {
        let item = args[i];
        let ind = arr.indexOf(item);
        if (ind>-1) {
            arr.splice(ind, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

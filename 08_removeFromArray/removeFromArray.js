const removeFromArray = function(arr, ...args) {
    for (let num of arr) {
        for (let arg of args) {
            if (num === arg) {
                arr.splice(arr.indexOf(num), 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

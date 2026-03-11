const sumAll = function(firstint, secondint) {
    let arr = [];
    for (i = firstint; i <= secondint; i++) {
        arr.push(i);
    }
    return arr.reduce((a, b) => a + b);

};

// Do not edit below this line
module.exports = sumAll;

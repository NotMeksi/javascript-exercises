const reverseString = function(str) {
    let reversed = "";
    for (let i = str.length; i > 0; i--) {
        reversed += str[i - 1];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

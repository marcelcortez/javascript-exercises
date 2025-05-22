const repeatString = function(txt,times) {

    if(times < 0){
        return "ERROR";
    }

    let textArray = [];

    for(let i = 0; i < times; i++){
        // Add an element (txt) to the Array
        textArray.push(txt);
    }

    // It joins all array elements into a string
    let textReturned = textArray.join('');

    return textReturned;
};

// Do not edit below this line
module.exports = repeatString;

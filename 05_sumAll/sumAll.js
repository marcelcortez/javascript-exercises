const sumAll = function(x, y) {
    let index;
    let smaller, bigger;
    let sum = 0;

    if(x < 0 || y < 0){
        return 'ERROR';
    }

    if(!(Number.isInteger(x) && Number.isInteger(y))){
        return "ERROR";        
    }


    if(x < y){
        smaller = x;
        bigger = y;
    }else{
        smaller = y;
        bigger = x;
    }

    index = smaller;
    

    for(; index <= bigger; index++){
        sum += index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

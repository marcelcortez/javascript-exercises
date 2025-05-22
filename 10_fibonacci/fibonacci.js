const fibonacci = function(n) {
    if(typeof(n) == "string"){
        n = Number(n);
    }
    
    if(n === 0){
        return 0;
    }else if(n < 0){
        return "OOPS";
    }else{
        let a = 0, b = 1;
        for (let i = 1; i < n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;    
    }

};

// Do not edit below this line
module.exports = fibonacci;

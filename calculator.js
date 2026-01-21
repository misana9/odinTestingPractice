const calculator = {
    add(x,y){
        if(typeof x === 'number' && typeof y === 'number') return x + y
        else return "Arguments contain non-number";
    },
    subtract(x,y){
        if(typeof x === 'number' && typeof y === 'number') return x - y;
        else return "Arguments contain non-number";
    },
    divide(x,y){
        if(typeof x === 'number' && typeof y === 'number') return x / y;
        else return "Arguments contain non-number";
    },
    multiply(x,y){
        if(typeof x === 'number' && typeof y === 'number') return x * y;
        else return "Arguments contain non-number";
    }
}


module.exports = calculator;
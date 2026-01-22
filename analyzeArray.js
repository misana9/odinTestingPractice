function analyzeArray(array){
    if(isValid(array)){
            return {
            average : average(array),
            min : minimum(array),
            max : maximum(array),
            length : length(array)
        }
    }else{
        return "array invalid";
    }
}

const average = (array) => {
    return Math.floor(array.reduce(
        (accumulator,current) => accumulator + current
    ,0) / array.length);
}

const minimum = (array) => {
    return Math.min(...array);
}

const maximum = (array) => {
    return Math.max(...array);
}

const length = (array) => {
    return array.length;
}

const isValid = (array) => {
    if(Array.isArray(array)){
        for(let item of array){
            if(typeof item !== 'number') return false;
            else return true;
        }
    }else return false;
}



module.exports = analyzeArray;




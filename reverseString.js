function reverseString(string){
    if(typeof string === 'string'){
        return string.split('').reverse().join("");
    }else{
        return "not a string";
    }
}



module.exports = reverseString;
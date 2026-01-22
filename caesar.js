const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function caesarCipher(string,factor){
    if(typeof string !== 'string'){
        return "not a string";
    }
    const stringArr = string.split("").map(char => {
        if(isUpperCase(char)){
           return shift(char,factor); 
        }else if(isLowerCase(char)){
            return shift(char.toUpperCase(),factor).toLowerCase();
        }else{
            return char;
        }
    })
    return stringArr.join("");
}

const shift = (char,factor) => {
    if(alphabet.indexOf(char) + factor >= 26){
        return alphabet[alphabet.indexOf(char) + factor - 26];
    }else{
        return alphabet[alphabet.indexOf(char) + factor];
    }
}

const isLowerCase = (char) => {
  if (char == char.toLowerCase() && char != char.toUpperCase()) {
    return true;
  }
  return false;
};

const isUpperCase = (char) => {
  if (char == char.toUpperCase() && char != char.toLowerCase()) {
    return true;
  }
  return false;
};





module.exports = caesarCipher;
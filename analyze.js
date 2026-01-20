function capitalize(string){
    const capitalString = [];
    let firstLetter = true;
    let letterFound = false;
    for (let i = 0; i < string.length; i++){
        if(isLetter(string[i])){
            if(firstLetter){
                capitalString.push(string[i].toUpperCase());
                firstLetter = false;
                letterFound = true;
            }else{
                capitalString.push(string[i]);
                letterFound = true;
            }
        }else{
            capitalString.push(string[i]);
        }
    }
    if(!letterFound){
        return "no valid characters";
    }else{
        return capitalString.join('');
    }
};
const isLetter = (char,letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz') => {
    if(letters.includes(char)){
        return true;
    }else{
        return false;
    }
}



module.exports = capitalize
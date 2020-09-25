const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  if(Array.isArray(members)){
    for (let i = 0; i < members.length; i++){
      if (typeof(members[i]) === 'string'){
        let element = members[i].trim();          
        arr.push(element[0].toUpperCase());
      }
    }
    return arr.sort().join('');
  } else if (!Array.isArray(members) || arr.length === 0){
    return false;
  }
    

};








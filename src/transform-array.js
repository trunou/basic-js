const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var a = arr.slice();
    if (arr instanceof Array){
      for(let i = 0; i < a.length; i++){
        if (a[i] === '--discard-next'){
          if (a[i + 1] !== undefined && (a[i + 2] !== '--discard-prev' || a[i + 2] !== '--double-prev')){
            a[i] = 'miss', a[i + 1] = 'miss';
          } else {a[i] = 'miss'}
        } else if (a[i] === '--discard-prev'){
          if(a[i - 1] !== undefined){
            a[i] = 'miss', a[i - 1] = 'miss'
          } else {a[i] = 'miss'} 
        } else if(a[i] === '--double-next'){
          if(a[i + 1] !== undefined){
            a[i] = a[i + 1];
          } else {a[i] = 'miss'}
            
        } else if(a[i] === '--double-prev'){
          if (a[i-1] !== undefined){
            a[i] = a[i - 1];
          } else {a[i] = 'miss'}
        }
      }
    } else {
      throw new Error('Error');
    }
      return a.filter((item) => item != 'miss');

};
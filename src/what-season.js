const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date  || date - new Date() === 0) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date) && isNaN(date.getMonth)){
    throw new Error('Error');
  }
  
  var i = date.getMonth();
  if (i === 1 || i === 0 || i === 11){
    return 'winter';
  } else if (i === 2 || i === 3 || i === 4){
    return 'spring';
  } else if (i === 5 || i === 6 || i === 7){
    return 'summer';
  } else if (i === 8 || i === 9 || i === 10){
    return 'autumn';
  }

}
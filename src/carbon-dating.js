const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  var sactivity = '';
  if(typeof(sampleActivity) === 'string' && (+sampleActivity) && (+sampleActivity) > 0 && (+sampleActivity) < 15 ){
    sActivity = +sampleActivity;
    return Math.ceil(Math.log(MODERN_ACTIVITY / sActivity) / (0.693 / HALF_LIFE_PERIOD));
  } else{
    return false;
  }
  
};

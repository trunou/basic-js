const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var actionCounts = Math.pow(2, disksNumber) - 1;
  var sec = Math.floor(((actionCounts / turnsSpeed) * 3600));
  return {turns: actionCounts, seconds: sec};
};

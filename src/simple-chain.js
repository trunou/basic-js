const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainsArray: [],
  getLength() {
    return this.chainsArray.length;
  },
  addLink(value = '') {
    this.chainsArray.push(`( ${value} )`);
    return this;
    this.chainsArray = [];
  },
  removeLink(idx) {
    if (!Number.isInteger(idx) || !this.chainsArray[idx - 1]){
      this.chainsArray = [];
      throw new Error('error');
    } 
    this.chainsArray.splice(idx - 1, 1);
    return this;
    
    
  },
  reverseChain() {
    this.chainsArray.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainsArray.join('~~');
    this.chainsArray = [];
    return result;
  },
};

module.exports = chainMaker;

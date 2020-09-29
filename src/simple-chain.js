const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mas: [],
  getLength() {
    return this.mas.length;
  },
  addLink(value = '') {
    this.mas.push(`( ${value} )`);
    return this;
  },
  removeLink(idx) {
    if (!Number.isInteger(idx) || !this.mas[idx - 1]) throw new Error('error');
    this.mas.splice(idx - 1, 1);
    return this;
  },
  reverseChain() {
    this.mas.reverse();
    return this;
  },
  finishChain() {
    return this.mas.join('~~');
  },
};

module.exports = chainMaker;

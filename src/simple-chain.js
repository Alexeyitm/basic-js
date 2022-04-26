const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )~~`);
    return this
  },
  removeLink(/* position */) {
    if (this.result = []);
      throw new Error ('You can\'t remove incorrect link!');
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let newArr = this.step;
    this.step = [];
    return newArr.join(`~~`);
  }
};

module.exports = {
  chainMaker
};

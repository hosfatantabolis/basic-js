const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split('').length;
  },
  addLink(value) {
    let link = `( ${value} )~~`;
    this.chain += link;
    return chainMaker;
  },
  removeLink(position) {
    let arr = this.chain.split('~~').filter(element => element);
    if(arr.length <= (position - 1) || typeof position!= 'number' || (position - 1) < 0 ){
      this.chain = ''
      throw new Error("You can't remove incorrect link!");
    } else {
      arr.splice(position - 1, 1);
      this.chain = arr.join(`~~`);
      this.chain += '~~'
      return chainMaker;
    }
  },
  reverseChain() {
    let len = this.chain.split('~~').length
    if(len === 0 || len === 1){
      return chainMaker;
    }
    let temp = this.chain.split('~~').filter(element => element).reverse().join('~~')
    this.chain = temp + '~~';
    return chainMaker;
  },
  finishChain() {
    let res = this.chain.slice(0, -2);
    this.chain = '';
    return res;
  }
};

module.exports = {
  chainMaker
};

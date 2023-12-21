const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split('').length;
    // remove line with error and write your code here
  },
  addLink(value) {
    //if(!value) value = null;
    let link = `( ${value} )~~`;
    this.chain += link;
    console.log(this.chain);
    return chainMaker;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    let arr = this.chain.split('~~').filter(element => element);
    console.log(typeof position)
    if(arr.length <= (position - 1) || typeof position!= 'number' || (position - 1) < 0 ){
      this.chain = ''
      throw new Error("You can't remove incorrect link!");
    } else {
      arr.splice(position - 1, 1);
      //let newChain = this.chain.split('~~').splice(position - 1, 1).join(`~~`);
      this.chain = arr.join(`~~`);
      this.chain += '~~'
      console.log("removed: " + this.chain)
      return chainMaker;
    }

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    let len = this.chain.split('~~').length
    if(len === 0 || len === 1){
      return chainMaker;
    }
    let temp = this.chain.split('~~').filter(element => element).reverse().join('~~')
    this.chain = temp + '~~';
    console.log("reverse: " + this.chain)
    return chainMaker;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    //this.chain = this.chain.slice(0, -2);
    console.log(this.chain)
    let res = this.chain.slice(0, -2);
    this.chain = '';
    return res;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};

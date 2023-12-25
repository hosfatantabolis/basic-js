const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

//Uppercase A-Z 65-90
//Lowercase a-z 97-122

class VigenereCipheringMachine {
  constructor(typeOfCipher){
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.typeOfMachine = typeOfCipher;
  }
  encrypt(message, key) {
    console.log("message: " + message)
    console.log("key: " + key)
    if(!message || !key) throw new Error('Incorrect arguments!');
    else{
      message = message.toUpperCase();
      key = key.toUpperCase().padEnd(message.length, key.toUpperCase());
      let res = ''
      let keyIndex = 0;
      for (let i = 0; i < message.length; i++) {
        const plainTextChar = message.charAt(i);
        if (this.alphabet.indexOf(plainTextChar) === -1) {
          res += plainTextChar;
          continue;
        }

          let shift = this.alphabet.indexOf(key[(keyIndex)]);
          let shiftedAlphabet = this.alphabet.slice(shift) + this.alphabet.slice(0, shift);

          res += shiftedAlphabet[this.alphabet.indexOf(plainTextChar)];
          keyIndex+=1;

    }
    return (this.typeOfMachine===true || this.typeOfMachine===undefined)? res : res.split('').reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    console.log("encryptedMessage: " + encryptedMessage)
    console.log("key: " + key)
    if(!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    else{
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase().padEnd(encryptedMessage.length, key.toUpperCase());
      let res = ''
      let keyIndex = 0;
      for (let i = 0; i < encryptedMessage.length; i++) {
        const plainTextChar = encryptedMessage.charAt(i);
        if (this.alphabet.indexOf(plainTextChar) === -1) {
          res += plainTextChar;
          continue;
        }

          let shift = this.alphabet.indexOf(key[(keyIndex)]);
          let shiftedAlphabet = this.alphabet.slice(-shift) + this.alphabet.slice(0, -shift);

          res += shiftedAlphabet[this.alphabet.indexOf(plainTextChar)];
          keyIndex+=1;

    }
    return (this.typeOfMachine===true || this.typeOfMachine===undefined)? res : res.split('').reverse().join('');

  }
}
}

module.exports = {
  VigenereCipheringMachine
};

const Calculator = function() {
  this.evaluate = string => {

    if (isNumeric(string)) {
      return parseInt(string);
    } else {
      // let chars = string.split('');
      // chars = chars.filter(e => String(e).trim());
      return eval(string);
    }
  }
}

const isNumeric = (str) => {
  return /^-?\d+$/.test(str);
}


 var calculate = new Calculator()
console.log(calculate.evaluate('127'));//127
console.log(calculate.evaluate('2 + 3'));// 5
console.log(calculate.evaluate('2 - 3 - 4'));//-5
console.log(calculate.evaluate('10 * 5 / 2'))//25

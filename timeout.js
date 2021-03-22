// const john = {
//   name: 'John Doe',
//   balance: 1500,
//   deduct(amount) {
//     setTimeout(() => {
//     this.balance = this.balance - amount;
//     return `${this.name} has a balance of ${this.balance}`;
//   }, 2000);
//   }
// }

//console.log(john.deduct(200));
//returns undefined as return is not returing scope for whole function, so need to use promises

const john = {
  name: 'John Doe',
  balance: 1500,
  deduct(amount) {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        this.balance = this.balance - amount;
        resolve(`${this.name} has a balance of ${this.balance}`);
      }, 2000);
    })
  }
}
//so instead of returning string, we will resolve it and then log message, and you see it appears in 2 secs
john.deduct(200).then(message => console.log(message));

//---------------------------------------------------------------------------------------------------------------------------------------------------------

console.log('a');
let timmy = setTimeout (() => {
  console.log('b');
}, 1); // b runs before d with a 0), cos between 0 and 1 miliseconds is so small, so the delay is completed and cos b was added first, b comes back first
let timo = setTimeout (() => {
  console.log('c');
}, 10);
let timer = setTimeout (() => {
  console.log('d');
}, 0); //even with 0 seconds, e still runs before d.  setTimeout() takes it off the main event loop
console.log('e');

//the order is a, e, b, d, c

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
//so instead of returning string, we will resolve it
john.deduct(200).then(message => console.log(message));

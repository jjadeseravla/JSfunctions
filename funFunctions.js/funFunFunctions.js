const animals = [
  {name: 'fluff', species: 'rabbit'},
  {name: 'caro', species: 'dog'},
  {name: 'hamilton', species: 'dog'},
  {name: 'harold', species: 'fish'},
  {name: 'ursula', species: 'cat'},
  {name: 'jimmy', species: 'fish'},
]

const whoLetTheDogsOutForLoop = (animalsMap) => {
  let dogs = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
      dogs.push(animals[i].name) //if i add .name array is [ 'caro', 'hamilton' ] instead
    }
  }
  return dogs;
}

const whoLetTheDogsOutFilter = (animals) => {
  return animals.filter((animal) => {
    return animal.species === 'dog'
  })
}

//let names = [];
// for (let i = 0; i < animals.length; i++) {
//   names.push(animals[i].name);
// }
const arrOfAllNames = (animals) => {
  return animals.map((animal) => {
    return `${animal.name} is a ${animal.species}`;
  })
}
//arrOfAllNames = animals.map((animal) => animal.name);

//console.log(whoLetTheDogsOutForLoop(animals));
console.log(whoLetTheDogsOutFilter(animals));
console.log(arrOfAllNames(animals));
// [
//   { name: 'caro', species: 'dog' },
//   { name: 'hamilton', species: 'dog' }
// ]

//---------------------------------------------------------------------------------------------------------------------------------
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

const sumAllForLoop = (orders) => {
  let sum = 0;
  for (let i = 0; i < orders.length; i++) {
    sum += orders[i].amount;
  }
  return sum;
}

const sumAllReduce = (orders) => {
  return orders.reduce((sum, order) => { //sum is initial values eg 0 and order is the iterator like 'i'
    return sum + order.amount
  }, 0) //0 is the initial amount
}

console.log(sumAllForLoop(orders)); //1075
console.log(sumAllReduce(orders));

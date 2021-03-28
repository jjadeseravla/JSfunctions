// https://www.youtube.com/watch?v=iZLP4qOwY8I&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=6

//import _ from 'lodash';
const _ = require('lodash');
const fs = require('fs');

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
    return animal.species === 'dog' //filtere returns a boolean, so if its true it shows
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

//---------------------------------------------------------------------------------------------------------------------------------
//DOESNT WORK!!!!!!!
const output = fs.readFileSync('data.txt', 'utf8')
  .trim() //files tend to have a final linebreak, so trim will remove line breaks and spaces at the end
  .split('\n') //split with line break
  .map((line) => line.split('\t')) //reduce will iterate over arr or arrs this map creates
  .reduce((customers, line) => { //customers is first argument whichis end goal, and line is object its iterating
    customers[line[0]] = customers[line[0]] || []; //use existing arr if exists or use an empty one
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {});

console.log('output', JSON.stringify(output, null, 2)); //2 spaces for identation

// {
//   'mark johnsson': [
//   { name: 'waffle iron', price: '80', quantity: '2'},
//   { name: 'blender', price: '200', quantity: '1'},
//   { name: 'knife', price: '10', quantity: '4'},
//   ],
//   'Nikita Smith': [
//   { name: 'waffle iron', price: '80', quantity: '1'},
//   { name: 'knife', price: '10', quantity: '2'},
//   { name: 'pot', price: '20', quantity: '3'},
//   ]
// }

//---------------------------------------------------------------------------------------------------------------------------------
//CLOSURES = can get requestId even though its not inside the ajax
const sendRequest = () => {
  const requestId = '123';
  $.ajax({ //jQuery
    url: '/muUrl',
    success: ((reponse) => {
      alert(`Request ${requestId} returned`);
    })
  })
}

//---------------------------------------------------------------------------------------------------------------------------------
//CURRYING
let dragonn = (name, size, element) =>
  name + ' is a ' + size + ' dragon that breathes ' + element + '!';

console.log(dragonn('boo', 'tiny', 'fire'));

let dragon =
  name => //dragon is a function that takes name, which will return takes another function which will return size etc
    size =>
      element =>
        name + 'is a ' +
        size + ' dragon that breathes ' +
        element + '!'

console.log(dragon('boo')('tiny')('fire'));
//with currying your function can pass through application gradually receive arguments it needs
//you can break it out:
let booDragon = dragon('boo');
console.log(booDragon('tiny')('fire'));
// you can use lodash
// dragon = _.curry(dragon); //doesnt work cos package.json


let dragons = [
  { name: 'boo', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' },
]

// let hasElement = (element, obj) => {
//   return obj.element === element;
// } or lodash"
let hasElement =
  _.curry((element, obj) => obj.element === element)

//let lightningDragons = dragons.filter((x) => hasElement('lightning', x)) or lodash:
let lightningDragons = dragons.filter(hasElement('lightning'))

//const lightningDragon = (dragons) => {
//   return dragons.filter((storm) => {
//     return storm.element === 'lightning'
//   })
// }

console.log('why', lightningDragons);
//console.log(lightningDragon(dragons));

//a curryable function takes every argument to itself and returns its on function

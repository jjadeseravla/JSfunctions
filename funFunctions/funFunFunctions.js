// https://www.youtube.com/watch?v=iZLP4qOwY8I&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=6

//import _ from 'lodash';
const _ = require('lodash');
const fs = require('fs');
const highland = require('highland');

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

//---------------------------------------------------------------------------------------------------------------------------------
//RECURSION - when a function calls itself until it doesnt
//DOESNT WORKKKKK
let countDownFrom = (num) => {
  if (num === 0) {
    return;
  }
  console.log(num);
  countDownFrom(num -1);
}

console.log(countDownFrom(10));
//10, 9, 8 etc to 1

// let categories = [
//   { id: 'animals', 'parent': null }, //top category eg animals does not havea  parent
//   { id: 'mammals', 'parent': 'animals' }, //animal is parent to mammal
//   { id: 'cats', 'parent': 'mammals' },
//   { id: 'dogs', 'parent': 'mammals' },
//   { id: 'pomeranian', 'parent': 'dogs' },
//   { id: 'lab', 'parent': 'dogs' },
//   { id: 'persian', 'parent': 'cats' },
//   { id: 'siamese', 'parent': 'cats' }
// ]
//
// const makeTree = (categories) => {
//   let node = {}
//   categories
//   .filter((x) => {
//     x.parent === categories.parent //an array of categories that has parent (so just line 185)
//   })
//   .forEach((x) => {
//     node[x.id] = makeTree(categories, x.id) //call makeTree and make recursive
//   })//assign the id to the node
//   return node;
// }
//
// console.log(JSON.stringify(makeTree(categories, null), null, 2));
//
// //make into a tree structure:
// // {
// //   animals: {
// //     mammals: {
// //       dogs: {
// //         pomeranian: null
// //         lab: null
// //       },
// //       cats: {
// //         persian: null
// //         saimese: null
// //       }
// //     }
// //   }
// // }

//---------------------------------------------------------------------------------------------------------------------------------
//FUNCTOR - functions that take a value and a function.  it unwraps value into individual parts it feeds into the function that its been given and take the return functions
//eg array.  functors are objects that implement map

const dragonz = [
  { name: 'fluff', health: 70 },
  { name: 'deathy', health: 650 },
  { name: 'bebe', health: 2 },
]

const nameLengths = (dragonz) => {
  return dragonz.map((dragon) => {
    return dragon.name
  })
  .map((dragonName) => {
    return dragonName.length
  })
}

console.log(nameLengths(dragonz)); //[5, 6, 4]


const plus1 = (value) => {
  return value + 1;
}

const stringFunctor = (value, fn) => { //takes a function eg the plus1 funtion
 const chars = value.split('');
 return chars.map((char) => {
   return String.fromCharCode(fn(char.charCodeAt(0)))
 }).join('')
}

const minus1 = (value) => {
  return value -1;
}

[3, 4].map(plus1); // [4, 5]
stringFunctor('ABC', plus1); // 'BCD'
stringFunctor('XYZ', minus1) //'WXY'

//---------------------------------------------------------------------------------------------------------------------------------
//STREAM -flow of values. like an array had a baby with a promise

highland(fs.createReadStream('data2.txt'))
  .each(console.log) //get a buffer (byte offer) when dont pass any string encoding

highland(fs.createReadStream('data2.txt', 'utf8'))
  .split('')
  .map((line) => line.split(','))
  .map((parts) => ({
    name: parts[0],
    numPurchases: parts[1]
  })) // extra brackets otherwise JS interprets it as a function block, but we want it to interpret it as an object
  .filter(customer => customer.numPurchases > 2)
  .map(customer => customer.name)
  .each(x => console.log('each: ', x)) //get a buffer (byte offer) when dont pass any string encoding
  // each:  Fluff
  // each:  King Mukla



//READDDDDDD: when streaming and doing dot notation everyline make sure your functions are all on same line.  if using arrow keys on
//same line than you dont need to put return, eg line 275

// const stupidNumberStream = {
//   each: (callback) => {
//     setTimeout(() => callback(1), 1000)
//     setTimeout(() => callback(2), 2000)
//     setTimeout(() => callback(3), 3000)
//   }
// }
//
// createStupidNumberStream.each(console.log);

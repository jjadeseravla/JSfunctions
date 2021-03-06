//amigoscode
//https://www.youtube.com/watch?v=dOnAC2Rr-6A
const fetch = require("node-fetch");


//use arr.LENGTH and .EVERY(value, index) function to see if 2 arrays are the SAME
let isAnagram = (str1, str2) => {
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();
    //or you could add a .join('') and just === the strings

    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]) ? true : false;

  }

console.log(isAnagram('hello', 'jello')); //false
console.log(isAnagram('hello', 'loelh')); //true


// ----------------------------------------------------------------------------------------------------------------------------------
//12
let num = 0;
const increment = async() => {
  num += await 2; //await wraps in a promise.  await 2 is same as Promise.resolve(2)
  console.log(num); // this is 2 cos num is now gone from 1 to 0 cos of line 17, so 0 + 2 is 2
}

increment();
num += 1; //num = num + 1
console.log(num); //so this is 1

// ----------------------------------------------------------------------------------------------------------------------------------
//make these 2 objects one
const address = {
  city: 'LA',
  country: 'USA',
  postCode: 'LA44'
};

const name = {
  firstName: 'Andy',
  lastName: 'Jones'
};

// const person = {
//   city: address.city,
//   //etc
// } or we could use spread operator

const person1 = {...address, ...name};

console.log(JSON.stringify(person1, null, 2));

// ----------------------------------------------------------------------------------------------------------------------------------
//arrow functions: (theyre called lambdas in java)
const powers = [1, 2, 3, 4, 5].map((num, index) => Math.pow(num, index));

// ----------------------------------------------------------------------------------------------------------------------------------
//lexical this

const person3 = {
  name: 'alex',
  cars: ['tesla', 'audi'],
  toString: function() {
    this.cars.forEach(function (car) { //using function instead of this you neeed to bind so it knows what 'this.name' is
      console.log(`${this.name} has ${car}`);
    }.bind(this));
  }
}

const person = {
  name: 'alex',
  cars: ['tesla', 'audi'],
  toString: function() { // but keep using function here not arrows, as you lose scope of what 'this.cars' is
    //console.log(`${this.name} has ${this.cars}`);
    this.cars.forEach((car) => {
      console.log(`${this.name} has ${car}`);
    });
  }
}

person.toString();

// ----------------------------------------------------------------------------------------------------------------------------------
//array destructuring - allows us to pull values from an array
const names = ['ana', 'mali', 'jo', 'mark', 'fred'];

// const na = names[0];
// const m = names[1];
// const j =names[2]; instead you do:

const [na, m, j, ...randomNameIAssignToRestOfNames] = names;

console.log(`${na} and ${m} and ${j} and ${randomNameIAssignToRestOfNames}`);
console.log(randomNameIAssignToRestOfNames.length); //2

//object destructuring
const getUser = () => {
  return {
    nameee: 'John',
    surname: 'Doe',
    gender: 'male',
    address: {
      country: 'usa',
      city: 'cali',
      postCode: 'CA',
      fullAddress: {
        doorNumber: 22,
        street: 'LA st'
      }
    },
    age: 29
  }
};

const user = getUser();
console.log(user);
//{
//   name: 'John',
//   surname: 'Doe',
//   gender: 'male',
//   address: {
//     country: 'usa',
//     city: 'cali',
//     postCode: 'CA',
//     fullAddress: { doorNumber: 22, street: 'LA st' }
//   },
//   age: 29
// }
// const doorNumber = user.address.fullAddress.doorNumber;
// console.log(doorNumber); //22
//but we can use destructuring eg:
const { nameee, address: { fullAddress : {doorNumber : theDoorNumber} } } = user;
console.log(nameee, theDoorNumber); //John 22

// ----------------------------------------------------------------------------------------------------------------------------------
//Function default parameters

// const calculatePay = (salary, bonus=0) => {
//   return salary + bonus;
// }

const calculatePay = (salary, bonus = {
  teamBonus: 0,
  employeeBonus: 0
}) => {
  return salary + bonus.teamBonus + bonus.employeeBonus;
}

console.log(calculatePay(38000, {teamBonus: 5000, employeeBonus: 1000} ));

// ----------------------------------------------------------------------------------------------------------------------------------
//classes
//constructor - a  method that gets invoked whenever you call the class.  Constructors only get invoked once: when we create the instance of our class

class Animal {
  constructor(name, age) {
    console.log(`${name} is an animal and was created`);
    this.name = name; //properties
    this.age = age;
  }

//static methods are good when you want to expose a method but not create an instance of the actual class
  static iAmAStaticMethod() {
    console.log('static method inside animal class');
  }

  eat = () => {
    console.log(`${this.name} is eating`);
  }

  logAge = () =>  {
    console.log(`${this.name} is ${this.age}`);
  }
}

//instantiate
Animal.iAmAStaticMethod();
const bob = new Animal('Bob', 2); //how we create new instances/objects from this class
bob.eat();
bob.logAge();

//inheritance - we have a common class and extend properties and behaviours from those classes

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); //the call to the super constructor which takes care of assigning name and age
    this.breed = breed;
  }

  logBreed = () => {
    console.log(`${this.name} is a ${this.breed}`);
  }

  logDogAge = () => {
    super.logAge();
  }
}

const rey = new Dog('Rey', 4, 'Husky');
rey.logBreed();
///rey.logDogAge(); //doesnt work i dont understand as it should ????????????

// ----------------------------------------------------------------------------------------------------------------------------------
//promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('data back from server')
  }, 3000);

  setTimeout(() => {
    reject('error: no data back from the server')
  }, 5000);
});

promise.then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
}); //error after 2 secs - no data back from server
// but if change 2000 to 5000, the resolve executes first at 3 secs and you get 'data back from server'

const namesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['bob', 'pat', 'sue']);
  }, 3000);

  setTimeout(() => {
    reject('error: no data back from server')
  }, 5000);
})

const surNamesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['smith', 'brown', 'jones']);
  }, 3000);

  setTimeout(() => {
    reject('error: no data back from server')
  }, 5000);
})

//want to get names and surnames at same time
// Promise.all([names
//   Promise, surNamesPromise]).then(data => {
//   console.log(data)
//   //get [ [ 'bob', 'pat', 'sue' ], [ 'smith', 'brown', 'jones' ] ]
// }).catch(error => {
//   console.log(error);
// })

Promise.all([namesPromise, surNamesPromise]).then(data => {
  const [names, surnames] = data;
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const surname = surnames[i];
    console.log(`${name} ${surname}`);
  }
}).catch(error => {
  console.log(error);
})
//we get: data back from server
// bob smith
// pat brown
// sue jones

//im using random users website that has masses of data about randomers and the json for them
const getRandomUsers = n => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
  // console.log(fetchRandomUsers);
  fetchRandomUsers.then(data => {
    // console.log(data); //with this line it logs the whole object response
    //console.log(data.json()); //now we have [object Promise]
    data.json().then(randomUsers => {
      console.log(JSON.stringify(randomUsers.results.length));//get an array length with random users --> which is 10
      randomUsers.results.forEach((person) => {
        //console.log(person.gender); //or use destructuring
        const {gender, email} = person;
        console.log(`${gender} and their email is ${email}`);
      })
    })
  });
}

console.log('the random users', getRandomUsers(10)); //[object Promise]


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

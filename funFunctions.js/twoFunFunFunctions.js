//DESTRUCTURING - so its easier to pass with option objects, as in these objects where you may/may not need all parameters
//eg here in animal object we didnt need the weight parameter
const animal = {
  species: 'dog',
  weight: 23,
  sound: 'woof'
}
const makeSoundDestructuring = ({ species, sound}) => {
  //const { species, sound } = animal //destructuring assigning to two local variables
  return `The ${species} says ${sound}`;
}

//otherwise you'd  need to prefix with animal and cant automatically see parameters as it takes the whole object:
const makeSound = (animal) => {
  animal.species = animal.species || 'animal'
  return `The ${animal.species} says ${animal.sound}`;
}

console.log(makeSound(animal));
console.log(makeSoundDestructuring(animal));

/* RANDOM MESSAGE GENERATOR
   Project set by CODECADEMY
   Solution by Robin King rga.king@gmail.com
*/

/*
function randomMsgGenerator:
  Creates a random message generator object
  @param {prefix} string The text to prefix the body of the message
  @param {args} array Contains 3 nested arrays of item properties
  @returns {object} 
*/
const randomMsgGenerator = ( prefix, ...args ) => {

  return {
    // Properties
    msgPrefix: prefix,
    [args[0][0]]: args[0][1],
    [args[1][0]]: args[1][1],
    [args[2][0]]: args[2][1]
  }
}

/*
function makeRandomMsg:
  Creates a random message generator object
  @param {obj} object An item object
  @returns {a string} 
*/
function makeRandomMsg ( obj ) {

  const randomItems = Object.getOwnPropertyNames(obj).slice(1);
  let msg = `${obj.msgPrefix}\n`
  randomItems.forEach(item => {
    let choices = obj[item];
    msg = msg.concat(choices[Math.floor(Math.random() * choices.length)], "\n")});
  return msg;
}

// Set up and create different messages with randomly selected components 

// Set up the choices for a disguise generator
const disguiseItem1 = ["upperHead", ["a pink mohawk", "a bald head", "a mullet", "a floppy fringe"]];
const disguiseItem2 = ["middleHead", ["false eyelashes", "a nosering", "sunglasses", "rainbow contact lenses"]];
const disguiseItem3 = ["lowerHead", ["a goatee", "Magnum PI moustache", "5 day stubble", "a double chin"]];
// Create the disguise generator object
const disguise = randomMsgGenerator(
  "Today your disguise will be:\n", disguiseItem1, disguiseItem2, disguiseItem3);

// Set up the choices for a hybrid animal generator
const hybridAnimalItem1 = ["animalHead", ["the head of a tiger", "the head of a giraffe", "the head of a monkey"]];
const hybridAnimalItem2 = ["animalBody", ["the body of a zebra", "the body of an ant ", "the body of a gorilla"]];
const hybridAnimalItem3 = ["animalLegs", ["the legs of a rhino", "the legs of an octopus", "the legs of an elephant"]];
// Create the disguise generator object
const hybridAnimal = randomMsgGenerator(
  "Congratulations, your hybrid animal has:\n", hybridAnimalItem1, hybridAnimalItem2, hybridAnimalItem3);
// you can always add an extra item...
hybridAnimal.animalTail = ["the tail of a fish", "the tail of a rabbit", "the tail of a hippo"];

console.log(makeRandomMsg(disguise));
console.log(makeRandomMsg(hybridAnimal));

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, addition) {
  chocolateBars.unshift(addition);
  newChocolateBars = chocolateBars;
  return newChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addition) {
  return chocolateBars.unshift(addition);
}

function addElementToEndOfArray(chocolateBars, addition) {
  chocolateBars.push(addition);
  newChocolateBars = chocolateBars;
  return newChocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, addition) {
  return chocolateBars.push(addition);
}

function accessElementInArray(array, index) {
  return (array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1);
  newChocolateBars = chocolateBars;
  return newChocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  return chocolateBars.pop();
}

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars.slice(chocolateBars.length);
  return chocolateBars;
}
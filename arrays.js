var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, addition) {
  return [addition, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addition) {
  chocolateBars.unshift(addition);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, addition) {
  return [...chocolateBars, addition];
}

function destructivelyAddElementToEndOfArray(chocolateBars, addition) {
  chocolateBars.push(addition);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}


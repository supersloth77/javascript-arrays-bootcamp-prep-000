var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, addition) {
  return [addition, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addition) {
  return chocolateBars.unshift(addition);
}

function addElementTEndOfArray(chocolateBars, addition) {
  
}

function destructivelyAddElementToEndOfArray(chocolateBars, addition) {
  
}
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, addition) {
  return [addition, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addition) {
  chocolateBars = chocolateBars.unshift(addition);
  return chocolateBars;
}

function addElementTEndOfArray(chocolateBars, addition) {
  
}

function destructivelyAddElementToEndOfArray(chocolateBars, addition) {
  
}
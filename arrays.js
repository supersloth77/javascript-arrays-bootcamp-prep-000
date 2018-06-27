var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(addition, chocolateBars) {
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
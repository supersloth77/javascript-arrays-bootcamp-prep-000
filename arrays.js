var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, addition) {
  return [addition, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addition) {
  chocolateBars.unshift(addition);
  return chocolateBars;
}
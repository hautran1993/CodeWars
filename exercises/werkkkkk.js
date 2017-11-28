//practice function in node
/*
1.Write a function that takes a boolean value and turns it to the string equivilent.
See how many different ways you can write this function! There are a TON.
*/
function booleanToString(b) {
  if(b === true) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log(b)
}
//different VARIATION

function booleanToString(b) {
  return b.toString();
}
//toString() converts variable to strings

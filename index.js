// Code your solution here!

function printString(str) {
  console.log(str[0]);
  if(str.length > 1) {
    printString(str.substring(1,myString.length));
  }
}

function reverseString(str) {
  if(str.length == 1) {
    return str;
  } else {
    return str.slice(-1) + reverseString(str.slice(:-1));
  }

}

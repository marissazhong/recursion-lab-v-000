// Code your solution here!

function printString(str) {
  console.log(str[0]);
  if(str.length > 1) {
    printString(str.substring(1,str.length));
  }
}

function reverseString(str) {
  if(str.length == 1) {
    return str;
  } else {
    return str.slice(-1) + reverseString(str.slice(0,-1));
  }
}

function isPalindrome(str) {
  if(str.length <= 1) {
    return true;
  } else {
    if (str[0] == str.slice(-1)) {
      return isPalindrome(str.slice(1,-1));
    } else {
      return false;
    }
  }
}

function addUpTo(array, index) {
  let sum = 0;
  if (index == 0){
    return array[0] + sum
  } else {
    return array[0] + addUpTo(array[1,array.length-1])
  }
}

addUpTo([1,2,3,4],2)
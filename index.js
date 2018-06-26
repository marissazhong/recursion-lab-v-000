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

function addUpTo(arr, index) {
  if(arr.length == 1){
    return arr[0];
  } else {
    return arr[0] + addUpTo(arr.slice(1,index+1),index-1);
  }
}

//console.log(addUpTo([1,2,3,4,5],3));

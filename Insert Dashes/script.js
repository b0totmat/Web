function insertDash(num) {
   let ret = "", numS = num.toString();
  
  for(let i = 0; i < numS.length; i++) {
    ret += numS[i];
    if(isOdd(parseInt(numS[i])) && isOdd(numS[i + 1]) && i != numS.length - 1)
      ret += "-";
  }
  
  return ret;
}
  
function isOdd(num) {
  return num % 2 != 0;
}

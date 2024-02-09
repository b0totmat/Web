function fixTheMeerkat(arr) {
  let tmp = arr[0];
  arr[0] = arr[2];
  arr[2] = tmp;
  
  return arr;
}
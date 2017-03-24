function slasher(arr, howMany) {
  
  var newArray = [];
  
  newArray = arr.slice(howMany, arr.length + 1);
  
  return newArray;
}

slasher([1, 2, 3], 0);

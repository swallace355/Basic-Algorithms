function mutation(arr) {
  
var compareValue = arr[1].toLowerCase();
var mainValue = arr[0].toLowerCase();
  
 for (var i=0 ;i < compareValue.length; i++) {
    if (mainValue.indexOf(compareValue[i]) < 0)
      return false;
  } 
  return true;  

}

mutation(["hello", "Hello"]);

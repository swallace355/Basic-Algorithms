/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function slasher(arr, howMany) {
  
  var newArray = [];
  
  newArray = arr.slice(howMany, arr.length + 1);
  
  return newArray;
}

slasher([1, 2, 3], 0);

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function repeatStringNumTimes(str, num) {
  // repeat after me
  var newString = "";
  var loopCount = 0;
  
  for (i = 0; i < num; i++) {
    newString = newString + str;
    loopCount++;
  }
  
  return newString;
}

repeatStringNumTimes("abc", 3);

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function reverseString(str) {
  var o = "";
  for (var i = str.length - 1; i >= 0; i--) {
    o += str[i];
  }
  return o;
}

reverseString("Howdy");

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var endLetter = str.substring(str.length - target.length);

    if ( endLetter === target) {
      return true;
    }
  
  return false;
}

confirmEnding("Bastian", "n");

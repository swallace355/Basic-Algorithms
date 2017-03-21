/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newString = "";
  
    if (str.length > num && num > 3) {
      newString = str.slice(0, (num - 3)) + '...';
      return newString;
    }
  
    else if (str.length > num && num <= 3) {
     newString = str.slice(0, num) + '...';
     return newString;
    }
    
  return str;

}

truncateString("Absolutely Longer", 2);

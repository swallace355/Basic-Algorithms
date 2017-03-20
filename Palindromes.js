/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function palindrome(str) {
  // Good luck!
  var o = "";
  
  for (i = str.length - 1; i >= 0; i --) {
    o += str[i];
  }
  
  o = o.replace(/\s+/g, "");
  str = str.replace(/\s+/g, "");
  
  o = o.replace(/[&\/\\#,+()$~_\-\%.'":*?<>{}]/g, "");
  str = str.replace(/[&\/\\#,+()_\-\$~%.'":*?<>{}]/g, "");  
  
  o = o.toLowerCase();
  str = str.toLowerCase();
  
  if (o === str) {
    return true;
  }
  return false;
}



palindrome("eye");

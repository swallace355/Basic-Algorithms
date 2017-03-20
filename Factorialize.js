/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function factorialize(num) {
  
  if (num === 0 || num === 1) {
      return 1;
  }
   for (var i = num - 1; i > 0; i--) {
     num *= i;
   }
  return num;
}

factorialize(9);

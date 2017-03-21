/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function titleCase(str) {
  
  return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });

}

titleCase("I HAVE NO idEA hoW to uSe CaPiTaLiZaTiOn");

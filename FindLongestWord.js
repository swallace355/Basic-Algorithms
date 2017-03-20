/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function findLongestWord(str) {
  
  var arraySplit = str.split(" ");
  var longestWord = 0;
  
  for (i = 0;i < arraySplit.length; i++) {
    if (arraySplit[i].length > longestWord)
      longestWord = arraySplit[i].length;
  }
  
  return longestWord;
}

findLongestWord("It snowed outside but it wasn't for very long");

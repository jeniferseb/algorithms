//Translate the provided string to pig latin.
//
//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
//If a word begins with a vowel you just add "way" to the end.
//
//Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str) {
 if (str.charAt(0) !== "a" && (str.charAt(0) !== "e") && (str.charAt(0) !== "i") && (str.charAt(0) !== "i") && (str.charAt(0) !== "o") && (str.charAt(0) !== "u")) {
   
 console.log("me")
  var arr = []
  var arrVIndex = []
  var strA = str.split("")
  arrVIndex.push(strA.indexOf("a"), strA.indexOf("e"), strA.indexOf("i"), strA.indexOf("o"), strA.indexOf("u") )
  var vIndex = []
  for (var i = 0; i <arrVIndex.length; i++) {
    if (arrVIndex[i] != -1) {
      vIndex.push(arrVIndex[i])
    }
     
  }
  var firstOccV = Math.min.apply(Math, vIndex);
  
  
  for (var i = 0; i < firstOccV; i++) {
    if (strA[i] !== "e" && strA[i] !== "i" && strA[i] !== "o" && strA[i] !== "u") {
      str = str+(strA[i])
       
    }
  }
  
  str = str.slice(firstOccV) + "ay"
 } else {
   str = str + "way"
 }
  
  
  console.log(str);
}

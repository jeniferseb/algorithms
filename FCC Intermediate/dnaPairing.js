//DNA Pairing
//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
//Return the provided character as the first element in each array.
//
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.




function pairElement(str) {
  
  str = str.split('');
 
  var temp = []
  var arr = []
  
  for (var i = 0; i < str.length; i++) {
    temp.push(str[i])
    for (var j = 0; j < temp.length; j++) {
      if (temp[j] == "C") {
        temp.push("G")
        break;
      } else if (temp[j] == "G") {
        temp.push("C")
        break;
      } else if (temp[j] == "A") {
        temp.push("T")
        break;
      } else if (temp[j] == "T") {
        temp.push("A")
        break;
      }
    }
    arr.push(temp)
    temp = []
    
  }
  
  
   return(arr)

}

pairElement("GCG");
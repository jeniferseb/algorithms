//#12 Mutations
//
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
//The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
//Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".



function mutation(arr) {
  var str = arr[0].toLowerCase();
  str = str.split("");
  var pair = arr[1].toLowerCase();
   pair = pair.split("");
  
  var indexes = [];
  for (var i = 0; i < pair.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (pair[i] == str[j]) {
        indexes.push(i);
      }

    }
  }
  console.log(indexes);
  indexes = uniq(indexes);
  if (indexes.length == pair.length) {
    return (true);
  } else {
    return (false);
  }
}

function uniq(a) {
   return Array.from(new Set(a));
}
mutation(["hello", "Hello"]);
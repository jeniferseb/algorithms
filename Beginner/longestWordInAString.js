//#4 Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.
//Your response should be a number.


function findLongestWord(str) {
    var list = str.split(" ");
    var longest = 0;

    for (var i = 0; i < list.length; i++) {
        if (list[i].length > longest) {
            longest = list[i].length;
        }



    }

    return (longest);
}

findLongestWord("The quick brown fox jumped over the lazy dog");

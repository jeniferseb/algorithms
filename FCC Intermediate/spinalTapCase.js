//Spinal Tap Case
//
//
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//
//Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.






function spinalCase(str) {
    var separators = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = str.replace(separators, '-').toLowerCase();

    return str;
}
spinalCase('thisIsSpinalTap');

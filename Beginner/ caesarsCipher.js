//#16 Caesars Cipher
//
//
//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) { // LBH QVQ VG!
    var strAr = str.split("");
    var answer = [];

    for (var i = 0; i < strAr.length; i++) {
        var code = strAr[i].charCodeAt(0) - 13;
        if (code < 65) {
            code = code + 26;
        }
        if (strAr[i].charCodeAt(0) < 65 || strAr[i].charCodeAt(0) > 90) {
            answer.push(strAr[i]);
        } else {
            answer.push(String.fromCharCode(code));
        }
    }


    return (answer.join(""));
}

// Change the inputs below to test
rot13("LBH QVQ VG");

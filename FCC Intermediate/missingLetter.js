//
//Missing letters
//Find the missing letter in the passed letter range and return it.
//
//If all letters are present in the range, return undefined.




function fearNotLetter(str) {

    var begCode = str.charCodeAt(0);


    var strArr = []
    for (var l = 0; l < str.length; l++) {
        strArr.push(str.charCodeAt(l))
    }

    var charArr = []
    for (var j = 1; j < 100; j++) {
        charArr.push(begCode++)
    }

    var missing = [];
    for (var i = 0; i < strArr.length; i++) {
        for (var k = 0; k < charArr.length; k++) {
            if (strArr[i] !== charArr[i]) {
                missing.push(charArr[i])
                break;
            }
        }
    }

    if (!missing[0]) {
        return (missing[0]);
    } else {
        return (String.fromCharCode(missing[0]))
    }

}
fearNotLetter("bcdf")

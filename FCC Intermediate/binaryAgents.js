//Binary Agents
//
//Binary Agents
//Return an English translated sentence of the passed binary string.
//
//The binary string will be space separated.
//




function binaryAgent(str) {

    var arr = str.split(" ");
    var codes = [];

    for (i = 0; i < arr.length; i++) {
        codes.push(String.fromCharCode(parseInt(arr[i], 2)));
    }



    var finalBin = codes.join("")
    return finalBin
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100');

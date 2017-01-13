//
//Everything be true
//
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//
//Remember, you can access object properties through either dot notation or [] notation.




function truthCheck(collection, pre) {

    var arr = []
    var boolVal = true
    for (var i = 0; i < collection.length; i++) {
        arr.push(collection[i][pre]);
        if (!collection[i][pre]) {
            boolVal = false;
        }
    }

    return (boolVal)


}
truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex")

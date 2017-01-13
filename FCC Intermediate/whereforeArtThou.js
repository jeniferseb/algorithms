//
//Wherefore art thou
//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//
//

function whatIsInAName(collection, source) {
    var arr = [];
    var sourcekeys = Object.keys(source);

    for (var i = 0; i < collection.length; i++) {
        var multiKeyCheck = true;
        for (var k = 0; k < sourcekeys.length; k++) {
            if (!collection[i].hasOwnProperty(sourcekeys[k]) || (collection[i].hasOwnProperty(sourcekeys[k]) && collection[i][sourcekeys[k]] != source[sourcekeys[k]])) {
                multiKeyCheck = false;
            }
        }
        if (multiKeyCheck) {
            arr.push(collection[i]);
        }


    }



    console.log(arr);

}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});

//
//Drop It
//Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
//
//The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
//
//Return the rest of the array, otherwise return an empty array.


function dropElements(arr, func) {

    for (var i = 0; i < arr.length; i++) {
        if (func(arr[0]) === true) {
            break;

        } else {
            arr.shift();
        }

    }
    return (arr);

}

dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
});

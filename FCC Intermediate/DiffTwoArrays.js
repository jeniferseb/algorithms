//#2 Diff Two Arrays 
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.




function diffArray(arr1, arr2) {
    var combined = arr1.concat(arr2);
    var filtered = combined.filter(run);

    function run(elem) {
        if (arr1.indexOf(elem) === -1 || arr2.indexOf(elem) === -1) {
            return elem;
        }
    }




    return (filtered);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//#10 Chunky Monkey
//
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var combinedArr = [];
    var tempArr = [];
    for (var i = 0; i < arr.length; i++) {
        tempArr.push(arr[i]);
        if (tempArr.length == size) {
            combinedArr.push(tempArr);
            tempArr = [];
        }
    }

    if (tempArr.length > 0)
        combinedArr.push(tempArr);
    return (combinedArr);

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

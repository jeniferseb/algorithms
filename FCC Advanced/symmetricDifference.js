//
//Symmetric Difference
//
//Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
//
//Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).





function sym(args) {
    var args = Array.prototype.slice.call(arguments);
    var original = args[0];
    for (var i = 1; i < args.length; i++) {
        original = symTwo(original, args[i]);
    }

    original = original.filter(function (item, pos) {
        return original.indexOf(item) == pos;
    })

    return original;
}

function symTwo(arr1, arr2) {
    var combined = arr1.concat(arr2);
    var filtered = combined.filter(run);

    function run(elem) {
        if (arr1.indexOf(elem) === -1 || arr2.indexOf(elem) === -1) {
            return elem;
        }
    }

    return (filtered);
}
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))

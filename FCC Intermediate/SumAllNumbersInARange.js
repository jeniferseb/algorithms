//#1 Sum All Numbers in a Range
//
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
//The lowest number will not always come first.


function sumAll(arr) {
    var sm = Math.min(arr[0], arr[1]);
    console.log(sm);
    var lg = Math.max(arr[0], arr[1]);
    var sum = 0;
    for (var i = sm; i <= lg; i++) {
        sum = sum + i;
    }


    return (sum);
}

sumAll([1, 4]);

//#7 Confirm the Ending

//Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


// 2 ways: 

//first method using .endsWith()
function confirmEnding(str, target) {
    var ending = str.endsWith(target);
    console.log(ending);
}

confirmEnding("Bastian", "a");

//second method not using .endsWith()
function confirmEnding(str, target) {
    return (str.substr(-target.length) === target);
}
confirmEnding("Bastian", "a");

var message = "This is global scope"
console.log(message);
var a = function(){
    var message = "This is function scope: a()"
    console.log("Inside a: message = " + message);
    function b () {
        console.log("b: message = " + message);
        // console.log(message);
    }
    b();
}

function b () {
    console.log("b: message = " + message);
    // console.log(message);
}

a();
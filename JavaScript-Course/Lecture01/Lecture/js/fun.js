var message = "This is from the global scope";
console.log(message);

var out = function(){
    var message = "This is from the out function.";
    console.log("Inside the function out: " + message);
    print();
    function print(){
        console.log('message = ' + message);
    }
}

out();
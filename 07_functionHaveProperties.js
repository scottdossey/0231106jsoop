function foo() {
    console.log("hello");
}
foo();
console.log(typeof foo);

//You can actually set a property of a function...
foo.test = 7;
console.log(foo.test);

//Why would use properties on functions?

//It is usefull to tag functions with additional information
//about the function when you pass it around.

//We are going to see one specific use of this for making the creation
//of object even easier.
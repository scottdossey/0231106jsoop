//So this file is going to introduce a feature of
//object in Javascript you have learned about yet.

//As it stands, we can't really improve on
//02_creatingTwoPeople2.js without learning a bit
//more JS.

//We're going to demonstrate a "secret" feature to
//objects that will allow us to further refine
//how we create a blueprint for creating people.

//This "secret" is called the "prototype" of an object.

let x = {
    superhidden: "Supersecret!",
    myArray: [1,2,3]
}

let y= {
    hidden: "Secret",
    hello: 5
};

let z = {
    data: "Yadda yadda"
};

//I am going to assign a secret property of z called
//__proto__---that all objects have.

 //We link the two object together.
Object.setPrototypeOf(z, y); //Same thing as: z.__proto__=y;
Object.setPrototypeOf(y, x); //Same thing as: y.__proto__=x;

console.log("Reading prototype");
console.log(z.__proto__ === y);
console.log(z.__proto__.__proto__ === x);

//The better way to do this in modern Javascript
//is to use Object.getPrototypeOf()
console.log(Object.getPrototypeOf(z)); // should print y
console.log(Object.getPrototypeOf(Object.getPrototypeOf(z))); // should print x

console.log(z);
console.log(z.hidden);
console.log(z.hello);

//This is what the __proto__ field is for.
//It is there to specify that there is another object
//to look for fields in after looking inside the first
//object...


//we look in z.....
console.log(z.data); //It finds it in z....

console.log(z.hello); //It is not in z.....
                      //so JS then checks z.__proto__
                      //object to see if it has
                      //the hello key in it....
console.log(z.superhidden); //It is not in z....
                            ///so JS checks z.__proto__
                            //which is y!
                            //It is not in y!
                            //so JS checks y.__proto__
                            //which is x!

//__proto__ is a property you can read and write...

z.myArray[0]=7;
console.log(x.myArray[0]);

z.hidden="notreallyhidden"; //sets property of z
console.log(z);
console.log(z.hidden); //there is now a property in
                       //z so does not fall through
                       //to y.
console.log(y.hidden); //this prints something else.

//YOu can use .__proto__ to set or read the prototype...
//but this is actually considered OLD school and bad
//form (deprecated)..and in modern javascript you should
//use a different way of setting the prototype.

//There is an operator in Javascript called "in" which can be used
//to test to see whether a key is stored in an ojbect.

console.log(z);
if("data" in z) {
    console.log("z has the key data!");
}

if("superhidden" in z) {
    console.log("superhidden was found in z (through prototype chain to x)");
}

//There is a very similar feature to "in" that you can test to see
//if a property is DIRECTLY inside an object, and not accessed through the
//prototpe chain:

if(z.hasOwnProperty("data")) {
    console.log("Z has the key 'data' stored in it directly");
}
if(z.hasOwnProperty("superhidden")) {
    console.log("Z has the key 'superhidden' stored in it directly");
} else {
    console.log("z does not have 'supperhidden' stored in it directly");
}


let counter = 120;
console.log(typeof(counter)); // "number"
counter = false; 
console.log(typeof(counter)); // "boolean"
counter = "Hi";
console.log(typeof(counter)); // "string
let counters;
console.log(counters);        // undefined
console.log(typeof counters); // undefined
let obj = null;
console.log(typeof obj); // object
console.log(null == undefined); // true
let price = 200.00; // interpreted as an integer 200
console.log(price)
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
let completed = false;
console.log(typeof completed);//boolean
/*When you declare a primitive data type in JavaScript, it is stored on a stack. A stack is a simple data structure that the computer uses to store and retrieve data quickly.
A primitive data type on the stack is identified by the variable name you used for declaration in your program. With each primitive data type you create, data is added to the stack.
To implement this, say we declare a variable, numOne, and give it a value of 50. We go on to create another variable, numTwo, and assign it the same value of 50. So both variables have the same value.
What happens on the stack is that, the computer creates room for numOne and stores its assigned value on the stack. When numTwo is created, the computer again creates room, and stores 50 on the stack. It does not matter that both variables are assigned the same value.
What if during the coding process, we decided to update the value of numOne to say, 100? Does it mean numTwo will change too? The answer is no.
Since numOne and numTwo were stored differently on the stack, updating one of them will not affect the other. And we can experiment with that by actually trying it out in our code editor.
Logging numOne to the console will output 100, and logging numTwo will output 50. So, in effect, the two variables have no relationship to each other.*/
let numOne = 50;
let numTwo = numOne; //numTwo=numOne=50
numOne = 100;
console.log(numOne); //outputs 100
console.log(numTwo);
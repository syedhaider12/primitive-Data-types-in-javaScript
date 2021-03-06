When you declare a primitive data type in JavaScript, it is stored on a stack. A stack is a simple data structure that the computer uses to store and retrieve data quickly.
A primitive data type on the stack is identified by the variable name you used for declaration in your program. With each primitive data type you create, data is added to the stack.
To implement this, say we declare a variable, numOne, and give it a value of 50. We go on to create another variable, numTwo, and assign it the same value of 50. So both variables have the same value.
What happens on the stack is that, the computer creates room for numOne and stores its assigned value on the stack. When numTwo is created, the computer again creates room, and stores 50 on the stack. It does not matter that both variables are assigned the same value.
What if during the coding process, we decided to update the value of numOne to say, 100? Does it mean numTwo will change too? The answer is no.
Since numOne and numTwo were stored differently on the stack, updating one of them will not affect the other. And we can experiment with that by actually trying it out in our code editor.
Logging numOne to the console will output 100, and logging numTwo will output 50. So, in effect, the two variables have no relationship to each other.

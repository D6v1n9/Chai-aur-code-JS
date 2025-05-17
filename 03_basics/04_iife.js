// Immediately Invoked Function Expressions (IIFE)
//Why Use an IIFE?
 // 1. Avoid polluting the global scope    eg:✅ Prevents name collisions
 // 2. Execute setup code once

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();      //the () at the end calls it immediately.
          // ; is to be used to end it and run another 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// Hoisting is a JavaScript behavior where variable and function declarations are moved ("hoisted") 
// to the top of their containing scope (either the global scope or the function scope) 
// during the compilation phase, before code execution.

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

/*    SELF LEARNING  */

function outer() {
  const msg = "Hello from outer scope";

  function inner() {
    console.log(msg); // ✅ This prints "Hello from outer scope"
  }

  inner();
}

outer();

// Creating Shadow of a variable with same name

function outer() {
  const msg = "Hello from outer scope";

  function inner() {
    console.log(msg); // ❌ ReferenceError: Cannot access 'msg' before initialization

    const msg = "Hello from inner scope"; // shadowed here
  }

  inner();
}

// ✅ Yes, you can access const from an outer scope inside an inner scope, unless you shadow it with a variable of the same name.

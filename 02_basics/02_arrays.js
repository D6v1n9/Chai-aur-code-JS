const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    
//... is spread operator kaanch ka glass and drop it to vo spread ho jata
// concat and spread gives same output 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting
//Array.from({ name: "hitesh" }) returns an empty array.
/*
✅ How to correct it?
Option 1: Convert object values to an array
If you want the values (["hitesh"]):
console.log(Array.from(Object.values({ name: "hitesh" })));           //Not compulsory to use Array.from() using only Object.values will also give the array
// Output: ['hitesh']

Option 2: Convert object entries to array of [key, value] pairs
console.log(Array.from(Object.entries({ name: "hitesh" })));
// Output: [['name', 'hitesh']]

Option 3: Convert object keys to an array
console.log(Array.from(Object.keys({ name: "hitesh" })));
// Output: ['name']
*/
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// Array.sort()  --> visit MDN and ask GPT to explain 
function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
array.sort(compare);
// What it does: Calls JavaScript’s Array.sort method on sortedData, passing a comparison 
// function that determines the order of two elements (a and b, representing two rows/objects in the data).
// Why: The sort method reorders the array based on the return value of the comparison function:
// Return -1: a comes before b.
// Return 1: b comes before a.
// Return 0: No change in order.

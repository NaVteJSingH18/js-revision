//javascript
// ==============================
// 📘 JAVASCRIPT DESTRUCTURING + REACT useState NOTES
// ==============================



// ======================================================
// 🔹 1. WHAT IS DESTRUCTURING?
// ======================================================

// Destructuring is a JavaScript feature used to
// extract values from arrays or objects into variables.

// It uses assignment (=) but the left side is a PATTERN,
// not a normal variable.


// ======================================================
// 🔹 2. ARRAY DESTRUCTURING
// ======================================================

const [a, b] = [1, 2];

// Internally:
const temp1 = [1, 2];
const a1 = temp1[0];
const b1 = temp1[1];

// IMPORTANT:
// [a, b] is NOT an array here
// It is a destructuring pattern


// ======================================================
// 🔹 3. NORMAL ASSIGNMENT vs DESTRUCTURING
// ======================================================

// Normal Assignment
const arr = [1, 2, 3]; // arr gets full array

// Destructuring
const [x, y, z] = [1, 2, 3];
// x = 1, y = 2, z = 3


// ======================================================
// 🔹 4. RULE FOR DESTRUCTURING
// ======================================================

// Destructuring happens ONLY when:
// - [] is on LEFT side
// - It contains variables

// VALID
const [p, q] = [10, 20];

// INVALID
// [1, 2] = [10, 20]; // ❌


// ======================================================
// 🔹 5. DESTRUCTURING WITH FUNCTIONS
// ======================================================

function getValues() {
  return [100, 200];
}

const [val1, val2] = getValues();

// Internally:
const temp2 = getValues();
const val1_copy = temp2[0];
const val2_copy = temp2[1];


// ======================================================
// 🔹 6. WHAT VARIABLES STORE?
// ======================================================

// Variables store whatever is returned

function example1() {
  return [10, 20];
}

const [m, n] = example1();
// m = 10, n = 20


function example2() {
  return [10, function () { console.log("Hello"); }];
}

const [u, v] = example2();
// u = 10
// v = function

v(); // calling stored function


// ======================================================
// 🔹 7. INTRODUCTION TO useState (REACT)
// ======================================================

// useState is a FUNCTION
// It is used to manage state in React components

// Syntax:
// const [state, setState] = useState(initialValue);


// ======================================================
// 🔹 8. WHAT useState RETURNS
// ======================================================

// useState returns an ARRAY:

// [value, updateFunction]

// Example:
const exampleState = [0, function update() {}];


// ======================================================
// 🔹 9. useState + DESTRUCTURING
// ======================================================

// Example:
const [count, setCount] = useState(0);

// Internally:
const temp3 = useState(0);

const count_copy = temp3[0];      // state value
const setCount_copy = temp3[1];   // function


// ======================================================
// 🔹 10. INTERNAL WORKING (SIMPLIFIED)
// ======================================================

// React internally does something like:

function useState_sim(initialValue) {
  let state = initialValue;

  function setState(newValue) {
    state = newValue;
    // React triggers re-render here
  }

  return [state, setState];
}


// ======================================================
// 🔹 11. IMPORTANT CLARIFICATION
// ======================================================

// ❌ WRONG:
// setCount is passed into useState

// ✅ CORRECT:
// useState CREATES setCount and RETURNS it

const [count2, setCount2] = useState(0);


// ======================================================
// 🔹 12. HOW setCount WORKS
// ======================================================

setCount2(5);

// This:
// - updates state
// - triggers re-render

// NOTE:
// Value (5) goes into setCount function
// NOT into useState again


// ======================================================
// 🔹 13. FINAL KEY POINTS
// ======================================================

// ✔ Destructuring = extracting values
// ✔ Left side [] = pattern, not array
// ✔ useState = function
// ✔ useState returns [state, function]
// ✔ setState is returned, not passed
// ✔ Variables store whatever is returned


// ======================================================
// 🔥 ONE LINE SUMMARY
// ======================================================

// useState returns an array → destructuring unpacks it into variables



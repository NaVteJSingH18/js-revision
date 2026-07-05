# JavaScript Execution Model Notes

## Learning Roadmap

1.  Program
2.  Process
3.  Thread
4.  Why JavaScript is Single-Threaded
5.  JavaScript Engine
6.  Execution Context
7.  Call Stack
8.  Blocking vs Non-Blocking Code
9.  Browser Runtime APIs
10. Callback Functions
11. Callback (Macrotask) Queue
12. Event Loop
13. Microtask Queue

------------------------------------------------------------------------

# 1. Program

A **program** is a collection of instructions written to perform a task.

``` js
console.log("Hello");
console.log("World");
```

------------------------------------------------------------------------

# 2. Process

A **process** is a program that is currently running.

Example: - Chrome - VS Code - Spotify

Program → Run → Process

------------------------------------------------------------------------

# 3. Thread

A **thread** is the execution unit inside a process.

-   One thread = one sequence of instructions.
-   Multiple threads can execute tasks simultaneously.

------------------------------------------------------------------------

# 4. Why JavaScript is Single-Threaded

JavaScript has **one main thread**.

It executes only **one task at a time**.

``` js
console.log("A");
console.log("B");
console.log("C");
```

Output:

``` text
A
B
C
```

An infinite loop blocks the thread:

``` js
while(true){}
```

------------------------------------------------------------------------

# 5. JavaScript Engine

The JavaScript engine reads and executes JavaScript.

Examples:

-   Chrome → V8
-   Firefox → SpiderMonkey
-   Safari → JavaScriptCore
-   Node.js → V8

The engine converts JavaScript into machine instructions.

------------------------------------------------------------------------

# 6. Execution Context

An **Execution Context** is the environment in which JavaScript executes
code.

It contains everything required to execute the code.

## It has two phases

### Memory Creation Phase

-   Variables declared with `var` are initialized to `undefined`.
-   Function declarations are stored completely in memory.

Example:

``` js
var a;
function greet(){}
```

Memory:

``` text
a → undefined
greet → function definition
```

### Code Execution Phase

JavaScript executes code line by line and assigns actual values.

------------------------------------------------------------------------

# Global Execution Context (GEC)

Every JavaScript program begins with the **Global Execution Context**.

It is automatically created by the JavaScript engine.

------------------------------------------------------------------------

# Function Execution Context

Whenever a function is called, JavaScript creates a new execution
context for that function.

After the function finishes, its execution context is destroyed.

------------------------------------------------------------------------

# 7. Call Stack

The Call Stack stores execution contexts.

It follows **LIFO (Last In, First Out)**.

Operations:

-   Push → Add execution context
-   Pop → Remove execution context

Example:

``` js
function one(){ two(); }
function two(){ console.log("Hello"); }

one();
```

Call Stack:

``` text
Global
↓

one()

↓

two()

↓

two() finishes

↓

one() finishes

↓

Global finishes
```

------------------------------------------------------------------------

# 8. Blocking vs Non-Blocking Code

## Blocking

The JavaScript thread is busy and cannot execute anything else.

Example:

``` js
for(let i=0;i<1000000000;i++){}
```

Everything waits.

## Non-Blocking

JavaScript asks the browser or Node.js runtime to handle long-running
tasks.

Example:

``` js
setTimeout(() => {
    console.log("Done");
}, 2000);
```

JavaScript continues executing the next lines without waiting.

------------------------------------------------------------------------

# 9. Browser Runtime APIs

JavaScript itself does **not** provide:

-   Timers
-   Network requests
-   DOM events

These are provided by the browser (or Node.js runtime).

Examples:

-   setTimeout()
-   setInterval()
-   fetch()
-   Click events

------------------------------------------------------------------------

# 10. Callback Functions

A callback is a function passed to another function to be executed
later.

Example:

``` js
function greet(name){
    console.log(name);
}

function processUser(callback){
    callback("Navtej");
}

processUser(greet);
```

`greet` is the callback.

------------------------------------------------------------------------

# 11. Callback Queue (Macrotask Queue)

When asynchronous operations finish, their callbacks wait in the
Callback Queue.

Examples:

-   setTimeout
-   setInterval
-   DOM events

The callback **does not** go directly to the Call Stack.

It waits until the Call Stack becomes empty.

------------------------------------------------------------------------

# 12. Event Loop

The Event Loop continuously checks:

1.  Is the Call Stack empty?
2.  Is there anything waiting in the queues?

If the Call Stack is empty, it moves the next callback to the Call
Stack.

Important:

The Event Loop **does not execute** callbacks.

It only moves them to the Call Stack.

------------------------------------------------------------------------

# 13. Microtask Queue

The Microtask Queue has **higher priority** than the Callback Queue.

Examples:

-   Promise.then()
-   Promise.catch()
-   Promise.finally()
-   queueMicrotask()

Example:

``` js
console.log("Start");

setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Output:

``` text
Start
End
Promise
Timer
```

Why?

Because the Event Loop always processes **all microtasks before the next
macrotask**.

------------------------------------------------------------------------

# Event Loop Priority

``` text
Call Stack
    ↓
Microtask Queue
    ↓
Callback (Macrotask) Queue
```

Rule:

1.  Execute all synchronous code.
2.  Empty the Microtask Queue.
3.  Execute one Macrotask.
4.  Repeat.

------------------------------------------------------------------------

# Complete Flow

``` text
JavaScript Code
        │
        ▼
   Call Stack
        │
        ▼
 Browser APIs
        │
        ├──────────────┐
        ▼              ▼
Microtask Queue   Callback Queue
        │              │
        └──────┬───────┘
               ▼
          Event Loop
               ▼
          Call Stack
               ▼
      JavaScript Executes
```

------------------------------------------------------------------------

# Quick Revision

-   Program → Instructions
-   Process → Running program
-   Thread → Executes instructions
-   JavaScript → Single-threaded
-   JavaScript Engine → Executes JavaScript
-   Execution Context → Environment for execution
-   Memory Creation Phase → Variables & functions prepared
-   Code Execution Phase → Executes line by line
-   Call Stack → Stores execution contexts (LIFO)
-   Browser APIs → Timers, fetch, DOM events
-   Callback → Function executed later
-   Callback Queue → Waiting area for macrotasks
-   Microtask Queue → Higher-priority waiting area
-   Event Loop → Moves callbacks to the Call Stack when appropriate

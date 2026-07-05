# JavaScript Revision & Practice Repository

Welcome to the organized JavaScript revision and practice repository. This codebase is structured as a progressive learning pathway, starting from basic variables and datatypes, moving up to intermediate object/array APIs, advanced scope/asynchronous patterns, object-oriented programming (OOP), DOM manipulation, and finally real-world projects.

## 📁 Directory Architecture

```text
JS/
├── ROADMAP.md                  # Learning phases and roadmap
├── README.md                   # Repository overview (this file)
├── 01_basics/                  # Core basics (variables, data types, standard library APIs)
│   ├── 01_variables_datatypes.js
│   ├── 02_strings.js
│   ├── 03_num_math.js
│   ├── 04_dates.js
│   ├── 05_destructuring.js
│   └── 06_loops.js
├── 02_intermediate/            # Intermediate JS concepts (scoping, closures, intermediate APIs)
│   ├── 01_hoisting.js
│   ├── 02_closures/
│   │   ├── closure_basics.js
│   │   └── closure_lexical.html
│   ├── 03_objects/
│   │   ├── objects_basics.js
│   │   └── objects_methods.js
│   ├── 04_arrays/
│   │   ├── array_basics.js
│   │   ├── array_methods.js
│   │   ├── filter.js
│   │   ├── maps.js
│   │   └── reduce.js
│   └── 05_async/
│       ├── async.html
│       ├── async_await.js
│       └── promise.js
├── 03_advanced/                # Advanced topics (execution context, OOP, DOM details, networks)
│   ├── 01_this_context/
│   │   ├── arrow_this.js
│   │   ├── call_this.js
│   │   └── bind.html
│   ├── 02_oop/
│   │   ├── classes.js
│   │   ├── inheritance.js
│   │   ├── prototype.js
│   │   ├── property_descriptors.js
│   │   ├── getters_setters_class.js
│   │   └── getters_setters_property.js
│   ├── 03_api_xhr/
│   │   └── api.html
│   └── 04_dom/                 # Pure DOM manipulation experiments
│       ├── 01_selection.html
│       ├── 01_selection.js
│       ├── 02_traversal.html
│       ├── 03_create_element.html
│       └── 04_edit_remove.html
├── 04_projects/                # Mini-projects with HTML, CSS, and JS
│   ├── 01_background_changer/  # Dynamic background color generator
│   ├── 02_keyboard_tester/     # Real-time keyboard event code tester
│   ├── 03_color_changer/       # Interactive theme/color switcher
│   ├── 04_bmi_calculator/      # Body Mass Index calculator
│   ├── 05_digital_clock/       # Real-time local digital clock
│   └── 06_guess_the_number/    # Interactive random number guessing game
└── 05_playground/              # General practice and scratchpad zone
    └── practice.js
```

---

## 📘 Category Overview

### 1. `01_basics`
* **Variables & Datatypes:** Stack vs Heap memory management, primitive/non-primitive reference values.
* **Strings, Numbers, and Dates:** Standard library string APIs, math object utilities, precision limits, and local date formats.
* **Loops & Control Flow:** Code iteration using standard loops.
* **Destructuring:** Array and object destructuring patterns.

### 2. `02_intermediate`
* **Hoisting:** Explains variable and function hoisting, Temporal Dead Zone (TDZ) for `let` and `const`.
* **Closures & Scope:** Lexical scoping, closure function bindings, and scope preservation.
* **Arrays & Objects:** In-depth maps, filters, reduces, chaining operations, and built-in object utilities (`keys`, `values`, `entries`).
* **Asynchronous Programming:** Promises chaining, resolve/reject handlers, async-await, and execution sequences.

### 3. `03_advanced`
* **This Context:** Arrow function `this` scope vs constructor scope, using `.call()`, `.apply()`, and `.bind()` to bind execution environments.
* **OOP & Prototypes:** Classes, inheritance, getters/setters (using classes and `Object.defineProperty`), constructor functions, prototypes, and configuring property descriptors (writable, enumerable).
* **APIs:** Legacy XMLHttpRequest state cycles.
* **DOM Manipulation:** Selecting nodes, traversing parent/child/siblings relationships, creating nodes dynamically, editing, and deleting elements.

### 4. `04_projects`
Interactive applications that combine HTML, CSS, and JavaScript event listeners:
* **Background Changer:** Periodically shifts background colors using a randomly generated hex value.
* **Keyboard Tester:** Detects key presses and shows key code properties (`e.key`, `e.keyCode`, `e.code`).
* **Color Changer:** Changes page backgrounds based on clicks on predefined color switches.
* **BMI Calculator:** Parses user input weight and height to compute and display BMI range category.
* **Digital Clock:** Updates local time dynamically every second inside the DOM.
* **Guess the Number:** Random number guessing game tracking attempts and scores.

---

## 🚀 How to Run
1. To run core JavaScript files (e.g., in `01_basics/` or `02_intermediate/`), install **Node.js** and run:
   ```bash
   node <filename>.js
   ```
2. To run HTML-based DOM files or projects, simply open the `.html` files in any modern web browser or use VS Code's **Live Server** extension.

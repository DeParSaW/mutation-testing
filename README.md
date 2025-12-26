# Mutation Testing – JavaScript Examples

This repository demonstrates **Mutation Testing** concepts using plain JavaScript.
The goal is to show how passing tests and high code coverage do **not** necessarily mean strong tests.

Instead of testing the code, mutation testing evaluates the **quality of the tests themselves**.

---

## What is Mutation Testing?

Mutation Testing works by introducing small changes (mutations) into the source code.
These mutations simulate common programming mistakes such as:

* Changing comparison operators (`>=` to `>`)
* Reordering conditions
* Removing logical checks
* Modifying boolean expressions

After applying a mutation, tests are executed again:

* If tests fail → the mutation is **killed** (tests are strong)
* If tests pass → the mutation **survives** (tests are weak)

---

## Project Structure

```
.
├── shipping.js
├── shipping.mutated.js
└── shipping.test.js
```

---

## File Description

### shipping.js

Original implementation of the shipping cost calculation logic.

### shipping.mutated.js

Mutated version of the original code with a subtle logical change.
The code still runs, but the business logic is altered.

### shipping.test.js

Test file used to validate the behavior of the shipping cost logic.

---

## Example Scenario

The shipping cost is calculated based on the following rules:

* Orders above a certain amount get free shipping
* VIP users get discounted shipping
* Regular users pay a fixed shipping fee

The mutation changes the order of condition checks.
This small change can lead to incorrect business behavior while tests may still pass.

This demonstrates how mutation testing reveals weaknesses that traditional testing might miss.

---

## How to Run

### Requirements

* Node.js (v14 or higher)

### Run tests against original code

```bash
node shipping.test.js
```

### Run tests against mutated code

Edit this line in `shipping.test.js`:

```js
require("./shipping")
```

Change it to:

```js
require("./shipping.mutated")
```

Then run again:

```bash
node shipping.test.js
```

---

## Expected Outcome

* Tests pass for the original implementation
* Tests may still pass for the mutated implementation
* This indicates that the mutation survived
* A surviving mutation means test coverage exists, but test quality is insufficient

---

## Why This Matters

* High test coverage does not guarantee correctness
* Mutation testing exposes hidden weaknesses in test cases
* It forces developers to think about edge cases and real-world failures
* Especially useful for business logic and critical systems

---

## Purpose of This Repository

This repository is created for educational purposes, specifically for:

* Software Testing courses
* Demonstrations of Mutation Testing
* Understanding test effectiveness beyond coverage metrics

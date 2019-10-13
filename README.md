<p align="center" style="border-bottom: none">
  <img src="./assets/logo.png"></img>
</p>

<h1 align="center">
Partial Function Builder
</h1>

Partial function builder is a simple utility that allows having functions with partially applied arguments to their named arguments using object destructuring.

**Note**
> This utility only supports -_till now_- supplying **named** partial arguments to **one single argument** that the original function accepts. You can check [lodash's `partial`](https://lodash.com/docs/4.17.15#partial) to apply partial arguments to positional arguments.
>
> See [usage](#usage) for more details.

# Installation
`npm i @abdelrahman-elkady/partial-function-builder`

# Usage

## Simple Usage
```js
 const { toPartialBuilder } = require('@abdelrahman-elkady/partial-function-builder');

 const addAndMultiply = ({ n1, n2, n3 }) => (n1 + n2) * n3;
 const addPartialBuilder = toPartialBuilder(addAndMultiply);
 const multiplyWithThree = addPartialBuilder({ n3: 3 });
 multiplyWithThree({ n1: 1, n2: 1 }); // 6 .. expression evaluated is (1 + 1) * 3
```

## Composition
```js
 const { toPartialBuilder } = require('@abdelrahman-elkady/partial-function-builder');

 const add = ({ n1, n2, n3 }) => n1 + n2 + n3;

 const addPBuilder = toPartialBuilder(add);
 const partialOne = addPBuilder({ n1: 5 })

 partialOne({ n2: 2, n3: 3 }); // 10

 // Create a partial builder for the partial function `partialOne`
 const partialOnePBuilder = toPartialBuilder(partialOne);
 const partialTwo = partialOnePBuilder({ n2: 3 });
 partialTwo({ n3: 1 }); // 9
```

## Overriding
```js
 const { toPartialBuilder } = require('@abdelrahman-elkady/partial-function-builder');

 const add = ({ n1, n2, n3 }) => n1 + n2 + n3;

 const addPBuilder = toPartialBuilder(add);
 const partialOne = addPBuilder({ n1: 5 })

 partialOne({ n2: 2, n3: 3, n1: 10 }); // 15
```

## Logo
Credits: [font awesome](https://fontawesome.com/license)
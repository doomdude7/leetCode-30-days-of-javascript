/*
#Task№1# 
2667. Create Hello World Function
Write a function createHelloWorld.
It should return a new function that always returns "Hello World".
*/

const createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};
const f = createHelloWorld();

// First task was easy enough. I decided to also submit it as one line,
// it still passed the leetcode test cases but the 1st solution got a higher score

// const createHelloWorld = () => () => "Hello World";

/*
#Task№2# 
2620. Counter
Given an integer n, return a counter function.
 This counter function initially returns n and then 
 returns 1 more than the previous value every subsequent time 
 it is called (n, n + 1, n + 2, etc).
*/

const createCounter = (n) => {
  //first return is n (10) as it increments n only after it returns it
  // returning ++n would result in n (11) for the 1st function call
  return () => n++;
};
const counter = createCounter(10);

console.log(counter()); //10
console.log(counter()); //11
console.log(counter()); //12

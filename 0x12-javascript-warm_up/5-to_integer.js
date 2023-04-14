#!/usr/bin/node

const num = Math.floor(Number(process.argv[2]));
const myVar (isNaN(num) ? 'Not a number' : `My number: ${num}`);
console.log(myVar);

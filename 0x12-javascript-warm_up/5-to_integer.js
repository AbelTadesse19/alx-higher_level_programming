#!/usr/bin/node

const args = process.argv.slice[2];
const num = Math.floor(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);

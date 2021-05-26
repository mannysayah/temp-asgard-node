// NPM

// Install locally
// $ npm i <packageName>

// Install globally
// $ npm install -g <packageName>

// Three options for creating 'package.json'

// 1- create 'package.json' manually in root and add propereits
// 2- $ npm init        follow the step by step process | Enter to skip
// 3- $ npm init -y     accept all default

// testing out the lodash module
// make sure you installed it before running this file
// npm i lodash

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

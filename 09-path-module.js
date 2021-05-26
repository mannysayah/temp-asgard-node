// Built-in Modules
// PATH

const path = require('path');

// what is my path separator
console.log(path.sep);

// join
// const filePath = path.join('/content','subfolder', 'test.txt');
const filePath = path.join('/content/','/subfolder//', '//test.txt/');
console.log(filePath);

// the base name
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// const absolutePath = path.resolve(path.join(__dirname, filePath));
console.log(absolutePath);


// File System Module:
    // This is third one built-in module. It is use for read and write the data from
    // extension files such as .txt and others.
// Let's  Observ and write the basic coding to read and write the contents in files.

// Create the viarables for file system as readFileSync and writeFileSync
var {readFileSync, writeFileSync} = require('fs');
// create another two variables for readed contents to store in it.
let data1 = readFileSync('./data/aboutMe.txt', 'utf8');
let data2 = readFileSync('./data/skills.txt', 'utf8');

console.log(data1);
console.log(data2);

// Now it's time to learn about writeFileSync method
writeFileSync('./data/empty.txt', 'Hello I am Parkash from Node.js code file which I am written by fs method');

// read the data from written by wriFileSync fs method.
let data3 = readFileSync('./data/empty.txt', 'utf8');

// Print the contents from empty.txt
console.log("The following contents are created from fs write method");
console.log(data3);

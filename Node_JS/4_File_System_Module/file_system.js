// File System Module:
    // This is third one built-in module. It is use for read and write the data from
    // extension files such as .txt and others.
// Let's  Observ and write the basic coding to read and write the contents in files.

// Create the viarables for file system as readFileSync and writeFileSync
var {readFileSync, writeFileSync} = require('fs');
// create another two variables for store the contents
let data1 = readFileSync('./data/aboutMe.txt', 'utf8');
let data2 = readFileSync('./data/skills.txt', 'utf8');

console.log(data1);
console.log(data2);


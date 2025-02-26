// File System Module:
    // This is third one built-in module. It is use for read and write the data from
    // extension files such as .txt and others.
// Let's  Observ and write the basic coding to read and write the contents in files.

// Create the viarables for file system as readFileSync and writeFileSync
var {readFileSync, writeFileSync} = require('fs');
// create another two variables for readed contents to store in it.
let data1 = readFileSync('./data/aboutMe.txt', 'utf8');
let data2 = readFileSync('./data/skills.txt', 'utf8');

//Here utf8 works as character encoding that insure read and write contents in files with UTF-8 formate.

console.log(data1);
console.log(data2);

// Now it's time to learn about writeFileSync method
writeFileSync('./data/empty.txt', 'Hello I am Parkash from Node.js code file which I am written by fs method');

// read the data from written by wriFileSync fs method.
let data3 = readFileSync('./data/empty.txt', 'utf8');

// Print the contents from empty.txt
console.log("The following contents are created from fs write method");
console.log(data3);

// Another way to write the data into one file to another file.
writeFileSync('./data/onlyWrite.txt', `This is data from aboutMe file ${data1}`,{flag:'a'}); //over write the contents
writeFileSync('./data/onlyWrite.txt', `This is data from skill file ${data2}`, {flag:'a'}); //over write the contents
writeFileSync('./data/onlyWrite.txt', `This is data from empty file ${data3}`, {flag:'a'}); 
//just this is last one can write the contents into the file

// create one instance for onlyWrite file to store all contents from it
// let data4 = readFileSync('./data/onlyWrite.txt', 'utf8');

// Print all contents from onlyWrite File txt extension.
// console.log(data4);
//Note: If you run above codes in one time to write from three files it will over write 
// one over to other one So you can write only one time in one file from multiple instances
// as following:

writeFileSync('./data/onlyWrite.txt', `This is data from all files ${data1} ${data2} ${data3}`);
// create one instance for onlyWrite file to store all contents from it
let data5 = readFileSync('./data/onlyWrite.txt', 'utf8');
console.log(data5);

//Cool it works:)

// If you want to wirte multiple time in one file from different files you must include 
// the flag object with 'a' to avoid over write contents. 'a' means to append mode which helps to 
// aviod the over write the contents.
writeFileSync('./data/no_OverWriteData.txt', `This is data from aboutMe file ${data1}`,{flag:'a'}); 
//resolved over write the contents
writeFileSync('./data/no_OverWriteData.txt', `This is data from skill file ${data2}`, {flag:'a'}); 
//resolved over write the contents
writeFileSync('./data/no_OverWriteData.txt', `This is data from empty file ${data3}`, {flag:'a'}); 

let data6 = readFileSync('./data/no_OverWriteData.txt', 'utf8');
console.log(data6);
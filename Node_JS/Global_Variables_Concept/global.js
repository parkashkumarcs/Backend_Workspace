
//Let use the commonJS global variables to access files data
// 1-> require()
// 2-> module

var extractData = require('./names');
var callFunction = require('./function');

console.log("My name is " + extractData.obj.name); // Cool it works:)
let name = callFunction(extractData.obj.name);
let father = callFunction(extractData.obj.father);
let dateOfBirth = callFunction(extractData.obj.DOB);
let graduation = callFunction(extractData.obj.graduation);
let cgpa = callFunction(extractData.obj.cgpa);
let university = callFunction(extractData.obj.university);

console.log(name);
console.log(father);
console.log(dateOfBirth);
console.log(graduation);
console.log(cgpa);
console.log(university);
console.log("Done! :)");
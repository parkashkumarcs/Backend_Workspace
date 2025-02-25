
//Let use the commonJS global variables to access files data
// 1-> require()
// 2-> module

var extractData = require('./names');
var callFunction = require('./function');
var multiVariables = require('./multiple-Instances');

console.log(multiVariables); //Print all instances that are exported from multiple-Instances.js file
/*
    If we want to print single single instance then we access separately by using object.
*/
console.log(multiVariables.fruits);
console.log(multiVariables.singlePeron);
console.log(multiVariables.message); // without return output
console.log(multiVariables.message1); // with return
console.log(multiVariables.setData); // return entire object
console.log(multiVariables.setData.City); // return single value

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
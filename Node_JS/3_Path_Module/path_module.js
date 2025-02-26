// path is another built-in module of node.js. which is use for help to find the
// directories of perticular contents. or Access all.


// create path module object
var pathObject = require('path');

// just print the some data by using its methods

console.log(pathObject.sep);
// when we run above code line it will show only backward slash

// I am create one instance in whihc I will store the path of subfolder that I created.

var randomFolder = pathObject.join("/book", "hi", "t.txt"); 
//this is random test even I don't have create such folders or files
console.log(randomFolder); //this output of randomPath.

//Now I am going to create one instance path that I have created for.
var subfolder = pathObject.join('/subFolder', 'Test.txt');

console.log(subfolder); //Created path

// create base instance using basename method.
var base = pathObject.basename(subfolder);
console.log(base);
// It return the base file

//Create a global absolute path meanwhile I let's create full path for Test.txt base file.
var completeAbsPath = pathObject.resolve(__dirname, 'subFolder', 'Test.txt');
//storing the full path of Test.txt location.
console.log(completeAbsPath);


console.log(pathObject.dirname(completeAbsPath)); 
//It return the directory exclude the extension files;
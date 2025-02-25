/*
    About Node.js
        Node.js is open source technology to use develop the server side application.
        Node not support->
            -> No DOM
            -> Not window method
            -> Not interactive develop environment

    Javascript.js VS Node.js
        As we learnt the javascrip.js concepts where we use DOM to render our web applications
        by using window methods.
        Javascript gives the interactive evironment to develop the applications.
        Javascript has fragmentations and use ES6 Module.
        While Node.js differ as that it not support DOM, window methods etc.
        Node.js has various type of fragmentation versions and use CommonJS modules.

    Download the latest version software from official site of Node.js
        1-> Install in your computer 
        2-> Run the terminal
        3-> Navigate your workspace directory where you want to develop
            the node application. Example
            /system32/myPC/D/cd foldername
    We can write the node code in the terminal instead of use IDE such as VS code etc.
    So we just write the node without any arguement in terminal and press enter, it will
    take you in repo environment. Which can be use as a development environment.

    Let's begin our advance journey and build something amazing:)

*/

//Most common use global variables of Node.js are:
    // __dirname    = it provides the current path directory
    // __fileName   = it is use for files
    // require      = This is function to use modules such as (commonJS)
    // module       = info about current module (means file)
    // process      = Info about env where the program is being executed.

//Let's Start first code:)

console.log("Hello there, I am first code line of Node.js");

// console.log('This is current directory' + __dirname); //OR we can do under
let current_Path = __dirname;
console.log("This is current directory " + current_Path);

// Without SetInterval() method
console.log("Hello There:)"); //one time execute same code
for(let i = 1; i<5; i++){
    console.log("Hello There:)"); //multiple time to execute same code using loop!
}

//With using SetInerval():
    // Def: This is function to use execute the same code in multiple times in range of 
    // given time and condition.
    // Remember always use conditions to stop the execution process otherwise it excutes infinite times
    // Syntax : setInterval(function, milliseconds);
var stop =0;
var mutliExe = setInterval(function(){
    stop++;
    console.log(`Hello Coder executed ${stop} times` ); //using tamplete literals
    if(stop === 5){
        clearInterval(mutliExe);
        console.log('stoped');
    }

},1000);    

// Functions

var empName = 'Parkash Kumar';
var department = 'Computer Science';
var role = 'MERN Stack Developer';

var data = function(name){
    return name;
}
//callback funcitons here

console.log("Employee name is " + data(empName));
console.log("Employee department is " + data(department));
console.log("Employee role is " + data(role));

/*
    Ok as we done the some simple code about Node.js but believe me this not beauty of Node.js.
    Let me show and explain.

    As we have defined a function as data in which we passing one parameter
    as a name and then access this funcion by calling it. We send the some 
    information as a parameter to that function to print them.

    Let do some unique in Node.js
    create three files
        1-> Names.js
        2-> function.js
        3-> globalModule.js


*/
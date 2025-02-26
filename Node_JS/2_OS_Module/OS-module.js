/*
// OS Module    
    Before we start code first need to understand the basic concept of OS module.
    OS stand for Operating System module is the predefined or built-in module in the Node.js framework.
    Now question is arrived in mind why we use the OS module and how to implement it
    with code.
    Official Definition:
        The os module in Node.js is a built-in module that provides utilities for interacting with the 
        operating system. It allows developers to retrieve system-related information such as CPU 
        architecture, memory usage, network interfaces, and more.

    And of course as the definition it is built-in module it means it has predefined 
    methods such as:
        type()
        platform()
        arch()
        totalmem()
        etc..
    We will discuss each during the coding.
    So let's begin:)------>>>>>>>>>>>>>>>>>>>>>       

*/


//Let's creaate the OS object as under

var OS = require('os'); //OS object created

// Now let's use the each method of OS module with definition.

console.log('The current type of Operating System is ' + OS.type()); 
//type() method uses to return the name of Operating System

console.log('Current CPU architecture is ' + OS.arch());
// arch() is return the CPU architecture.
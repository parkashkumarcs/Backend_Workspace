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

console.log('The total ammount of memory is ' + OS.totalmem() + ' byte Ram');
// Another OS method totalmem() is used to return the total memory of System.
// totalmem return the memory in byte so if we want to convert it in another form so we do under

let kiloByte = parseInt(OS.totalmem())/(1024); //return kilobytes
let megaByte = parseInt(OS.totalmem())/(1024*1024); // return megabytes
let gigaByte = parseInt(OS.totalmem())/(1024*1024*1024); // return gigabytes
// and so on....
console.log('Total memory in kilobyte is ' + Math.ceil(kiloByte) + ' KB Ram');
console.log('Total memory in megabyte is ' + Math.ceil(megaByte) + ' MB Ram');
console.log('Total memory in gigabyte is ' + Math.ceil(gigaByte) + ' GB Ram');


//Let's do more practices with other OS methods. So we can understand meaning of OS.

console.log("The current platform of Operating System is " + OS.platform())
//It return the OS platform such as win32, linux etc........

console.log("Free Memory:", OS.freemem()); // return cleared memory
console.log("Home Directory:", OS.homedir()); //return home directory
console.log("Network Interfaces:", OS.networkInterfaces()); // return network interfaces object

// further we can explore the networkInterfaces() as following:)
var obj = OS.networkInterfaces();
// We know all internal data of network interfaces in object form so we need to create loop 
// to aacess all data as under.
for (const interfaceName in obj){ 
    obj[interfaceName].forEach((netIndex)=>{
        if(!netIndex.internal){
            console.log(`Network Interface Name is ${interfaceName}`);
            console.log(`Network Interface address is ${netIndex.address}`);
             console.log(`Network Interface netmask is ${netIndex.netmask}`);
             console.log(`Network Interface family is ${netIndex.family}`);
             console.log(`Network Interface mac is ${netIndex.mac}`);
             console.log(`Network Interface internal is ${netIndex.internal}`);
             console.log(`Network Interface cidr is ${netIndex.cidr}`);
             console.log(`Network Interface scopeid is ${netIndex.scopeid}`);
        }
    })
}

console.log(OS.userInfo());
//It return the user info 
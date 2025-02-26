// As we learnt in previous file_system.js code file where we were just write basic functionality to
// write and read content from Files. However we can face the errors or exception from files which 
// can block the other codes. So here can handle these errors by passing functions as a parameter
// in readFile or writeFile methods. 


// Let's commits first and then start our coding:)

//As we created two fs methods with Sync but now we create without Sync. Later we will discuss why we 
// don't create instances with Sync.

var {readFile, writeFile} = require('fs');

readFile("./data/aboutMe.txt", 'utf8', (error, contents)=>{
    if(error){
        console.log(error); // Of course if file is not exist it will through errors.
    }
    else{
        console.log(contents); // else it read the file
    }
})

//run this command in terminal 'node fs_errorHandling.js' and press enter:) check results in console.

//We can write the code read and write methods in nested form let see how it looks like.
// Following code is advance level to handle the errors.
readFile("./data/aboutMe.txt", 'utf8', (error, contents)=>{
    if(error){
        console.log(error); // Of course if file is not exist it will through errors.
    }
    else{
        var store1 = contents;
        // console.log(contents); // else it read the file
        readFile('./data/skills.txt', 'utf8', (error,contents)=>{
            if(error){
                console.log(error);
            }else{
                var store2 =contents;
                writeFile('./data/newEmpty.txt', `${store1} ${store2}`, (error, contents)=>{
                    if(error){
                        console.log(error)
                    }else{
                        console.log(`Results from newEmpty.txt file is ${contents}`);
                    }
                    return;
                });
            }
            return;
        })
    }
    return;
})

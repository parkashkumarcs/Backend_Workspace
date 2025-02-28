// HTTP Module:
    // HTTP stands for HypterText Transfer Protocol. Which is use to communicat the data on
    // World Wide Web (wwww) between clients and servers over.
    // HTTP module is most important module to learn for every developer.
    // By this learning we set up our codes to communicate our full stack application 
    // with other servers. 
// How it works?
    // Client send a request to server. Resquest could be anything like videos, images, text or queries.
    // Server executes these requests and send back to clients through HTTP as responses.
    // And in final DOM render these responses and display the contents as per sent by server to
    // clients in browsers.

 // Let's explore it through coding:)....
 
 // Create a global variable by using commonJS modules.
 var myHTTP = require('http');

 // Now let's create a server by using createServer method.
 // createServer Method takes parameters either it a function or some contents.

 var server = myHTTP.createServer((requestTo, ResponseTo)=>{
    // console.log(requestTo);
    // Request is a giat object which have so many other functions and data.
    ResponseTo.write("Welcome to our server"); // in response it write contents as it given to client
    ResponseTo.end(); // this will end the response.
 });

 server.listen(5000); // http://localhost:5000/

 // Now let's learn about the request giant object how it works:)

 var server = myHTTP.createServer((requestTo, ResponseTo)=>{
   if(requestTo.url == '/'){
    ResponseTo.end('Welcome my PK home server page');
   }

    if(requestTo.url == '/about'){ // when user enter url as http://localhost:5001/about
        // it will redirect to browser page where following contents displayed.
     ResponseTo.end('Hi there, THis is Parkash Kumar full stack developer');
    }
 });

 server.listen(5001); // I have create another server as http://localhost:5001/about
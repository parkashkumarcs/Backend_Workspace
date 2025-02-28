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


 // Let's do more practices to learn advance level:)

 // creating another variable name as my myHTTP1
 var myHTTP1 = require('http');

 // Creating second server for data communication 
 var server2 = myHTTP1.createServer((userRequest, serverResponse) =>{
    if(userRequest.url === '/'){
        serverResponse.end(`
            <h1 style = 'color: blue;'>
                Hi, I am PK's second Server. 
            </h1>
            <br>
            <h4> 
                I am here to server you what ever you want!
            </h4>
            <hr>    
        `);
    }
    if(userRequest.url === '/courses'){
        serverResponse.end(`
            <h1 style = "color: green">
                Courses Lists:
            </h1>
            <ol style= 'border: 2px solid red'>
                <li>Fundamental Programming Language</li>
                <li>Java Programming Language</li>
                <li>Object Oriented Programming</li>
                <li>HTML or HTML5</li>
                <li>CSS/CSS3/ or Tailwind</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Express.js/li>
                <li>React.js</li>   
            </ol>     
        `)
    }
    serverResponse.end(`
        <h1> Oops!</h1>
        <p> 404 page not found:( </p>
        <a href = 'http://localhost:5002/'> Back to Home </a>
        `);
 })

 server2.listen(5002);
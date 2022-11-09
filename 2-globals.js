// GLOBALS  - NO WINDOW !!!! because there is no browser

//but there are some other global variables in node. some of them are below:
// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about enviroment where the program is being executed--this is important since in the future we will be in other envirement than local machine

console.log(__dirname)
//to execute >> node address (until tutorial) then node 2-globals.js (or 2-globals)
//answer:D:\Saman\Sait and UOC and Udemy\node-express\john-smilga\tutorial

setInterval(() => {
    console.log("hello world")
}, 1000);


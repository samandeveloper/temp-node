//buit in modules:2. path module

//sep method
const path = require('path')
console.log(path.sep)  //sep is the seprator--answer : \


//for continuing this project we create a folder under tutorial named it "content". inside it we create another folder named "subfolder" 
//then inside that we create file called test.txt (go and check)
//join method
const filePath = path.join('/content','subfolder','test.txt')  //we need the string inside the join
console.log(filePath)   //answer: \content\subfolder\test.txt

//basename method--in the above example we just want the base which is the test.txt
const base = path.basename(filePath)
console.log(base)     //answer:test.txt


//resolve method for the absolute path--we use __dirname which means we are pointing to the 9-path-module.js
//we need the resolve method for the absolute address since my address on local machine is different than horoku and we want to find the absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)   //answer:D:\Saman\Sait and UOC and Udemy\node-express\john-smilga\tutorial\content\subfolder\test.txt  


//we want to call the lodash npm package that we already installed, after installing we can call it in the require 
//WE MUST FIRST INSTALL THE NPM PACKAGE FIRST AND THEN PASS IT TO THE REQUIRE
// Note: what lodash do is to give us back the flat array
const _ = require('lodash')  
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)  //answer: [ 1, 2, 3, 4 ]



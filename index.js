
/// CommonJs import modules //
// const {generateRandomNumber, celciusToFahrenheit} = require("./utils")
// const { getPostsLenght } = require("./postController");

// let random = generateRandomNumber();
// console.log(`Random number: ${random}`)
// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(random)}`)

// ES Modules //
// import {getPosts} from "./postController.js"
import getPosts, {getPostsLenght} from "./postController.js"

console.log(getPosts());
console.log(`Posts Lenght: ${getPostsLenght()}`)






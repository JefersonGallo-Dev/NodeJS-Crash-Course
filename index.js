
// console.log("Hello World")



// // CommonJS Modules //
// const {generateRandomNumber, celciusToFahrenheit} = require("./utils")
// let random = generateRandomNumber();
// console.log(`Random number: ${random}`)
// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(random)}`)


// ES Modules //

// Import as default //
// import getPosts from "./postController.js"

// Import default and non-default //
import getPosts, {getPostsLenght} from "./postController.js"
console.log(getPosts());
console.log(`Posts Lenght: ${getPostsLenght()}`)






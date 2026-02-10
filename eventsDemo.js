import {EventEmitter} from "events";

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log("Hello " + name + " World");
};

function goodbyeHandler() {
    console.log("Goodbye World");
};

// Register event listeners

myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

myEmitter.emit("greet", "Jhon");
myEmitter.emit("goodbye");


// Error handling
myEmitter.on("error", (err) => {
    console.log("An Error Occured");
    console.log(err);
});

// Simulate error
myEmitter.emit("error", new Error("Soomething went wrong"));










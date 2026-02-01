// import fs from "fs";

// // readFile() - Callback
// fs.readFile("./test.txt", "utf-8", (err, data) => {

//     if(err) throw err;
//     console.log(data);

// });

// // readFile() - Sunchronous version
// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log(data)


import fs from "fs/promises";

// // readFile() - Promise .then()
// fs.readFile("./test.txt", "utf-8")
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
    try{
        const data = await fs.readFile("./test.txt", "utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
// readFile();

// writeFile()

const writeFile = async () => {
    try {
        await fs.writeFile("./test.txt", "Hello, I am writing to this file");
        console.log("File written to...");
    } catch (error) {
        console.log(error);
    }
};

// writeFile();
// readFile();


// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile("./test.txt", "\nThis is appended text");
        console.log("File appended to...");
    } catch (error) {
        console.log(error);
    }
};

writeFile();
appendFile();
readFile();










import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

// Get current path in commonJS Not available in ES modules//
// __filename
// __dirname
// Get current path in ES modules
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);


// const PORT = 8000;
const PORT = process.env.PORT;

const server = http.createServer(async (req, res) => {
    // res.write("Hello world!");
    // res.end("<h1>Hello world!!</h1>");

    // res.setHeader("Content-Type", "text/html");
    // res.statusCode = 404;
    // res.end("<h1>Hello world!!</h1>");

    // res.writeHead(500, {"content-type": "application/json"})
    // res.end(JSON.stringify({message: "Server Error"}));

    // res.writeHead(200, {"Content-Type": "text/html"})
    // res.end("<h1>Hello world!!</h1>");
    // console.log(req.url);
    // console.log(req.method);

    // try {
    //     // Check if GET //
    //     if(req.method === "GET"){
    //         if(req.url === "/"){
    //             res.writeHead(200, {"Content-Type": "text/html"});
    //             res.end("<h1>Home page</h1>");
    //         } else if (req.url === "/about"){
    //             res.writeHead(200, {"Content-Type": "text/html"})
    //             res.end("<h1>About</h1>");
    //         } else {
    //             res.writeHead(404, {"Content-Type": "text/html"})
    //             res.end("<h1>Not Found</h1>");
    //         }
    //     } else {
    //         throw new Error("Method not allowed");
    //     }
    // } catch (error) {
    //     res.writeHead(500, {"Content-Type": "text/html"})
    //     res.end("Server Error");
    // }

    try {
        // Check if GET //
        if(req.method === "GET"){
            let filePath;
            if(req.url === "/"){
                filePath = path.join(__dirname, "public", "index.html");
            } else if (req.url === "/about"){
                filePath = path.join(__dirname, "public", "about.html");
            } else {
                throw new Error("Not Found");    
            }
            const data = await fs.readFile(filePath);
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();
        } else {
            throw new Error("Method not allowed");
        }

        

    } catch (error) {
        res.writeHead(500, {"Content-Type": "text/html"})
        res.end("Server Error");
    }

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

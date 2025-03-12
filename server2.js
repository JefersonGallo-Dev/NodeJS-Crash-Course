import { log } from "console";
import {createServer} from "http";
import { json } from "stream/consumers";

// const PORT = 8000;
const PORT = process.env.PORT;

const users = [
    {id:1, name:"Jeff"},
    {id:2, name:"David"},
    {id:3, name:"Gallo"},
];

// Logger middleware

const logger = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
};

// JSON Middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
};

// Route Handler for GET /api/users/
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
};

// Route Handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    if(user){
        console.log(id)
        // res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(user));
        // res.end();
    } else {
        // res.setHeader("Content-Type", "application/json");
        res.statusCode= 404;
        res.write(JSON.stringify({message: "User not found"}));
        // res.end();
    }
    res.end();
};

// Not Found Handler
const notFoundHandler = (req, res) => {
    res.statusCode= 404;
    res.write(JSON.stringify({message: "User not found"}));
    res.end();
};

// Route handler for POST /api/users/
const createUserHandler = (req, res) => {
    let body = "";
    // Listen for data 
    req.on("data", (chuk) => {
        body += chuk.toString();
    });

    req.on("end", () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    });
};


// const server = createServer((req, res) => {
//     res.setHeader("Content-Type", "application/json");

//     if((req.url === "/api/users") && (req.method === "GET")){   
//         // res.setHeader("Content-Type", "application/json"); 
//         res.write(JSON.stringify(users));
//         // res.end();
//     } else if ((req.url.match(/\/api\/users\/([0-9]+)/)) && (req.method === "GET")) {
//         const id = req.url.split("/")[3];
//         const user = users.find((user) => user.id === parseInt(id));
//         if(user){
//             console.log(id)
//             // res.setHeader("Content-Type", "application/json");
//             res.write(JSON.stringify(user));
//             // res.end();
//         } else {
//             // res.setHeader("Content-Type", "application/json");
//             res.statusCode= 404;
//             res.write(JSON.stringify({message: "User not found"}));
//             // res.end();
//         }
        
//     } else {
//         // res.setHeader("Content-Type", "application/json");
//         res.statusCode= 404;
//         res.write(JSON.stringify({message: "Route not found"}));
//         // res.end();
//     }
//     res.end();
// });

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if((req.url === "/api/users") && (req.method === "GET")){   
                getUserHandler(req, res);
            } else if((req.url.match(/\/api\/users\/([0-9]+)/)) && (req.method === "GET")) {
                getUserByIdHandler(req, res);
            } else if ((req.url === "/api/users") && (req.method === "POST")) {
                createUserHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        });
    });
});





server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})




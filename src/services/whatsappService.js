const fs = require("fs");
require('dotenv').config();
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
function SendMessageWhatsApp(data){
    
    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/103023949557485/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer "+process.env.FB_TOKEN
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};
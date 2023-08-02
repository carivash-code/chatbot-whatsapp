const fs = require("fs");
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
            Authorization: "Bearer EAADpUB9sFKoBO7ZCr2o6L2GjfkzDXcgogj9dFnsMUKEZBBUnZBnIyGKLTkLyayJ5fSICZCNecWlgSWBZBZAWIwb38783QZAAuOZB7k0VLkS5PZCRKrK4XLoEBiW05vZACOBG7OxsB4miniN3Oq6qqIZALl2TvEqHG9qhMXo9K6bMkQj4AwTMttbZCp2iZC7qTVoYJR35XxIuOdVJRayMekFlvFxBXe3LJLvR2ERV83GIAi64ZD"
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
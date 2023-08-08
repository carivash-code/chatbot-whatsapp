const fs = require("fs");
require('dotenv').config();
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const processMessage = require("../shared/processMessage");
const whatsappLocation = require("../shared/locationMessage");
const VerifyToken = (req, res) => {
    
    try{
        let accessToken = process.env.ACCESS_TOKEN;
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge);
        }else{
            res.status(400).send();
        }

    }catch(e){
        res.status(400).send();
    }
}

const ReceivedMessage = (req, res) => {
    try{
        let entry = (req.body["entry"])[0];
        let changes = (entry["changes"])[0];
        let value = changes["value"];
        let messageObject = value["messages"];

        if(typeof messageObject != "undefined"){
            let messages = messageObject[0];
            let number = messages["from"];
            number = number.replace('521','52');

            let text = GetTextUser(messages);
            
            if(text != ""){
                processMessage.Process(text, number);
            } 

        }        

        res.send("EVENT_RECEIVED");
    }catch(e){
        myConsole.log('Error:' + e);
        res.send("EVENT_RECEIVED");
    }
}

async function GetLocation(messages) {
    const locationParams = messages["location"];

    return whatsappLocation.GetRatioDistance(locationParams).then(async(res) => {
        return await res;
    });
}

function GetTime(messages) {
    const date = new Date(messages.timestamp * 1000);
    const enUS = date.toLocaleTimeString('en-GB', { timeZone: 'CST'});

    return enUS
}

function GetTextUser(messages){
    let text = "";
    let typeMessge = messages["type"];

    if(typeMessge == "text"){
        const time = GetTime(messages);

        const horaApertura = new Date();
        horaApertura.setHours(11, 0, 0); // Añadirle 1 hora mas del horario normal

        const horaCierre  = new Date();
        horaCierre .setHours(22, 30, 0); // Añadirle 1 hora mas del horario normal

        const horaAperturaLocal = horaApertura.toLocaleTimeString('en-GB');
        const horaCierreLocal = horaCierre.toLocaleTimeString('en-GB');

        if( time < horaAperturaLocal || time >= horaCierreLocal ) {
           text = 'Out of service ' + time;
        } else {
           text = (messages["text"])["body"];
        }
    }
    else if(typeMessge == "interactive"){

        let interactiveObject = messages["interactive"];
        let typeInteractive = interactiveObject["type"];
        
        if(typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"];
        }
        else if(typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        }else{
            myConsole.log("sin mensaje");
        }
    }
    else if(typeMessge == "location"){
        text = GetLocation(messages);
    }
    else{
        myConsole.log("sin mensaje");
    }
    return text;
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}

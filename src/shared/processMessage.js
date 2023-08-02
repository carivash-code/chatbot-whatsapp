const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number){
    textUser= textUser.toLowerCase();
    let models = [];

    if(textUser.includes("hola")){
        //SAUDAR
        let model = whatsappModel.MessageText("Hola, un gusto saludarte. 👋", number);
        models.push(model);
        let modelList = whatsappModel.MessageList(number);
        models.push(modelList);
    }
    else if(textUser.includes("gracias")){
        // agradecimiento
        let model = whatsappModel.MessageText("Gracias a ti por escribirme. 😉😎", number);
        models.push(model);       

    }
    else if(textUser.includes("adios") ||
    textUser.includes("adiós")||
    textUser.includes("bye")||
    textUser.includes("me voy")
    ){
        // despedir
        let model = whatsappModel.MessageText("Ve con cuidado. 😊", number);
        models.push(model);
    }
    else if(textUser.includes("comprar")){
        // comprar
        let model = whatsappModel.MessageComprar(number);
        models.push(model);

    }
    else if(textUser.includes("vender")){
        // vender
        let model = whatsappModel.MessageText("👉 Regístrate en el siguiente formulario para poder evaluarte: https://form.jotform.com/222507994363665", number);
        models.push(model);       

    }
    else if(textUser.includes("agencia")){
        // agencia
        let model = whatsappModel.MessageText("Aquí tienes nuestra dirección. 😊", number);
        models.push(model);
        let modelLocation = whatsappModel.MessageLocation(number);
        models.push(modelLocation);       

    }
    else if(textUser.includes("contacto")){
        // vender
        let model = whatsappModel.MessageText("📞*Centro de contacto:*\n912345678", number);
        models.push(model);       

    }
    else{
        //No entiende
        let model = whatsappModel.MessageText("No entiendo lo que dices", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
    


}

module.exports = {
    Process
};
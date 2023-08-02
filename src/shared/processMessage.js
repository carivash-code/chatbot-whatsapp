const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number){
    textUser= textUser.toLowerCase();
    let models = [];

    if(textUser.includes("hola") ||
    textUser.includes("buenas") ||
    textUser.includes("ola")
    ){
        let model = whatsappModel.MessageText("Hola, un gusto saludarte. 👋", number);
        models.push(model);

        let model2 = whatsappModel.MessageText("Bienvenido a la 🍕*pizzería Rocko*🍕, ¿en qué podemos ayudarte 😃?", number);
        models.push(model2);

        let modelBuy = whatsappModel.MessageOptions(number);
        models.push(modelBuy);
    }
    else if(textUser === "Comprar una pizza"){
        
        let model = whatsappModel.MessageText("Antes de hacer tu pedido, escribe tu dirección para validar la cobertura y conocer la dirección de entrega por favor", number);
        models.push(model);

    }
    else if(textUser === "Comprar más de 1 pizza"){

        let model = whatsappModel.MessageText("Para pedidos mayores a 2 pizzas debes de comunicarte directo a la pizzería", number);
        models.push(model);

        let model2 = whatsappModel.MessageContact(number);
        models.push(model2);
    }
    else if(textUser.includes("tlalmanalco")) {

        let model = whatsappModel.MessageText("!Muchas gracias! si tenemos cobertura hasta tu domicilio, empieza a hacer tu pedido", number);
        models.push(model);

        let modelList = whatsappModel.MessagePizzaIngredients(number);
        models.push(modelList);

    }
    else if(textUser === '1 ingrediente 😋'){
        let modelList = whatsappModel.MessagePizzaSizeOneIngredient(number);
        models.push(modelList);
    }
    else if(textUser === 'Más de 2 ingredientes 😜'){
        let modelList = whatsappModel.MessagePizzaSizeSpecialIngredients(number);
        models.push(modelList);
    }
    else if(textUser.includes("sencilla") ){
        let modelList = whatsappModel.MessagePizzaOneIngredient(number);
        models.push(modelList);
    }
    else if(textUser.includes("especial") ){
        let modelList = whatsappModel.MessagePizzaSpecialIngredients(number);
        models.push(modelList);
    }
    else if(textUser === "pollo" ||
    textUser === "salchicha" ||
    textUser === "champiñón" ||
    textUser === "atún" || 
    textUser === "jamón"){
        let modelSummary = whatsappModel.MessageText("!Muy bien! este sería un resumen de tu pedido:" + models, number);
        models.push(modelSummary);

        let modelConfirmation = whatsappModel.MessageOptionsDelivery(number);
        models.push(modelConfirmation);
    }
    else if(textUser === "Hawaiana kids" ||
    textUser === "Hawaiana" ||
    textUser === "Vegetariana" ||
    textUser === "Pastor" || 
    textUser === "Clásica" ||
    textUser === "Pirata" ||
    textUser === "Cubana" ||
    textUser === "Planeta especial" ||
    textUser === "Campestre" ||
    textUser === "Mafiosa" ||
    textUser === "Ranchera" ||
    textUser === "Carnes frías" ||
    textUser === "Mexicana" ||
    textUser === "Combinada especial"){
        let modelSummary = whatsappModel.MessageText("!Muy bien! este sería un resumen de tu pedido:" + models, number);
        models.push(modelSummary);

        let modelConfirmation = whatsappModel.MessageOptionsDelivery(number);
        models.push(modelConfirmation);
    }
    else if(textUser === '✅ Confirmar pedido') {
        let modelSummary = whatsappModel.MessageText("!Excelente en un máximo de 30 minutos llegará nuestro repartidor 🛵!", number);
        models.push(modelSummary);
    }
    else if(textUser === '⛔ Cancelar pedido') {
        let modelSummary = whatsappModel.MessageText("Lamentamos que hayas cancelado tu pedido, seguimos aqui para que vuelvas a pedir tu pizza", number);
        models.push(modelSummary);
    }
    else if(textUser === "Llamar a la pizzería"){
        let model = whatsappModel.MessageContact(number);
        models.push(model);       
    }
    else{
        let model = whatsappModel.MessageText("🤔 No te puedo ayudar de momento, ¿puedes ser mas específico por favor 😊?", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
    


}

module.exports = {
    Process
};
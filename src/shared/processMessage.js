const whatsappModel = require("../shared/whatsappmodels");
const whatsappLocation = require("../shared/locationMessage");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number){
    console.log('Type textUser', typeof textUser)
    textUser = typeof textUser == 'string' ? textUser.toLowerCase() : textUser;
    let models = [];
    const cart = [];
    const pizzaPromo = {
        number: 0
    };

    if(typeof textUser == 'object') {
        whatsappLocation.GetRatioDistance(textUser).then((res) => {
            console.log('RES DISTANCE', res);
            if(res !== {}) {
                const { distance, duration } = res;
        
                const durationDis = duration.text.replace('hour','hora');
        
                console.log('Distance', distance.text, durationDis);
                let model = whatsappModel.MessageText(
                    "Distancia del negocio a tu dirección es de "+ distance.text+"\n"+
                    "Y tardaríamos en llegar "+durationDis+" aproximadamente."
                    , number);
                models.push(model);
            }
        });
    }
    else if(textUser.includes("hola") ||
    textUser.includes("buenas") ||
    textUser.includes("ola")
    ){
        pizzaPromo.number = 1;
        const modelBuy = whatsappModel.MessageMainMenu(number);

        models.push(modelBuy);
    }
    else if(textUser.includes('ver el menú')) {
        const model = whatsappModel.MessageImage(number);
        models.push(model);
    }
    else if(textUser.includes('realizar pedido')) {
        let model = whatsappModel.MessageText("Empecemos con tu ubicación.\nPuedes mandar *manualmente tu dirección, empezando con Calle, Cerrada, Privada o Avenida* o *compartir tu ubicación.* 📍", number);
        models.push(model);
        // whatsappModel.GetMessageLocation(textUser, number);
    }
    else if(textUser.includes('calle') ||
    textUser.includes('cerrada') ||
    textUser.includes('privada') ||
    textUser.includes('avenida')){
        const model2 = whatsappModel.MessageLocationConfirmation(number);

        models.push(model, model2);

    }
    else if(textUser.includes('comencemos')) {
        const model = whatsappModel.MessageOrderStart(number);
        models.push(model);
    }
    else if(textUser.includes('cancelar pedido')) {
        const model = whatsappModel.MessageText(
            "Estamos agradecidos, te invitamos a visitar nuestra Página de Facebook (url) o nuestro sitio Web (url).\n"+
            "Gracias vuelve pronto.\n"+
            "Pizza planeta agradece tu visita. 🖖\n"+
            "Loading...\n"+
            "Comunicación Fuera. 🛸"
        , number);
        models.push(model);
    }
    else if(textUser.includes('contácto tel.')) {
       const model = whatsappModel.MessageContact(number);
       models.push(model);
    }
    else if(textUser.includes('pizzas sencillas')){
        const modelList = whatsappModel.MessagePizzaSizeOneIngredient(number);
        models.push(modelList);

        cart.push({pizzaType: textUser});
    }
    else if(textUser.includes("sencilla") ){
        const modelList = whatsappModel.MessagePizzaOneIngredient(number);
        models.push(modelList);
    }
    else if(textUser.includes("pollo") ||
    textUser.includes("salchicha") ||
    textUser.includes("champiñón") ||
    textUser.includes("atún") || 
    textUser.includes("jamón")){
        const modelConfirmation = whatsappModel.MessageOptionsDelivery(number);
        models.push(modelConfirmation);
    }
    else if(textUser.includes('✅ confirmar pedido')) {
        const modelList = whatsappModel.MessagePizzaOneIngredientSecond(number);
        models.push(modelList);

        pizzaPromo.number = 2;
    }
    // else if(textUser.includes('más de 2 ingredientes')){
    //     let modelList = whatsappModel.MessagePizzaSizeSpecialIngredients(number);
    //     models.push(modelList);
    // }

    // else if(textUser.includes("especial") ){
    //     let modelList = whatsappModel.MessagePizzaSpecialIngredients(number);
    //     models.push(modelList);
    //     pedido.push({pizza: textUser});
    // }
    
    // else if(textUser.includes("hawaiana kids") ||
    // textUser.includes("hawaiana") ||
    // textUser.includes("vegetariana") ||
    // textUser.includes("pastor") || 
    // textUser.includes("clásica") ||
    // textUser.includes("pirata") ||
    // textUser.includes("cubana") ||
    // textUser.includes("planeta especial") ||
    // textUser.includes("campestre") ||
    // textUser.includes("mafiosa") ||
    // textUser.includes("ranchera") ||
    // textUser.includes("carnes frías") ||
    // textUser.includes("mexicana") ||
    // textUser.includes("combinada especial")){
    //     pedido.push({ingrediente: textUser});

    //     let modelSummary = whatsappModel.MessageText("!Muy bien! este sería un resumen de tu pedido: " + pedido, number);
    //     models.push(modelSummary);

    //     let modelConfirmation = whatsappModel.MessageOptionsDelivery(number);
    //     models.push(modelConfirmation);

    // }
    // else if(textUser.includes('✅ confirmar pedido')) {
    //     let modelSummary = whatsappModel.MessageText("!Excelente en un máximo de 30 minutos llegará nuestro repartidor 🛵!", number);
    //     models.push(modelSummary);
    // }
    // else if(textUser.includes('⛔ cancelar pedido')) {
    //     let modelSummary = whatsappModel.MessageText("Lamentamos que hayas cancelado tu pedido, seguimos aqui para que vuelvas a pedir tu pizza", number);
    //     models.push(modelSummary);
    // }
    // else if(textUser.includes("llamar a la pizzería")){
    //     let model = whatsappModel.MessageContact(number);
    //     models.push(model);
    // }
    else{
        // let model = whatsappModel.MessageText("🤔 No te puedo ayudar de momento, ¿puedes ser mas específico por favor 😊?", number);
        const model = whatsappModel.MessageText("🤔 ¿A qué te refieres con? *"+textUser+"*", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    Process
};
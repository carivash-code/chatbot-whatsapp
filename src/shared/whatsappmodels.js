const cart = [];

function MessageMainMenu(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "body": {
                "text": "¡Hola y bienvenido(a)!, soy Jessy 👩‍🚀 el bot asistente de 🪐 *Pizza Planeta* 🪐 y estoy aquí para ayudarte en ésta magnífica experiencia."
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-menu",
                            "title": "Ver el menú"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-pedido",
                            "title": "Realizar pedido"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-contacto",
                            "title": "Contácto tel."
                        }
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageImage(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",  
        "image": {
            "link": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6bh8DF6sxElhPGhgi_dYq1vG2ixzXawQWrXerBjivmsY2CGi9dVcDQWIW-WjGA9pngawr9dDYGjfMTSL6R6Cl4BZ01Nc9OHfXUwtdWaavTUSF6m2cyzynRi_2DklY9qutQTLFTAYIS2OQawVYwNmZQ6EnxzhDS2XeFyfKxI3rHmfzUmDpyqVTJuJYnCU3/s1600/WhatsApp%20Image%202023-08-02%20at%2014.52.03.jpeg",
        }
    });
    return data;
}

function MessageContact(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "contacts",
        "contacts": [
            {
                "addresses": [
                    {
                        "street": "Av. Mirador #55",
                        "city": "Tlalmanalco",
                        "state": "Estado de México",
                        "zip": "56700",
                        "country": "México",
                        "country_code": "+52",
                        "type": "WORK"
                    }
                ],
                "birthday": "",
                "emails": [
                    {
                        "email": "pizza.planeta@gmail.com",
                        "type": "WORK"
                    }
                ],
                "name": {
                    "formatted_name": "Pizza Planeta",
                    "first_name": "Buzz",
                    "last_name": "Lightyear",
                    "middle_name": "",
                    "suffix": "",
                    "prefix": ""
                },
                "org": {
                    "company": "",
                    "department": "",
                    "title": ""
                },
                "phones": [
                    {
                        "phone": "555555555",
                        "wa_id": "5255555555",
                        "type": "WORK"
                    }
                ],
                "urls": [
                    {
                        "url": "",
                        "type": "WORK"
                    }
                ]
            }
        ]
    });
    return data;
}

function MessageText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,    
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}

function GetMessageLocation(address, number){
    cart.push({direccion: address});
    console.log('ADDRESS----', direccion);
}

function MessageValidation() {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "body": {
                "text": "Confirmar dirección"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-yes",
                            "title": "✅ Si, es correcta"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-cancel",
                            "title": "⛔ No, deseo cambiarla"
                        }
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageOrderStart(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "header": {
                "type":"text",
                "text": "Menú de alimentos"
            },
            "body": {
                "text": "Escoje la pizza de tu preferencia"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-simple",
                            "title": "Pizzas Sencillas"
                        }
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageLocationConfirmation(number){      
    const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "interactive",  
            "interactive": {
                "type": "button",
                "body": {
                    "text": "¡Buena noticia, tenemos cobertura!"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "option-start",
                                "title": "Comencemos"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "option-cancel",
                                "title": "Cancelar Pedido"
                            }
                        }
                    ]
                }
            }     
    });
     return data;
}

function MessagePizzaSizeOneIngredient(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "¿De qué tamaño quieres tu pizza 🍕?"
            },
            "footer": {
                "text": "Escoje el tamaño ideal para tu hambre de pizza! 🤩"
            },
            "action": {
                "button": "Ver tamaños",
                "sections": [
                    {
                        "title": "Tamaños",
                        "rows": [
                            {
                                "id": "pz-small",
                                "title": "Chica sencilla",
                                "description": "$130"
                            },
                            {
                                "id": "pz-medium",
                                "title": "Mediana sencilla",
                                "description": "$180"
                            },
                            {
                                "id": "pz-big",
                                "title": "Grande sencilla",
                                "description": "$240"
                            },
                            {
                                "id": "pz-family",
                                "title": "Familiar sencilla",
                                "description": "$280"
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessagePizzaSizeSpecialIngredients(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "*2* ¿De qué tamaño quieres tu pizza 🍕?"
            },
            "footer": {
                "text": "Escoje el tamaño ideal para tu hambre de pizza! 🤩"
            },
            "action": {
                "button": "Ver tamaños",
                "sections": [
                    {
                        "title": "Tamaños",
                        "rows": [
                            {
                                "id": "pz-small",
                                "title": "Chica especial",
                                "description": "$165"
                            },
                            {
                                "id": "pz-medium",
                                "title": "Mediana especial",
                                "description": "$210"
                            },
                            {
                                "id": "pz-big",
                                "title": "Grande especial",
                                "description": "$280"
                            },
                            {
                                "id": "pz-family",
                                "title": "Familiar especial",
                                "description": "$345"
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessagePizzaIngredients(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "*1* ¿De cuántos ingredientes quieres tu pizza 🍕?"
            },
            "footer": {
                "text": "Escoje la cantidad de ingredientes para tu pizza! 🍍🥩🥓"
            },
            "action": {
                "button": "Ingredientes",
                "sections": [
                    {
                        "title": "Ingredientes",
                        "rows": [
                            {
                                "id": "one-ingr",
                                "title": "1 ingrediente",
                            },
                            {
                                "id": "special-ingr",
                                "title": "Más de 2 ingredientes",
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessagePizzaOneIngredient(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "Escoje tu ingrediente"
            },
            "footer": {
                "text": "Lista de ingredientes"
            },
            "action": {
                "button": "Ingredientes",
                "sections": [
                    {
                        "title": "Sabor de la Pizza",
                        "rows": [
                            {
                                "id": "in-chicken",
                                "title": "Pollo",
                            },
                            {
                                "id": "in-sausage",
                                "title": "Salchicha",
                            },
                            {
                                "id": "in-mashroom",
                                "title": "Champiñón",
                            },
                            {
                                "id": "in-tuna",
                                "title": "Atún",
                            },
                            {
                                "id": "in-ham",
                                "title": "Jamón",
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}
function MessagePizzaOneIngredient2(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "product_list",
            "header": {
                "type": "text",
                "text":"Pizzas"
            },  
            "body": {
                "text": "Escoje tu ingrediente"
            },
            "action": {
                "catalog_id":"6133132260146282",
                "sections": [
                    {
                        "title": "Primer Pizza",
                        "product_items": [
                            {
                                "product_retailer_id": "3",
                            }
                        ]
                    },
                    {
                        "title": "Segunda Pizza",
                        "product_items": [
                            {
                                "product_retailer_id": "3",
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessagePizzaOneIngredientSecond(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type":"text",
                "text": "Segunda pizza"
            },
            "body": {
                "text": "Escoje tu ingrediente"
            },
            "footer": {
                "text": "Lista de ingredientes"
            },
            "action": {
                "button": "Ingredientes",
                "sections": [
                    {
                        "title": "Ingredientes",
                        "rows": [
                            {
                                "id": "in-chicken",
                                "title": "Pollo",
                            },
                            {
                                "id": "in-sausage",
                                "title": "Salchicha",
                            },
                            {
                                "id": "in-mashroom",
                                "title": "Champiñón",
                            },
                            {
                                "id": "in-tuna",
                                "title": "Atún",
                            },
                            {
                                "id": "in-ham",
                                "title": "Jamón",
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessagePizzaSpecialIngredients(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "*3* Escoje tu ingrediente especial"
            },
            "footer": {
                "text": "Ingredientes"
            },
            "action": {
                "button": "Ingredientes",
                "sections": [
                    {
                        "title": "Ingredientes",
                        "rows": [
                            {
                                "id": "in-haw-k",
                                "title": "Hawaiana kids",
                                "description":"jamón, piña, cereza"
                            },
                            {
                                "id": "in-haw",
                                "title": "Hawaiana",
                                "description":"jamón, piña, tocino"
                            },
                            {
                                "id": "in-vege",
                                "title": "Vegetariana",
                                "description":"champiñones, cebolla, pimiento verde y aceitunas"
                            },
                            {
                                "id": "in-pastor",
                                "title": "Pastor",
                                "description":"carne al pastor, piña, chipotle, o jalapeño"
                            },
                            {
                                "id": "in-clas",
                                "title": "Clásica",
                                "description":"peperoni, champiñones y pimiento verde"
                            },
                            {
                                "id": "in-pira",
                                "title": "Pirata",
                                "description":"atún, cebolla, chipotle y aceitunas"
                            },
                            {
                                "id": "in-cub",
                                "title": "Cubana",
                                "description":"pierna, atún, tocino, jalapeños, jitomate y aguacate"
                            },
                            {
                                "id": "in-plan-esp",
                                "title": "Planeta especial",
                                "description":"pierna, pollo, aguacate y elote"
                            },
                            {
                                "id": "in-camp",
                                "title": "Campestre",
                                "description":"champiñon, pollo, salami, elote y chipotle"
                            },
                            {
                                "id": "in-mafi",
                                "title": "Mafiosa",
                                "description":"champiñones, jalapeños, salami y tocino"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessageOptionsDelivery(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "header": {
                "type": "text",
                "text": "¡Excelente decisión!"
            },
            "body": {
                "text": "Antes de continuar confirma tu pedido"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-yes",
                            "title": "✅ Confirmar pedido"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-cancel",
                            "title": "⛔ Cancelar pedido"
                        }
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageLocation(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
        "latitude": "-12.067158831865067",
        "longitude": "-77.03377940839486",
        "name": "Estadio Nacional del Perú",
        "address": "C. José Díaz s/n, Cercado de Lima 15046"
    }
        
    });
    return data;
}

module.exports = {
MessageText,
MessageMainMenu,
MessageLocation,
MessagePizzaSizeOneIngredient,
MessagePizzaSizeSpecialIngredients,
MessageContact,
MessagePizzaIngredients,
MessagePizzaOneIngredient,
MessagePizzaSpecialIngredients,
MessageOptionsDelivery,
MessageImage,
GetMessageLocation,
MessageValidation,
MessageOrderStart,
MessageLocationConfirmation,
MessagePizzaOneIngredientSecond,
MessagePizzaOneIngredient2,
cart
};
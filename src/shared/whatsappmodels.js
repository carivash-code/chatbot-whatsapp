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

function MessageContact(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,    
        "type": "contact",
        "contacts": [
            {
                "addresses": [
                    {
                        "street": "Avenida Juárez #127",
                        "city": "Ciudad de México",
                        "state": "Coyoacán",
                        "zip": "04040",
                        "country": "México",
                        "country_code": "+52",
                        "type": "WORK"
                    }
                ],
                "org": {
                    "company": "Pizzería Rocko",
                    "department": "Ventas",
                    "title": "Pizzas Rocko"
                },
                "phones": [
                    {
                        "phone": "55555555555",
                        "wa_id": "52555555555",
                        "type": "WORK"
                    }
                ]
            }
        ]
    });
    return data;
}

function MessageList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
                                "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "📍Centro de atención",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centro de contacto",
                                "description": "Te atenderá uno de nuestro agentes."
                            }
                        ]
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
                "text": "*3* Escoje tu ingrediente"
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

function MessageOptions(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Qué deseas hacer?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-pizza",
                            "title": "Comprar una pizza"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-pizzas",
                            "title": "Comprar más de 2"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-call",
                            "title": "Llamar a la pizzería"
                        }
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
            "body": {
                "text": "Confirmar pedido"
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
MessageList,
MessageOptions,
MessageLocation,
MessagePizzaSizeOneIngredient,
MessagePizzaSizeSpecialIngredients,
MessageContact,
MessagePizzaIngredients,
MessagePizzaOneIngredient,
MessagePizzaSpecialIngredients,
MessageOptionsDelivery
};
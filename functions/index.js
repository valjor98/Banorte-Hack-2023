const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://srbanorte23-default-rtdb.firebaseio.com",
});

const {SessionsClient} = require("dialogflow");
const { WebhookClient } = require('dialogflow-fulfillment');

const db = admin.firestore();


exports.dialogflowGateway = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const {queryInput, sessionId} = request.body;

    const sessionClient = new SessionsClient({credentials: serviceAccount});
    const session = sessionClient.sessionPath("srbanorte23", sessionId);

    const responses = await sessionClient.detectIntent({session, queryInput});

    const result = responses[0].queryResult;

    result.fulfillmentText;

    response.send(result);
  });
});


const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

let age = 35;
let category = "adult";
let currentBalance = 6450;
let email = "alexm01@gmail.com";
let income = 5000;
let expenses = 3400;
let first_name = "Daniel";
let last_name = "Loredo";
let phone_number = 8112341234;
let pronouns = "el";
let trans_amount = [100];
let trans_subject = ["pizza"];
let trans_date = ["10-10-23"];

let user_emails = ["soraya.arriaga.maldonado@banorte.com"];
let user_links = ["banorte.com"];
let user_messages = ["texto"];
let user_phones = [8165381364];



exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }

  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  // FINANZAS
  // Obtener saldo
  function obtenerSaldoActualHandler(agent) {
    let message = '';
    if (currentBalance > 10000) {
      message = `Tu saldo actual es de $${currentBalance}. ¡Excelente trabajo en mantener un saldo saludable en tu cuenta!`;
    } else if (currentBalance >= 5000) {
      message = `Tu saldo actual es de $${currentBalance}. Recuerda seguir ahorrando y controlando tus gastos para mantener un buen equilibrio financiero.`;
    } else {
      message = `Tu saldo actual es de $${currentBalance}. Te recomendaría revisar tus gastos y encontrar formas de ahorrar para fortalecer tu situación financiera.`;
    }
    agent.add(message);
  }

  // Intent para calcular ahorro mensual
  function calcularAhorroMensualHandler(agent) {
    let message = '';
    if (income > 10000) {
      const savingsPercentage = 20; // Example: Saving 20% of income
      const savingsAmount = (income * savingsPercentage) / 100;
      message = `Según tus ingresos actuales, te sugiero ahorrar al menos el ${savingsPercentage}% de tus ingresos mensuales, lo que equivale a $${savingsAmount}. Esto te permitirá construir un fondo de emergencia y trabajar hacia tus metas financieras.`;
    } else if (income >= 5000) {
      const savingsPercentage = 10; // Example: Saving 10% of income
      const savingsAmount = (income * savingsPercentage) / 100;
      message = `Considerando tus ingresos actuales, sería recomendable destinar al menos el ${savingsPercentage}% de tus ingresos mensuales al ahorro, lo que representa aproximadamente $${savingsAmount}. Esto te ayudará a crear una base financiera sólida.`;
    } else {
      const savingsAmount = 100; // Example: Saving $100 per month
      message = `Dado tus ingresos actuales, te recomendaría ahorrar lo máximo posible, aunque sea un monto pequeño, como $${savingsAmount} al mes. Cada ahorro cuenta y te ayudará a establecer buenos hábitos financieros.`;
    }
    agent.add(message);
  }

  // Intent para planificar presupuesto mensual
  function planificarPresupuestoMensualHandler(agent) {
    let message = '';
    if (expenses < income) {
      message = `Para planificar un presupuesto mensual, te sugiero asignar una parte de tus ingresos a diferentes categorías de gastos, como vivienda, transporte, alimentación y entretenimiento. Recuerda mantener un equilibrio entre tus gastos y ahorros para alcanzar tus metas financieras.`;
    } else if (expenses > income) {
      message = `Es importante priorizar tus gastos y encontrar formas de reducirlos para que se ajusten a tus ingresos. Te puedo ayudar a identificar áreas en las que podrías ahorrar, como buscar opciones más económicas para tus necesidades básicas y eliminar gastos innecesarios.`;
    } else {
      message = `¡Excelente! Parece que has logrado mantener un equilibrio en tus gastos. Recuerda seguir monitoreando tus gastos y ajustar tu presupuesto según sea necesario.`;
    }
    agent.add(message);
  }



  // FRAUDES
  // Intent para verificar enlace web
  function verificarEnlaceWebHandler(agent) {
    const userLink = agent.parameters.user_link;
    
    if (user_links.includes(userLink)) {
      agent.add(`Sí, el enlace ${userLink} es seguro y no representa un riesgo de fraude.`);
    } else {
      agent.add(`No, el enlace ${userLink} no es seguro. Podría llevar a una página de phishing o contener malware.`);
    }
  }

  // Intent para verificar número de teléfono
  function verificarNumeroTelefonoHandler(agent) {
    const userPhone = agent.parameters.user_phone;
    
    if (user_phones.includes(userPhone)) {
      agent.add(`Sí, el número de teléfono ${userPhone} es legítimo y seguro.`);
    } else {
      agent.add(`No, el número de teléfono ${userPhone} no es válido. Podría ser parte de un intento de fraude.`);
      agent.add(`Hemos detectado que el número de teléfono ${userPhone} no es seguro. Te recomendamos no proporcionar información personal.`);
    }
  }

  // Intent para verificar correo electrónico
  function verificarCorreoElectronicoHandler(agent) {
    const userEmail = agent.parameters.user_email;
    
    if (user_emails.includes(userEmail)) {
      agent.add(`Sí, el correo electrónico ${userEmail} es válido y seguro.`);
    } else {
      agent.add(`No, el correo electrónico ${userEmail} no es válido. Podría ser parte de un intento de fraude.`);
      agent.add(`Hemos detectado que el correo electrónico ${userEmail} no es seguro. Te recomendamos no interactuar con él.`);
    }
  }

  //TRANSACCIONES
  // Intención: Realizar transferencia
  function realizarTransferenciaHandler(agent) {
    //const amount = agent.parameters.amount;
    //const accountNumber = agent.parameters.account_number;
    const amount = 100;
    const accountNumber = 910282;

    currentBalance = currentBalance - amount;

    agent.add(`Claro, podemos ayudarte a realizar la transferencia de $${amount} a la cuenta ${accountNumber}`);
    agent.add(`La transaccion ha sido exitosa, ahora su saldo es de $${currentBalance - amount}`);
  }

  // Intención: Verificar transacción reciente
  function verificarTransaccionRecienteHandler(agent) {
    const amountt = agent.parameters.amount;
    const index = trans_amount.indexOf(amountt);

    if (index !== -1) {
      const transactionSubject = trans_subject[index];
      const transactionDate = trans_date[index];

      agent.add(`La transacción de $${amountt} corresponde a ${transactionSubject} realizada el ${transactionDate}.`);
      agent.add(`Hemos identificado la transacción de $${amountt} en tu cuenta, realizada el ${transactionDate}. Está relacionada con ${transactionSubject}.`);
      agent.add(`La transacción de $${amountt} fue registrada en tu cuenta el ${transactionDate}. Está asociada a ${transactionSubject}.`);
    } else {
      agent.add(`No se encontró ninguna transacción reciente de $${amountt} en tu cuenta.`);
    }
  }


  //EDGE CASES
  // Intención: Actualizar pronombres
  function actualizarPronombresHandler(agent) {
    const pronombresAnteriores = pronouns;
    const pronouns = pronombresAnteriores;
    const nuevosPronombres = agent.parameters.nuevos_pronombres;

    let message = `¡Por supuesto! A partir de ahora, me referiré a ti como "${nuevosPronombres}" en lugar de "${pronombresAnteriores}". Me alegra ver que estás expresando tu identidad y tus pronombres de una manera auténtica. Como siempre, estaré aquí para ayudarte en lo que necesites, ${nuevosPronombres}. ¡Si tienes alguna otra pregunta o solicitud, no dudes en decírmelo!`;

    agent.add(message);
  }

// Intent: Automatizar pagos de estacionamiento
function automatizarPagosEstacionamientoHandler(agent) {
  const firstName = first_name;

  const montoMaximoDiario = agent.parameters.pesos;
  const duracionAutomatizacion = agent.parameters.dias;

  agent.add(`¡Perfecto, ${firstName}! He configurado el servicio de pago automático para tus pagos de estacionamiento en la Torre Koi. A partir de ahora, los pagos se realizarán de manera automática, dentro de los límites establecidos.`);
  agent.add(`Recuerda que siempre puedes modificar o cancelar la automatización en cualquier momento. Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en preguntar.`);
}


  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  //Finanzas
  intentMap.set('Finance_obtener_saldo', obtenerSaldoActualHandler);
  intentMap.set('Finance_calcular_ahorro_mensual', calcularAhorroMensualHandler);
  intentMap.set('Finance_planificar_presupuesto_mensual', planificarPresupuestoMensualHandler);
  //Fraudes
  intentMap.set('Fraude_verificarEnlaceWeb', verificarEnlaceWebHandler);
  intentMap.set('Fraude_verificarNumeroTelefono', verificarNumeroTelefonoHandler);
  intentMap.set('Fraude_verificarCorreoElectronico', verificarCorreoElectronicoHandler);
  //Transacciones
  intentMap.set('Trans_realizarTransferencia', realizarTransferenciaHandler);
  intentMap.set('Trans_verificarTransaccionReciente', verificarTransaccionRecienteHandler);
  agent.handleRequest(intentMap);
  //Edge Cases
  intentMap.set('EDGE_pronombres', actualizarPronombresHandler);
  intentMap.set('EDGE_automatizarPagos_2', automatizarPagosEstacionamientoHandler);
});
const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://srbanorte23-default-rtdb.firebaseio.com/",
});

const {SessionsClient} = require("dialogflow");
const {WebhookClient} = require("dialogflow-fulfillment");

const db = admin.firestore();

/* // Create the users collection if it doesn't exist
const usersCollection = db.collection("users");
usersCollection
  .get()
  .then((snapshot) => {
    if (snapshot.empty) {
      console.log("Creating users collection...");
      return usersCollection.doc("dummy").set({});
    }
    return Promise.resolve();
  })
  .then(() => {
    console.log("Users collection exists or has been created successfully");
  })
  .catch((error) => {
    console.error("Error creating users collection:", error);
  }); */


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



exports.dialogflowWebhook = functions.https.onRequest(async (request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log(JSON.stringify(request.body));
  const result = request.body.queryResult;

  // FINANZAS
  // Intent para obtener el saldo actual
  async function obtenerSaldoActualHandler(agent) {
    const db = admin.firestore();
    const userID = '000001';
    const profile = db.collection('users').doc(userID);
    const userData = userDoc.data();
    const currentBalance = userData.current_balance;

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
  
  // Intent para obtener el saldo actual
  async function obtenerSaldoActualHandler(agent) {
    const db = admin.firestore();
    const userID = '000001';
    const profile = db.collection('users').doc(userID);
    const userData = userDoc.data();
    const currentBalance = userData.current_balance;

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
  async function calcularAhorroMensualHandler(agent) {
    const db = admin.firestore();
    const userID = '000001';
    const profile = db.collection('users').doc(userID);
    const userData = userDoc.data();
    const income = userData.income;
  
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
  





  //Mapa de intends
  let intentMap = new Map();
  //Finance
  intentMap.set("Finance_obtener_Saldo_Actual", obtenerSaldoActualHandler);
  intentMap.set("", calcularAhorroMensualHandler);
  //Transactions

  //Frauds
  
  agent.handleRequest(intentMap)
  
});


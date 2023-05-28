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

// Create the users collection if it doesn't exist
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
  });


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
  const agent = new WebhookClient({request, response});

  async function makeTransactionsHandler(agent) {
    const {amount} = agent.parameters;

    // Obtener la referencia del documento del usuario
    const userRef = db.collection("users").doc("jeffd23");

    try {
      // Obtener el documento del usuario
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        const userData = userDoc.data();
        const currentBalance = userData.balance;

        if (currentBalance >= amount) {
          const updatedBalance = currentBalance - amount;

          // Actualizar el saldo del usuario
          await userRef.update({balance: updatedBalance});

          agent.add(`Transaction successful. Your updated balance is $${updatedBalance}.`);
        } else {
          agent.add(`Insufficient balance. Your current balance is $${currentBalance}.`);
        }
      } else {
        agent.add("User data not found");
      }
    } catch (error) {
      console.error("Error getting user document:", error);
      agent.add(`An error occurred. Please try again later.`);
    }
  }

  async function universityHandler(agent) {
    // Perform financial coaching or answer finance-related questions based on the user's query
  }

  async function fraudDetectionHandler(agent) {
    const {email} = agent.parameters;

    // Verificar si el correo electrónico está en la colección de fraud_emails
    const fraudListRef = db.collection("fraud_emails");
    const fraudListSnapshot = await fraudListRef.where("email", "==", email).get();

    if (fraudListSnapshot.empty) {
      agent.add(`This email is not recognized as a known scam email.`);
    } else {
      agent.add(`Warning: This email is associated with known scams.`);
    }
  }

  let intentMap = new Map();
  intentMap.set("MakeTransactions", makeTransactionsHandler);
  intentMap.set("University", universityHandler);
  intentMap.set("FraudDetection", fraudDetectionHandler);
  agent.handleRequest(intentMap);
});
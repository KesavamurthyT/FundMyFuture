const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Download from Firebase Console

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  //for future realtimedatabase // databaseURL: "https://your-project-id.firebaseio.com"
});

const db = admin.firestore();
module.exports = db;

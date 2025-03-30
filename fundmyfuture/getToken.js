const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./config/serviceAccountKey.json"); 

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Generate a token for a user (Replace "USER_UID" with an actual UID)
const userUid = "ijD2CCxGrDSjSQDvGVlzrEAugmu1";
admin.auth().createCustomToken(userUid)
    .then((token) => {
        console.log("Generated JWT Token:", token);
    })
    .catch((error) => {
        console.error("Error generating token:", error);
    });

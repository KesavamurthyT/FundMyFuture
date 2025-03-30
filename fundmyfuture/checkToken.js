const admin = require("firebase-admin");

const serviceAccount = require("./config/serviceAccountKey.json"); 

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTc0MzMxMzE5NSwiZXhwIjoxNzQzMzE2Nzk1LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1mYnN2Y0BmdW5kbXlmdXR1cmUtOTJjMTEuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1mYnN2Y0BmdW5kbXlmdXR1cmUtOTJjMTEuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJ1aWQiOiJpakQyQ0N4R3JEU2pTUUR2R1ZsenJFQXVnbXUxIn0.ixyMxb2FTrEwUUybyriJLowmNJS3zQasQ1lwxjddQtYRwKSw3XjiIe8-fQYee03ONrUeJe8x5i-zGpL6ToH1gemFOiSuesrKlKGi-9t81OvYmLfkdc7nRjYXIfCVPpqPyOYaqrJyW0FVYFrvBRLO9oinLLV3Pz1Hyv8P6PybLOdU05OmR7NiBqe8ts3QyQdsMAmRxN71PaznCMQ7SElm_l7FO4pR544z7rnZlCcrBn-4GaErb7HlL4aol4DyIfOccwnvHLA9E94l9z50oBgoOYfflisyluCEhhG9txJYUUqd4H6X9BE_DmegMwpD-S_-HbURE5y9KzfbrUmpyC9-Jw";

admin.auth().verifyIdToken(token)
    .then((decodedToken) => {
        console.log("✅ Token is valid:", decodedToken);
    })
    .catch((error) => {
        console.error("❌ Invalid Token:", error);
    });

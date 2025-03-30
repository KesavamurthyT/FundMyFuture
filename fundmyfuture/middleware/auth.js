const admin = require("../config/firebase");


async function authMiddleware(req, res, next) {
    try {
        console.log("🔍 Checking Authorization Header...");

        const authHeader = req.headers.authorization;
        if (!authHeader) {
            console.error("❌ No Authorization Header Found!");
            return res.status(401).json({ error: "Unauthorized: No Token Provided" });
        }

        const token = authHeader.split(" ")[1];
        console.log("✅ Token Received:", token);

        // Verify token with Firebase
        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log("🔑 Decoded Token:", decodedToken);

        req.user = decodedToken;
        next();
    } catch (error) {
        console.error("❌ Token Verification Failed:", error.message);
        return res.status(401).json({ error: "Invalid Token" });
    }
}


// async function authMiddleware(req, res, next) {
//     try {
//         const token = req.headers.authorization?.split(" ")[1];
//         if (!token) return res.status(401).json({ error: "Unauthorized" });

//         const decodedToken = await admin.auth().verifyIdToken(token);
//         req.user = decodedToken;
//         next();
//     } catch (error) {
//         res.status(401).json({ error: "Invalid Token" });
//     }
// }

module.exports = authMiddleware;

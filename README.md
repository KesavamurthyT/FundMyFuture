Team Leader:Kesavamurthy T
Team member:Kumaraguru V S
Team member:Dhineshwaran S

FundMyFuture

Problem Statement

Many students from low-income backgrounds struggle to access quality education due to financial barriers. The lack of a streamlined and transparent funding system makes it difficult for students to connect with NGOs and charitable trusts for financial assistance. Traditional scholarship programs are often slow, complex, and inaccessible, leading to high dropout rates and limited career opportunities.

Solution

FundMyFuture is a web platform that bridges the gap between students in need, NGOs, and donors. It provides a transparent, efficient, and user-friendly system where:
Students can apply for financial aid and track their application status.
NGOs can review and approve/reject applications.
Donors can view verified student applications and contribute directly to their education.

LINK TO DRIVE VIDEO:https://drive.google.com/file/d/1txvNm8bHlfyiv9--7KCqbSHLyQqX-eeq/view?usp=sharing
LINK TO PROJECT IMAGE : 
1)https://drive.google.com/file/d/1gZ7HYPPkW35G6D4NKUJ0XaS4AFaUygF9/view?usp=drivesdk
2)https://drive.google.com/file/d/1gh-Vf3xwV_sVJCWhDoKL1SsMdQ7oVO2d/view?usp=drivesdk

Tech Stack

Frontend: React, Vite

Backend: Node.js, Express

Database & Authentication: Firebase Firestore & Firebase Authentication

Hosting: Firebase Hosting


Project Structure

/fundmyfuture
  ├── /routes                # API routes for different users
  │   ├── student.js         # Routes for students (apply for funding, view status)
  │   ├── ngo.js             # Routes for NGOs (approve/reject applications)
  │   ├── donor.js           # Routes for donors (view approved applications)
  ├── /controllers           # Business logic for handling requests
  │   ├── studentController.js
  │   ├── ngoController.js
  │   ├── donorController.js
  ├── /models                # Firestore database structure (optional for data validation)
  │   ├── studentModel.js
  │   ├── ngoModel.js
  │   ├── donorModel.js
  ├── /middlewares           # Middleware functions (e.g., authentication)
  │   ├── authMiddleware.js
  ├── /config                # Configuration files
  │   ├── firebase.js        # Firebase Admin SDK setup
  │   ├── db.js              # Database connection (Firestore)
  ├── /public                # Static files (images, CSS, frontend assets if needed)
  ├── /utils                 # Helper functions (e.g., formatDate.js)
  ├── .gitignore             # Ignore node_modules, env files, and serviceAccountKey.json
  ├── serviceAccountKey.json # Firebase private key (DO NOT COMMIT TO GITHUB)
  ├── .env                   # Environment variables (Firebase, API keys)
  ├── package.json           # NPM dependencies and scripts
  ├── server.js              # Main entry point for the backend
  ├── README.md              # Documentation for the project

Setup Instructions

Prerequisites

Node.js installed

Firebase project setup with Firestore and Authentication enabled

Firebase Admin SDK private key (serviceAccountKey.json)

# 🎓 College Event Registration System

## 📌 Project Overview

This project is a simple web-based application that allows students to register for college events such as Hackathons, Workshops, and Cultural Fests.

The application demonstrates a **cloud-ready architecture** using a local prototype built with:

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js (Express)
* Database: MySQL
-------------------------------------------------------------------------------------------------------------------------------

## 🎯 Objective

* Provide an easy-to-use event registration system
* Store student data efficiently
* Demonstrate readiness for **cloud deployment (Google Cloud Platform)**
-------------------------------------------------------------------------------------------------------------------------------

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript (Fetch API)

### Backend

* Node.js
* Express.js

### Database

* MySQL
-------------------------------------------------------------------------------------------------------------------------------

## 📂 Project Structure


project-folder
│
├── FRONTEND.html
├── BACKEND.js
├── package.json
└── README.md

-------------------------------------------------------------------------------------------------------------------------------

## ⚙️ Setup Instructions (Local Prototype)

### 1️⃣ Install Prerequisites

* Install Node.js
* Install MySQL 
-------------------------------------------------------------------------------------------------------------------------------

### 2️⃣ Create Database

Open MySQL commandline client and run:

```sql
CREATE DATABASE events;

USE events;

CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(15),
    college VARCHAR(100),
    year VARCHAR(20),
    event VARCHAR(100),
    gender VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
-------------------------------------------------------------------------------------------------------------------------------

### 3️⃣ Install Dependencies

Open terminal in project folder:

```bash
npm install express mysql2 cors
```
-------------------------------------------------------------------------------------------------------------------------------

### 4️⃣ Configure Backend

In `backend.js`, update MySQL credentials:

```javascript
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "events"
});
```
-------------------------------------------------------------------------------------------------------------------------------

### 5️⃣ Run Backend Server

```bash
node backend.js
```

Expected output:-
```
MySQL Connected
Server running on http://localhost:3000
```
-------------------------------------------------------------------------------------------------------------------------------

### 6️⃣ Run Frontend

* Open `FRONTEND.html` in browser
* Fill the form
* Click **Register**
-------------------------------------------------------------------------------------------------------------------------------

## ✅ Features

* Student event registration form
* Form validation (10-digit phone number & proper email format)
* Data stored in MySQL database
* Real-time success/error message display
* No page reload when registration is successfull
-------------------------------------------------------------------------------------------------------------------------------

## 🧪 Testing

* Submit valid form → "Registration Successful"
* Submit invalid phone number or email → error message
* Check data in MySQL:

```sql
SELECT * FROM registrations; (shows data stored in the table registrations)
```
-------------------------------------------------------------------------------------------------------------------------------

## ☁️ Cloud Deployment (Proposed Architecture)

This project can be migrated to Google Cloud Platform:

| Component | GCP Service                      |
| --------- | -------------------------------- |
| Frontend  | Cloud Storage / Firebase Hosting |
| Backend   | Cloud Run                        |
| Database  | Cloud SQL (MySQL)/Firebase       |
-------------------------------------------------------------------------------------------------------------------------------

## 🔄 Migration Changes Required

* Replace local MySQL with Cloud SQL
* Deploy Node.js backend to Cloud Run
* Update API endpoint URL in frontend
* Enable public access via cloud URL
-------------------------------------------------------------------------------------------------------------------------------

## 📚 Key Learnings

* Full-stack development basics
* REST API integration
* Database connectivity using Node.js
* Client-server communication using Fetch API
* Cloud-ready architecture design
-------------------------------------------------------------------------------------------------------------------------------

## ⚠️ Challenges Faced

* Handling CORS issues
* Connecting frontend with backend
* Debugging JavaScript errors
* Managing MySQL connections
-------------------------------------------------------------------------------------------------------------------------------

## 🚀 Future Enhancements

* Admin dashboard to view registrations
* Email confirmation system
* Authentication (login/signup)
* Multi-event management
* Payment integration
-------------------------------------------------------------------------------------------------------------------------------

## 👨‍💻 Author

* Dakshitha
* Anushree
-------------------------------------------------------------------------------------------------------------------------------

## 📌 Conclusion

This project demonstrates a working prototype of a scalable event registration system and provides a strong foundation for
deployment on cloud platforms like Google Cloud.

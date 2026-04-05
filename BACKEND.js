const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dakshitha",
    database: "Events"
});

db.connect(err => {
    if (err) {
        console.log("DB Error:", err);
    } else {
        console.log("MySQL Connected");
    }
});

// API to handle registration
app.post("/register", (req, res) => {
    const {
        first_name,
        last_name,
        email,
        phone,
        college,
        year,
        event,
        gender
    } = req.body;

    const sql = `
        INSERT INTO registrations 
        (first_name, last_name, email, phone, college, year, event, gender)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [first_name, last_name, email, phone, college, year, event, gender],
        (err) => {
            if (err) {
                console.log(err);
                return res.send("Error saving data");
            }
            res.send("Registration Successful");
        }
    );
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
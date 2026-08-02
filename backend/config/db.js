const mysql = require("mysql2");

const connection = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "Root@123",

    database: "portfolio_db"

});

connection.connect((err) => {

    if (err) {

        console.error("Database Connection Failed:", err);

        return;

    }

    console.log("✅ MySQL Connected Successfully");

});

module.exports = connection;
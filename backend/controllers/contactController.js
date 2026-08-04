const db = require("../config/db");

const saveMessage = (req, res) => {

    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email address."
        });
    }

    const sql = `
        INSERT INTO messages
        (name,email,subject,message)
        VALUES (?,?,?,?)
    `;

    db.query(sql, [name, email, subject, message], (err) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        res.json({
            success: true,
            message: "Message Saved Successfully"
        });

    });

};

const getMessages = (req, res) => {

    const sql = `
        SELECT * FROM messages
        ORDER BY id DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {

            return res.status(500).json({

                success: false,

                message: "Database Error"

            });

        }

        res.json({

            success: true,

            data: results

        });

    });

};

const deleteMessage = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM messages WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {

            return res.status(500).json({

                success: false,

                message: "Database Error"

            });

        }

        res.json({

            success: true,

            message: "Message Deleted Successfully"

        });

    });

};

const updateMessage = (req, res) => {

    const { id } = req.params;

    const { name, email, subject, message } = req.body;

    const sql = `
        UPDATE messages
        SET
            name = ?,
            email = ?,
            subject = ?,
            message = ?
        WHERE id = ?
    `;

    db.query(

        sql,

        [name, email, subject, message, id],

        (err) => {

            if (err) {

                return res.status(500).json({

                    success: false,

                    message: "Database Error"

                });

            }

            res.json({

                success: true,

                message: "Message Updated Successfully"

            });

        }

    );

};

module.exports = {

    saveMessage,

    getMessages,

    deleteMessage,

    updateMessage

};
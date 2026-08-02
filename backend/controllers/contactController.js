const db = require("../config/db");

const saveMessage = (req, res) => {

    const {

        name,
        email,
        subject,
        message

    } = req.body;

    const sql = `

        INSERT INTO messages
        (name,email,subject,message)

        VALUES (?,?,?,?)

    `;

    db.query(

        sql,

        [

            name,

            email,

            subject,

            message

        ],

        (err, result)=>{

            if(err){

                console.log(err);

                return res.status(500).json({

                    success:false,

                    message:"Database Error"

                });

            }

            res.json({

                success:true,

                message:"Message Saved Successfully"

            });

        }

    );

};

module.exports = {

    saveMessage

};
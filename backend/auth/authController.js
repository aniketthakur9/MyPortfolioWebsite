const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Temporary admin credentials
const adminUser = {
    username: "aniket",
    passwordHash: bcrypt.hashSync("Aniket@123", 10)
};

const login = async (req, res) => {

    const { username, password } = req.body;

    if (username !== adminUser.username) {

        return res.status(401).json({

            success: false,

            message: "Invalid Username"

        });

    }

    const isMatch = await bcrypt.compare(password, adminUser.passwordHash);

    if (!isMatch) {

        return res.status(401).json({

            success: false,

            message: "Invalid Password"

        });

    }

    const token = jwt.sign(

        {

            username: adminUser.username

        },

        process.env.JWT_SECRET,

        {

            expiresIn: "2h"

        }

    );

    res.json({

        success: true,

        token,

        message: "Login Successful"

    });

};

module.exports = {

    login

};
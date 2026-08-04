const express = require("express");

const router = express.Router();

const {
    saveMessage,
    getMessages,
    deleteMessage,
    updateMessage
} = require("../controllers/contactController");

router.post(

    "/",

    saveMessage

);
router.get("/", getMessages);
router.delete("/:id", deleteMessage);
router.put("/:id", updateMessage);

module.exports = router;
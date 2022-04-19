const express = require('express');

const router = express.Router();

//controllers
const {
    createEvent,
    viewEvents


}= require('../controllers/examSchedule')

router.post("/create-event", createEvent);
router.get ("/view-event", viewEvents);







module.exports =router;

const express = require('express');
const cron = require("node-cron")
const router = express.Router();


router.post("/", (req, res) => {

    try {
        var d = new Date();
        var sec = d.getSeconds();
        var min = d.getMinutes();
        var date = d.getDate();
        var curr = new Date().toISOString()
        var month = d.getMonth();
        var hour = d.getHours();

        cron.schedule(`${sec + 7} ${min} ${hour} ${date}  ${month + 1} *`, () => { // this is schedule task you can manupulate the value and can make schedule using post api request.

            console.log(`task completed at using date function to know current date and time ${curr}`);
            console.log(`task completed at  ${date} ${month} ${hour}hrs ${min}min ${sec}seconds `);

        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"

        })
        res.status(201).json({ msg: "event schedule" })
    } catch (err) {
        res.status(500).json({ "message": err.message })
    }

})


module.exports = router;
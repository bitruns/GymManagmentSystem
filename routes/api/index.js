const express = require("express")
const router = express.Router()

// GET Request for Logging Trainer/Customer Out
router.get("/logout", (req, res,next) => {
    req.logout(function(err) {
        if(err){
            return next(err)
        }
        res.redirect("/")
    })
})

// Requiring admin's route
router.use("/admin", require("./admin"))

// Requiring customer's route
router.use("/member", require("./member"))

module.exports = router
const express = require("express")
const router = express.Router()

router.get("/user", (req, res) => res.send(req.user))

router.get("/", (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, '../../public', 'index.html'))
})
// API Routes
router.use("/api", require("./api"))

module.exports = router
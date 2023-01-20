const route = require("express").Router()
const path = require("path")

const moment = require("moment")
// Requiring passport
const Passport = require("passport")

const Sequelize = require("sequelize")

//Requiring customer model
const { Member, Admin, Timeslot } = require("../../models")
const { checkAdminLoggedIn } = require("../../auth")

const authenticateAdmin = (req, res, next) => {
    Passport.authenticate("admin", (err, admin) => {
        if (err)
            return next(err)
        if (!admin)
            return res.status(401).send({ err: "Invalid Credentials!" })
        req.logIn(admin, err => {
            if (err)
                return next(err)
            
            console.log("login")
            return res.status(200).sendFile(path.join(__dirname, '../../public/admin/', 'dashboard.html'))

        })
    })(req, res, next)
}

// Admin the user
route.post("/login", authenticateAdmin)

route.get("/dashboard", (req,res)=>{
    if(req.user.type === "admin"){
        return res.status(200).sendFile(path.join(__dirname, '../../public/admin/', 'dashboard.html'))
    }else{
        return res.status(400).send("You must be an admin to access the dashboard")
    }
})

route.post('/:id/createUser', async (req,res)=>{
    try {
        if (req.user.type !== "admin"){
            return res.status(401).send({ err: "You are not an admin!" })
        }

        const member = await Member.build({
            name:req.body.membername,
            password:req.body.memberpassword
        })
        const added = await member.save()

        return res.send(`Created new user with Name ${req.body.membername}. Password ${req.body.memberpassword}. And ID ${added.id}`)

    } catch (err) {
        console.error(err.stack)
        res.sendStatus(500)
    }
})

module.exports = route
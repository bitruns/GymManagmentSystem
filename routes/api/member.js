const route = require("express").Router()
const express = require('express')
const path = require("path")

const moment = require("moment")
// Requiring passport
const Passport = require("passport")

const Sequelize = require("sequelize")
const Op = Sequelize.Op


const { Member, Trainer, Timeslot} = require("../../models")
const { checkMemberLoggedIn } = require("../../auth")
const router = require(".")

// HELPERS
const authenticateMember = (req, res, next) => {
    Passport.authenticate("member", {failureRedirect: '/member/login'},(err, member) => {
        if (err)
            return next(err)
        if (!member)
            return res.status(401).send({ err: "Invalid Credentials!" })
        req.logIn(member, err => {
            if (err)
                return next(err)
            return res.status(200).sendFile(path.join(__dirname, '../../public/member', 'profile.html'))

        })
    })(req, res, next)
}

route.get("/profile", (req,res)=>{
    return res.status(200).sendFile(path.join(__dirname, '../../public/member/', 'profile.html'))
})

// Login the user
route.post("/login", authenticateMember)

// GET Route for a customer's details: 
// Customer details are kept private, Only Customer can check his details
route.get("/:id", async (req, res) => {
    try {
        if (req.user.type!=="admin"){
            if (req.user.id != req.params.id) { // Explicit Coersion
                return res.status(401).send({ err: "Cannot See other Customer's Details" })
            }
        }
        

        const attributes = { exclude: ["password"] }
        const member = await Member.findByPk(req.params.id, {attributes})
        
        if (member === null)
            return res.status(404).send({ err: "Customer not found!" })

        res.send(member)

    } catch (err) {
        console.error(err.stack)
        res.sendStatus(500)
    }
})

route.put("/:id/toggleTrainer", async (req, res) => {
    try {
        if (req.user.id != req.params.id) { // Explicit Coersion
            return res.status(401).send({ err: "Cannot See other Customer's Details" })
        }

        const member = await Member.findByPk(req.params.id)
        
        if (member === null)
            return res.status(404).send({ err: "Customer not found!" })

        if (member.wantTrainer === null){
            member.update({wantTrainer:false})
        }else if(member.wantTrainer === true){
            member.update({wantTrainer:false})
        }else{
            member.update({wantTrainer:true})
        }

        res.send(member.wantTrainer)

    } catch (err) {
        console.error(err.stack)
        res.sendStatus(500)
    }
})

route.post("/:id/changePassword", async (req, res) => {
    try {
        if (req.user.id != req.params.id) { // Explicit Coersion
            return res.status(401).send({ err: "Cannot See other Customer's Details" })
        }
        console.log(req)
        const member = await Member.findByPk(req.params.id)
        
        if (member === null)
            return res.status(404).send({ err: "Customer not found!" })

        
        if(req.body.passwordold === member.password){
            if(req.body.passwordnew != ""){
                member.update({password:req.body.passwordnew})
                return res.status(200).sendFile(path.join(__dirname, '../../public/member', 'profile.html'))
            }else{
                return res.status(400).send("New Password cannot be nothing")
            }
        }else{
            return res.status(400).send("Old Password was incorrect")
        }

    } catch (err) {
        console.error(err.stack)
        res.sendStatus(500)
    }
})

route.post("/:id/updateAge", async (req, res) => {
    try {
        if (req.user.id != req.params.id) { // Explicit Coersion
            return res.status(401).send({ err: "Cannot Change other Customer's Details" })
        }
        console.log(req)
        const member = await Member.findByPk(req.params.id)
        
        if (member === null)
            return res.status(404).send({ err: "Customer not found!" })

        member.update({age:req.body.age})
        console.log(req.body)
        return res.status(200).sendFile("profile.html")        
        

    } catch (err) {
        console.error(err.stack)
        res.sendStatus(500)
    }
})

route.post("/:id/updateWeight", async (req, res) => {
    try {
        if (req.user.id != req.params.id) { // Explicit Coersion
            return res.status(401).send({ err: "Cannot Change other Customer's Details" })
        }
        console.log(req)
        const member = await Member.findByPk(req.params.id)
        
        if (member === null)
            return res.status(404).send({ err: "Customer not found!" })

        member.update({weight:req.body.weight})
        console.log(req.body)
        return res.status(200).sendFile(path.join(__dirname, '../../public/member/', 'profile.html'))
        

    } catch (err) {
        console.error(err.stack)
        res.sendStatus(500)
    }
})

route.post("/:id/updateHeight", async (req, res) => {
    try {
        if (req.user.id != req.params.id) { // Explicit Coersion
            return res.status(401).send({ err: "Cannot Change other Customer's Details" })
        }
        console.log(req)
        const member = await Member.findByPk(req.params.id)
        
        if (member === null)
            return res.status(404).send({ err: "Customer not found!" })

        member.update({height:req.body.height})
        console.log(req.body)
        return res.status(200).sendFile(path.join(__dirname, '../../public/member/', 'profile.html'))
        
        

    } catch (err) {
        console.error(err.stack)
        res.sendStatus(500)
    }
})


module.exports = route
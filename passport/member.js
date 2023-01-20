
//Requiring passport
const passport = require("passport")

const LocalStrategy = require("passport-local").Strategy

// Requiring Member Model
const { Member } = require("../models")

// Serializing user
passport.serializeUser((member, done) => {
    // If type is member, serialize. Else pass on to other functions
    if (member.type !== "member")
        return done("pass")
    done(null, { id: member.id, type: "member" })
})

// Deserializing User
passport.deserializeUser(async ({ id, type }, done) => {
    try {
        // If type is not member, dont try to deserialize it, and pass responsibility to other functions
        if (type !== "member")
            return done("pass")

        const member = await Member.findByPk(id)

        // Member not found -> error
        if (member === null)
            throw new Error(`Member with ID ${id} not found!!`)

        done(null, { ...member.dataValues, type: "member" })
        
    } catch (err) {
        console.error(err)
        done(err)
    }
})

// Using local Strategy
passport.use("member", new LocalStrategy({
    usernameField: "membershipNo",
    passwordField: "password"
}, async (id, password, done) => {
    try {
        const member = await Member.findByPk(id)

        //Null username
        if (member === null)
            return done(null, false, { message: "Member not found!" })

        //Incorrect pass
        if (member.dataValues.password !== password){
            return done(null, false, { message: "Invalid password match" })
        }

        //Correct credentials
        return done(null, { ...member.dataValues, type: "member" })

    } catch (err) {
        console.error(err)
        done(err)
    }
}))



module.exports = passport
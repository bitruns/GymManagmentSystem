// Require Passport
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

// User files
const { Admin } = require("../models")

// Serialize Admin
passport.serializeUser((admin, done) => {
    // If not admin, pass to next function
    if (admin.type !== "admin")
        return done("pass")
    done(null, { id: admin.id, type: "admin" })
})

// Deserialize Admin
passport.deserializeUser(async ({ id, type }, done) => {
    try {
        // If not admin, pass to next function
        if (type !== "admin")
            return done("pass")
        
        const admin = await Admin.findByPk(id).then(function(data){
            return data
        })
        if (admin === null)
        throw new Error("Admin not found!!")
    
        done(null, { ...admin.dataValues, type: "admin" })
        
        
    } catch (err) {
        console.error(err)
        done(err)
    }
})


// Local Use Method
passport.use("admin", new LocalStrategy({
    usernameField: "id",
    passwordField: "password"
}, async (id, password, done) => {
    try {
        const admin = await Admin.findByPk(id)
        // If admin not found say message
        if (admin === null)
            return done(null, false, { message: "Invalid ID FOR ADMIN" })

        // Invalid Password
        if (admin.dataValues.password !== password)
            return done(null, false, { message: "Invalid password" })

        // Valid Credentials
        return done(null, { ...admin.dataValues, type: "admin" })

    } catch (err) {
        console.error(err)
        done(err)
    }
}))

module.exports = passport
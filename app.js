// Node Packages
const express = require("express")
const session = require("express-session")
const cookieParser = require("cookie-parser");
const passport = require("./passport")
const path = require("path")
const mysqlStore = require('express-mysql-session')(session);


// User Files
const CONFIG = require("./config")

const sessionStore = new mysqlStore({
    user: CONFIG.DB.USER,
    password: CONFIG.DB.PASSWORD,
    host: CONFIG.DB.HOST,
    port: CONFIG.DB.PORT,
    database: CONFIG.DB.DATABASE,
    createDatabaseTable: true
});


// Initialization
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: CONFIG.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true, 
        secure: false,
        sameSite: 'strict',
      }
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())

// Serve the Frontend
app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }))

// ROUTES
app.use("/", require("./routes"))

app.set('trust proxy', 1); // trust first proxy

// Start the server
app.listen(CONFIG.SERVER.PORT, () => {
    console.log(`Server started at http://${CONFIG.SERVER.HOST}:${CONFIG.SERVER.PORT}`)
})
// Import Sequelize
const Sequelize = require("sequelize")

// User Files
const config = require("../config")

// Connect to Database
const db = new Sequelize(config.DB.DATABASE, config.DB.USER, config.DB.PASSWORD, {
	host: config.DB.HOST,
  dialect: "mysql",
  logging: false
})


// Import Models
const Admin = db.import("./admin")
const Member = db.import("./member")
const Trainer = db.import("./trainer")
const Timeslot = db.import("./timeslot")
const Bill = db.import("./bill")
const Gym = db.import("./gym")

// Associations

// Members belong to the gym. The gym has many members
Member.belongsTo(Gym)
Gym.hasMany(Member)

// Trainers belong to the gym. The gym has many trainers
Trainer.belongsTo(Gym, {constraints: false })
Gym.hasMany(Trainer, { constraints: false })

// Each member belongs to a trainer. Each trainer has many member
Member.belongsTo(Trainer)
Trainer.hasMany(Member)

// Each timeslot is associated to a member. Members can have many timeslots
Timeslot.belongsTo(Member, { constraints: false })
Member.hasMany(Timeslot, { constraints: false })

Bill.belongsTo(Member, { constraints: false })
Member.hasMany(Bill, { constraints: false })

db.authenticate()
  .then(() => db.sync({ alter: true }))
  .then(() => console.log("Database Ready!"))
  .catch(err => {
      console.error("Connection To Database Error: ", err)
      process.exit()
  })

// Export the Database and Connection
module.exports = { Admin, Member, Trainer, Bill, Timeslot, Gym, db }
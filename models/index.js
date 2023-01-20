// Import Sequelize
const Sequelize = require("sequelize")

const DataTypes = require('sequelize/lib/data-types');

// User Files
const config = require("../config")

// Connect to Database
const db = new Sequelize(config.DB.DATABASE, config.DB.USER, config.DB.PASSWORD, {
    host: config.DB.HOST,
    dialect: config.DB.DIALECT,
    logging: false,
    define: {
        freezeTableName: true
    }

})

// Import Models
const Gym = db.define("gym", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
})

const Admin = db.define("admin", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING
})

const Member = db.define("member", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    wantTrainer: {
        type: DataTypes.BOOLEAN,
        defaultValue:0,
    },
    age: DataTypes.INTEGER,
    joinDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    height: DataTypes.REAL,
    weight: DataTypes.REAL
})

const Trainer = db.define("trainer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
})

const Timeslot = db.define("timeslot", {
    time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

const Bill = db.define("bill", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    membershipNo: DataTypes.INTEGER,
    memberName: DataTypes.STRING,
    hourlyCharge: DataTypes.INTEGER,
    trainerAddition: DataTypes.INTEGER,
})

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
  //Creates default admin account "admin" "password"
  .then(async ()=>{
    if(await Admin.count({where: {id: 1}}) < 1){
        const root = Admin.build({name:"admin", password:"password"}).save()
        console.log(root)
    }
  })
  .catch(err => {
      console.error("Connection To Database Error: ", err)
      process.exit()
  })

  

// Export the Database and Connection
module.exports = { Admin, Member, Trainer, Bill, Timeslot, Gym, db }
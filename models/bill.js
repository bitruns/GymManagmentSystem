module.exports = (sequelize, DataTypes) => {
    return sequelize.define("bill", {
        invoiceNo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        membershipNo: DataTypes.INTEGER,
        memberName: DataTypes.STRING,
        hourlyCharge: DataTypes.INTEGER,
        trainerAddition: DataTypes.INTEGER,
    })
}
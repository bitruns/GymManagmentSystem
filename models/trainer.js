module.exports = (sequelize, DataTypes) => {
    return sequelize.define("trainer", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
    })
}
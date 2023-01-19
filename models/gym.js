module.exports = (sequelize, DataTypes) => {
    return sequelize.define("gym", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        capacity: DataTypes.INTEGER,
    })
}
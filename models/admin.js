module.exports = (sequelize, DataTypes) => {
    return sequelize.define("admin", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING
    })
}
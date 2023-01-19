module.exports = (sequelize, DataTypes) => {
    return sequelize.define("member", {
        membershipNo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        wantTrainer: DataTypes.BOOLEAN,
        age: DataTypes.INTEGER,
        joinDate: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        height: DataTypes.REAL,
        weight: DataTypes.REAL,
    })
}
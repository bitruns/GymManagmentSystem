module.exports = (sequelize, DataTypes) => {
    return sequelize.define("timeslot", {
        time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
};
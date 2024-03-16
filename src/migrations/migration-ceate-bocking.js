'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Bockings', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
                // statusId: DataTypes.STRING,
                // docterId: DataTypes.INTEGER,
                // patientId: DataTypes.INTEGER,
                // date: DataTypes.DATE,
                // timetype: DataTypes.STRING
            },
            statusId: {
                type: Sequelize.STRING
            },
            docterId: {
                type: Sequelize.INTEGER
            },
            patientId: {
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATE
            },
            timetype: {
                type: Sequelize.STRING
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Bockings');
    }
};
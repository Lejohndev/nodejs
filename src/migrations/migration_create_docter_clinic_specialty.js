'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Docter_clinic_specialtes', {
            // docterID: DataTypes.INTEGER,
            // cinlicID: DataTypes.INTEGER,
            // specialtyID: DataTypes.INTEGER
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            docterID: {
                type: Sequelize.INTEGER
            },
            cinlicID: {
                type: Sequelize.INTEGER
            },
            specialtyID: {
                type: Sequelize.INTEGER
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Docter_clinic_specialtes');
    }
};
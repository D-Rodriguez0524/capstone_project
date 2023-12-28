const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('starwars', 'capstone', 'finalpj2023', {
    host: 'localhost',
    dialect: 'postgres'
});

async function authenticate() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

authenticate();

module.exports = sequelize;
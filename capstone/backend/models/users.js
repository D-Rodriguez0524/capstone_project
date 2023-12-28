const { DataTypes, BOOLEAN } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require("../db");


const { BCRYPT_WORK_FACTOR } = require('../config')

const User = sequelize.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Please enter valid username"
            },
            min: 5,
            max: 25
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Please enter valid password"
            },
            min: 5,
            max: 15
        }
    },

}, {
    freezeTableName: true
});

// const Deck = sequelize.define('deck', {
//     deck_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     hero: DataTypes.STRING,
//     villian: DataTypes.STRING
// }, {
//     freezeTableName: true
// });

// const UserDeck = sequelize.define('DeckUser', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     }
// }, {
//     freezeTableName: true
// });

// Deck.belongsToMany(User, { through: 'DeckUser' });
// User.belongsToMany(Deck, { through: 'DeckUser' });


async function register({ username, password }) {

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    try {
        await User.create({
            username: username,
            password: hashedPassword
        })
    } catch (e) {
        console.error("Sorry something went wrong", error)
    }

}


async function authenticate(username, password) {
    try {
        const user = await User.findOne({ where: { username: username } });
        if (user) {
            const isValid = await bcrypt.compare(password, user.password)
            if (isValid === true) {
                delete user.password;
                return user;
            }
        } else {
            console.error('error');
        }
    } catch (error) {
        console.error("Sorry but you are not authorized to be here", error);
    }
}

async function get(username) {
    try {
        const user = await User.findAll({
            where: {
                username: username
            }
        })
        return user;
    } catch (error) {
        console.error(`Cant find username at ${username}`, error);
    }
}

async function remove(username) {
    try {
        await User.destroy({
            where: {
                username: username
            }
        });

    } catch (error) {
        console.error(`Cant find username at ${username}`, error);
    }
}

module.exports = {
    authenticate,
    register,
    get,
    remove
}
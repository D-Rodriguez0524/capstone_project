const { DataTypes, BOOLEAN } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../db");

const { BCRYPT_WORK_FACTOR } = require("../config");

const User = sequelize.define(
  "users",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter valid username",
        },
        min: 5,
        max: 25,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter valid password",
        },
        min: 5,
        max: 15,
      },
    },
    isHero: DataTypes.BOOLEAN,
    isVillian: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

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

async function register({ username, password, isRebellion, isDarkside }) {
  // console.log(password);
  const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
  try {
    const user = await User.create({
      username,
      password: hashedPassword,
      isHero: isRebellion,
      isVilian: isDarkside,
    });
    return user;
  } catch (error) {
    console.error("Sorry something went wrong", error);
  }
}

// console.log("register", register('test', 'testing123'));

async function authenticate(username, password) {
  try {
    const user = await User.findOne({ where: { username: username } });
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid === true) {
        delete user.password;
        return user;
      }
    } else {
      console.error("error");
    }
  } catch (error) {
    console.error("Sorry but you are not authorized to be here", error);
  }
}

// console.log("authenticate", authenticate('test', 'testing123'));

async function getUser(username) {
  try {
    console.log("username", username);
    const user = await User.findAll({
      where: {
        username: username,
      },
    });
    // console.log(user);
    return user;
  } catch (error) {
    console.error(`Cant find username at ${username}`, error);
  }
}

// console.log("getUser", getUser("luke"));

async function remove(username) {
  try {
    await User.destroy({
      where: {
        username: username,
      },
    });
  } catch (error) {
    console.error(`Cant find username at ${username}`, error);
  }
}

module.exports = {
  authenticate,
  register,
  getUser,
  remove,
};

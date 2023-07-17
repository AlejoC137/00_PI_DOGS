
// const { Sequelize } = require("sequelize");
// require('dotenv').config()

// const DogsModels  = require('./models/DogsModels.js')
// const TempermentModels = require('./models/TempermentModels.js')


// const {
// DB_USER, 
// DB_PASSWORD, 
// DB_HOST, 
// } = process.env

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:${DB_HOST}/dogs`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });

// // defonir modelos a usar 
// DogsModels(sequelize);
// TempermentModels(sequelize);

// //Crea las relaciones asociaciones
// const { Dog , Temperament } = sequelize.models


// // un Dog puede tener muchos Temperaments 
// Dog.hasMany(Temperament);

// // un Temperament puede estar en muchos Dog 
// Temperament.hasMany(Dog);

// Dog.belongsToMany(Temperament , { through:'DogTemperament' ,  timestamps: false,})
// Temperament.belongsToMany(Dog , { through:'DogTemperament' ,  timestamps: false,})


// //exportar 
// module.exports = {
//   ...sequelize.models,
//   conn: sequelize
// }

const { Sequelize } = require("sequelize");
require('dotenv').config()

const DogsModels = require('./models/DogsModels.js');
const TemperamentModels = require('./models/TemperamentModels.js');

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:${DB_HOST}/dogs`, {
  logging: false,
  native: false,
});

// Define models to use
DogsModels(sequelize);
TemperamentModels(sequelize);

// Create the DogTemperament model
// const DogTemperament = sequelize.define("DogTemperament", {}, { timestamps: false });

// Define associations
const { Dog, Temperament } = sequelize.models;

// // un Dog puede tener muchos Temperaments 
// Dog.hasMany(Temperament);

// // un Temperament puede estar en muchos Dog 
// Temperament.hasMany(Dog);


// A Dog can have many Temperaments
Dog.belongsToMany(Temperament, { through: "DogTemperament" });

// A Temperament can be associated with many Dogs
Temperament.belongsToMany(Dog, { through: "DogTemperament" });

// Export the models and connection
module.exports = {
  ...sequelize.models,
  conn: sequelize
};

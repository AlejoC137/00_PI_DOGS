// const { DataTypes } = require("sequelize");




// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = function (sequelize) {
//   // defino el modelo

//   // 📍 MODELO 2 | Temperaments
//   sequelize.define("Temperament", {
//     //--v son sugerencias del repaso, queda pendiendte de revision , porque tambien podria sor solo DataType.INTEGER || STRING , manteniendo primaryKey:true y sumando UNIQUE:true 
//     UUID: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4
//     },
//     Name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     }
//   },
//     { timestamps: false }
//   );

// };
      


const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  sequelize.define("Temperament", {
    UUID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

  },
  { timestamps: false });
};

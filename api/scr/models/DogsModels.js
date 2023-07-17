const { DataTypes } = require("sequelize");




// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    
// defino el modelo

// 📍 MODELO 1 | Dogs
sequelize.define("Dog", {
  //--v son sugerencias del repaso, queda pendiendte de revision , porque tambien podria sor solo DataType.INTEGER || STRING , manteniendo primaryKey:true y sumando UNIQUE:true 

        id : {
          type:DataTypes.UUID,
          primaryKey: true ,
          defaultValue: DataTypes.UUIDV4
        },
        Imagen: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        Nombre: {
          type: DataTypes.STRING,
          allowNull: false,
          unique:true
        },
        Altura: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        Peso: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        Longevidad: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        Temperamento: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      {timestamps:false}
      );


      };
      
      
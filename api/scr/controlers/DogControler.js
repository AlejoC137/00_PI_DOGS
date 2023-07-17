const { Sequelize, Op} = require("sequelize");
const {Dog , Temperament } = require("../db")
const axios = require("axios");
require('dotenv').config()





const {

API_KEY 
} = process.env



const BASE_URL = 'https://api.thedogapi.com/v1';
// --------------- test vars 

const loadTemps = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });

    const breeds = response.data;

    const temperamentProtoList = [];

    breeds.forEach((breed) => {
      if (breed.temperament) {
        temperamentProtoList.push(
          breed.temperament.split(',').map((item) => item.trim())
        );
      }
    });

    function getUniqueStrings(arrays) {
      const uniqueStrings = new Set();

      arrays.forEach((array) => {
        array.forEach((string) => {
          uniqueStrings.add(string);
        });
      });

      return Array.from(uniqueStrings);
    }

    const tempList = getUniqueStrings(temperamentProtoList);

    await Promise.all(

      tempList.map(async (temp) => {
        await Temperament.create({
          Name: temp,
        });
      })

      


    );

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
};








// --------------- maybe controlers ( they did work! )




const getAllDogsController = async () => {
  try {
    // Obtener las razas de perros de la API
    const response = await axios.get(`${BASE_URL}/breeds`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });

    const breeds = response.data;
 

    

    // Guardar las razas de perros en la base de datos, al final todo lo que pelie y no era lo que necesitaba 
    // await Promise.all(
    //   breeds.map(async (Breeds) => {
    //     await Dog.create({
    //       Imagen: Breeds.image.url,
    //       Nombre: Breeds.name,
    //       Altura: Breeds.height.metric+" cm",
    //       Peso: Breeds.weight.metric+" kg",
    //       Longevidad: Breeds.life_span,
    //     });
    //   })
    // );

      // filtra la info de las razas de perros para llevarlas al front
      const dogsClean = []
    await Promise.all(


      breeds.map(async (Breeds) => {
    // Extract the metric weight values
    const weightMetricValues = Breeds.weight.metric.split(' - ');
    let averageWeight = '';

    // Calculate average weight
    if (weightMetricValues.length > 1) {
      const weightSum = weightMetricValues.reduce(
        (sum, value) => sum + parseFloat(value),
        0
      );
      averageWeight = (weightSum / weightMetricValues.length).toFixed(1);
    } else {
      averageWeight = weightMetricValues[0];
    }

    // Extract the metric height values
    const heightMetricValues = Breeds.height.metric.split(' - ');
    let averageHeight = '';

    // Calculate average height
    if (heightMetricValues.length > 1) {
      const heightSum = heightMetricValues.reduce(
        (sum, value) => sum + parseFloat(value),
        0
      );
      averageHeight = (heightSum / heightMetricValues.length).toFixed(1);
    } else {
      averageHeight = heightMetricValues[0];
    }
        
        dogsClean.push({
          Imagen: Breeds.image.url,
          Nombre: Breeds.name,
          Altura: averageHeight,
          Peso: +averageWeight,
          Longevidad: Breeds.life_span,
          Temperamento: Breeds.temperament,
          Origen: Breeds.origin,
          id: Breeds.id,
        });
      })
    );




    return dogsClean
  } catch (error) {
    console.error(error);
    throw new Error("Ocurrió un error en el servidor");
  }
};
const getAllDogsDbController = async () => {
  try {
    
    const allDogs = await Dog.findAll();

    return allDogs

  } catch (error) {
    console.error(error);
    throw new Error("Ocurrió un error en el servidor");
  }
};

const getTemperamentsController = async () =>{
  try {
    const response = await axios.get(`${BASE_URL}/breeds`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });

    const breeds = response.data;
    // console.log(breeds);
const temperamentProtoList = []
    breeds.forEach((breed) => {
      if (breed.temperament) {
         temperamentProtoList.push(breed.temperament.split(',').map((item) => item.trim())) 
        // temperamentProtoList.forEach((temperament) => {
        //   temperamentsSet.add(temperament);
        }
      })

      function getUniqueStrings(arrays) {
        const uniqueStrings = new Set();
      
        arrays.forEach(array => {
          array.forEach(string => {
            uniqueStrings.add(string);
          });
        });
      
        return Array.from(uniqueStrings);
      }
 
      const tempList = getUniqueStrings(temperamentProtoList)

      // await Promise.all(
      //   tempList.map(async (temp) => {
      //     await Temperament.create({
      //       Name: temp
  
      //     });
      //   })
      // );

      return tempList



  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
};

const getRazaByIDController = async (id , source ) => { //<--- this does (badly) what readme-guy said
  
  if ( source === 'api'){


    try {

 
      const response = await axios.get(`${BASE_URL}/breeds`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
      });
  
      const doge = response.data.find(dog => dog.id === +id);
      const dog = {
        Imagen:doge.image.url,
        Nombre:doge.name,
        Altura:doge.height.metric,
        Peso:doge.weight.metric,
        Longevidad: doge.life_span,
        Origen: doge.origin,
        Temperamento: doge.temperament//<---  se deber resolve este lio los temperamentos 
      }
      return dog
    } catch (error) {
      console.error(error);
      throw new Error("Ocurrió un error en el servidor");
    }


  }

  if ( source === 'bdd'){
    try {

      const dog = await Dog.findByPk(id, { include: Temperament });
  
      if (!dog) {
        throw new Error("No se encontró la raza de perro");
      }
  
      // Construir el objeto de detalle de la raza
  
  
      return dog;
    } catch (error) {
      console.error(error);
      throw new Error("Ocurrió un error en el servidor");
    }
  }


};

const getDogByNameController = async (req, res) => {
  try {
    const name = req.query.name.toLowerCase();

    const response = await axios.get(`${BASE_URL}/breeds/search?q=${name}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });

    const apiBreeds = response.data.map((Breeds) => ({
      id: Breeds.id,
      Imagen: Breeds.reference_image_id,
      Nombre: Breeds.name,
      Altura: Breeds.height.metric + " cm",
      Peso: Breeds.weight.metric + " kg",
      Longevidad: Breeds.life_span,
      Temperamento: Breeds.temperament
    }));

    const dbBreeds = await Dog.findAll({
      where: {
        Nombre: { [Op.iLike]: `%${name}%` },
      },
      include: Temperament,
    });

    const dogBreeds = [...apiBreeds];

    dbBreeds.forEach((dbBreed) => {
      const exists = apiBreeds.some((apiBreed) => apiBreed.name === dbBreed.Nombre);
      if (!exists) {
        dogBreeds.push({
          Imagen: dbBreed.Imagen,
          Nombre: dbBreed.Nombre,
          Altura: dbBreed.Altura,
          Peso: dbBreed.Peso,
          Longevidad: dbBreed.Longevidad,
          Temperamento: dbBreed.Temperamento
        });
      }
    });

    res.json(dogBreeds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
};


const postDogsController = async (req, res) => {
  const { Imagen, Nombre, Altura, Peso, Longevidad, Temperamento } = req.body;

  try {
    // Check if the dog name already exists
    const existingDog = await Dog.findOne({ where: { Nombre } });

    if (existingDog) {
      throw new Error("El perro ya existe ");
    }

    const temperaments = await Temperament.findAll({
      where: { Name: Temperamento }})

    // Create the dog breed in the database
    const createdDog = await Dog.create({
      Imagen,
      Nombre,
      Altura,
      Peso,
      Longevidad,
      Temperamento,
    });

    // Relate the dog breed with the associated temperaments

 
        // await createdDog.addTemperaments([temperaments[0].dataValues.UUID]);
        await temperaments[0].addDogs([createdDog.dataValues.id]);

      // await Dog.addTemperament([temperaments[0].dataValues.UUID])
// console.log([temperaments[0].dataValues.UUID]);
// console.log([createdDog.dataValues.id]);

    res.status(201).json(createdDog);
  } catch (error) {
  
    res.status(501).json( ' ya existe' );

  }
};



  module.exports = { 
    getAllDogsController,
    getAllDogsDbController,
    getRazaByIDController,
    getDogByNameController,
    postDogsController,
    getTemperamentsController,
    loadTemps
  
 };
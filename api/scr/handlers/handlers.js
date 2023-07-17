const { 
    getAllDogsController,
    getAllDogsDbController,
    getRazaByIDController,
    getDogByNameController ,
    postDogsController,
    getTemperamentsController 


} = require("../controlers/DogControler.js");

const getAllDogsDb = async (req, res) => {
    try {
      // Llamar al controlador getAllDogsController para obtener las razas de perros
      const dogBreeds = await getAllDogsDbController(req, res);
  
      // Enviar la respuesta con las razas de perros
      res.json(dogBreeds);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    }
};
const getAllDogs = async (req, res) => {
    try {
      // Llamar al controlador getAllDogsController para obtener las razas de perros
      const dogBreeds = await getAllDogsController(req, res);
  
      // Enviar la respuesta con las razas de perros
      res.json(dogBreeds);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    }
};

const getRazaByID = async (req, res) => {
  try {
    // Llamar al controlador getRazaByIDController para obtener el detalle de la raza por su ID
 const { id }= req.params

 const source =  isNaN(id) ? 'bdd' : 'api';
    const dogByID = await getRazaByIDController(id , source );
    // Enviar la respuesta con los datos del perro buscado por id
    res.json( dogByID );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
};

const getDogByName = async (req, res) => {
  try {
    await getDogByNameController(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
};


const postDogs = async (req, res) => {
    try {
      // Llamar al controlador postDogsController para crear una nueva raza de perro
      const createdDog = await postDogsController(req, res);
  
      // Enviar la respuesta con la raza de perro creada y los temperamentos asociados
      res.status(201).json(createdDog);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
};

const getTemp = async (req, res) => {
  try {
    // Llamar al controlador getTemperamentsController para obtener los temperamentos
    const temperaments = await getTemperamentsController();

    // Enviar la respuesta con los temperamentos
    res.status(200).json(temperaments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
};

module.exports = {
    getAllDogs,
    getAllDogsDb,
    getRazaByID,
    getDogByName,
    postDogs,
    getTemp
}

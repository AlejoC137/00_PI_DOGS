const {
    getAllDogs,
    getAllDogsDb,
    getRazaByID,
    getDogByName,
    postDogs,
    getTemp
} = require("../handlers/handlers.js")

//--router de expressv
const {Router} =  require("express");


//--se crea el Router a partir de ejecutar express v , MR = main router
const MR = Router() 




//--ROUTES v

// primary route v

MR.get("/dogs" ,   getAllDogs ) // 80%ish  <--MONTA TODOS LOS PERROS EN LA BD Y LOS RETORNA
//localhost:3001/dogs <-- req test 

MR.get("/dog/:id" , getRazaByID  ) // 80%ish <-- TRAE UN PERRO POR PARAMS.ID 

MR.get("/dogsdb" ,   getAllDogsDb ) // 80%ish  <--MONTA TODOS LOS PERROS EN LA BD Y LOS RETORNA

MR.get("/dogs/name", getDogByName); // 80%ish  <-- USA EL ENDPOINT PARA TRAER PERRO POR Q. 

// localhost:3001/dogs/name?name=American <-- query test 
// V""""""""""" json body test
//  {                              
//   "Imagen": "dog_image.jpg",
//   "Nombre": "Arturo",
//   "Altura": "Medium",
//   "Peso": "Medium",
//   "Longevidad": "10-12 years",
//   "Temperamentos": ["Friendly", "Intelligent"]
// }


MR.post("/postdogs" , postDogs ) //  80%ish <-- temperments ??¯\_(ツ)_/¯  
// localhost:3001/postdogs <-- query test 


MR.get("/temps" , getTemp ) // 80%ish <-- MONTAS TODOS LOS TEMPERAMENTOS A LA BD Y LOS RETORNA 

module.exports =  MR

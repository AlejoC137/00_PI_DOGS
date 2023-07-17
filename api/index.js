
const server = require("./scr/app.js")
const {conn} =require("./scr/db.js")
const { 
    // getAllDogsController,
    // getRazaByIDController,
    // getDogByNameController ,
    // postDogsController,
    // getTemperamentsController 
    loadTemps

} = require("./scr/controlers/DogControler.js");

const PORT = 3001;

server.listen(PORT , ()=>{
    conn.sync({force: true });
    // loadDogs();
    loadTemps();
    // pupulateTemps();
    console.log(`listening on port ${PORT}`)
})



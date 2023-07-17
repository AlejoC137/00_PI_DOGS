// import { exp } from "mathjs";
import { SET_SELECTED_TEMPERAMENTS , GET_ALL_DOGS , GET_ALL_TEMPS,POST_DOG,GET_DOG_BY_NAME,FILTER_BY_SOURCE ,ORDER_DOGS ,POST_STATUS } from "./types";
import axios from "axios";



export const getAllDogs = ()=>{
return async function  (dispatch){
    try {
      const dogsApi = await axios.get('http://localhost:3001/dogs')
      const dogsDb = await axios.get('http://localhost:3001/dogsdb')
      // const dogs = dogsDb.concat(dogsApi);
      const dogs = dogsDb.data.concat(dogsApi.data)
      return dispatch({
        type:GET_ALL_DOGS,
        payload: dogs
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}
export const getAllTemps = ()=>{
return async function  (dispatch){
    try {
  
      // const dogs = dogsDb.concat(dogsApi);
      const temps = await axios.get('http://localhost:3001/temps');

      return dispatch({
        type:GET_ALL_TEMPS,
        payload: temps.data
      })

    } catch (error) {
      console.log(error.message);
    }
  }
}






export const postDog = (dog) => {
  return async function (dispatch) {
    try {
  
      // const dogs = dogsDb.concat(dogsApi);
   await axios.post('http://localhost:3001/postdogs', dog )

      return dispatch({
        type: POST_STATUS,
        payload: `${dog.Nombre} ha sido creado`,
      })
      
    } catch (error) {
      return dispatch({
          type: POST_STATUS,
          payload: ` ${error.response.data} ${dog.Nombre} `
        })
        // console.log(error.response.data)
    }



 
  };
};

  




export const getDogByName = (query) => {
  return async function (dispatch) {
    try {
  // localhost:3001/dogs/name?name=American
      // const dogs = dogsDb.concat(dogsApi);
      const dogByName = await axios.get(`http://localhost:3001/dogs/name?name=${query}` );
      return dispatch({
        type: GET_DOG_BY_NAME,
        payload: dogByName.data,
      })
    } catch (error) {
      console.log(error.message);
    }

  };
};

export const setOrder = (order) => {



  return async function (dispatch) {
    try {
      return dispatch({
        type: ORDER_DOGS,
        payload: order
      })
      } catch (error) {
        console.log(error.message);
    }
  };
};

export const setSource = (source)=>{
  // return async function  (dispatch){

    // console.log(source)
    // try {
      return {
        type:FILTER_BY_SOURCE,
        payload: source
      }
  
      // } catch (error) {
        // console.log(error.message);
      // }
    // }
  };

  export const setSelectedTemperaments = (temperament) => {
    // console.log(temperament)
  // return async function  (dispatch){
    // try {
      return {
        type: SET_SELECTED_TEMPERAMENTS,
        payload: temperament,
      };
    // } catch (error) {
        // console.log(error.message);
      // }
    // }
  };


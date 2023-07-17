import {
  SET_SELECTED_TEMPERAMENTS,
  GET_ALL_DOGS,
  GET_ALL_TEMPS,
  POST_DOG,
  GET_DOG_BY_NAME,
  FILTER_BY_SOURCE,
  ORDER_DOGS,
  POST_STATUS,
} from "./types";

const initialState = {
  dogs: [],
  filtered: [],
  alldogs: [],
  selectedTemperaments: "",
  source: "",
  order: "",
  temps: [],
  dogPosted: [],
  dogByName: [],
  postStatus: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DOG:
      return {
        ...state,
        dogPosted: action.payload,
      };

    case POST_STATUS:
      return {
        ...state,
        postStatus: action.payload,
      };

    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        alldogs: action.payload,
        filtered: action.payload,
      };

    case GET_ALL_TEMPS:
      return {
        ...state,
        temps: action.payload,
      };

    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogByName: action.payload,
      };

    case SET_SELECTED_TEMPERAMENTS:
      let filteredDogs = state.dogs.filter((dog) =>
        dog.Temperamento ? dog.Temperamento.includes(action.payload) : null
      );

      return {
        ...state,
        selectedTemperaments: action.payload,
        alldogs: filteredDogs,
        filtered: filteredDogs,
      };

    case ORDER_DOGS:
      let orderedDogs = [...state.alldogs];

      if (action.payload === "nameAsc") {
        orderedDogs.sort((a, b) => a.Nombre.localeCompare(b.Nombre));
      } else if (action.payload === "nameDesc") {
        orderedDogs.sort((a, b) => b.Nombre.localeCompare(a.Nombre));
      } else if (action.payload === "weightAsc") {
        orderedDogs.sort((a, b) => a.Peso - b.Peso);
      } else if (action.payload === "weightDesc") {
        orderedDogs.sort((a, b) => b.Peso - a.Peso);
      }

      return {
        ...state,
        order: action.payload,
        alldogs: orderedDogs,
        filtered: orderedDogs,
      };

    case FILTER_BY_SOURCE:
      let sourcedDogs = state.dogs;

      switch (action.payload) {
        case "Database":
          sourcedDogs = state.filtered.filter((dog) => typeof dog.id === "string");
          break;
        case "API":
          sourcedDogs = state.filtered.filter((dog) => typeof dog.id === "number");
          break;
        case "ALL":
          sourcedDogs = state.filtered
          break;

        default:
          sourcedDogs = state.dogs;
      }
  // console.log(sourcedDogs)
      return {
        ...state,
        source: action.payload,
        alldogs: sourcedDogs,
      };

    default:
      return state;
  }
};

export default reducer;

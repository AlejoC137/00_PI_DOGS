

import {  useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SearchResult from '../searchResult/searchResult';
import style from './searchResults.module.css';
import { 
  getAllDogs,
   getAllTemps, 
   setSelectedTemperaments 
  } from '../../redux/actions.js';




export default function Cards(props) {
  
const dispatch = useDispatch()

const infos = props.info;

if (!infos) {
  return null; // or you can return a loading state or an empty div
}

  return (
    <>

      <div className={style.Cards}>
        {infos.map((dog, index) => (
          <div key={index}>
            <SearchResult
              className={style.Logcards}
              name={dog.Nombre}
              weight={dog.Peso}
              height={dog.Altura}
              gender={dog.Longevidad}
              temperament={dog.Temperamento}
              origin={dog.Origen}
              image={dog.Imagen}
              id={dog.id}
         
            />
          </div>
        ))}
      </div>
      
    
    </>
  );
}


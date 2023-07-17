import React, { useEffect } from 'react';
import style from './Navigation.module.css';
// import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  getDogByName } from '../../redux/actions';
import SearchResults from "../../components/searchResults/SearchResults.jsx"

function Navigation(props) {


  const dispatch = useDispatch()

    //traer la data del reducer -->
  
    const dogss = useSelector(state => state.dogs)
  
    // useEffect(()=>{
    //   dispatch(getAllDogs())
    // } , [ ])
    
    const handleDogNameChange = (event) => {

      dispatch(getDogByName(event.target.value))

    }
    //traer la data del reducer --<
    
    const dogs = useSelector(state => state.dogByName);
    const info = dogs.slice(0, 4);

    

  return (
    <div 
    className={style.navDiv}
    > 

      {/* <button className={style.button}>
        <Link to='/articles'> Articulos </Link>
      </button> */}

      {/* <button className={style.button}>
        <Link to='/mydogs'> Mis Perros </Link>
      </button>  */}

      {/* <button className={style.button}>
        <Link to='/Informate'> Informate </Link>
      </button> */}

      <input
        type="text"
        name="searchbyname"
        placeholder='🔍︎ Busca un perro...'
        onChange={handleDogNameChange}
        list="dogoptiones"
        className={style.input}
      />
      
      <datalist id="dognames">
        {dogss.map((temperament) => (
          <option key={temperament.Nombre} value={temperament.Nombre} />
        ))}
      </datalist>

      <SearchResults info={info} />

      {/* <SearchBar  onSearch={props.onSearch}  /> */}
    </div>
  );
}

export default Navigation;



 
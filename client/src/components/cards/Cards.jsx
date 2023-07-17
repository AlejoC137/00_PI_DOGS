import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from '../card/Card.jsx';
import style from './Cards.module.css';
import { setOrder , setSelectedTemperaments, setSource, getAllDogs, getAllTemps, } from '../../redux/actions.js';

export default function Cards(props) {
  const dispatch = useDispatch();

 
  // Traer la data del reducer -->
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemps());

    // console.log('dogs:' , dogs);
  }, []);
  // Traer la data del reducer --<

  const [ aux, setAux] = useState(false)



  // Ordenador -->
  const handleOrder = (event) => {
    setCurrentPage(1)
    dispatch(setOrder(event.target.value));
    aux ? setAux(false) : setAux(true)
  };
  // Ordenador --<

  // Envia source al reducer -->
  const handleOriginChange = (event) => {
    // dispatch(setSource());
    setCurrentPage(1)
    dispatch(setSource(event.target.value));
    aux ? setAux(false) : setAux(true)

  };
  // Envia source al reducer --<
  

  // Filtro temperamento -->
  const handleTemperamentChange = async (event) => {
    setCurrentPage(1)
    dispatch(setSelectedTemperaments(event.target.value));

 };
  // Filtro temperamento --<





  // trae el estado de los perros -->
  const dogs = useSelector(state => state.alldogs)
  // trae el estado de los perros --<



  //trae todos los temps -->
  const temperaments = useSelector(state => state.temps);
  //trae todos los temps --<




  // Paginado -->
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  let currentDogs = dogs.length < dogsPerPage ? dogs : dogs.slice(indexOfFirstDog, indexOfLastDog);
  
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(dogs.length / dogsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  // Paginado --<



  // useEffect(() => {
   
  // }, [dispatch, dogs]);


  return (
    <>
      <div className={style.filter}>
        {/* <h2 className={style.tittl} >FILTRO: </h2> */}
        <input
          type="text"
          name="temperaments"
          placeholder="Busca por temperamento"
          onInput={handleTemperamentChange}
          list="temperamentOptions"
        />
        <datalist id="temperamentOptions" placeholder="D">
          {temperaments.map((temperament) => (
            <option key={temperament} value={temperament} />
          ))}
        </datalist>

        <select name="origin" onInput={handleOriginChange} >
          <option value='ALL'>Todos</option>
          <option value="API">Existentes (API)</option>
          <option value="Database">Mis perros (DB)</option>
        </select>

        <select name="sort" onInput={handleOrder}>
          {/* <option value="">Ordenar por ...</option> */}
          <option value="nameAsc">Nombre (ascendente)</option>
          <option value="nameDesc">Nombre (descendente)</option>
          <option value="weightAsc">Peso (ascendente)</option>
          <option value="weightDesc">Peso (descendente)</option>
        </select>
      </div>

      <br></br>

 <div className={style.Pagination}>
  <button onClick={goToPreviousPage} disabled={currentPage === 1}>
    {'<'}
  </button>

  {Array.from({ length: Math.ceil(dogs.length / dogsPerPage) }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => setCurrentPage(index + 1)}
      className={currentPage === index + 1 ? style.ActivePage : ''}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={goToNextPage}
    disabled={currentPage === Math.ceil(dogs.length / dogsPerPage)}
  >
    {'>'}
  </button>
</div>

      <br></br>

      <div className={style.Cards}>
        {currentDogs.map((dog, index) => (
          <div key={index} className={style.Card}>
            <Card
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

      <div className={style.Pagination}>
  <button onClick={goToPreviousPage} disabled={currentPage === 1}>
    {'<'}
  </button>

  {Array.from({ length: Math.ceil(dogs.length / dogsPerPage) }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => setCurrentPage(index + 1)}
      className={currentPage === index + 1 ? style.ActivePage : ''}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={goToNextPage}
    disabled={currentPage === Math.ceil(dogs.length / dogsPerPage)}
  >
    {'>'}
  </button>
</div>
      <br></br>
    </>
  );
}

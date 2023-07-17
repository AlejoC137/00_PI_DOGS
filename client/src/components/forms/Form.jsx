import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllDogs, getAllTemps, postDog } from '../../redux/actions';
import style from './Form.module.css'
export default function CreateDogBreedForm(props) {

  const dispatch = useDispatch()

  // const [errorW, setErrorW] = useState('');
  // const [errorH, setErrorH] = useState('');
  // const [errorT, setErrorT] = useState('');


  const [breedData, setBreedData] = useState({
    image: '',
    breedName: '',
    minHeight: '',
    maxHeight: '',
    minWeight: '',
    maxWeight: '',
    lifespan: '',
    temperaments: '',
  });

  const [errors, setErrors] = useState({
  });

  const validateForm = () => {
    const errors = {};
    const handleTemperamentSelect = (temperament) => { // no se se esta llamando la f
      setSelectedTemperaments(temperament);
      setFilteredTemperaments([]);
    };
  
    // valida los inputs 
    if (!breedData.image) {
      errors.image = 'Ingresa la URL de la imagen';
    }
  
    if (!breedData.breedName) {
      errors.breedName = 'Ingresa el nombre del perro';
    }
  

    //altura 
    if (!breedData.minHeight) {
      errors.minHeight = 'Ingresa por lo menos Min cm.';
      // setErrorH('Ingresa por lo menos Min cm.');
    }

  
    if (breedData.minHeight && breedData.maxHeight && Number(breedData.minHeight) > Number(breedData.maxHeight)) {
      errors.maxHeight = 'Min debe ser un número menor al Max';
      // setErrorH('Min debe ser un número menor al Max');
    }

    if (   isNaN(breedData.minHeight) || isNaN(breedData.maxHeight)  ){
      errors.minHeight = 'Debe ser un numero'
      errors.maxHeight = 'Debe ser un numero'
      // setErrorH('Debe ser un numero')
    }

      //peso 
    if (!breedData.minWeight) {
      errors.minWeight = 'Ingresa por lo menos Min kg.';
      // setErrorW('Ingresa por lo menos Min kg.');
    }
  
    if (breedData.minWeight && breedData.maxWeight && Number(breedData.minWeight) > Number(breedData.maxWeight)) {
      errors.maxWeight = 'Min debe ser un número menor al Max';
      // setErrorW('Min debe ser un número menor al Max');
    }

    if (   isNaN(breedData.minWeight) || isNaN(breedData.maxWeight)  ){
      errors.minWeight = 'Debe ser un numero'
      errors.maxWeight = 'Debe ser un numero'
      // setErrorW('Debe ser un numero')
    }
  
    if (!breedData.lifespan){
      errors.lifespan = 'Ingresa expectativa de vida'
    }
  
    if (isNaN(breedData.lifespan)){
      errors.lifespan = 'Debe ser un numero'
    }
    
    if (!breedData.temperaments){
      errors.temperaments = 'Ingresa un temperamento'
      // setErrorT(errors.temperaments)
    }

    if (!isNaN(breedData.temperaments)){
      errors.temperaments = 'Debe ser un texto'
      // setErrorT(errors.temperaments)
    }

  
    return errors;
  };

 // temperamentos --> 

  

  
 useEffect(() => {
   dispatch(getAllTemps())
  }, []);
  
  const temperaments = useSelector(state => state.temps)
 
 
 
 
 
 

 


 // temperamentos --< 
 

  //maneja el cambio de los inputs 
  const handleInputChange = (event) => {



    setBreedData({
      ...breedData,
      [event.target.name]: event.target.value,
    });

    

    

  };





  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation here
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Crea la nueva raza en la base datos
    const newBreed = {
      Imagen: breedData.image,
      Nombre: breedData.breedName,
      // Nombre: '',
      Altura: breedData.maxHeight ? `${breedData.minHeight} - ${breedData.maxHeight}` : breedData.minHeight, //ternario, si max h tiene contenido entonces pasa las 2 , sino solo pasa min 
      Peso: breedData.maxWeight ? `${breedData.minWeight} - ${breedData.maxWeight}` : breedData.minWeight, //ternario, si max w tiene contenido entonces pasa las 2 , sino solo pasa min 
      Longevidad: breedData.lifespan,
      Temperamento: breedData.temperaments
      // Temperamentos: selectedTemperaments.split(',').map((temperament) => temperament.trim()),
  
    }
    
    setErrors({})
    
    //traer la data del reducer -->
    
    // const {dogs} = useSelector(state => state)
    
    
    dispatch(postDog(newBreed))
    dispatch(getAllDogs())
    
    //traer la data del reducer --<
    
  }
  const status = useSelector(state => state.postStatus)
  console.log(status);



    return (
      <div className={style.general}>
        {/* <h2 className={style.tittle}>Crea un nuevo Perro</h2> */}
    
        {errors.submit && <h4 className={style.error}>{errors.submit}</h4>}
    
        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <label>Nombre: </label>
            <div>
              <input
                type="text"
                name="breedName"
                value={breedData.breedName}
                onChange={handleInputChange}
                className={style.iName}
              />
                {errors.breedName ? <h4 className={style.smallError}> {errors.breedName}</h4> : (<span className={style.errorSpace}>&nbsp;</span> ) }               
            </div>
          </div>
    
          <div className={style.formGroup}>
            <label>Imagen URL:</label>
            <div>
              <input
                type="text"
                name="image"
                value={breedData.image}
                onChange={handleInputChange}
              />
              {errors.image ? <h4 className={style.smallError}> {errors.image}</h4> : (<span className={style.errorSpace}>&nbsp;</span> ) }               
            </div>
          </div>
    
          <div className={style.formGroup}>
            <label>Alto :</label>
            <div>
              <input
                type="text"
                name="minHeight"
                value={breedData.minHeight}
                onChange={handleInputChange}
                placeholder="Min cm"
                className={style.iWH}
              />
              <input
                type="text"
                name="maxHeight"
                value={breedData.maxHeight}
                onChange={handleInputChange}
                placeholder="Max cm"
                className={style.iWH}
              />
              {(errors.maxHeight || errors.minHeight ) ? <h4 className={style.smallError}> { errors.maxHeight ? errors.maxHeight : errors.minHeight } </h4> : (<span className={style.errorSpace}>&nbsp;</span> ) }               
            </div>
          </div>
    
          <div className={style.formGroup}>
            <label>Peso:</label>
            <div>
              <input
                type="text"
                name="minWeight"
                value={breedData.minWeight}
                onChange={handleInputChange}
                placeholder="Min kg"
                className={style.iWH}
              />
              <input
                type="text"
                name="maxWeight"
                value={breedData.maxWeight}
                onChange={handleInputChange}
                placeholder="Max kg"
                className={style.iWH}
              />
              {/* {errors.minWeight && (<h4 className={`${style.error} ${style.smallError}`}>{errors.minWeight}</h4>)} */}
              {(errors.maxWeight || errors.minWeight ) ? <h4 className={style.smallError}> { errors.maxWeight ? errors.maxWeight : errors.minWeight } </h4> : (<span className={style.errorSpace}>&nbsp;</span> ) }               
                 
         
            </div>
          </div>
    
          <div className={style.formGroup}>
            <label>Longevidad:</label>
            <div>
              <input
                type="text"
                name="lifespan"
                value={breedData.lifespan}
                onChange={handleInputChange}
                placeholder="Años"
                className={style.iLifeSpan}
              />
              {errors.lifespan  ? <h4 className={style.smallError}> {errors.lifespan} </h4> : (<span className={style.errorSpace}>&nbsp;</span> ) }               

            </div>
          </div>
    
          <div className={style.formGroup}>
            <label>Temperamentos:</label>
            <div>
              <input
                type="text"
                name="temperaments"
                value={breedData.temperaments}
                list="temperamentOptions"
                onChange={handleInputChange }
                className={style.iTemps}
                />
              <datalist id="temperamentOptions">
                {temperaments.map((temperament) => (
                  <option key={temperament} value={temperament} />
                  ))}
              </datalist>
              {errors.temperaments  ? <h4 className={style.smallError}> {errors.temperaments } </h4> : (<span className={style.errorSpace}>&nbsp;</span> ) }               

        
            </div>
          </div>
    
          <button type="submit">Crear Perro</button>
        {status != '' ? <h4 className={style.status}> {status} </h4> : (<span className={style.errorSpace}>&nbsp;</span> ) }               
        </form>
      </div>
    );
    
    
  }
  
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import style from './Detail.module.css';
import imgenShiba from '../../assets/Shiba-Inu-Doge-Meme-PNG-Pic.png';

function Detail(props) {
  const [dog, setDog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/dog/${id}`)
      .then(({ data }) => {
        if (data.Nombre) {
          setDog(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
    return setDog({});
  }, [id]);

  return (
    <>
    
      <Link to={`/home`}>
        <img className={style.img} src={imgenShiba} alt="" />
      </Link>
      <h2 className={style.woof}>Woof !! Woof !!✨</h2>

      <div className={style.detalle}>
        <div className={style.column}>
          <div className={style.text}>
            <h3>Nombre: {dog.Nombre}</h3>
            <h3>Peso: {dog.Peso} kg</h3>
            <h3>Altura: {dog.Altura} cm</h3>
            <h3>Longevidad: {dog.Longevidad}</h3>
            {dog.Origen ? <h3>Origen: {dog.Origen}</h3> : null}
            <h3>Temperamento: {dog.Temperamento}</h3>
          </div>
        </div>

        <div className={style.column}>
          <div className={style.imag}>
            <img className={style.detIMG} src={dog.Imagen} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;

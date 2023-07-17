import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import style from './Card.module.css';

function Card(props) {





  return (
    <div className={style.container}>
      <Link to={`/detail/${props.id ? props.id : props.name}`}>
      <img className={style.ima} src={props.image} alt="" />
      </Link>
      <h2 className={style.name}>{props.name}</h2>
      <div className={style.info}>
        <h3 className={style.peso}>Peso promedio: {props.weight} kg</h3>
        <h4 className={style.temps}>Temperamentos: {props.temperament}</h4>
      </div>
      <br />
    </div>
  );
}



export default connect(null)(Card);

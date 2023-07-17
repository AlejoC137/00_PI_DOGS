import React from 'react';
import { Link } from 'react-router-dom';
import style from './searchResult.module.css';

export default function searchResult(props) {
  return (
    <div className={style.container}>
      <Link to={`/detail/${props.id ? props.id : props.name}`}>
        <div className={style.content}>
          <img className={style.ima} src={`https://cdn2.thedogapi.com/images/${props.image}.jpg`} alt="" />
          <h3>{props.name}</h3>
        </div>
      </Link>
    </div>
  );
}

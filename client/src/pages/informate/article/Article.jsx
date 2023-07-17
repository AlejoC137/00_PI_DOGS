import React from 'react';
import { Link } from 'react-router-dom';
import style from './Article.module.css';

export default function Article(props) {
  return (
    <div className={style.container}>
      <div className={style.content1}>
        <a href={props.source} target="_blank" rel="noopener noreferrer">
          <img className={style.ima} src={props.img} alt="" />
        </a>
      </div>
      <div className={style.content2}>
        <h3 className={style.tittle}>{props.tittle}</h3>
        <div className={style.breafContainer}>
          <p className={style.breaf}>{props.breaf}</p>
        </div>
      </div>
    </div>
  );
}

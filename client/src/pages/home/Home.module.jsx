import React, { useState } from "react";
import Cards from "../../components/cards/Cards.jsx";
import Form from "../../components/forms/Form.jsx"
import Navigation from '../../components/navigation/Navigation.jsx';
import Informate from '../informate/Informate.module.jsx'
import style from './Home.module.css'
import imgenShiba from '../../assets/Shiba-Inu-Doge-Meme-PNG-Pic.png'
import { Link } from "react-router-dom";

export default function Home(props) {
  const [reloadCards, setReloadCards] = useState(false);

  const handleReloadCards = () => {
    setReloadCards((prevReloadCards) => !prevReloadCards);
  };

  const handleCardsReloaded = () => {
    setReloadCards(false);
  };

  return (
    <>
      <div className={style.top}> 
      <Link to={`/`}>
         <img className={style.img} src={imgenShiba} alt="" />
      </Link>
        <h2 className={style.woof}>Woof !! Woof !!✨</h2>
      <div className={style.heads}>
        <h2 className={style.tittl}>Busca un perro por raza:</h2>
        <h2 className={style.tittl}>Crea un nuevo Perro:</h2>
        <h2 className={style.tittl}>Informate:</h2>
      </div>

      </div>
      <div className={style.front}>
        <div className={style.navigation}>
          <Navigation />
        </div>
        <div className={style.form}>
          <Form onDogCreated={handleReloadCards} />
        </div>
        <div className={style.informate}>
          <Informate />
        </div>
      </div>

      <div className={style.dogs}>
      <h2 className={style.Stittl}> Aqui estan todos los perros: </h2>
        <Cards
          key={reloadCards}
          reload={reloadCards}
          onCardsReloaded={handleCardsReloaded}
        />
      </div>
    </>
  );
}

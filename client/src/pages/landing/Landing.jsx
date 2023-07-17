
import { Link } from 'react-router-dom';
import imgenShiba from '../../assets/Shiba-Inu-Doge-Meme-PNG-Pic.png'
import imagenText from '../../assets/globe.png'
import style from './Landing.module.css'
import Mensaje from '../mensaje/mensaje';
function Landing (props){



    return (
      <>
        
      <div className={style.Landing}>
         <h1 className={style.saludo} >¡Bienvenido a Shiba.com!</h1>
         <Link to={`/home`}>
         <img className={style.img} src={imgenShiba} alt="" />
         </Link>
         <h1 className={style.indi}>¡Dale Click a Shiba para empezar a conocer todos los perros!</h1>
         <Mensaje className={style.Mensaje}/>
      </div>
      </>
    );
    
};


export default Landing;


import {  useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Article from '../article/Article.jsx';
import style from './Articles.module.css';





export default function Articles() {
  


const data = [
  {
      id:1,
      tittle:'10 Razones por las que...',
      source:'https://www.petalatino.com/blog/razones-no-comprar-perros/#:~:text=Comprar%20en%20criaderos%20destruye%20las,eutan%C3%A1sico%E2%80%9D%20con%20su%20capacidad%20colmada.',
      img:'https://www.petalatino.com/wp-content/uploads/dog-behind-bars-768x512.jpg' ,
      breaf:'¿Estás buscando en Internet un perro en venta para darle la bienvenida en tu familia? Es posible que estés buscando cierto tipo de perro que sea muy feliz en tu hogar, ya sea por tamaño, temperamento o tipo de pelaje. La buena noticia es que nunca es necesario comprar un perro. Siempre podrás encontrar un perro que esté en adopción y que se adapte a tu hogar. Aquí hay 10 razones para no comprar perros a criadores y adoptar en su lugar:'
  } ,
  {
      id:2 ,
      tittle:'La genética del bulldog inglés está en un punto de quiebre',
      source:'https://elcomercio.pe/tecnologia/ciencias/genetica-bulldog-ingles-punto-quiebre-243020-noticia/#:~:text=La%20actual%20carencia%20de%20diversidad,peque%C3%B1o%20y%20una%20amplia%20musculatura).',
      img:'https://elcomercio.pe/resizer/aEf9dSgXsYRqHCm50_6Mzyt094Y=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/Y3GV6TN24VGO7COGCQU5UXD3MI.jpg' ,
      breaf:'La actual carencia de diversidad genética de los bulldogs se debe principalmente a dos factores: que la crianza selectiva inició de una base genética muy pequeña -de 68 ejemplares-, y  años de manipulación para que logre su apariencia actual (nariz chata, un tamaño pequeño y una amplia musculatura).'
  },
  {
      id:3 ,
      tittle:'¿Por qué está mal visto comprar perros?',
      source:'https://es.quora.com/Por-qu%C3%A9-est%C3%A1-mal-visto-comprar-perros',
      img:'https://qph.cf2.quoracdn.net/main-qimg-cca6e3a3ea2b854d663a429de727ada8-lq',
      breaf:'¿Viste cuántos animales hay abandonados en las calles? ¿Por qué no adoptás uno? Son capaces de dar cariño y necesitan recibirlo. ¿Que no son de raza? ¿Qué querés, entonces, un compañero de vida o un adorno más para la casa?' 
  },
  {
      id:4 ,
      tittle:'Enfermedades hereditarias del Bulldog Francés',
      source:'https://noticiasdeperros.com/7204/salud-enfermedades-hereditarias-del-bulldog-frances/',
      img:'https://noticiasdeperros.com/img/2013/05/bulldogfrances55.jpg' ,
      breaf:'En el último listado de categorías se enumeran las enfermedades que han sido detectadas esporádicamente, y pueden ser de origen hereditario en esta raza.'
  },
  {
      id:5 ,
      tittle:'Dónde adoptar un perro en Buenos Aires',
      source:'https://wamiz.es/perro/consejos/164741/como-adoptar-un-perro-en-buenos-aires',
      img:'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=776,height=388,fit=cover/article/main-picture/602d72d546bd3266540774.jpg',
      breaf:'Para adoptar un perro en Buenos Aires necesitás tiempo y ofrecer mucho cariño. Te contamos en qué refugios podés encontrar a tu nuevo amigo canino.'
  },
  {
      id:6 ,
      tittle:'No al abandono de mascotas: hoy es el Día internacional del perro callejero',
      source:'https://www.elespectador.com/actualidad/no-al-abandono-de-mascotas-hoy-es-el-dia-internacional-del-perro-callejero/',
      img:'https://www.elespectador.com/resizer/aCirh8CczilwU05YHLIVfyLecoA=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/GE2LZS4EUNHPLMF7PPKF5I7XTY.jpg' ,
      breaf:'De acuerdo con las autoridades sanitarias de Bogotá, en la ciudad hay 903.573 perros de los cuales unos 90.000 son callejeros.'
  },
  {
      id:7 ,
      tittle:'Hay 3 millones de perros y gatos abandonados en Colombia',
      source:'https://www.infobae.com/colombia/2023/01/31/hay-3-millones-de-perros-y-gatos-abandonados-en-colombia-este-es-el-plan-que-propone-la-senadora-andrea-padilla-para-cambiar-esta-realidad/#:~:text=Hay%203%20millones%20de%20perros,para%20cambiar%20esta%20realidad%20%2D%20Infobae',
      img:'https://www.infobae.com/new-resizer/OyZfb_Y0ELp2oofcSG7STdJEhAo=/768x512/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/RVQLSFOXCVCJNF5VAPJUQ6DZ5M.jpeg' ,
      breaf:'La congresista alertó sobre el gran problema que enfrentan los animales en situación de calle, durante la presentación del “Plan para cambiar la dura realidad de los animales en Colombia”'
  },
  {
      id:8 ,
      tittle:'Referendo por los animales',
      source:'https://referendoporlosanimales.com/',
      img:'https://referendoporlosanimales.com/wp-content/uploads/2023/05/img_header4.png' ,
      breaf:'Tenemos 6 meses para recoger las 3.982.619 firmas válidas que exige la ley para autorizar el referendo por los animales ¡Solo con tu ayuda podremos lograrlo!'
  }
  ]


  // Shuffle the data array randomly
  const shuffledData = data.sort(() => 0.5 - Math.random());

  // Get the first 4 elements from the shuffled array
  const randomCards = shuffledData.slice(0, 3);



  return (
    <>

      <div className={style.Cards}>
        {randomCards.map((art, index) => (
          <div key={index}>
            <Article
              id={art.id}
              tittle={art.tittle}
              source={art.source}
              img={art.img}
              breaf={art.breaf}
              />
          </div>
        ))}
      </div>
      
    
    </>
  );
}


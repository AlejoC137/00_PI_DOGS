import { Route, Routes, useLocation } from 'react-router-dom';

// import About from './about/About.module.jsx';
import Home from './home/Home.module.jsx';
import Informate from './informate/Informate.module.jsx';
import MyDogs from './mydogs/MyDogs.module.jsx';
import Detail from './detail/Detail';
import Footer from '../components/footer/Footer.jsx';
import Landing from "../pages/landing/Landing.jsx"
function App() {
  const location = useLocation();

  return (
    <div className='App'>


      <Routes>
        {/* <Route path='/About' element={<About />} /> */}
        {/* <Route path='/Informate' element={<Informate />} /> */}
        {/* <Route path='/mydogs' element={<MyDogs />} /> */}
        <Route path='/' element={<Landing />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

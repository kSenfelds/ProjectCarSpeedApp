import { Graphic } from './components/Graphic';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Cars } from './views/cars';
import { Home } from './views/home';
import "./Styles/app.scss"

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/graphs" element={<Graphic/>}></Route>
        <Route path="/cars" element={<Cars/>}></Route>
      </Routes>
      {/*cars.length>0? <button onClick={() => deleteCars()}>Delete cars from DB</button>: <><Uploader></Uploader></>  */}
    </>
  );
}

export default App;

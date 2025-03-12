
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import NavbarComponent from './component/NavbarComponent';
import Home from './component/Home';
import SoftwareForm from './component/courseForm/SoftwareForm';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/tailoringForm' element={<SewingForm/>}/>
        <Route path='/tailoringDetail' element={<TailoringDetail/>}/> */}
        <Route path='/register/spc' element={<SoftwareForm/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

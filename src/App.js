
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import NavbarComponent from './component/NavbarComponent';
import Home from './component/Home';
import SewingForm from './component/courseForm/SewingForm';
import TailoringDetail from './component/courseDetails/TailoringDetail';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tailoringForm' element={<SewingForm/>}/>
        <Route path='/tailoringDetail' element={<TailoringDetail/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

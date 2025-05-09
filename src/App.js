
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import NavbarComponent from './component/NavbarComponent';
import Home from './component/Home';
import SoftwareForm from './component/courseForm/SoftwareForm';
import ScrollToTop from './component/ScrollToTop';
import TailoringDetail from './component/courseDetails/TailoringDetail';
import SoftwareDetail from './component/courseDetails/SoftwareDetail';
import SewingForm from './component/courseForm/SewingForm';
import Aboutus from './component/Aboutus';
import ServicePage from './component/ServicePage';
import Contactus from './component/Contactus';
import AariForm from './component/courseForm/AariForm';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        {/* <Route path='/tailoringForm' element={<SewingForm/>}/>*/}
        <Route path='/tailoringDetail' element={<TailoringDetail/>}/> 
        <Route path='/softwareDetail' element={<SoftwareDetail/>}/>
        <Route path='/courses/sdc-register' element={<SoftwareForm/>}/>
        <Route path='/courses/tc-register' element={<SewingForm/>}/>
        <Route path='/courses/ac-register' element={<AariForm/>}/>
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

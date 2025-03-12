
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import NavbarComponent from './component/NavbarComponent';
import Home from './component/Home';
import SoftwareForm from './component/Form/SoftwareForm';
import ScrollToTop from './component/ScrollToTop';
function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register/spc' element={<SoftwareForm/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
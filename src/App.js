
import './App.css';
import About from './component/About';
import BannerSlider from './component/BannerSlider';
import Courses from './component/Courses';
import Donate from './component/Donate';
import Footer from './component/Footer';
import NavbarComponent from './component/NavbarComponent';
import Services from './component/Services';

function App() {
  return (
    <div className="App">
     <NavbarComponent/>
    <BannerSlider/>
    <About/>
    <Services/>
    <Courses/>
    <Donate/>
    <Footer/>
    </div>
  );
}

export default App;

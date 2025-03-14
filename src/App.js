
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import SoftwareForm from './component/courseForm/SoftwareForm';
import WorkInProgress from './component/courseForm/WorkInProgress';

function App() {
  return (
    <div className="App">


      <Routes>
        
        <Route path='/register/SDC' element={<SoftwareForm />} />
        <Route path='*' element={<WorkInProgress />} />
      </Routes>

    </div>
  );
}

export default App;

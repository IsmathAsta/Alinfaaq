
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import SoftwareForm from './component/courseForm/SoftwareForm';
import WorkInProgress from './component/courseForm/WorkInProgress';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='*' element={<WorkInProgress />} />
        <Route path='/register/SDC' element={<SoftwareForm />} />
      </Routes>

    </div>
  );
}

export default App;

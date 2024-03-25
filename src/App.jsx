import { Route, Routes } from 'react-router-dom';
import './App.css';
import Task_1 from './Pages/Task_1';
import Task_2 from './Pages/Task_2';
import Task_3 from './Pages/Task_3';
import Task_4 from './Pages/Task_4';

function App() {
  return (
    
      <Routes>
        <Route exact path='/' element={<Task_1 />} />
        <Route path='/task_2' element={<Task_2 />} />
        <Route path='/task_3' element={<Task_3 />} />
        <Route path='/task_4' element={<Task_4 />} />
      </Routes>
    
  );
}

export default App;

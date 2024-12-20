import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';  
import CreateUser from './components/CreateUser';  
import UpdateUser from './components/UpdateUser';  

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

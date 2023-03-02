
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer theme ='colored'></ToastContainer>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
          

       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

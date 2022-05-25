
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Login from './components/Pages/Login/Login';

import Singup from './components/Pages/Singup/Singup';
import NotFound from './components/Pages/NotFound/NotFound';
import Blog from './components/Pages/Blog/Blog';
import MyProtfolio from './components/Pages/MyProtfolio/MyProtfolio';



function App() {
  return (
    <main >
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/signup' element={<Singup></Singup>}></Route>
        <Route path='/myprotfolio' element={<MyProtfolio></MyProtfolio>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path  = '*' element={<NotFound></NotFound>}></Route>
        
       
      
      </Routes>
    </main>
  );
}

export default App;

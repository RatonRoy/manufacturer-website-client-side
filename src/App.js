
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
import { ToastContainer } from 'react-toastify';
/* 
use toastify like this way toast('showing message ')
*/
import 'react-toastify/dist/ReactToastify.css';
import Purchase from './components/Pages/Purchase/Purchase';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import Products from './components/Pages/Home/Products/Products';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import MyOrder from './components/Pages/Dashboard/MyOrder';
import AddReview from './components/Pages/Dashboard/AddReview';
import Users from './components/Pages/Dashboard/Users';
import RequireAdmin from './components/Pages/Login/RequireAdmin';


function App() {
  return (
    <main >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/product' element={

          <RequireAuth>
            <Products></Products>
          </RequireAuth>


        }></Route>

        <Route path='/product/:productId' element={

          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>

        }></Route>

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>

          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          
        </Route>

        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Singup></Singup>}></Route>
        <Route path='/myprotfolio' element={<MyProtfolio></MyProtfolio>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>



      </Routes>
      <ToastContainer />
    </main>
  );
}

export default App;

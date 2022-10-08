import './App.css';
import FooterMe from './pages/FooterMe';
import Header from './pages/Home/header/Header';
import Home from './pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import FogotPass from './pages/login/FogotPass';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/forgotpassword' element={<FogotPass></FogotPass>}></Route>
      </Routes>
      <FooterMe></FooterMe>
    </div>
  );
}

export default App;

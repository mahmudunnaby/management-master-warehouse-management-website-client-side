import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Products from './components/Products/Products';
import Manage from './components/Manage/Manage';
import Manageproduct from './components/Manage/Manageproduct';
import Documantation from './components/Documantation/Documantation';
import Notfound from './components/Notfound/Notfound';
import Additem from './components/Additem/Additem';
import Myitems from './components/Myitems/Myitems';
import RequireAuth from './components/Login/RequireAuth';





function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
        <Route path='/manage/:manageproduct' element={
          <RequireAuth>
            <Manageproduct></Manageproduct>
          </RequireAuth>
        }></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/document' element={<Documantation></Documantation>}></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <Additem></Additem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <Myitems></Myitems>
          </RequireAuth>
        }></Route>
        <Route path='/*' element={<Notfound></Notfound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;

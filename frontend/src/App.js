import Header1 from "./components/Header1";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import Header2 from "./components/Header2";
import Lend from "./components/Lend";
import Borrow from "./components/Borrow";
import Form from "./components/Form";
import Contact from "./components/Contact";
import Authorization from "./authorization/Authorization";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/register' element={<Register/>}/>
        {/* <Route element={Authorization}> */}
          <Route  path='/dashboard' element={<Form/>}/>
          <Route  path='/lend' element={<Lend/>}/>
          <Route  path='/borrow' element={<Borrow/>}/>
          <Route  path='/contactus' element={<Contact/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

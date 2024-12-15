import Header1 from "./components/Header1";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import Header2 from "./components/Header2";
// import Lend from "./components/Lend";
// import Borrow from "./components/Borrow";
import Contact from "./components/Contact";
import BorrowForm from "./components/BorrowForm";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Authorization from "./authorization/Authorization";
import Document from "./components/Document";
import RequestPage from "./components/RequestPage";
import TransactionCard from "./components/TransactionCard";
import LendForm from "./components/LendForm";
import Notification from "./components/Notification";
import Lend from "./components/Lend";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/register' element={<Register/>}/>
          <Route  path='/contact' element={<Contact/>}/>
        {/* <Route element={Authorization}> */}
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route  path='/dashboard/lend/' element={<Lend/>}/>
          <Route  path='/dashboard/lend/document' element={<Document/>}/>
          <Route  path='/borrowerform' element={<BorrowForm/>}/>
          <Route  path='/footer' element={<Footer/>}/>
          <Route  path='/header2' element={<Header2/>}/>
          <Route  path='/request' element={<RequestPage/>}/>
          <Route  path='/transaction' element={<TransactionCard/>}/>
          <Route  path='/notify' element={<Notification  />}/>
         
          {/* <Route  path='/trans2' element={<Trans2 />}/> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

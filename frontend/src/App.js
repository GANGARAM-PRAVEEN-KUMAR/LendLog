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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/register' element={<Register/>}/>
        {/* <Route element={Authorization}> */}
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route  path='/borrowerform' element={<BorrowForm/>}/>
          <Route  path='/footer' element={<Footer/>}/>
          <Route  path='/header2' element={<Header2/>}/>
          <Route  path='/document' element={<Document/>}/>
          <Route  path='/request' element={<RequestPage/>}/>
          <Route  path='/transaction' element={<TransactionCard/>}/>
          <Route  path='/form1' element={<BorrowForm/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

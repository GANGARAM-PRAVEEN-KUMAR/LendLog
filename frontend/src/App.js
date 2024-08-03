import Header1 from "./components/Header1";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Header1/>}/>
        <Route  path='/login' element={<Header1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

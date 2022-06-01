import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>

      </BrowserRouter>
      
      
      
    </div>
    
  );
}

export default App;

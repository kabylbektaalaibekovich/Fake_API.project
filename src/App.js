import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Wishlist from './components/pages/Wishlist/Wishlist';
import Cart from './components/pages/Cart/Cart';
import Man from './components/pages/Man/Man';
import Women from './components/pages/Women/Women';
import Home from './components/pages/Home/Home';
import Detal from './components/pages/Detal/Detal';
import Seacrh from './components/pages/Search/Search';
import { useMainContext } from './components/context/Maincontext';
import Footer from './components/Footer/Footer';

function App() {
  const {value , setValue}= useMainContext()
  return (
    <div className="App">
      <Header/>
<Routes>
  <Route path='/' element={<Section/>}/>
  <Route path='/wishlist' element={<Wishlist/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/man' element={<Man/>}/>
  <Route path='/women' element={<Women/>}/>
  <Route path='/home' element={<Home/>}/>
<Route path='/detal/:proId' element={<Detal/>}/>
<Route path='/search/:proName' element={<Seacrh value/>}/>


</Routes>
<Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Products from './components/pages/Products/Products';
import Sell from './components/pages/Sell/Sell';
import Home from './components/pages/Home/Home';
import Cart from './components/pages/Cart/Cart';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/sell" element={<Sell />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

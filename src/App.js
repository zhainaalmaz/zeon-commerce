import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import AboutUs from './pages/AboutUs';
import Collection from './pages/Collection';
import News from './pages/News';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncProducts } from './store/productSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="collection" element={<Collection />} />
        <Route path="news" element={<News />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

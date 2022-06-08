import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import AboutUs from './pages/AboutUs';
import Collection from './components/main/Collection';
import News from './pages/News';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncProducts } from './store/productSlice';
import { fetchAsyncCollections } from './store/collectionsSlice';
import CollectionList from './ui/CollectionList';
import Product from './components/product/Product';
import { fetchAsyncCommerce } from './store/commerceSlice';
import Help from './pages/Help';
import { useLocation } from 'react-router-dom';
import Breadcrumb from './ui/breadCrumbs/BreadCrumbs';
import SearchPage from './components/search/SearchPage';
import Offerts from './pages/Offerts';

function App() {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
    dispatch(fetchAsyncCollections());
    dispatch(fetchAsyncCommerce());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="main">
        {pathnames.length > 0 && <Breadcrumb />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/news" element={<News />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:collectionList" element={<CollectionList />} />
          <Route path="/:collectionList/:productId" element={<Product />} />
          <Route path="/help" element={<Help />} />
          <Route path="/offert" element={<Offerts />} />
          <Route path="/searchpage/:inputEntered" element={<SearchPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

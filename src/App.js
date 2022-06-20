import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import AboutUs from './pages/aboutUs/AboutUs';
import Collection from './components/main/collection/Collection';
import News from './pages/news/News';
import Favorite from './pages/favorite/Favorite';
import Cart from './pages/cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncProducts } from './store/productSlice';
import { fetchAsyncCollections } from './store/collectionsSlice';
import CollectionList from './ui/CollectionList/CollectionList';
import Product from './components/product/Product';
import { fetchAsyncCommerce } from './store/commerceSlice';
import Help from './pages/help/Help';
import SearchPage from './components/search/SearchPage';
import Offerts from './pages/offerts/Offerts';
import Collections from './pages/collections/Collections';
import BreadCrumbs from './ui/BreadCrumbs/BreadCrumbs';
import { asyncAutoUpdateBreadcrumb } from './store/breadCrumbsSlice';
import {
  onChangeOpenDialog,
  onChangeOpenValue,
  onChangeShowSuccess,
} from './store/floatingSlice';
import Modal from './ui/modalWindow/ModalWindow';
import ModalRequest from './components/modal/modalRequest/ModalRequest';
import SuccessModal from './components/modal/modalSuccess/SuccessModal';
import LoginPage from './pages/auth/login/LoginPage';
import SignUp from './pages/auth/register/RegisterPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts());
    dispatch(fetchAsyncCollections());
    dispatch(fetchAsyncCommerce());
    dispatch(asyncAutoUpdateBreadcrumb());
  }, [dispatch]);

  const { openDialog, showsuccess } = useSelector((state) => state.float);

  const onCloseFloating = () => {
    dispatch(onChangeOpenDialog());
  };

  const onCloseSuccessModal = () => {
    dispatch(onChangeShowSuccess());
  };

  const onCloseOpenValue = () => {
    dispatch(onChangeOpenValue());
  };

  return (
    <div className="App">
      <Header />
      <BreadCrumbs />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/news" element={<News />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:collectionList" element={<CollectionList />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/:prodId" element={<Product />} />
          <Route path="/:collectionList/:productId" element={<Product />} />
          <Route path="/help" element={<Help />} />
          <Route path="/offert" element={<Offerts />} />
          <Route path="/searchpage/:inputEntered" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>

      {openDialog && (
        <Modal onClose={onCloseFloating}>
          <ModalRequest
            setOpenDialog={onCloseFloating}
            showsuccess={showsuccess}
            setshowsuccess={onCloseSuccessModal}
            setOpen={onCloseOpenValue}
          />
        </Modal>
      )}

      {showsuccess && (
        <Modal onClose={onCloseSuccessModal}>
          <SuccessModal
            showsuccess={showsuccess}
            onClose={onCloseSuccessModal}
            setshowsuccess={onCloseSuccessModal}
            setOpen={onCloseOpenValue}
          />
        </Modal>
      )}
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './css/main.css'
// pages
import HomePage from './pages/home'
import ProductItemPage from './pages/home/productItem'
import AboutPage from './pages/about'
import NotFoundPage from './pages/notFound'
import CheckoutPage from './pages/checkout'
// components
import {Header, Footer} from './components'
import {  Routes, Route, Navigate} from "react-router-dom";

const App = () => {
  return (
      <div className="ui-wrapper">
        <Header isLogo={true}></Header>
        <div className="ui-content-wrapper">
          <Routes>
            <Route path='/' element={<HomePage></HomePage>} />
            <Route path='/products/' element={<Navigate to='/' />} />
            <Route path='/products/:itemAlias' element={<ProductItemPage></ProductItemPage>} />
            <Route path='/about' element={<AboutPage></AboutPage>} />
            <Route path='/checkout' element={<CheckoutPage></CheckoutPage>} />
            <Route path='/404' element={<NotFoundPage></NotFoundPage>} />
            <Route path='*' element={<Navigate to='404' />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    );
}


export default App;

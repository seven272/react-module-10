import React from 'react';
import './css/main.css'
// pages
import HomePage from './pages/home'
import AboutPage from './pages/about'
import NotFoundPage from './pages/notFound'
// components
import {Header, Footer} from './components'
import {  Routes, Route} from "react-router-dom";

const App = () => {
  return (
      <div className="ui-wrapper">
        <Header isLogo={true}></Header>
        <div className="ui-content-wrapper">
          <Routes>
            <Route path='/' element={<HomePage></HomePage>} />
            <Route path='/about' element={<AboutPage></AboutPage>} />
            <Route path='*' element={<NotFoundPage></NotFoundPage>} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    );
}


export default App;

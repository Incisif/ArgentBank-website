import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from '../Footer';
import GlobaleStyles from '../../utils/styles/GlobalStyles';
import Home from "../../pages/Home";
import Header from '../Header';

function AppRouter() {
  return (
    <Router>
      <GlobaleStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;

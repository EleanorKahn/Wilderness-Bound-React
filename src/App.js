import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from "./components/Header";
import Footer from "./components/Footer"
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

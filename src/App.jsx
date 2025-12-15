// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/public/Home';
import Video from './pages/public/Video';
import Seller from './pages/public/Seller';
import Category from './pages/public/Category';
import Login from './pages/public/Login';
import Register from './pages/public/Register';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import PrivacyPolicy from './pages/public/PrivacyPolicy';
import Terms from './pages/public/Terms';
import './App.css';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/video/:id" element={<Video />} />
                    <Route path="/seller/:id" element={<Seller />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;

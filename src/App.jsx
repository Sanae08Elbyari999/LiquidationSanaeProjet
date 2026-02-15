// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/public/Home';
import Video from './pages/public/Video';
import MesProduits from './pages/user/MesProduits';
import Seller from './pages/public/Seller';
import Category from './pages/public/Category';
import Login from './pages/public/Login';
import Register from './pages/public/Register';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import PrivacyPolicy from './pages/public/PrivacyPolicy';
import Terms from './pages/public/Terms';
import Profile from './pages/user/Profile';
import MesAchats from './pages/user/MesAchats';
import Wishlist from './pages/public/Wishlist';
import Cart from './pages/public/Cart';
import Notifications from './pages/public/Notifications';
import CreateChannel from './pages/user/CreateChannel';
import Channel from './pages/user/Channel';
import AddProduct from './pages/user/AddProduct';
import HelpPage from './pages/public/HelpPage';
import HelpIndex from './pages/public/HelpIndex';
import Settings from './pages/user/Settings';
import Checkout from './pages/public/Checkout';
import OrderConfirmation from './pages/public/OrderConfirmation';
import ForgotPassword from './pages/public/ForgotPassword';
import ResetPassword from './pages/public/ResetPassword';


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
                    <Route path="/mes-produits" element={<MesProduits />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/orders" element={<MesAchats />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/profile/create-channel" element={<CreateChannel />} />
                    <Route path="/profile/channel" element={<Channel />} />
                    <Route path="/profile/add-product" element={<AddProduct />} />
                    <Route path="/help/:section" element={<HelpPage />} />
                    <Route path="/help" element={<HelpIndex />} />
                    <Route path="/profile/settings" element={<Settings />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-confirmation" element={<OrderConfirmation />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password/:token" element={<ResetPassword />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
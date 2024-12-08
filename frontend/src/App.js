import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/public/Header';
import Footer from './components/public/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Login from './components/public/Login';
import ContactForm from './components/public/ContactForm';
import Dashboard from './components/admin/Dashboard'
import AdminRoute from './components/admin/AdminRoutes';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminRoute><Dashboard /></AdminRoute>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

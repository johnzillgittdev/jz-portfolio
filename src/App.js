import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <NavBar className={styles.nav} />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

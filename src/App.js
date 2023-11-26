// App.js
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import CaesarCipherPage from "./CaesarCipherPage";
import VigenereCipherPage from "./VigenereCipherPage";
import AboutPage from "./AboutPage"; // Import the new page
import "./styles.css"; 

const App = () => {
  return (
    <BrowserRouter>
      <header className="navBar">
        <NavLink
          to="/caesar-cipher"
          className="navLink"
          activeClassName="activeLink"
        >
          Caesar Cipher
        </NavLink>
        <NavLink
          to="/vigenere-cipher"
          className="navLink"
          activeClassName="activeLink"
        >
          Vigenere Cipher
        </NavLink>
        <NavLink
          to="/about-author"
          className="navLink"
          activeClassName="activeLink"
        >
          About
        </NavLink>
      </header>

      <Routes>
      <Route path="/" element={<VigenereCipherPage />} />
        <Route path="/caesar-cipher" element={<CaesarCipherPage />} />
        <Route path="/vigenere-cipher" element={<VigenereCipherPage />} />
        <Route path="/about-author" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import CaesarCipherPage from "./CaesarCipherPage";
import VigenereCipherPage from "./VigenereCipherPage";
import "./styles.css"; // Import CSS file

const App = () => {
  return (
    <Router>
      <div className="navBar">
        <Nav.Link as={Link} to="/caesar-cipher" className="navLink" activeClassName="activeNavLink">
          Caesar Cipher
        </Nav.Link>

        <Nav.Link as={Link} to="/vigenere-cipher" className="navLink" activeClassName="activeNavLink">
          Vigenere Cipher
        </Nav.Link>
      </div>

      <hr />
      <Routes>
        <Route path="/caesar-cipher" element={<CaesarCipherPage />} />
        <Route path="/vigenere-cipher" element={<VigenereCipherPage />} />
      </Routes>
    </Router>
  );
};

export default App;

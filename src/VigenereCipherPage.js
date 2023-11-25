import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Nav } from "react-bootstrap";
import CopyToClipboard from "react-copy-to-clipboard";

const VigenereCipherPage = () => {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(true);
  const [error, setError] = useState(null);

  const VigenereCipher = (text, keyword, encrypt) => {
    try {
      if (!/^[a-zA-Z]+$/.test(keyword)) {
        throw new Error("Kunci harus terdiri dari huruf alfabet saja.");
      }

      const modifier = encrypt ? 1 : -1;
      let result = "";
      let j = 0; // Initialize outside the loop to track the key position

      for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (/[a-zA-Z]/.test(char)) {
          const isUpperCase = char === char.toUpperCase();
          const code = char.toLowerCase().charCodeAt(0);
          const base = "a".charCodeAt(0);

          let keyChar = keyword[j % keyword.length].toLowerCase();
          while (!/[a-zA-Z]/.test(keyChar)) {
            j++;
            keyChar = keyword[j % keyword.length].toLowerCase();
          }

          const keyCode = keyChar.charCodeAt(0);

          let encryptedChar = String.fromCharCode(
            ((code - base + modifier * (keyCode - base) + 26) % 26) + base
          );

          // Restore the original case
          encryptedChar = isUpperCase
            ? encryptedChar.toUpperCase()
            : encryptedChar;

          result += encryptedChar;

          j++;
        } else {
          result += char;
        }
      }

      setError(null);
      return result;
    } catch (error) {
      setError(error.message);
      return "";
    }
  };

  const handleEncrypt = () => {
    if (keyword.length === 0) {
      alert("Mohon masukan keyword");
      return;
    }
    setResult(VigenereCipher(text, keyword, true));
  };

  const handleDecrypt = () => {
    if (keyword.length === 0) {
      alert("Mohon masukan keyword");
      return;
    }
    setResult(VigenereCipher(text, keyword, false));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <h2>Vigenere Cipher Calculator</h2>
              <Form>
                <Form.Group controlId="text">
                  <Form.Label>
                    <strong>
                      {isEncrypt ? "Plaintext : " : "Ciphertext : "}
                    </strong>
                  </Form.Label>
                  <Form.Control
                    className="formInput"
                    as="textarea"
                    rows={3}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="keyword">
                  <Form.Label>Keyword {}</Form.Label>
                  <Form.Control
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </Form.Group>{" "}
                {error && (
                  <div className="mt-3">
                    <p style={{ color: "red" }}>{error}</p>
                  </div>
                )}
                <br />
                <div>
                  {" "}
                  <Nav.Link
                    className="custom-button"
                    active={isEncrypt}
                    onClick={() => {
                      setIsEncrypt(true);
                      handleEncrypt();
                    }}
                  >
                    Encrypt
                  </Nav.Link>
                  <Nav.Link
                    className="custom-button"
                    active={!isEncrypt}
                    onClick={() => {
                      setIsEncrypt(false);
                      handleDecrypt();
                    }}
                  >
                    Decrypt
                  </Nav.Link>
                </div>
              </Form>
              {result && (
                <div className="mt-3">
                  <p>
                    <strong>{isEncrypt ? "Ciphertext : " : "Plaintext : "}</strong>
                  </p>
                  <p>{result}</p>
                  <CopyToClipboard className="custom-button" text={result}>
                    <Button variant="success">Copy to Clipboard</Button>
                  </CopyToClipboard>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VigenereCipherPage;

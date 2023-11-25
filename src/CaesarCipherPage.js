// CaesarCipherPage.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Nav } from "react-bootstrap";
import CopyToClipboard from "react-copy-to-clipboard";

const CaesarCipherPage = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(0);
  const [result, setResult] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(true);

  const CaesarCipher = (text, shift, encrypt) => {
    const modifier = encrypt ? 1 : -1;
    return text
      .split("")
      .map((char) => {
        if (char.match(/[a-zA-Z]/)) {
          const code = char.charCodeAt(0);
          const base =
            char.toLowerCase() === char ? "a".charCodeAt(0) : "A".charCodeAt(0);
          return String.fromCharCode(
            ((code - base + modifier * shift + 26) % 26) + base
          );
        } else {
          return char;
        }
      })
      .join("");
  };

  const handleProcess = () => {
    if (isEncrypt) {
      setResult(CaesarCipher(text, shift, true));
    } else {
      setResult(CaesarCipher(text, shift, false));
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Nav variant="tabs"></Nav>
              <Form>
                <Form.Group controlId="text">
                  <Form.Label>Text</Form.Label>
                  <Form.Control
                    className="formInput"
                    as="textarea"
                    rows={3}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="shift">
                  <Form.Label>Shift {}</Form.Label>
                  <Form.Control
                    type="number"
                    value={shift}
                    onChange={(e) => setShift(parseInt(e.target.value))}
                  />
                </Form.Group>{" "}
                <br />
                <Button
                  className="custom-button"
                  variant="primary"
                  onClick={handleProcess}
                >
                  {isEncrypt ? "Encrypt" : "Decrypt"}
                </Button>
              </Form>{" "}
              <br />
              <div>
                Opsi : {}
                <Nav.Link
                  className="custom-button"
                  href="#"
                  active={isEncrypt}
                  onClick={() => setIsEncrypt(true)}
                >
                  Encrypt
                </Nav.Link>
                <Nav.Link
                  className="custom-button"
                  href="#"
                  active={!isEncrypt}
                  onClick={() => setIsEncrypt(false)}
                >
                  Decrypt
                </Nav.Link>
              </div>
              {result && (
                <div className="mt-3">
                  <p>
                    <strong>Result:</strong>
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

export default CaesarCipherPage;

// VigenereCipherPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Nav } from 'react-bootstrap';
import CopyToClipboard from 'react-copy-to-clipboard';

const VigenereCipherPage = () => {
  const [text, setText] = useState('');
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState('');
  const [isEncrypt, setIsEncrypt] = useState(true);

  const VigenereCipher = (text, keyword, encrypt) => {
    const modifier = encrypt ? 1 : -1;
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char.match(/[a-zA-Z]/)) {
        const code = char.charCodeAt(0);
        const base = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        const keyChar = keyword[i % keyword.length];
        const keyCode = keyChar.charCodeAt(0);
        result += String.fromCharCode(((code - base + modifier * (keyCode - base) + 26) % 26) + base);
      } else {
        result += char;
      }
    }
    return result;
  };

  const handleProcess = () => {
    if (keyword.length === 0) {
      alert('Please enter a keyword.');
      return;
    }

    if (isEncrypt) {
      setResult(VigenereCipher(text, keyword, true));
    } else {
      setResult(VigenereCipher(text, keyword, false));
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
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
                <Form.Group controlId="keyword">
                  <Form.Label>Keyword {}</Form.Label>
                  <Form.Control
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleProcess}>
                  {isEncrypt ? 'Encrypt' : 'Decrypt'}
                </Button>
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

                
              </Form>
              {result && (
                <div className="mt-3">
                  <p>
                    <strong>Result:</strong>
                  </p>
                  <p>{result}</p>
                  <CopyToClipboard text={result}>
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

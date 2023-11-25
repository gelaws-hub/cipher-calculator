import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body className="aboutMeBody">
              <h2>About Me</h2>
              <img
                src="https://media-cgk1-3.cdn.whatsapp.net/v/t61.24694-24/382426857_312492338027322_938315170307989230_n.jpg?ccb=11-4&oh=01_AdRY6IjsH3fOcfyEuYjltSgW8r3xPWbNoYD0WsqskRTlAQ&oe=656EF9EF&_nc_sid=e6ed6c&_nc_cat=103"
                className="myProfile"
                alt=""
              ></img>
              <p className="aboutMe">
                <strong>
                  Muhamad Ibnu Fadhil <br />
                  21120121120023 <br />
                  Kriptografi C <br />
                </strong>
              </p> <br/>
              <p className="aboutMe">
                Website ini dibuat untuk memenuhi Tugas Remidi UTS Kriptografi.
                Mungkin masih banyak kekurangan yang ada pada website ini, namun
                semoga dapat berguna. Semoga saya juga mendapatkan nilai yang
                memuaskan Aamiin :) <br/><br/>
                Sebenarnya hanya disuruh buat 1 Cipher saja, namun sudah terlanjur buat 2 daripada dihapus. Untung belum membuat 5-5 nya
              </p>
              <p className="aboutMe">--- Happy Crypting ---</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;

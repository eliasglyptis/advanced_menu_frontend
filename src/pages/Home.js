import { Button, Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Home = () => (
  <MainLayout>
    <Jumbotron className="bg-light">
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <h1>Δημιουργήστε μενού κωδικών QR για το εστιατόριό σας.</h1>
            <h5 className='mt-4 mb-4'>
              Ένας έξυπνος τρόπος για να μοιραστείτε το ψηφιακό μενού σας σε έναν κωδικό QR με τους πελάτες σας.
            </h5>
            <br />
            <Button href="/places" variant="standard" size="lg">Create Your Menu</Button>
          </Col>
          <Col md={6}>
            <Image src="https://i.pinimg.com/originals/ff/6b/c2/ff6bc2020073228d700814705972983f.gif" rounded fluid />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </MainLayout>

)

export default Home;
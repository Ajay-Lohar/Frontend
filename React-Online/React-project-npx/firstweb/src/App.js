import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="main">
      <Header/>{/* Component */}
      <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center py-4'>
            Welcome Ajay
            </Col>
          </Row>
          <Row className='text-center'>
            <Col lg='3' md='6'>Mi</Col>
            <Col lg='3' md='6'>Ajay</Col>
            <Col lg='3' md='6'>Gajanan</Col>
            <Col lg='3' md='6'>Lohar</Col>
            
          </Row>
        </Container>

      </Container>
      <Footer/>
    </div>
  );
}

export default App;

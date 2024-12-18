import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { blog } from './Data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faSearch} from '@fortawesome/free-solid-svg-icons';

function App() {
  let HeaderInfo={
    email:'loharajay0019@gmail.com',
    phone:'9876543210'
  }
  return (
    <div className="main">
      <Header HeaderInfo={HeaderInfo} cname='ItShaala'>{/* Component */}
        <h1>Cards  Blocks</h1>
      <FontAwesomeIcon icon={faWhatsapp}/>
      <FontAwesomeIcon icon={faPhone}/>
      <FontAwesomeIcon icon={faSearch}/>
      </Header>
      {/* <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center py-4'>
            <h1>Welcome Ajay</h1>
            </Col>
          </Row>
          <Row >
            <Col lg='3' md='6'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Course 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
               </Card.Body>
               </Card>
             </Col>
            <Col lg='3' md='6'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Course 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
               </Card.Body>
               </Card>
             </Col>
            <Col lg='3' md='6'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Course 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
               </Card.Body>
               </Card>
             </Col>
            <Col lg='3' md='6'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Course 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
               </Card.Body>
            </Card>
             </Col>
            
            
          </Row>
        </Container>

      </Container> */}
      <Container>
        <Row>
          {blog.map((v,i)=>{
            return (
              <ProductItems pitems={v} key={i}/>
            )
          }
        
        )}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;

function ProductItems({pitems}){
  return(
    <div className="col-lg-3 mb-4">
           <Card >
              <Card.Body>
                <Card.Title>{pitems.title}</Card.Title>
                <Card.Text>
                  {pitems.body}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
               </Card.Body>
            </Card>
    </div>
  )
}
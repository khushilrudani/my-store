import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#" className='logo'>MYStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className="link">Home</Link>
            <Link to='/topic' className="link">Topics</Link>
            <Link to='/team' className="link">Team</Link>
            <Link to='/about' className="link">About Us</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            &nbsp;
            <Button variant="danger">LOGIN</Button>
            &nbsp;

            <Button variant="danger">SIGNUP</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;
import { Container, Nav, Navbar } from 'react-bootstrap'
import DropdownList from './DropdownList'
import logo from "../assets/logo.png"

function Header() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt="logo"
              src={logo}
              height="40"
              width="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <h4 className='my-auto me-5'>Untitled</h4>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <DropdownList />
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default Header;
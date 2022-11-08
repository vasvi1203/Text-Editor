import { Container, Nav, Navbar, OverlayTrigger, Tooltip, Form } from 'react-bootstrap'
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
          <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-bottom">
                  Rename document
                </Tooltip>
              }>
                <Form>
                    <Form.Control type="text" aria-label="renameDoc" id="renameDoc" placeholder='Untitled Document' onChange={e => document.title=e.target.value}></Form.Control>
                </Form>
            </OverlayTrigger>
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
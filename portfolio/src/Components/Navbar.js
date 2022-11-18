import {Button, Container, Navbar, Modal} from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="/">React Portfolio</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button>Not Sure What This Does Yet</Button>
      </Navbar.Collapse> 
    </Navbar>
    
  );
}
export default NavbarComponent;

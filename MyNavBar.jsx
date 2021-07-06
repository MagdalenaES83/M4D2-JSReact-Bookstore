
import { Navbar, Nav } from "react-bootstrap"


const MyNavBar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark
    " variant="dark">
  <Navbar.Brand href="#home">BOOKSTORE </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#">HOME </Nav.Link>
      <Nav.Link href="#">ABOUT</Nav.Link>
      <Nav.Link href="#">BROWSE</Nav.Link>
    </Nav>
    <Nav>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default MyNavBar
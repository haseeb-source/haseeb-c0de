import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <img src='logo(NetworkFort).png' width="130" alt='Net' />
      <Container style={{ fontFamily: "serif"}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" >Dashboard</Nav.Link>
            <Nav.Link href="Firewall">Firewall</Nav.Link>
            <Nav.Link href="#link1" >Analyze</Nav.Link>
            <Nav.Link href="#link2" >Events/Alert</Nav.Link>
            <Nav.Link href="#link3" >Configure</Nav.Link>
            <Nav.Link href="#link4" >Deploy</Nav.Link>
          <div style={{marginLeft:"87%"}}>
            <ul className='navbar-nav mb-2 mb-lg-0   col-lg-0'>
              <li className='nav-itmes'>
                <a className='nav-link' href='seacrh'>
                  <img src="search.png" alt='search' width={'20'} />
                </a>
              </li>
              <li className='nav-itmes'>
                <a className='nav-link' href='laptop'>
                  <img src="laptop.png" alt='laptop' width={'20'} />
                </a>
              </li>
              <li className='nav-itmes'>
                <a className='nav-link' href='setting'>
                  <img src="setting.png" alt='setting' width={'20'} />
                </a>
              </li>
            </ul>
          </div>        
            <NavDropdown title="Desktop Chrome"  id="basic-nav-dropdown" style={{marginLeft:"1%"}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
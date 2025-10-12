import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarSection() {
    return (
        <>
            <Navbar data-bs-theme="dark" className='mb-4'>
                <Container className='justify-content-between'>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="justify-content-center gap-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarSection;
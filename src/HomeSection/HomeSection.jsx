import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function HomeSection() {
    return (
        <>
            <Container className='mb-5 p-0' id='home'>
                <Row className='align-items-center justify-content-between'>
                    <div className="col-12 col-md-6">
                        <h1>Welcome to Home Section</h1>
                        <p>This is the home section of the website. This section contains the introduction and the main content of the website.</p>
                        <div class="d-flex gap-3">
                            <button className="btn primaryBtn">Get Started</button>
                            <button className="btn secondaryBtn">Learn More</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="src\assets\intro-bg.jpg" alt="this is the hero section image" className="img-fluid shadow-lg rounded-4" />
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default HomeSection;
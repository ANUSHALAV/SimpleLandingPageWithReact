import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function AboutSection() {
    return(
        <>
        <Container id="about" className='mb-5 p-0'>
            <Row>
                <div className="col-12 col-md-6 mb-5">
                    <h4 className="sectionHeading">About</h4>
                </div>
            </Row>

            <Row className='align-items-center justify-content-between mb-5'>
                <div className="col-12 col-md-6">
                    <img src="src\assets\about.jpg" alt="this is the about section image" className="img-fluid shadow-lg rounded-4" />
                </div>
                <div className="col-12 col-md-6">
                    <h2>Welcome to About Section</h2>
                    <p>This is the about section of the website. This section contains information about the website and its purpose.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="btn secondaryBtn">Read More</button>
                </div>
            </Row>
        </Container>
        </>
    )

}

export default AboutSection;
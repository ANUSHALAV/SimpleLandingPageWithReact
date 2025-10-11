import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function HomeSection() {
    return (
        <>
            <Container>
                <Row>
                    <div className="col-12 col-md-6">
                        <h1>Welcome to Home Section</h1>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="src\assets\intro-bg.jpg" alt="this is the hero section image" className="img-fluid" />
                    </div>
                </Row>
            </Container>
        </>
    )

}
export default HomeSection;
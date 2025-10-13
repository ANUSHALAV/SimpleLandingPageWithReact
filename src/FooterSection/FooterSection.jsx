import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function FooterSection() {
    return (
        <Container>
            <Row>
                <div className="col-12 mb-1 text-center">
                    <p className="">© 2025. All rights reserved.</p>
                    <p className="">Follow us on
                        <a href="https://www.facebook.com" className="text-decoration-none ms-2">Facebook</a>,
                        <a href="https://www.twitter.com" className="text-decoration-none ms-2">Twitter</a>,
                        <a href="https://www.instagram.com" className="text-decoration-none ms-2">Instagram</a>
                    </p>
                </div>
            </Row>
        </Container>
    )

}

export default FooterSection;
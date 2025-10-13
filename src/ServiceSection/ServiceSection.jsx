import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ServiceSection() {
    return (
        <Container id="service" className="mb-5">
            <Row>
                <div className="col-12 col-md-6 mb-5">
                    <h4 className="sectionHeading">Service</h4>
                </div>
            </Row>
            <Row>
                <div className="col-12 col-md-4 mb-4">
                    <div className="p-4 shadow-lg rounded-4 text-center h-100">
                        <img src="src/assets/services/service-1.jpg" alt="this is the service section image" className="img-fluid mb-3 rounded-4" />
                        <h5>Service One</h5>
                        <p>This is the description of service one. This service provides great value to our customers.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="p-4 shadow-lg rounded-4 text-center h-100">
                        <img src="src/assets/services/service-2.jpg" alt="this is the service section image" className="img-fluid mb-3 rounded-4" />
                        <h5>Service Two</h5>
                        <p>This is the description of service two. This service provides great value to our customers.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="p-4 shadow-lg rounded-4 text-center h-100">
                        <img src="src/assets/services/service-3.jpg" alt="this is the service section image" className="img-fluid mb-3 rounded-4" />
                        <h5>Service Three</h5>
                        <p>This is the description of service three. This service provides great value to our customers.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="p-4 shadow-lg rounded-4 text-center h-100">
                        <img src="src/assets/services/service-4.jpg" alt="this is the service section image" className="img-fluid mb-3 rounded-4" />
                        <h5>Service Four</h5>
                        <p>This is the description of service three. This service provides great value to our customers.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="p-4 shadow-lg rounded-4 text-center h-100">
                        <img src="src/assets/services/service-5.jpg" alt="this is the service section image" className="img-fluid mb-3 rounded-4" />
                        <h5>Service Five</h5>
                        <p>This is the description of service three. This service provides great value to our customers.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="p-4 shadow-lg rounded-4 text-center h-100">
                        <img src="src/assets/services/service-6.jpg" alt="this is the service section image" className="img-fluid mb-3 rounded-4" />
                        <h5>Service Six</h5>
                        <p>This is the description of service three. This service provides great value to our customers.</p>
                    </div>
                </div>
            </Row>
        </Container>
    )

}

export default ServiceSection;
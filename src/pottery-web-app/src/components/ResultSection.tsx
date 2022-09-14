import { Form, Container, Row, Col, Card } from "react-bootstrap";

function ResultSection() {
  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        Results
      </Card.Header>
      <Card.Body className="form-content">
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Width</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Height</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Result Notes</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Result Pictures</Form.Label>
            <Form.Control type="image" />
          </Form.Group> */}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ResultSection;

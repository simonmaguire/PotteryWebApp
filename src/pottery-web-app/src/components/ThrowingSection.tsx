import { Form, Container, Row, Col, Card } from "react-bootstrap";

function ThrowingSection() {
  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        Throwing
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Weight</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Thrown Height</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Thrown Width</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Throwing Notes</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Throwing Pictures</Form.Label>
            <Form.Control type="image" />
          </Form.Group> */}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ThrowingSection;

import { Form, Container, Card } from "react-bootstrap";

function GlazingSection() {
  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        Glazing
      </Card.Header>
      <Card.Body>
        <Container>
          <Form.Group>
            <Form.Label>Glazes</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Glaze Notes</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Glaze Pictures</Form.Label>
            <Form.Control type="image" />
          </Form.Group> */}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default GlazingSection;

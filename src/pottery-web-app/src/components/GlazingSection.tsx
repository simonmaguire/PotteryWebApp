import { Form, Card } from "react-bootstrap";

function GlazingSection() {
  return (
    <Card className="form-section">
      <Card.Header className="section-header">Glazing</Card.Header>
      <Card.Body>
        <Form.Group>
          <Form.Label>glazes</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Glaze Notes</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Glaze Pictures</Form.Label>
          <Form.Control type="image" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default GlazingSection;

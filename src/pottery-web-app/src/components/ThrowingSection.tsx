import { Form, Card } from "react-bootstrap";

function ThrowingSection() {
  return (
    <Card className="form-section">
      <Card.Header className="section-header">Throwing</Card.Header>
      <Card.Body>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Weight</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Thrown Height</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Thrown Width</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Throwing Notes</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Throwing Pictures</Form.Label>
          <Form.Control type="image" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default ThrowingSection;

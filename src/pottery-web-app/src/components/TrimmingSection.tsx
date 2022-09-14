import { Form, Card } from "react-bootstrap";

function TrimmingSection() {
  return (
    <Card className="form-section">
      <Card.Header className="section-header">Trimming</Card.Header>
      <Card.Body>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Greenware Decorations</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Trimming Notes</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Trimming Pictures</Form.Label>
          <Form.Control type="image" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default TrimmingSection;

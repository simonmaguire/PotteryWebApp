import { Form, Card } from "react-bootstrap";

function ResultSection() {
  return (
    <Card className="form-section">
      <Card.Header className="section-header">Results</Card.Header>
      <Card.Body>
        <Form.Group>
          <Form.Label>Result Notes</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Result Pictures</Form.Label>
          <Form.Control type="image" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default ResultSection;

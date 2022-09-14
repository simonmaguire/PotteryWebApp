import { Form, Card } from "react-bootstrap";

function GeneralSection() {
  return (
    <Card className="form-section">
      <Card.Header className="section-header">General</Card.Header>
      <Card.Body>
        <Form.Group>
          <Form.Label>Stage</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Clay</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default GeneralSection;

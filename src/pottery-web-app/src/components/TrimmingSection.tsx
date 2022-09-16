import { Form, Container, Card } from "react-bootstrap";
import { SectionProps } from "../types";

function TrimmingSection(props: SectionProps) {
  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        Trimming
      </Card.Header>
      <Card.Body>
        <Container>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Greenware Decorations</Form.Label>
            <Form.Control
              type="text"
              value={props.potInfo.green_decorations}
              name="green_decorations"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                props.handleChange(e)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Trimming Notes</Form.Label>
            <Form.Control
              as="textarea"
              value={props.potInfo.trim_notes}
              name="trim_notes"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                props.handleChange(e)
              }
            />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Trimming Pictures</Form.Label>
            <Form.Control type="image" />
          </Form.Group> */}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default TrimmingSection;

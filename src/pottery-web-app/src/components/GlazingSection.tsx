import { Form, Container, Card } from "react-bootstrap";
import { SectionProps } from "../types";

function GlazingSection(props: SectionProps) {
  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        Glazing
      </Card.Header>
      <Card.Body>
        <Container>
          <Form.Group>
            <Form.Label>Glazes</Form.Label>
            <Form.Control
              type="text"
              value={props.potInfo.glazes}
              name="glazes"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                props.handleChange(e)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Glaze Notes</Form.Label>
            <Form.Control
              as="textarea"
              value={props.potInfo.glaze_notes}
              name="glaze_notes"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                props.handleChange(e)
              }
            />
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

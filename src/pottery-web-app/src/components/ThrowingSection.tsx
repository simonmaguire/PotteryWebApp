import { Form, Container, Row, Col, Card } from "react-bootstrap";
import { SectionProps } from "../types";

function ThrowingSection(props: SectionProps) {
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
                <Form.Label>Clay Weight</Form.Label>
                <Form.Control
                  type="text"
                  value={props.potInfo.clay_weight}
                  name="clay_weight"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    props.handleChange(e)
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Thrown Height</Form.Label>
                <Form.Control
                  type="text"
                  value={props.potInfo.throw_height}
                  name="throw_height"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    props.handleChange(e)
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Thrown Width</Form.Label>
                <Form.Control
                  type="text"
                  value={props.potInfo.throw_width}
                  name="throw_width"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    props.handleChange(e)
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Throwing Notes</Form.Label>
            <Form.Control
              as="textarea"
              value={props.potInfo.throw_notes}
              name="throw_notes"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                props.handleChange(e)
              }
            />
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

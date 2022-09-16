import { Form, Container, Row, Col, Card } from "react-bootstrap";
import { SectionProps } from "../types";

function ResultSection(props: SectionProps) {
  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        Results
      </Card.Header>
      <Card.Body className="form-content">
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Width</Form.Label>
                <Form.Control
                  type="text"
                  value={props.potInfo.result_width}
                  name="result_width"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    props.handleChange(e)
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Height</Form.Label>
                <Form.Control
                  type="text"
                  value={props.potInfo.result_height}
                  name="result_height"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    props.handleChange(e)
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Result Notes</Form.Label>
            <Form.Control
              as="textarea"
              value={props.potInfo.result_notes}
              name="result_notes"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                props.handleChange(e)
              }
            />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Result Pictures</Form.Label>
            <Form.Control type="image" />
          </Form.Group> */}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ResultSection;

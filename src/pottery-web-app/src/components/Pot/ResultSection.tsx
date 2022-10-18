import { Form, Container, Row, Col, Card } from "react-bootstrap";
import { useFormContext, Controller } from "react-hook-form";
import { dateStringToComponentValue } from "../../common/utility";

function ResultSection(props: SectionProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext<IPotInfo>();

  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        Results
      </Card.Header>
      <Card.Body className="form-content">
        <Container>
          <Controller
            name="result_date"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <Form.Group>
                <Form.Label id="result-date-label">Date</Form.Label>
                <Form.Control
                  {...field}
                  type="date"
                  value={dateStringToComponentValue(field.value)}
                  aria-labelledby="result-date-label"
                />
              </Form.Group>
            )}
          />
          <p>{errors.result_date?.message}</p>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Width</Form.Label>
                <Controller
                  name="result_width"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      aria-label="result-width"
                    />
                  )}
                />
                <p>{errors.result_width?.message}</p>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Height</Form.Label>
                <Controller
                  name="result_height"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      aria-label="result-height"
                      name="result_height"
                    />
                  )}
                />
                <p>{errors.result_height?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Result Notes</Form.Label>
            <Controller
              name="result_notes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  aria-label="result-notes"
                />
              )}
            />
            <p>{errors.result_notes?.message}</p>
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

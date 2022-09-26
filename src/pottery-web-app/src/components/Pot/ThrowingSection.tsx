import { Form, Container, Row, Col, Card } from "react-bootstrap";
import { useFormContext, Controller } from "react-hook-form";

function ThrowingSection(props: SectionProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext<IPotInfo>();

  const { potInfo, handleChange } = { ...props };

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
                <Controller
                  name="clay_weight"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <div>
                      <Form.Control
                        {...field}
                        type="text"
                        value={props.potInfo.clay_weight}
                        onChange={(
                          e: React.ChangeEvent<
                            HTMLInputElement & HTMLSelectElement
                          >
                        ) => {
                          props.handleChange(e);
                          field.onChange(e);
                        }}
                      />
                    </div>
                  )}
                />
                <p>{errors.clay_weight?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Thrown Height</Form.Label>
                <Controller
                  name="throw_height"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      value={props.potInfo.throw_height}
                      onChange={(
                        e: React.ChangeEvent<
                          HTMLInputElement & HTMLSelectElement
                        >
                      ) => {
                        props.handleChange(e);
                        field.onChange(e);
                      }}
                    />
                  )}
                />
                <p>{errors.throw_height?.message}</p>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Thrown Width</Form.Label>
                <Controller
                  name="throw_width"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      value={props.potInfo.throw_width}
                      onChange={(
                        e: React.ChangeEvent<
                          HTMLInputElement & HTMLSelectElement
                        >
                      ) => {
                        props.handleChange(e);
                        field.onChange(e);
                      }}
                    />
                  )}
                />
                <p>{errors.throw_width?.message}</p>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Throwing Notes</Form.Label>
            <Controller
              name="throw_notes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  value={props.potInfo.throw_notes}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                  ) => {
                    props.handleChange(e);
                    field.onChange(e);
                  }}
                />
              )}
            />
            <p>{errors.throw_notes?.message}</p>
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

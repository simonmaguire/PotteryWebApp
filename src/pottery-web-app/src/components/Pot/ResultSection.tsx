import { Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import { useFormContext, Controller } from "react-hook-form";
import { dateStringToComponentValue } from "../../common/utility";
import { ErrorMessage } from "@hookform/error-message";

function ResultSection() {
  const {
    control,
    formState: { errors },
  } = useFormContext<IPotInfo>();

  return (
    <div className="form-section">
      <h3 className="section-header">Results</h3>
      <Container>
        <Controller
          name="result_date"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Form.Group className="form-group">
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
        <ErrorMessage
          className="error-text"
          errors={errors}
          name="result_date"
          as="p"
        />
        <Row>
          <Col>
            <Form.Group className="form-group">
              <Form.Label>Width</Form.Label>
              <Controller
                name="result_width"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputGroup>
                    <Form.Control
                      {...field}
                      type="text"
                      aria-label="result-width"
                    />
                    <InputGroup.Text>In.</InputGroup.Text>
                  </InputGroup>
                )}
              />
              <ErrorMessage
                className="error-text"
                errors={errors}
                name="result_width"
                as="p"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="form-group">
              <Form.Label>Height</Form.Label>
              <Controller
                name="result_height"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputGroup>
                    <Form.Control
                      {...field}
                      type="text"
                      aria-label="result-height"
                      name="result_height"
                    />
                    <InputGroup.Text>In.</InputGroup.Text>
                  </InputGroup>
                )}
              />
              <ErrorMessage
                className="error-text"
                errors={errors}
                name="result_height"
                as="p"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="form-group">
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
          <ErrorMessage
            className="error-text"
            errors={errors}
            name="result_notes"
            as="p"
          />
        </Form.Group>
      </Container>
    </div>
  );
}

export default ResultSection;

import { Form, Container, Card } from "react-bootstrap";
import { useFormContext, Controller } from "react-hook-form";
import { dateStringToComponentValue } from "../../common/utility";

function TrimmingSection() {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext<IPotInfo>();

  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        Trimming
      </Card.Header>
      <Card.Body>
        <Container>
          <Form.Group>
            <Form.Label id="trim-date-label">Date</Form.Label>
            <Controller
              name="trim_date"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="date"
                  aria-labelledby="trim-date-label"
                  value={dateStringToComponentValue(field.value)}
                  onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                    field.onChange(e);
                    await trigger(["throw_date", "trim_date", "result_date"]);
                  }}
                />
              )}
            />
            <p>{errors.trim_date?.message}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Greenware Decorations</Form.Label>
            <Controller
              name="green_decorations"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="text"
                  aria-label="green-decorations"
                />
              )}
            />
            <p>{errors.green_decorations?.message}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Trimming Notes</Form.Label>
            <Controller
              name="trim_notes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  aria-label="trim-notes"
                />
              )}
            />
            <p>{errors.trim_notes?.message}</p>
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

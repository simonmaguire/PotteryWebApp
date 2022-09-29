import { Form, Container, Card } from "react-bootstrap";
import { DateTime } from "luxon";
import { useFormContext, Controller } from "react-hook-form";
import { dateStringToComponentValue } from "../../common/utility";

function TrimmingSection(props: SectionProps) {
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
            <Form.Label>Date</Form.Label>
            <Controller
              name="trim_date"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  value={dateStringToComponentValue(props.potInfo.trim_date)}
                  type="date"
                  onChange={async (
                    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                  ) => {
                    props.handleChange(e);
                    field.onChange(e);
                    const t = await trigger([
                      "throw_date",
                      "trim_date",
                      "result_date",
                    ]);
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
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="text"
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                  ) => {
                    props.handleChange(e);
                    field.onChange(e);
                  }}
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
                  value={props.potInfo.trim_notes}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                  ) => {
                    props.handleChange(e);
                    field.onChange(e);
                  }}
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

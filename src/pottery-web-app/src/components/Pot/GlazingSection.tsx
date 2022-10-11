import { Form, Container, Card } from "react-bootstrap";
import { useFormContext, Controller } from "react-hook-form";

function GlazingSection(props: SectionProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext<IPotInfo>();

  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        Glazing
      </Card.Header>
      <Card.Body>
        <Container>
          <Form.Group>
            <Form.Label>Glazes</Form.Label>
            <Controller
              name="glazes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="text"
                  aria-label="glazes"
                  value={props.potInfo.glazes}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                  ) => {
                    props.handleChange(e);
                    field.onChange(e);
                  }}
                />
              )}
            />
            <p>{errors.glazes?.message}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Glaze Notes</Form.Label>
            <Controller
              name="glaze_notes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  aria-label="glaze-notes"
                  value={props.potInfo.glaze_notes}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                  ) => {
                    props.handleChange(e);
                    field.onChange(e);
                  }}
                />
              )}
            />
            <p>{errors.glaze_notes?.message}</p>
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

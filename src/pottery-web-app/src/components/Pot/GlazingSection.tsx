import { Form, Container, Card } from "react-bootstrap";
// import { SectionProps } from "../../types";
import { useFormContext, Controller } from "react-hook-form";

function GlazingSection(props: SectionProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

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
                  value={props.potInfo.glazes}
                  name="glazes"
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                  ) => props.handleChange(e)}
                />
              )}
            />
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
                  value={props.potInfo.glaze_notes}
                  name="glaze_notes"
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                  ) => props.handleChange(e)}
                />
              )}
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

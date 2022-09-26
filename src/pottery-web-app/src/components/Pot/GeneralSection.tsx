import React from "react";
import { Form, Card } from "react-bootstrap";
import { CATEGORY_OPTIONS, STAGE_OPTIONS } from "../../Constants";
import { useFormContext, Controller, FieldError } from "react-hook-form";

const ErrorSection: React.FC<{ error: FieldError | undefined }> = ({
  error,
}) => {
  return <p>{error?.message}</p>;
};

function GeneralSection(props: SectionProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext<IPotInfo>();

  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        General
      </Card.Header>
      <Card.Body className="form-content">
        <Form.Group>
          <Form.Label>Stage</Form.Label>
          <Controller
            name="stage"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Select
                {...field}
                value={props.potInfo.stage}
                name="stage"
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                ) => props.handleChange(e)}
              >
                <option value=""></option>
                {STAGE_OPTIONS.map((x, y) => (
                  <option value={x} key={y}>
                    {x}
                  </option>
                ))}
              </Form.Select>
            )}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Clay</Form.Label>
          <Controller
            name="clay"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control
                {...field}
                type="text"
                name="clay"
                value={props.potInfo.clay}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                ) => {
                  props.handleChange(e);
                  field.onChange(e);
                }}
              />
            )}
          />
          <p>{errors.clay?.message}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <Form.Control
                  {...field}
                  type="text"
                  value={props.potInfo.name}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                  ) => {
                    props.handleChange(e);
                    field.onChange(e);
                  }}
                />
              </div>
            )}
          />
          <p>{errors.name?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Select
                {...field}
                value={props.potInfo.category}
                name="category"
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                ) => props.handleChange(e)}
              >
                <option value=""></option>
                {CATEGORY_OPTIONS.map((x, y) => (
                  <option value={x} key={y}>
                    {x}
                  </option>
                ))}
              </Form.Select>
            )}
          />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default GeneralSection;

import React from "react";
import { Form, Card } from "react-bootstrap";
import { CATEGORY_OPTIONS, STAGE_OPTIONS } from "../../common/Constants";
import { useFormContext, Controller } from "react-hook-form";
import { forEachChild } from "typescript";

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
              <Form.Select {...field} aria-label="stage">
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
              <Form.Control {...field} type="text" aria-label="clay" />
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
                <Form.Control {...field} type="text" aria-label="name" />
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
              <Form.Select {...field} name="category" aria-label="category">
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

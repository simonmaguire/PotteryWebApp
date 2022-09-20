import React from "react";
import { Form, Card } from "react-bootstrap";
import { IPotInfo, SectionProps } from "../types";
import { useFormContext, Controller } from "react-hook-form";

function GeneralSection(props: SectionProps) {
  let categoryOptions: string[] = [
    "Mug",
    "Bowl",
    "Cup",
    "Planter",
    "Plate",
    "Vase",
  ];
  let stageOptions: string[] = [
    "Wet",
    "Leather Hard",
    "Dry",
    "Bisque",
    "Glazed Bisque",
    "Glaze Ware",
  ];

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const StageDropdown: React.FC = () => {
    return (
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
            {stageOptions.map((x, y) => (
              <option value={x} key={y}>
                {x}
              </option>
            ))}
          </Form.Select>
        )}
      />
    );
  };

  const CategoryDropdown: React.FC = () => {
    return (
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
            {categoryOptions.map((x, y) => (
              <option value={x} key={y}>
                {x}
              </option>
            ))}
          </Form.Select>
        )}
      />
    );
  };

  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        General
      </Card.Header>
      <Card.Body className="form-content">
        <Form.Group>
          <Form.Label>Stage</Form.Label>
          <StageDropdown></StageDropdown>
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
                ) => props.handleChange(e)}
              />
            )}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control
                {...field}
                type="text"
                name="name"
                value={props.potInfo.name}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
                ) => props.handleChange(e)}
              />
            )}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <CategoryDropdown></CategoryDropdown>
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default GeneralSection;

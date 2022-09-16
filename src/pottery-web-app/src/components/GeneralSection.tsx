import React from "react";
import { Form, Card } from "react-bootstrap";
import { SectionProps } from "../types";

function GeneralSection(props: SectionProps) {
  return (
    <Card className="form-section">
      <Card.Header as="h2" className="section-header">
        General
      </Card.Header>
      <Card.Body className="form-content">
        <Form.Group>
          <Form.Label>Stage</Form.Label>
          <Form.Control
            type="text"
            value={props.potInfo.stage}
            name="stage"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.handleChange(e)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Clay</Form.Label>
          <Form.Control
            type="text"
            name="clay"
            value={props.potInfo.clay}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.handleChange(e)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={props.potInfo.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.handleChange(e)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={props.potInfo.category}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.handleChange(e)
            }
          />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default GeneralSection;

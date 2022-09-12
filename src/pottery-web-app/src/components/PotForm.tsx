import React from "react";
import { Form, Col, Row, Card } from "react-bootstrap";

const PotForm: React.FC = () => {
  return (
    <div>
      <Card className="form-section">
        <Card.Header className="section-header">General</Card.Header>
        <Card.Body>
            
        </Card.Body>
      </Card>
      <Card className="form-section">
        <Card.Header className="section-header">Throwing</Card.Header>
        <Card.Body></Card.Body>
      </Card>
      <Card className="form-section">
        <Card.Header className="section-header">Trimming</Card.Header>
        <Card.Body></Card.Body>
      </Card>
      <Card className="form-section">
        <Card.Header className="section-header">Glazing</Card.Header>
        <Card.Body></Card.Body>
      </Card>
      <Card className="form-section">
        <Card.Header className="section-header">Results</Card.Header>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};

export default PotForm;

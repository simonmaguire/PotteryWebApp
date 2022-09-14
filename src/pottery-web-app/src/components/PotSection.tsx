import React from "react";
import { Form, Col, Row, Card } from "react-bootstrap";

interface SectionInfo {
  section: String;
}

function PotSection({ section }: SectionInfo) {
  return (
    <Card className="form-section">
      <Card.Header className="section-header">{section}</Card.Header>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default PotSection;

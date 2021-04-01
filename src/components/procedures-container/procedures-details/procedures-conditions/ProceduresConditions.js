import React, { useEffect, useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import "./procedures-conditions.scss";

const ProceduresConditions = ({ procedureCondition }) => {
  const [condition, setCondition] = useState({});

  console.log("ProceduresConditions: ", condition);

  useEffect(() => {
    setCondition(procedureCondition);
  }, [procedureCondition]);

  return (
    <div className="ProceduresConditions-container">
      <div className="ProceduresConditions-header">Conditions</div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Event Type
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" as="select" value={procedureCondition.EventTypeID}>
              <option>10205</option>
              <option>10203</option>
              <option>10204</option>
              <option>10202</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Event Sub Type
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" as="select" value={procedureCondition.EventTypeID}>
              <option>10205</option>
              <option>10203</option>
              <option>10204</option>
              <option>10202</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Severity
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" as="select" value={procedureCondition.Severity}>
              <option value="0">Info</option>
              <option value="1">Warning</option>
              <option value="2">Error</option>
              <option value="3">Fatal</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Location
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Recurring
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text"></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProceduresConditions;

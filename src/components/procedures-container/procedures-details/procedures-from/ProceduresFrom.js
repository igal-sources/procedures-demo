import React, { useEffect, useState } from "react";
//import { Grid } from "semantic-ui-react";
import { Col, Row, Form } from "react-bootstrap";
import "./procedures-from.scss";

const ProceduresFrom = ({ procedure }) => {
  const [procedureFrom, setProcedureFrom] = useState(procedure);

  console.log("ProceduresFrom: ", procedure);
  // const { Description } = procedure;

  useEffect(() => {
    setProcedureFrom(procedure);
  }, [localStorage.getItem("procedureId")]);

  return (
    <div className="ProceduresFrom-container">
      <div className="ProceduresFrom-header">From</div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Name
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" value={procedureFrom.Name} readOnly />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Create By
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" value={procedureFrom.CreatingUserId} readOnly />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Creation Time
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" value={procedureFrom.CreationDate} readOnly />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Last Modification User
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" value={procedureFrom.ModifyUserId} readOnly />
          </Col>
        </Form.Group>
        <Form.Group as={Row} id="formGridCheckbox">
          <Form.Label column sm="4">
            Is Active
          </Form.Label>
          <Col sm="8">
            <Form.Check
             className="mb-3"
              size="sm"
              type="checkbox"
          
              checked={procedureFrom.IsActive}
              readOnly 
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Description
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" value={procedureFrom.Description} readOnly />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProceduresFrom;

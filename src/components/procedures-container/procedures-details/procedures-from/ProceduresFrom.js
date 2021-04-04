import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import "./procedures-from.scss";

const ProceduresFrom = ({ procedure = {}, isReadOnly }) => {
  console.log('ProceduresFrom: ', procedure);

  return (
    <div className="ProceduresFrom-container">
      <div className="ProceduresFrom-header">From</div>
      <Form className="ProceduresFrom-Form">
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Name
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" value={procedure.Name} readOnly={isReadOnly} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Create By
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" value={procedure.CreatingUserId} readOnly={isReadOnly} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Creation Time
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" value={procedure.CreationDate} readOnly={isReadOnly} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Last Modification User
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" value={procedure.ModifyUserId} readOnly={isReadOnly} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} id="formGridCheckbox">
          <Form.Label column sm="3">
            Is Active
          </Form.Label>
          <Col sm="8">
            <Form.Check
              className="mb-3"
              size="sm"
              type="checkbox"
              checked={procedure.IsActive}
              readOnly={isReadOnly}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Description
          </Form.Label>
          <Col sm="8">
            <Form.Control
              size="sm"
              type="textarea"
              rows={3}
              value={procedure.Description}
              readOnly={isReadOnly}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProceduresFrom;

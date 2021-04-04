import React, { useEffect, useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import EventTypes from "../../../../assets/mock-data/EventTypes.json";
import EventSeverities from "../../../../assets/mock-data/EventSeverities.json";
import "./procedures-conditions.scss";

const ProceduresConditions = ({ procedureCondition = {}, isReadOnly }) => {
  console.log('procedureCondition: ', procedureCondition);

  return (
    <div className="ProceduresConditions-container">
      <div className="ProceduresConditions-header">Conditions</div>
      <Form className="ProceduresConditions-Form">
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Event Type
          </Form.Label>
          <Col sm="8">
            <Form.Control
              size="sm"
              as="select"
              value={procedureCondition.EventTypeID}
              isReadOnly={true}
              disabled={isReadOnly}
              readOnly={isReadOnly}
            >
              {EventTypes &&
                EventTypes.map((e, EventTypeId) => {
                  return (
                    <option key={EventTypeId} value={e.EventTypeId}>
                      {e.EventTypeName}
                    </option>
                  );
                })}
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Event Sub Type
          </Form.Label>
          <Col sm="8">
            <Form.Control
              size="sm"
              as="select"
              value={procedureCondition.EventTypeID}
              disabled={isReadOnly}
              readOnly={isReadOnly}
            >
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
            <Form.Control
              size="sm"
              as="select"
              value={procedureCondition.Severity}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            >
              {EventSeverities &&
                EventSeverities.map((e, EventSeverityID) => {
                  return (
                    <option key={EventSeverityID} value={e.EventSeverityID}>
                      {e.EventSeverityName}
                    </option>
                  );
                })}
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Location
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" readOnly={isReadOnly}></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="4">
            Recurring
          </Form.Label>
          <Col sm="8">
            <Form.Control size="sm" type="text" readOnly={isReadOnly}></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProceduresConditions;

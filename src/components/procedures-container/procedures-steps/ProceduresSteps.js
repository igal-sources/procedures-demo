import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import ComponentTitle from "../../../shared/component-title/ComponentTitle";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedure }) => {
  const [steps, setSteps] = useState([]);
  const { ProcedureSteps = [] } = procedure;

  // useEffect(() => {
  //   const { ProcedureSteps = [] } = procedure;
  //     setSteps(ProcedureSteps);
  // }, [localStorage.getItem("procedureId")]);

  return (
    <div className="ProceduresSteps-container">
      <ComponentTitle title="Steps" />
      <Table singleLine className="ProceduresSteps-table">
        <Table.Header>          
          <Table.Row className="ProceduresSteps-table-header">
            <Table.HeaderCell colSpan="3">Instructions :</Table.HeaderCell>
          </Table.Row>
          <Table.Row className="ProceduresSteps-table-rows">
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Instruction</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {ProcedureSteps &&
            ProcedureSteps.map((row) => (
              <Table.Row key={row.SequenceNumber}>
                <Table.Cell>{row.SequenceNumber}</Table.Cell>
                <Table.Cell>{row.Title}</Table.Cell>
                <Table.Cell>{row.Instruction}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProceduresSteps;

import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
//import { getProcedure } from "../../../services/procedures-http.service";
import "./procedures-steps.scss";

const ProceduresSteps = ({ procedureSteps }) => {
  const [steps, setSteps] = useState([]);
  console.log("ProceduresSteps: ", steps);

  return (
    <div className="ProceduresSteps-container">
      <Table singleLine className="ProceduresSteps-table">
        <Table.Header>
          <Table.Row className="ProceduresSteps-table-header">
            <Table.HeaderCell colSpan="3">Steps</Table.HeaderCell>
          </Table.Row>
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
          {procedureSteps &&
            procedureSteps.map((row) => (
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

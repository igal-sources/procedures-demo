import React from "react";
import { Table } from "semantic-ui-react";
import { EmptyFn } from "../../../shared/types";
import "./procedures-list.scss";

const ProceduresList = ({procedures, onSelected = EmptyFn}) => {
  console.log('procedures: ', procedures);
  
  return (
    <div className="ProceduresList-container">
      <Table singleLine className="ProceduresList-table">
        <Table.Header>
          <Table.Row className="ProceduresList-table-header">
            <Table.HeaderCell colSpan="5">Procedures</Table.HeaderCell>
          </Table.Row>
          <Table.Row className="ProceduresList-table-rows">
            <Table.HeaderCell>System Id</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Event Type</Table.HeaderCell>
            <Table.HeaderCell>Severity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {procedures.map((row) => (
            <Table.Row positive key={row.id} onClick={() => onSelected(row.id)}>
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.IsActive}</Table.Cell>
              <Table.Cell>{row.Name}</Table.Cell>
              <Table.Cell>{row.ProcedureCondition.EventTypeID}</Table.Cell>
              <Table.Cell>{row.ProcedureCondition.Severity}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProceduresList;

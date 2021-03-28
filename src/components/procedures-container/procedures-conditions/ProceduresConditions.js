import React, { useEffect, useState } from "react";
import { Grid, Table } from "semantic-ui-react";
import { getProcedure } from "../../../services/procedures-http.service";
import "./procedures-conditions.scss";

const ProceduresConditions = ({ procedureCondition }) => {
  const [condition, setCondition] = useState([]);

  console.log("ProceduresConditions: ", condition);

  useEffect(() => {
    setCondition(procedureCondition);
  }, []);

  return (
    <div>ProceduresConditions</div>
    // <div className="ProceduresConditions-container">
    //   <Table singleLine className="ProceduresConditions-table">
    //     <Table.Header>
    //       <Table.Row className="ProceduresConditions-table-header">
    //         <Table.HeaderCell colSpan="3">Procedures</Table.HeaderCell>
    //       </Table.Row>
    //       <Table.Row className="ProceduresConditions-table-rows">
    //         <Table.HeaderCell>#</Table.HeaderCell>
    //         <Table.HeaderCell>Title</Table.HeaderCell>
    //         <Table.HeaderCell>Instruction</Table.HeaderCell>
    //       </Table.Row>
    //     </Table.Header>

    //     <Table.Body>
    //       {steps.map((row) => (
    //         <Table.Row key={row.SequenceNumber}>
    //           <Table.Cell>{row.SequenceNumber}</Table.Cell>
    //           <Table.Cell>{row.Title}</Table.Cell>
    //           <Table.Cell>{row.Instruction}</Table.Cell>
    //         </Table.Row>
    //       ))}
    //     </Table.Body>
    //   </Table>
    // </div>
  );
};

export default ProceduresConditions;

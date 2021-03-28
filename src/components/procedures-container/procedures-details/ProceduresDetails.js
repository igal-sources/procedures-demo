import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import ProceduresSteps from "../procedures-steps/ProceduresSteps";
import "./procedures-details.scss";

const ProceduresDetails = () => {
  const [procedureId, setProcedureId] = useState(localStorage.getItem("procedureId"));
  // const procedureId = localStorage.getItem("procedureId");
  return (
    <div className="ProceduresDetails-container">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>1</Grid.Column>
          <Grid.Column>2</Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <ProceduresSteps procedureId={procedureId} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ProceduresDetails;

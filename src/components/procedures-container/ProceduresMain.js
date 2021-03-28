import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { getAllProcedures, getProcedure } from "../../services/procedures-http.service";
import ProceduresList from "./procedures-list/ProceduresList";
import ProceduresConditions from "./procedures-conditions/ProceduresConditions";
import ProceduresSteps from "./procedures-steps/ProceduresSteps";
import "./procedures-main.scss";

const ProceduresMain = () => {
  const [procedures, setProcedures] = useState([]);
  const [steps, setSteps] = useState([]);
  console.log("ProceduresMain - steps: ", steps);
  const [condition, setCondition] = useState({});
  console.log("ProceduresMain - condition: ", condition);
  const [procedureId, setProcedureId] = useState();
  console.log("procedures Main: ", procedures);

  const handleSelectedProcedure = (id) => {
    setProcedureId(id);
    localStorage.setItem("procedureId", id);
    getProcedure(id).then((res) => {
      const { ProcedureSteps = [], ProcedureCondition = {} } = res.data;
      setSteps(ProcedureSteps);
      setCondition(ProcedureCondition);
    });
  };

  useEffect(() => {
    getAllProcedures().then((res) => {
      setProcedures(res.data);
    });
  }, []);

  return (
    <div className="ProceduresMain-container">
      <Grid>
        <Grid.Column className="ProceduresMain-ProceduresList" width={8}>
          <ProceduresList
            procedures={procedures}
            onSelected={(id) => handleSelectedProcedure(id)}
            className="ProceduresMain-ProceduresList"
          />
        </Grid.Column>
        <Grid.Column className="ProceduresMain-ProceduresConditions" width={8}>
          <ProceduresConditions Condition={condition} />
          <ProceduresSteps procedureSteps={steps} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProceduresMain;

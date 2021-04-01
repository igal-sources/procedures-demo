import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { getAllProcedures, getProcedure } from "../../services/procedures-http.service";
import ProceduresList from "./procedures-list/ProceduresList";
import ProceduresDetails from "./procedures-details/ProceduresDetails";
import ProceduresSteps from "./procedures-steps/ProceduresSteps";
import "./procedures-main.scss";

const ProceduresMain = () => {
  const [procedures, setProcedures] = useState([]);
  const [selectedProcedure, setSelectedProcedure] = useState({});
  console.log("procedures Main: ", procedures);

  const handleSelectedProcedure = (id) => {
    localStorage.setItem("procedureId", id);
    getProcedure(id).then((res) => {
      setSelectedProcedure(res.data);
    });
  };

  useEffect(() => {
    getAllProcedures().then((res) => {
      setProcedures(res.data);
     // setSelectedProcedure(res.data[0]);      
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
          <ProceduresDetails procedure={selectedProcedure} />
          <ProceduresSteps procedure={selectedProcedure} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProceduresMain;

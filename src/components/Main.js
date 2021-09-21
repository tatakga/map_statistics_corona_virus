import React from "react";
import useFetchGetCaseHistory from "../hooks/useFetchGetCaseHistory";
import Chart from "./Chart";
import { Grid, Wrapper } from "./Main.styles";
import Map from "./Map";
import Stats from "./Stats";

const Main = () => {
  const {
    state: { cases: globalCases, deaths: globalDeaths, recovered: globalRecovered },
    loading: globalLoading,
    error: globalError,
  } = useFetchGetCaseHistory("");
  const {
    state: { cases: idnCases, deaths: idnDeaths, recovered: idnRecovered },
    loading: idnLoading,
    error: idnError,
  } = useFetchGetCaseHistory("IDN");
  return (
    <Wrapper>
      <Map />
      <Stats />
      <Grid>
        <div>
          {globalLoading && <p>Loading fetching data ⏲ </p>}
          {globalError && <p>Error when fething data. Please refresh 🙇‍♂️ </p>}
          <Chart headingComponent="Global Historical Data" cases={globalCases} deaths={globalDeaths} recovered={globalRecovered} />
        </div>
        <div>
          {idnLoading && <p>Loading fetching data ⏲ </p>}
          {idnError && <p>Error when fething data. Please refresh 🙇‍♂️ </p>}
          <Chart headingComponent="Indonesia Historical Data" cases={idnCases} deaths={idnDeaths} recovered={idnRecovered} />
        </div>
      </Grid>
    </Wrapper>
  );
};
export default Main;

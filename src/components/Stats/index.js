import React from "react";
import useFetchAllStats from "../../hooks/useFetchAllStats";
import { CardInfo, Wrapper, Content } from "./Stats.styles";

const Stats = () => {
  const {
    state: { cases, deaths, active, recovered },
    loading,
    error,
  } = useFetchAllStats();
  return (
    <Wrapper>
      {cases !== "0" ? <h1>Global Covid Stats</h1> : null}
      <Content>
        {loading && <p>Waiting fetching data</p>}
        {error && <p>Error when fetching data</p>}
        {cases !== "0" ? (
          <>
            <CardInfo>
              <h3>Total Cases</h3>
              <p>{cases}</p>
            </CardInfo>
            <CardInfo>
              <h3>Total Deaths</h3>
              <p>{deaths}</p>
            </CardInfo>
            <CardInfo>
              <h3>Total Active</h3>
              <p>{active}</p>
            </CardInfo>
            <CardInfo>
              <h3>Total Recovered</h3>
              <p>{recovered}</p>
            </CardInfo>
          </>
        ) : null}
      </Content>
    </Wrapper>
  );
};
export default Stats;

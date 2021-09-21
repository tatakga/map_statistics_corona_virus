import { Line } from "react-chartjs-2";
import { Wrapper } from "./Chart.styles";

const Chart = ({ headingComponent, cases, deaths, recovered }) => {
  const data = {
    labels: Object.keys(cases),
    datasets: [
      {
        label: "Total Cases",
        data: Object.values(cases),
        fill: false,
        borderColor: "#F5E960",
      },
      {
        label: "Deaths",
        data: Object.values(deaths),
        fill: false,
        borderColor: "#f53232",
      },
      {
        label: "Recovered",
        data: Object.values(recovered),
        fill: false,
        borderColor: "#23F0C7",
      },
    ],
  };

  return (
    <Wrapper>
      <h1>{headingComponent}</h1>
      <Line data={data} />
    </Wrapper>
  );
};

export default Chart;

import { Wrapper, HeadingPopup, Text, Flag } from "./Map.styles";

const DetailPopup = ({ country, flag, totalCases, totalDeaths, totalRecovered, totalActive }) => {
  return (
    <Wrapper>
      <HeadingPopup>
        <Flag src={flag} alt="flag" />
        <Text>
          <b>{country}</b>
        </Text>
      </HeadingPopup>
      <Text>Total Cases : {totalCases}</Text>
      <Text>Total Active : {totalActive}</Text>
      <Text>Total Deaths : {totalDeaths}</Text>
      <Text>Total Recovered : {totalRecovered}</Text>
    </Wrapper>
  );
};
export default DetailPopup;

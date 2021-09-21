const BASE_URL = "https://disease.sh/v3/covid-19/";

export const getAllStats = async () => {
  const response = await fetch(`${BASE_URL}all`);
  const data = await response.json();
  return data;
};

export const getCaseHistory = async (coutryName) => {
  const endpoint = coutryName ? `${BASE_URL}historical/${coutryName}?lastdays=30` : `${BASE_URL}historical/all?lastdays=30`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const getAllCountriesCases = async () => {
  const response = await fetch(`${BASE_URL}countries`);
  const data = await response.json();
  return data;
};

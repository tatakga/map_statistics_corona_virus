import { useEffect, useState } from "react";
import { getAllStats } from "../API";
import { numberCommasFormat } from "../helpers";

const initialState = {
  cases: numberCommasFormat(0),
  deaths: numberCommasFormat(0),
  active: numberCommasFormat(0),
  recovered: numberCommasFormat(0),
};

const useFetchAllStats = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getStats = async () => {
      setLoading(true);
      setError(false);
      try {
        const datas = await getAllStats();
        const { cases, deaths, active, recovered } = datas;
        const formatData = { cases: numberCommasFormat(cases), deaths: numberCommasFormat(deaths), active: numberCommasFormat(active), recovered: numberCommasFormat(recovered) };
        setState({ ...formatData });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    getStats();
  }, []);

  return { state, loading, error };
};
export default useFetchAllStats;

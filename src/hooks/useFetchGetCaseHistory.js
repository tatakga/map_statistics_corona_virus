import { useEffect, useState } from "react";
import { getCaseHistory } from "../API";

const initialState = {
  cases: {
    "1/22/20": 0,
  },
  deaths: {
    "1/22/20": 0,
  },
  recovered: {
    "1/22/20": 0,
  },
};

const useFetchGetCaseHistory = (coutryName) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getDatas = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await getCaseHistory(coutryName);
        const formattedData = coutryName ? { ...data.timeline } : data;
        setState(formattedData);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    getDatas();
  }, [coutryName]);

  return { state, loading, error };
};
export default useFetchGetCaseHistory;

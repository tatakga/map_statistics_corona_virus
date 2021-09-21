import { useEffect, useState } from "react";
import { getAllCountriesCases } from "../API";

const useFetchAllCountriesCases = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setState([]);
      setError(false);
      try {
        const datas = await getAllCountriesCases();
        setState([...datas]);
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setState([]);
        setError(true);
      }
    };
    getData();
  }, []);

  return { state, loading, error };
};
export default useFetchAllCountriesCases;

import { useEffect, useState } from 'react';

const URL = 'https://api.covid19api.com/summary';

const useFetchStatistics = () => {
  const [globalData, setGlobalData] = useState({});
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (data?.Global) setGlobalData(data?.Global);
      if (data?.Countries) setCountriesData(data?.Countries);
      setIsLoading(false);
    } catch {
      setError('Something went wrong');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { globalData, countriesData, isLoading, error };
};

export default useFetchStatistics;

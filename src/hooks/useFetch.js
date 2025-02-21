import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);

          const response = await fetch(url);
          const json = await response.json();
          const fetchedData = json.data
          
          setData(fetchedData);

      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
}

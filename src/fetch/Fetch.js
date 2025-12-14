import { useState, useEffect } from "react";


// React hook for fetching data
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        // Throws an error message
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      // Handles loading and fetches data
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      // Error handle
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
};

export default useFetch;

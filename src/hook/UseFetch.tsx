import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.error('Error fetching data:', error);
        setData(null); // You might want to handle errors more gracefully
      });
  }, [url]);

  return { data };
}

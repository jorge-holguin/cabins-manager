// src/hooks/useFetch.ts
import { useState, useEffect } from 'react';

export const useFetch = (fetchFunction: Function, params: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction(...params);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchFunction, ...params]);

  return { data, loading, error };
};

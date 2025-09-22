"use client";

import { useState, useEffect } from 'react';

export function useLocations(filters = {}) {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLocations();
  }, [filters]);

  const fetchLocations = async () => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams(filters);
      const response = await fetch(`/api/locations?${queryParams}`);
      
      if (!response.ok) throw new Error('Failed to fetch locations');
      
      const data = await response.json();
      
      if (data.success) {
        setLocations(data.data.locations);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { locations, loading, error, refetch: fetchLocations };
}

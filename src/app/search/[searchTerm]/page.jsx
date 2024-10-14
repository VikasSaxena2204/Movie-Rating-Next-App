"use client";

import { useState, useEffect } from 'react';
import Results from '../components/Results';

export default function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setResults(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchTerm]);

  if (loading) {
    return <div className='text-center pt-6'>Loading...</div>;
  }

  if (error) {
    return <h1 className='text-center pt-6'>An error occurred: {error}</h1>;
  }

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className='text-center pt-6'>No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}

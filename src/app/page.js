import Results from '../components/Results.jsx';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        {results.length > 0 ? <Results results={results} /> : <h2>No results found</h2>}
      </div>
    );
  } catch (error) {
    return (
      <div className='text-center mt-16'>
        <h1 className='text-lg font-bold'>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}

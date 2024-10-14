import Card from './Card';

export default function Results({ results }) {
  // Handle no results scenario
  if (!results || results.length === 0) {
    return (
      <div className='text-center py-4'>
        <h2 className='text-lg font-semibold'>No results found.</h2>
        <p className='text-gray-500'>Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}

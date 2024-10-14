'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error); // Use console.error for better visibility
  }, [error]);

  return (
    <div className='text-center mt-10'>
      <h1 className='text-lg font-bold'>Something went wrong. Please try again later.</h1>
      {/* Optional: Displaying error message for debugging */}
      <p className='text-sm text-gray-500'>{error.message}</p>
      <button
        className='mt-4 p-2 bg-amber-500 text-white rounded hover:bg-amber-600'
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}

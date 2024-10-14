'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSearch = search.trim();
    if (trimmedSearch) {
      router.push(`/search/${trimmedSearch}`);
      setSearch(''); // Clear the input field after submitting
    }
  };

  return (
    <form
      className='flex justify-between px-5 max-w-6xl mx-auto'
      onSubmit={handleSubmit}
    >
      <label htmlFor='search' className='sr-only'>Search keywords</label>
      <input
        id='search'
        type='text'
        placeholder='Search keywords...'
        className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='text-amber-600 disabled:text-gray-400'
        disabled={search.trim() === ''}
      >
        Search
      </button>
    </form>
  );
}

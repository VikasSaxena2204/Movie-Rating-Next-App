'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted && (
        <button
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
          className='text-xl cursor-pointer hover:text-amber-500 transition duration-200 ease-in-out'
        >
          {currentTheme === 'dark' ? (
            <MdLightMode />
          ) : (
            <MdDarkMode />
          )}
        </button>
      )}
    </div>
  );
}

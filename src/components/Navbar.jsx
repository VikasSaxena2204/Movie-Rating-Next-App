import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <nav className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6' role='navigation'> 
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
      {/* You can add more NavbarItems here as needed */}
    </nav>
  );
}

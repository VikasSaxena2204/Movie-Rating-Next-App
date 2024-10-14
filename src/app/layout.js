import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header.jsx';
import Providers from './Providers';
import Navbar from '../components/Navbar.jsx';
import SearchBox from '../components/SearchBox.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Movie-Rating-app',
  description: 'This is a movie database clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          <main>{children}</main> {/* Using <main> for better semantics */}
        </Providers>
      </body>
    </html>
  );
}

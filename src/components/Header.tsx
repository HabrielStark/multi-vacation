import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">Active Recreation</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/shop" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
              <ShoppingBagIcon className="h-5 w-5" />
              Shop
            </Link>
            <Link to="/booking" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
              <CalendarIcon className="h-5 w-5" />
              Book
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-full shadow-sm">
            <Leaf className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
            GreenGuide
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;


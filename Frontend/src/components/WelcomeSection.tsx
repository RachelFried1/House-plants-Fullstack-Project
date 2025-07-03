
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplets, Sun } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="bg-gradient-to-br from-green-25 via-emerald-25 to-teal-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
            Discover the World of 
            <span className="text-green-700 block">Beautiful Plants</span>
          </h1>
          
          <p className="text-xl text-green-800 mb-8 leading-relaxed">
            Your complete guide to plant care, identification, and cultivation. 
            Explore our extensive collection of plant species with detailed care instructions.
          </p>
          
          <Link 
            to="/plants"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Plants
            <ArrowRight className="ml-2" size={20} />
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Plant Identification</h3>
              <p className="text-green-700">Learn about different plant species, their characteristics, and origins.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-blue-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Care Instructions</h3>
              <p className="text-green-700">Get detailed watering, lighting, and humidity requirements for each plant.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-100">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="text-yellow-700" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Growing Tips</h3>
              <p className="text-green-700">Discover the best practices for healthy plant growth and maintenance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

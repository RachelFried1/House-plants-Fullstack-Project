import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import PlantHeader from './PlantHeader';
import PlantDescription from './PlantDescription';
import PlantCareInfo from './PlantCareInfo';
import PlantCharacteristics from './PlantCharacteristics';

const PlantDetail = () => {
  const { currentPlant } = useAppSelector(state => state.plants);

  if (!currentPlant) {
    return null;
  }
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/plants" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors duration-200">
        <ArrowLeft size={20} className="mr-2" />
        Back to Plants
      </Link>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <PlantHeader plant={currentPlant} />
        <div className="p-8 border-t border-gray-200">
          <PlantDescription plant={currentPlant} />
          <PlantCareInfo plant={currentPlant} />
          <PlantCharacteristics plant={currentPlant} />
        </div>
      </div>
    </div>
  );
};

export default PlantDetail;

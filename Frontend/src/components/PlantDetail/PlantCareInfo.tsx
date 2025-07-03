import { Droplets, Sun, Scissors, Bug } from 'lucide-react';
import { DetailedPlant } from '../../types/plantTypes';

interface PlantCareInfoProps {
  plant: DetailedPlant;
}

const PlantCareInfo = ({ plant }: PlantCareInfoProps) => {
  const formatArray = (arr: string | string[] | undefined) => {
    if (!arr) return 'Not specified';
    if (Array.isArray(arr)) return arr.join(', ');
    return arr;
  };

  const careInfo = [
    { 
      icon: Droplets, 
      label: 'Watering', 
      value: plant['Watering'] || 'Not specified' 
    },
    { 
      icon: Sun, 
      label: 'Light (Ideal)', 
      value: plant['Light ideal'] || 'Not specified' 
    },
    { 
      icon: Sun, 
      label: 'Light (Tolerated)', 
      value: plant['Light tolered'] || 'Not specified' 
    },
    { 
      icon: Scissors, 
      label: 'Pruning', 
      value: plant.Pruning || 'Not specified' 
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Care Instructions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {careInfo.map((info, index) => (
          <div key={index} className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <info.icon className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="font-semibold text-green-800">{info.label}</h3>
            </div>
            <p className="text-gray-700 text-sm">{info.value}</p>
          </div>
        ))}
      </div>

      {plant.Insects && (
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Bug className="w-5 h-5 text-yellow-600 mr-2" />
            <h3 className="font-semibold text-yellow-800">Common Pests</h3>
          </div>
          <p className="text-gray-700 text-sm">{formatArray(plant.Insects)}</p>
        </div>
      )}

      {plant.Disease && (
        <div className="bg-red-50 p-4 rounded-lg mt-4">
          <div className="flex items-center mb-2">
            <Bug className="w-5 h-5 text-red-600 mr-2" />
            <h3 className="font-semibold text-red-800">Disease Information</h3>
          </div>
          <p className="text-gray-700 text-sm">{plant.Disease}</p>
        </div>
      )}
    </div>
  );
};

export default PlantCareInfo;

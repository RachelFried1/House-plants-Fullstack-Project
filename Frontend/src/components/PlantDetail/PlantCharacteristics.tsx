import { Flower2, Palette, Calendar, Sparkles } from 'lucide-react';
import { DetailedPlant } from '../../types/plantTypes';

interface PlantCharacteristicsProps {
  plant: DetailedPlant;
}

function formatSize(size: any) {
  if (!size) return 'Not specified';
  if (typeof size === 'string') return size;
  if (typeof size === 'object') {
    if (size.M) return `${size.M}m`;
    if (size.CM) return `${size.CM}cm`;
  }
  return 'Not specified';
}

const PlantCharacteristics = ({ plant }: PlantCharacteristicsProps) => {
  const formatArray = (arr: string | string[] | undefined) => {
    if (!arr) return 'Not specified';
    if (Array.isArray(arr)) return arr.join(', ');
    return arr;
  };

  const characteristics = [
    {
      icon: Flower2,
      label: 'Bloom Color',
      value: plant['Color of blooms'] || 'Not specified'
    },
    {
      icon: Palette,
      label: 'Leaf Color',
      value: formatArray(plant['Color of leaf'])
    },
    {
      icon: Calendar,
      label: 'Blooming Season',
      value: plant['Blooming season'] || 'Not specified'
    },
    {
      icon: Sparkles,
      label: 'Appeal',
      value: plant.Appeal || 'Not specified'
    }
  ];

  const sizeInfo = [
    {
      label: 'Width at Purchase',
      value: formatSize(plant['Width at purchase'])
    },
    {
      label: 'Height at Purchase',
      value: formatSize(plant['Height at purchase'])
    },
    {
      label: 'Width Potential',
      value: formatSize(plant['Width potential'])
    },
    {
      label: 'Height Potential',
      value: formatSize(plant['Height potential'])
    },
    {
      label: 'Pot Diameter (cm)',
      value: formatSize(plant['Pot diameter (cm)'])
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Plant Characteristics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Appearance</h3>
          <div className="space-y-3">
            {characteristics.map((char, index) => (
              <div key={index} className="flex items-center">
                <char.icon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-gray-700">{char.label}: </span>
                  <span className="text-sm text-gray-600">{char.value}</span>
                </div>
              </div>
            ))}
          </div>
          {plant.Perfume && (
            <div className="mt-4 p-3 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-800 mb-1">Fragrance</h4>
              <p className="text-sm text-purple-600">{plant.Perfume}</p>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Size Information</h3>
          <div className="space-y-2">
            {sizeInfo.map((info, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-sm font-medium text-gray-700">{info.label}</span>
                <span className="text-sm text-gray-600">{info.value}</span>
              </div>
            ))}
          </div>
          {plant['Available sizes (Pot)'] && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-1">Available Sizes</h4>
              <p className="text-sm text-blue-600">{plant['Available sizes (Pot)']}</p>
            </div>
          )}
          {plant.Zone && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800 mb-1">Hardiness Zones</h4>
              <p className="text-sm text-green-600">{formatArray(plant.Zone)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantCharacteristics;

import { MapPin, Ruler, Activity, TreePine, Thermometer } from 'lucide-react';
import { DetailedPlant } from '../../types/plantTypes';

interface PlantHeaderProps {
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

function formatTemperature(temp: any) {
  if (!temp) return 'Not specified';
  if (typeof temp === 'object') {
    const c = temp.C !== undefined ? `${temp.C}°C` : '';
    const f = temp.F !== undefined ? `${temp.F}°F` : '';
    return [c, f].filter(Boolean).join(' / ') || 'Not specified';
  }
  return temp;
}

const PlantHeader = ({ plant }: PlantHeaderProps) => {
  const formatArray = (arr: string | string[] | undefined) => {
    if (!arr) return 'Not specified';
    if (Array.isArray(arr)) return arr.join(', ');
    return arr;
  };

  const formatCommonName = () => {
    if (!plant['Common name'] || (Array.isArray(plant['Common name']) && plant['Common name'].length === 0)) return '';
    if (Array.isArray(plant['Common name'])) return plant['Common name'][0];
    return plant['Common name'];
  };

  const plantInfo = [
    { icon: MapPin, label: 'Origin', value: plant.Origin || 'Not specified' },
    { icon: Ruler, label: 'Height Potential', value: formatSize(plant['Height potential']) },
    { icon: Activity, label: 'Growth', value: plant.Growth || 'Not specified' },
    { icon: TreePine, label: 'Style', value: plant.Style || 'Not specified' },
    { icon: Thermometer, label: 'Temperature', value: `${formatTemperature(plant['Temperature min'])} - ${formatTemperature(plant['Temperature max'])}` }
  ];

  const badges = [
    { text: plant.Categories, color: 'bg-green-100 text-green-800' },
    { text: plant.Family, color: 'bg-blue-100 text-blue-800' },
    { text: plant.Bearing || 'Unknown Bearing', color: 'bg-purple-100 text-purple-800' }
  ];

  return (
    <div className="md:flex">
      <div className="md:w-1/2">
        <img
          src={plant.Img || '/placeholder.svg'}
          alt={plant['Latin name']}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {plant['Latin name']}
          </h1>
          {formatCommonName() && (
            <p className="text-xl text-gray-600 mb-4">
              {formatCommonName()}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mb-6">
            {badges.map((badge, index) => (
              <span key={index} className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${badge.color}`}>
                {badge.text}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {plantInfo.map((info, index) => (
            <div key={index} className="flex items-center">
              <info.icon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700 mr-2 min-w-0 flex-shrink-0">
                {info.label}:
              </span>
              <span className="text-sm text-gray-600 truncate">
                {info.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantHeader;

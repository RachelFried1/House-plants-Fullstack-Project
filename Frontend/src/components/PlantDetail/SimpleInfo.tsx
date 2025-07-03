import { DetailedPlant } from '../../types/plantTypes';

interface SimpleInfoProps {
  plant: DetailedPlant;
}

function SimpleInfo({ plant }: SimpleInfoProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Simple Care Info</h2>
      <p>Watering: {plant.Watering || 'Not specified'}</p>
      <p>Light: {plant['Light ideal'] || 'Not specified'}</p>
    </div>
  );
}

export default SimpleInfo;

import { DetailedPlant } from '../../types/plantTypes';

interface PlantDescriptionProps {
  plant: DetailedPlant & { description?: string };
}

const PlantDescription = ({ plant }: PlantDescriptionProps) => {
  const showList = (listData: string | string[] | undefined) => {
    if (!listData) return null;
    if (typeof listData === 'string') return [listData];
    if (!Array.isArray(listData) || listData.length === 0) return null;
    return listData.filter(item => item && typeof item === 'string');
  };

  const useList = showList(plant.Use);
  const desc = plant.Description && plant.Description.trim() !== '' ? plant.Description : (plant.description && plant.description.trim() !== '' ? plant.description : 'No description available.');

  let otherNames = plant['Other names'];
  let otherNamesDisplay = null;
  if (otherNames) {
    if (Array.isArray(otherNames)) {
      otherNamesDisplay = otherNames.join(', ');
    } else {
      otherNamesDisplay = otherNames;
    }
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-green-800 mb-3">About This Plant</h2>
      <p className="text-gray-700 leading-relaxed">{desc}</p>
      {useList && useList.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Uses:</h3>
          <div className="flex flex-wrap gap-2">
            {useList.map((use, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                {use}
              </span>
            ))}
          </div>
        </div>
      )}
      {otherNamesDisplay && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-1">Other Names:</h3>
          <p className="text-gray-600">{otherNamesDisplay}</p>
        </div>
      )}
      {plant.Url && (
        <div className="mt-4">
          <a
            href={plant.Url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 underline"
          >
            Learn more about this plant
          </a>
        </div>
      )}
    </div>
  );
};

export default PlantDescription;

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PlantDetail from '../components/PlantDetail/PlantDetail';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import NotFound from './NotFound';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPlantById, clearCurrentPlant } from '../store/plantSlice';

const isNotFoundError = (error: string | null) => {
  if (!error) return false;
  const msg = error.toLowerCase();
  const patterns = [
    'not found',
    '404',
    'does not exist',
    'no plant',
    'failed to fetch plant details',
  ];
  return patterns.some(pattern => msg.includes(pattern));
};

const PlantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { currentPlant, loading, error } = useAppSelector(state => state.plants);

  useEffect(() => {
    if (id) {
      dispatch(fetchPlantById(id));
    }
    return () => {
      dispatch(clearCurrentPlant());
    };
  }, [dispatch, id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {loading && <LoadingSpinner />}
        {!loading && error && isNotFoundError(error) && <NotFound />}
        {!loading && error && !isNotFoundError(error) && <ErrorMessage message={error} />}
        {!loading && !error && currentPlant && <PlantDetail />}
      </div>
    </div>
  );
};

export default PlantDetails;

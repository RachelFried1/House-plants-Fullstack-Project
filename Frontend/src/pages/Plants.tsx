
import { useEffect } from 'react';
import Header from '../components/Header';
import PlantFilters from '../components/PlantFilters';
import PlantTable from '../components/PlantTable';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPlants } from '../store/plantSlice';

const Plants = () => {
  const dispatch = useAppDispatch();
  const { filteredPlants, loading, error } = useAppSelector(state => state.plants);

  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Plant Collection</h1>
          <p className="text-green-600 text-lg">Explore our extensive database of plant species</p>
        </div>

        <PlantFilters />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && <PlantTable plants={filteredPlants} />}
      </div>
    </div>
  );
};

export default Plants;


'use client';

import React, { useState } from 'react';
import SightseeingTable from './components/SightseeingTable';
import AddSightseeingForm from './components/AddSightseeingForm/AddSightseeingForm';
import { NewSightseeing } from './interface/NewSightseeing';

const Home = () => {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Eiffel Tower',
      description: 'An iconic Paris landmark.',
      rating: 4.7,
      location: 'Paris, France',
      coordinates: { lat: 48.8584, lon: 2.2945 },
      googleMapsLink: 'https://www.google.com/maps/place/Eiffel+Tower',
      status: 'Open',
      addedDate: '2025-03-21',
    },
    {
      id: '2',
      name: 'Great Wall of China',
      description: 'Ancient wall stretching across China.',
      rating: 4.9,
      location: 'China',
      coordinates: { lat: 40.4319, lon: 116.5704 },
      googleMapsLink: 'https://www.google.com/maps/place/Great+Wall+of+China',
      status: 'Open',
      addedDate: '2025-03-20',
    },
  ]);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const addSightseeing = (newSightseeing: NewSightseeing) => {
    const newItem = {
      ...newSightseeing,
      id: Date.now().toString(), // Генерация уникального id
      addedDate: new Date().toISOString(), // Генерация даты
    };
    setData((prevData) => [...prevData, newItem]);
  };

  return (
    <div>
      <button style={{ margin: '20px' }} onClick={() => setIsAdminMode(!isAdminMode)}>
        {isAdminMode ? 'Выйти из режима администратора' : 'Перейти в режим администратора'}
      </button>
      <h1>Sightseeing Destinations</h1>
      {isAdminMode && (
      <AddSightseeingForm onAdd={addSightseeing} />)}
      <SightseeingTable data={data} setData={setData} isAdminMode={isAdminMode} />
    </div>
  );
};

export default Home;
'use client';

import React, { useState } from 'react';
import { NewSightseeing } from '../../interface/NewSightseeing';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddSightseeingForm.css';

interface AddSightseeingFormProps {
  existingItem?: NewSightseeing | null;
  onSave?: (updatedItem: NewSightseeing) => void;
  onAdd?: (newSightseeing: NewSightseeing) => void;
}

const AddSightseeingForm: React.FC<AddSightseeingFormProps> = ({ existingItem, onSave, onAdd }) => {
  const [name, setName] = useState(existingItem ? existingItem.name : '');
  const [description, setDescription] = useState(existingItem ? existingItem.description : '');
  const [rating, setRating] = useState(existingItem ? existingItem.rating : 0);
  const [location, setLocation] = useState(existingItem ? existingItem.location : '');
  const [googleMapsLink, setGoogleMapsLink] = useState(existingItem ? existingItem.googleMapsLink : '');
  const [status, setStatus] = useState(existingItem ? existingItem.status : 'Open');
  const [coordinates, setCoordinates] = useState(existingItem ? existingItem.coordinates : { lat: 0, lon: 0 });

  // Генерация ссылки на Google Maps
  const generateGoogleMapsLink = (lat: number, lon: number) => {
    return `https://www.google.com/maps/@${lat},${lon},15z`;
  };

  const extractCoordinatesFromGoogleMapsLink = (link: string) => {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const match = link.match(regex);
    if (match) {
      return { lat: parseFloat(match[1]), lon: parseFloat(match[2]) };
    }
    return { lat: 0, lon: 0 }; // Возвращаем дефолтные значения, если не нашли координаты
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка на обязательные поля
    if (!name || !description || !location) {
      toast.error('Please fill all the fields');
      return;
    }

    const newSightseeing = {
      id: existingItem ? existingItem.id : Date.now().toString(),
      name,
      description,
      rating,
      location,
      googleMapsLink: generateGoogleMapsLink(coordinates.lat, coordinates.lon),
      status,
      addedDate: existingItem ? existingItem.addedDate : new Date().toISOString(),
      coordinates: extractCoordinatesFromGoogleMapsLink(googleMapsLink)
    };

    if (existingItem) {
      onSave?.(newSightseeing); // Используем onSave для сохранения изменений
      toast.success('Sightseeing updated successfully!');
    } else {
      onAdd?.(newSightseeing); // Используем onAdd для добавления нового объекта
      toast.success('New sightseeing added successfully!');
    }

    // Очищаем форму
    setName('');
    setDescription('');
    setRating(0);
    setLocation('');
    setGoogleMapsLink('');
    setStatus('Open');
    setCoordinates({ lat: 0, lon: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="add-sightseeing-form">
      <h2>{existingItem ? 'Edit Sightseeing' : 'Add New Sightseeing'}</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min={0}
          max={5}
          step={0.1}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
      <div>
        <label>Google Maps Link:</label>
        <input
          type="url"
          value={googleMapsLink}
          onChange={(e) => setGoogleMapsLink(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <button type="submit">{existingItem ? 'Save Changes' : 'Add Sightseeing'}</button>
    </form>
  );
};

export default AddSightseeingForm;

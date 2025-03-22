import React, { useState } from 'react';
import { Sightseeing } from '../interface/Sightseeing';
import { NewSightseeing } from '../interface/NewSightseeing';
import AddSightseeingForm from './AddSightseeingForm/AddSightseeingForm';

interface SightseeingTableProps {
  data: Sightseeing[];
  setData: React.Dispatch<React.SetStateAction<Sightseeing[]>>;
  isAdminMode: boolean;
}

const SightseeingTable: React.FC<SightseeingTableProps> = ({ data, setData, isAdminMode }) => {
  const [editItem, setEditItem] = useState<NewSightseeing | null>(null);

  const handleEdit = (id: string) => {
    const item = data.find(item => item.id === id);
    if (item) {
      setEditItem(item);
    }
  };
  
  const handleDelete = (id: string) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  // Сохранение отредактированных данных
  const handleSave = (updatedItem: NewSightseeing) => {
    const newData = data.map(item =>
      item.id === updatedItem.id ? { ...item, ...updatedItem } : item
    );
    setData(newData);
    setEditItem(null); // Закрытие формы редактирования
  };

  return (
    <div className='wrapper'>
      <h2 className='title'>
        Sightseeing List (Total: {data.length}) {/* Это отображает количество записей */}
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Location</th>
            <th>Status</th>
            <th>Google Maps</th>
            {isAdminMode && 
              (
            <th>Actions</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.rating}</td>
              <td>{item.location}</td>
              <td>{item.status}</td>
              <td>
                <a href={`https://www.google.com/maps/@${item.coordinates.lat},${item.coordinates.lon},15z`} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </td>
              {isAdminMode && 
              (<td>
                <button className='edit' onClick={() => handleEdit(item.id)}>Edit</button>
                <button className='delete' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>)}
            </tr>
          ))}
        </tbody>
      </table>

      {editItem && (
        <AddSightseeingForm 
        existingItem={editItem} 
        onSave={handleSave}
      />
    )}
    </div>
  );
};

export default SightseeingTable;

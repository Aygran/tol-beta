'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface Equipment {
  name: string;
  type: string;
  quantity: string;
  weight: string;
  notes: string;
}

export default function Equipment() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  // Load saved equipment from cookies on component mount
  useEffect(() => {
    const savedEquipment = Cookies.get('equipment');
    if (savedEquipment) {
      setEquipment(JSON.parse(savedEquipment));
    }
  }, []);

  // Handle notification auto-dismissal
  useEffect(() => {
    if (notification) {
      setIsNotificationVisible(true);
      const timer = setTimeout(() => {
        setIsNotificationVisible(false);
        setTimeout(() => {
          setNotification(null);
        }, 500);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSave = () => {
    try {
      Cookies.set('equipment', JSON.stringify(equipment), { expires: 365 });
      setNotification({
        type: 'success',
        message: 'Equipment saved successfully!'
      });
    } catch (error) {
      console.error('Failed to save equipment:', error);
      setNotification({
        type: 'error',
        message: 'Failed to save equipment. Please try again.'
      });
    }
  };

  const handleReset = () => {
    setEquipment([]);
    Cookies.remove('equipment');
    setNotification({
      type: 'success',
      message: 'Equipment reset successfully!'
    });
  };

  const addEquipment = () => {
    setEquipment([...equipment, { name: '', type: '', quantity: '', weight: '', notes: '' }]);
  };

  const updateEquipment = (index: number, field: keyof Equipment, value: string) => {
    const newEquipment = [...equipment];
    newEquipment[index] = { ...newEquipment[index], [field]: value };
    setEquipment(newEquipment);
  };

  const removeEquipment = (index: number) => {
    setEquipment(equipment.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col min-h-screen p-4">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 p-4 rounded shadow-lg ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white transition-opacity duration-500 ${isNotificationVisible ? 'opacity-100' : 'opacity-0'}`}>
          {notification.message}
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <div className="text-4xl font-bold">
          Equipment
        </div>
        <div className="space-x-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mb-4">
        <button
          onClick={addEquipment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Equipment
        </button>
      </div>

      <div className="space-y-4">
        {equipment.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <input
                type="text"
                placeholder="Equipment Name"
                value={item.name}
                onChange={(e) => updateEquipment(index, 'name', e.target.value)}
                className="text-xl font-semibold p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => removeEquipment(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <input
                  type="text"
                  placeholder="Type"
                  value={item.type}
                  onChange={(e) => updateEquipment(index, 'type', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <input
                  type="text"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) => updateEquipment(index, 'quantity', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                <input
                  type="text"
                  placeholder="Weight"
                  value={item.weight}
                  onChange={(e) => updateEquipment(index, 'weight', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <input
                  type="text"
                  placeholder="Notes"
                  value={item.notes}
                  onChange={(e) => updateEquipment(index, 'notes', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
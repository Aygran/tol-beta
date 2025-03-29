'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { firestoreService } from '@/lib/firestore';
import type { Equipment } from '@/lib/firestore';
import { useRouter } from 'next/navigation';

interface Notification {
  type: 'success' | 'error';
  message: string;
}

export default function Equipment() {
  const { user } = useAuth();
  const router = useRouter();
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load equipment on component mount
  useEffect(() => {
    if (user) {
      loadEquipment();
    } else {
      router.push('/login');
    }
  }, [user, router]);

  const loadEquipment = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const characters = await firestoreService.getCharacterSheets(user.uid);
      // Get equipment from the most recently updated character
      const mostRecentCharacter = characters.reduce((latest, current) => {
        return current.updatedAt > latest.updatedAt ? current : latest;
      });
      setEquipment(mostRecentCharacter.equipment || []);
    } catch (error) {
      console.error('Failed to load equipment:', error);
      setNotification({
        type: 'error',
        message: 'Failed to load equipment. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

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

  const handleSave = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const characters = await firestoreService.getCharacterSheets(user.uid);
      if (characters.length === 0) {
        setNotification({
          type: 'error',
          message: 'Please create a character first before adding equipment.'
        });
        return;
      }

      // Update the most recent character with the new equipment
      const mostRecentCharacter = characters.reduce((latest, current) => {
        return current.updatedAt > latest.updatedAt ? current : latest;
      });

      await firestoreService.updateCharacterSheet(mostRecentCharacter.id, {
        equipment,
      });

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
    } finally {
      setLoading(false);
    }
  };

  const handleAddEquipment = () => {
    const newEquipment: Equipment = {
      name: '',
      type: '',
      quantity: '',
      weight: '',
      value: '',
      av: '',
      notes: '',
    };
    setEquipment([...equipment, newEquipment]);
  };

  const handleRemoveEquipment = (index: number) => {
    setEquipment(equipment.filter((_, i) => i !== index));
  };

  const handleEquipmentChange = (index: number, field: keyof Equipment, value: string) => {
    const updatedEquipment = [...equipment];
    updatedEquipment[index] = {
      ...updatedEquipment[index],
      [field]: value,
    };
    setEquipment(updatedEquipment);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Equipment</h1>
          <div className="flex space-x-4">
            <button
              onClick={handleAddEquipment}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Equipment
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : 'Save Equipment'}
            </button>
          </div>
        </div>

        {/* Notification */}
        {notification && (
          <div className={`fixed top-4 right-4 p-4 rounded shadow-lg ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white transition-opacity duration-500 ${isNotificationVisible ? 'opacity-100' : 'opacity-0'}`}>
            {notification.message}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleEquipmentChange(index, 'name', e.target.value)}
                  placeholder="Equipment Name"
                  className="text-xl font-semibold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={() => handleRemoveEquipment(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-white">Type</label>
                  <input
                    type="text"
                    value={item.type}
                    onChange={(e) => handleEquipmentChange(index, 'type', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Quantity</label>
                  <input
                    type="text"
                    value={item.quantity}
                    onChange={(e) => handleEquipmentChange(index, 'quantity', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Weight</label>
                  <input
                    type="text"
                    value={item.weight}
                    onChange={(e) => handleEquipmentChange(index, 'weight', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Value</label>
                  <input
                    type="text"
                    value={item.value}
                    onChange={(e) => handleEquipmentChange(index, 'value', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">AV</label>
                  <input
                    type="text"
                    value={item.av}
                    onChange={(e) => handleEquipmentChange(index, 'av', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white">Notes</label>
                <textarea
                  value={item.notes}
                  onChange={(e) => handleEquipmentChange(index, 'notes', e.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
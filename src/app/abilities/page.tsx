'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { firestoreService } from '@/lib/firestore';
import type { Ability } from '@/lib/firestore';
import { useRouter } from 'next/navigation';

interface Notification {
  type: 'success' | 'error';
  message: string;
}

export default function Abilities() {
  const { user } = useAuth();
  const router = useRouter();
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load abilities on component mount
  useEffect(() => {
    if (user) {
      loadAbilities();
    } else {
      router.push('/login');
    }
  }, [user, router]);

  const loadAbilities = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const characters = await firestoreService.getUserCharacterSheets(user.uid);
      // Get abilities from the most recently updated character
      const mostRecentCharacter = characters.reduce((latest, current) => {
        return current.updatedAt > latest.updatedAt ? current : latest;
      });
      setAbilities(mostRecentCharacter.abilities || []);
    } catch (error) {
      console.error('Failed to load abilities:', error);
      setNotification({
        type: 'error',
        message: 'Failed to load abilities. Please try again.'
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
      const characters = await firestoreService.getUserCharacterSheets(user.uid);
      if (characters.length === 0) {
        setNotification({
          type: 'error',
          message: 'Please create a character first before adding abilities.'
        });
        return;
      }

      // Update the most recent character with the new abilities
      const mostRecentCharacter = characters.reduce((latest, current) => {
        return current.updatedAt > latest.updatedAt ? current : latest;
      });

      await firestoreService.updateCharacterSheet(mostRecentCharacter.id, {
        abilities,
      });

      setNotification({
        type: 'success',
        message: 'Abilities saved successfully!'
      });
    } catch (error) {
      console.error('Failed to save abilities:', error);
      setNotification({
        type: 'error',
        message: 'Failed to save abilities. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddAbility = () => {
    const newAbility: Ability = {
      name: '',
      tier: '',
      ap: '',
      mp: '',
      range: '',
      duration: '',
      damage: '',
      spellPassRating: '',
      focus: false,
      description: '',
      upgrades: '',
    };
    setAbilities([...abilities, newAbility]);
  };

  const handleRemoveAbility = (index: number) => {
    setAbilities(abilities.filter((_, i) => i !== index));
  };

  const handleAbilityChange = (index: number, field: keyof Ability, value: string | boolean) => {
    const updatedAbilities = [...abilities];
    updatedAbilities[index] = {
      ...updatedAbilities[index],
      [field]: value,
    };
    setAbilities(updatedAbilities);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Abilities</h1>
          <div className="flex space-x-4">
            <button
              onClick={handleAddAbility}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Ability
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : 'Save Abilities'}
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
          {abilities.map((ability, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <input
                  type="text"
                  value={ability.name}
                  onChange={(e) => handleAbilityChange(index, 'name', e.target.value)}
                  placeholder="Ability Name"
                  className="text-xl font-semibold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={() => handleRemoveAbility(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-white">Tier</label>
                  <input
                    type="text"
                    value={ability.tier}
                    onChange={(e) => handleAbilityChange(index, 'tier', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">AP</label>
                  <input
                    type="text"
                    value={ability.ap}
                    onChange={(e) => handleAbilityChange(index, 'ap', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">MP</label>
                  <input
                    type="text"
                    value={ability.mp}
                    onChange={(e) => handleAbilityChange(index, 'mp', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Range</label>
                  <input
                    type="text"
                    value={ability.range}
                    onChange={(e) => handleAbilityChange(index, 'range', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Duration</label>
                  <input
                    type="text"
                    value={ability.duration}
                    onChange={(e) => handleAbilityChange(index, 'duration', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Damage</label>
                  <input
                    type="text"
                    value={ability.damage}
                    onChange={(e) => handleAbilityChange(index, 'damage', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Spell Pass Rating</label>
                  <input
                    type="text"
                    value={ability.spellPassRating}
                    onChange={(e) => handleAbilityChange(index, 'spellPassRating', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={ability.focus}
                      onChange={(e) => handleAbilityChange(index, 'focus', e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-white">Focus</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Description</label>
                <textarea
                  value={ability.description}
                  onChange={(e) => handleAbilityChange(index, 'description', e.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">Upgrades</label>
                <textarea
                  value={ability.upgrades}
                  onChange={(e) => handleAbilityChange(index, 'upgrades', e.target.value)}
                  rows={2}
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
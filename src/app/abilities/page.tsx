'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface Ability {
  name: string;
  tier: string;
  ap: string;
  mp: string;
  range: string;
  duration: string;
  damage: string;
  spellPassRating: string;
  focus: boolean;
  description: string;
  upgrades: string;
}

export default function Abilities() {
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  // Load saved abilities from cookies on component mount
  useEffect(() => {
    const savedAbilities = Cookies.get('abilities');
    if (savedAbilities) {
      setAbilities(JSON.parse(savedAbilities));
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
      Cookies.set('abilities', JSON.stringify(abilities), { expires: 365 });
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
    }
  };

  const handleReset = () => {
    setAbilities([]);
    Cookies.remove('abilities');
    setNotification({
      type: 'success',
      message: 'Abilities reset successfully!'
    });
  };

  const addAbility = () => {
    setAbilities([...abilities, {
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
      upgrades: ''
    }]);
  };

  const updateAbility = (index: number, field: keyof Ability, value: string | boolean) => {
    const newAbilities = [...abilities];
    newAbilities[index] = { ...newAbilities[index], [field]: value };
    setAbilities(newAbilities);
  };

  const removeAbility = (index: number) => {
    setAbilities(abilities.filter((_, i) => i !== index));
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
          Abilities
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
          onClick={addAbility}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Ability
        </button>
      </div>

      <div className="space-y-4">
        {abilities.map((ability, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <input
                type="text"
                placeholder="Ability Name"
                value={ability.name}
                onChange={(e) => updateAbility(index, 'name', e.target.value)}
                className="text-xl font-semibold p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => removeAbility(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tier</label>
                <input
                  type="text"
                  placeholder="Tier"
                  value={ability.tier}
                  onChange={(e) => updateAbility(index, 'tier', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">AP</label>
                <input
                  type="text"
                  placeholder="AP"
                  value={ability.ap}
                  onChange={(e) => updateAbility(index, 'ap', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">MP</label>
                <input
                  type="text"
                  placeholder="MP"
                  value={ability.mp}
                  onChange={(e) => updateAbility(index, 'mp', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Range</label>
                <input
                  type="text"
                  placeholder="Range"
                  value={ability.range}
                  onChange={(e) => updateAbility(index, 'range', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <input
                  type="text"
                  placeholder="Duration"
                  value={ability.duration}
                  onChange={(e) => updateAbility(index, 'duration', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Damage</label>
                <input
                  type="text"
                  placeholder="Damage"
                  value={ability.damage}
                  onChange={(e) => updateAbility(index, 'damage', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Spell Pass Rating</label>
                <input
                  type="text"
                  placeholder="Spell Pass Rating"
                  value={ability.spellPassRating}
                  onChange={(e) => updateAbility(index, 'spellPassRating', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={ability.focus}
                    onChange={(e) => updateAbility(index, 'focus', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Focus</span>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                placeholder="Description"
                value={ability.description}
                onChange={(e) => updateAbility(index, 'description', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Upgrades</label>
              <textarea
                placeholder="Upgrades"
                value={ability.upgrades}
                onChange={(e) => updateAbility(index, 'upgrades', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
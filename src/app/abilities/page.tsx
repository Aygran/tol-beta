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
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [authLoading, user, router]);

  useEffect(() => {
    const loadAbilities = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const characters = await firestoreService.getCharacterSheets(user.uid);
        // Get abilities from the most recently updated character
        const mostRecentCharacter = characters.reduce((latest, current) => {
          return current.updatedAt > latest.updatedAt ? current : latest;
        });
        setAbilities(mostRecentCharacter?.abilities || []);
      } catch (err) {
        setError('Failed to load abilities');
        console.error('Error loading abilities:', err);
      } finally {
        setLoading(false);
      }
    };

    loadAbilities();
  }, [user]);

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
      const mostRecentCharacter = characters.reduce((latest, current) => {
        return current.updatedAt > latest.updatedAt ? current : latest;
      });

      if (mostRecentCharacter) {
        await firestoreService.updateCharacterSheet(mostRecentCharacter.id!, {
          abilities,
        });
      }

      setNotification({
        type: 'success',
        message: 'Abilities saved successfully!'
      });
    } catch (err) {
      setError('Failed to save abilities');
      console.error('Error saving abilities:', err);
      setNotification({
        type: 'error',
        message: 'Failed to save abilities. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const addAbility = () => {
    setAbilities([
      ...abilities,
      {
        id: Date.now().toString(),
        name: '',
        tier: '',
        ap: '',
        mp: '',
        range: '',
        duration: '',
        damage: '',
        spellPassRating: '',
        description: '',
        upgrades: '',
        isFocus: false,
      },
    ]);
  };

  const updateAbility = (id: string, field: keyof Ability, value: string | boolean) => {
    setAbilities(
      abilities.map((ability) =>
        ability.id === id ? { ...ability, [field]: value } : ability
      )
    );
  };

  const removeAbility = (id: string) => {
    setAbilities(abilities.filter((ability) => ability.id !== id));
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Abilities</h1>
          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {notification && (
          <div className={`fixed top-4 right-4 p-4 rounded shadow-lg ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white transition-opacity duration-500 ${isNotificationVisible ? 'opacity-100' : 'opacity-0'}`}>
            {notification.message}
          </div>
        )}

        <div className="space-y-6">
          {abilities.map((ability) => (
            <div key={ability.id} className="bg-gray-800 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label htmlFor={`name-${ability.id}`} className="block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id={`name-${ability.id}`}
                    value={ability.name}
                    onChange={(e) => updateAbility(ability.id, 'name', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor={`tier-${ability.id}`} className="block text-sm font-medium text-white">
                    Tier
                  </label>
                  <input
                    type="text"
                    id={`tier-${ability.id}`}
                    value={ability.tier}
                    onChange={(e) => updateAbility(ability.id, 'tier', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor={`ap-${ability.id}`} className="block text-sm font-medium text-white">
                    AP
                  </label>
                  <input
                    type="text"
                    id={`ap-${ability.id}`}
                    value={ability.ap}
                    onChange={(e) => updateAbility(ability.id, 'ap', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor={`mp-${ability.id}`} className="block text-sm font-medium text-white">
                    MP
                  </label>
                  <input
                    type="text"
                    id={`mp-${ability.id}`}
                    value={ability.mp}
                    onChange={(e) => updateAbility(ability.id, 'mp', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor={`range-${ability.id}`} className="block text-sm font-medium text-white">
                    Range
                  </label>
                  <input
                    type="text"
                    id={`range-${ability.id}`}
                    value={ability.range}
                    onChange={(e) => updateAbility(ability.id, 'range', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor={`duration-${ability.id}`} className="block text-sm font-medium text-white">
                    Duration
                  </label>
                  <input
                    type="text"
                    id={`duration-${ability.id}`}
                    value={ability.duration}
                    onChange={(e) => updateAbility(ability.id, 'duration', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor={`damage-${ability.id}`} className="block text-sm font-medium text-white">
                    Damage
                  </label>
                  <input
                    type="text"
                    id={`damage-${ability.id}`}
                    value={ability.damage}
                    onChange={(e) => updateAbility(ability.id, 'damage', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor={`spellPassRating-${ability.id}`} className="block text-sm font-medium text-white">
                    Spell Pass Rating
                  </label>
                  <input
                    type="text"
                    id={`spellPassRating-${ability.id}`}
                    value={ability.spellPassRating}
                    onChange={(e) => updateAbility(ability.id, 'spellPassRating', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`isFocus-${ability.id}`}
                    checked={ability.isFocus}
                    onChange={(e) => updateAbility(ability.id, 'isFocus', e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded bg-gray-900"
                  />
                  <label htmlFor={`isFocus-${ability.id}`} className="ml-2 block text-sm text-white">
                    Focus
                  </label>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor={`description-${ability.id}`} className="block text-sm font-medium text-white">
                  Description
                </label>
                <textarea
                  id={`description-${ability.id}`}
                  value={ability.description}
                  onChange={(e) => updateAbility(ability.id, 'description', e.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mt-4">
                <label htmlFor={`upgrades-${ability.id}`} className="block text-sm font-medium text-white">
                  Upgrades
                </label>
                <textarea
                  id={`upgrades-${ability.id}`}
                  value={ability.upgrades}
                  onChange={(e) => updateAbility(ability.id, 'upgrades', e.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => removeAbility(ability.id)}
                  className="text-red-500 hover:text-red-400"
                >
                  Remove Ability
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addAbility}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Add Ability
          </button>
        </div>
      </div>
    </div>
  );
} 
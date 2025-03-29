'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { firestoreService, type CharacterSheet } from '@/lib/firestore';
import Link from 'next/link';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useRouter } from 'next/navigation';

export default function MyCharacters() {
  const { user } = useAuth();
  const [characters, setCharacters] = useState<CharacterSheet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    const loadCharacters = async () => {
      try {
        const userCharacters = await firestoreService.getUserCharacterSheets(user.uid);
        setCharacters(userCharacters);
      } catch (error) {
        setError('Failed to load characters');
        console.error('Error loading characters:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [user]);

  const handleDeleteCharacter = async (id: string) => {
    if (!confirm('Are you sure you want to delete this character?')) {
      return;
    }

    try {
      await firestoreService.deleteCharacterSheet(id);
      setCharacters(characters.filter(char => char.id !== id));
    } catch (error) {
      setError('Failed to delete character');
      console.error('Error deleting character:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading characters...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              My Characters
            </h1>
            <p className="mt-3 text-xl text-gray-300">
              Manage your character sheets
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {characters.map((character) => (
              <div
                key={character.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {character.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Last updated: {new Date(character.updatedAt).toLocaleDateString()}
                  </p>
                  <div className="flex justify-between space-x-4">
                    <button
                      onClick={() => router.push(`/character-sheet?id=${character.id}`)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCharacter(character.id)}
                      className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {characters.length === 0 && (
            <div className="text-center mt-12">
              <p className="text-gray-300 text-lg">
                No characters found. Create your first character in the character sheet!
              </p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
} 
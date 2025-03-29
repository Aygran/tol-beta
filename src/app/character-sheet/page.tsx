'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { firestoreService } from '@/lib/firestore';
import type { CharacterSheet, Ability, Equipment } from '@/lib/firestore';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface TableCell {
  id: string;
  placeholder: string;
  isEditable: boolean;
}

interface TableColumn {
  header: string;
  cells: TableCell[];
  width?: string;
}

interface Notification {
  type: 'success' | 'error';
  message: string;
}

const LAST_SELECTED_CHARACTER_KEY = 'lastSelectedCharacter';

export default function CharacterSheet() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [characterName, setCharacterName] = useState('');
  const [characters, setCharacters] = useState<CharacterSheet[]>([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Load characters on component mount
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    } else if (user) {
      loadCharacters();
    }
  }, [user, authLoading, router]);

  // Load saved values when selected character changes
  useEffect(() => {
    if (selectedCharacterId) {
      const character = characters.find(c => c.id === selectedCharacterId);
      if (character) {
        setValues(character.values);
        setAbilities(character.abilities);
        setEquipment(character.equipment);
        setCharacterName(character.name);
      }
    } else {
      // Reset form when no character is selected
      setValues({});
      setAbilities([]);
      setEquipment([]);
      setCharacterName('');
    }
  }, [selectedCharacterId, characters]);

  const loadCharacters = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const userCharacters = await firestoreService.getCharacterSheets(user.uid);
      setCharacters(userCharacters);

      // Try to load the last selected character
      const lastSelectedId = localStorage.getItem(LAST_SELECTED_CHARACTER_KEY);
      if (lastSelectedId && userCharacters.some(c => c.id === lastSelectedId)) {
        setSelectedCharacterId(lastSelectedId);
      } else if (userCharacters.length > 0) {
        // If no last selected character or it doesn't exist, select the most recent one
        const mostRecent = userCharacters.reduce((latest, current) => 
          current.updatedAt > latest.updatedAt ? current : latest
        );
        setSelectedCharacterId(mostRecent.id);
      }
    } catch (error) {
      console.error('Failed to load characters:', error);
      setNotification({
        type: 'error',
        message: 'Failed to load characters. Please try again.'
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

  const handleCharacterSelect = (characterId: string) => {
    setSelectedCharacterId(characterId);
    localStorage.setItem(LAST_SELECTED_CHARACTER_KEY, characterId);
  };

  const handleSave = async () => {
    if (!user) return;

    if (!characterName.trim()) {
      setNotification({
        type: 'error',
        message: 'Please enter a character name'
      });
      return;
    }

    try {
      setLoading(true);
      const characterData = {
        name: characterName,
        values,
        abilities,
        equipment,
      };

      if (selectedCharacterId) {
        await firestoreService.updateCharacterSheet(selectedCharacterId, characterData);
      } else {
        await firestoreService.createCharacterSheet(user.uid, characterData);
      }

      setNotification({
        type: 'success',
        message: 'Character saved successfully!'
      });
      await loadCharacters();
    } catch (error) {
      console.error('Failed to save character:', error);
      setNotification({
        type: 'error',
        message: 'Failed to save character. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setShowResetConfirm(false);
    setValues({});
    setAbilities([]);
    setEquipment([]);
    setCharacterName('');
    setSelectedCharacterId('');
  };

  const handleNewCharacter = () => {
    setValues({});
    setAbilities([]);
    setEquipment([]);
    setCharacterName('');
    setSelectedCharacterId('');
  };

  const getAttributeModifier = (attribute: string): string => {
    // Handle both full and shorthand attribute names
    const attributeMap: { [key: string]: number } = {
      'ARC': 0,
      'DIS': 1,
      'INS': 2,
      'MAR': 3,
      'Arcana (ARC)': 0,
      'Discipline (DIS)': 1,
      'Insight (INS)': 2,
      'Martial (MAR)': 3
    };

    const rowIndex = attributeMap[attribute];
    if (rowIndex === undefined) return '';
    
    const valueId = `value-row${rowIndex + 1}`;
    const value = values[valueId] || '';
    return calculateModifier(value);
  };

  const calculateModifier = (value: string): string => {
    const numValue = parseInt(value);
    if (isNaN(numValue)) return '';
    const modifier = Math.floor((numValue - 10) / 2);
    return modifier.toString();
  };

  const handleValueChange = (id: string, value: string) => {
    setValues(prev => ({ ...prev, [id]: value }));
  };

  const getDisplayValue = (rowIndex: number, label: string): string => {
    const valueId = `value-row${rowIndex + 1}`;
    const value = values[valueId] || '';
    
    // Only calculate modifier for specific attributes
    if (['Arcana (ARC)', 'Discipline (DIS)', 'Insight (INS)', 'Martial (MAR)'].includes(label)) {
      return calculateModifier(value);
    }
    
    return value;
  };

  const calculateSpellPassRating = (attribute: string): string => {
    const modifier = parseInt(getAttributeModifier(attribute));
    if (isNaN(modifier)) return '';
    return (modifier + 10).toString();
  };

  const getSkillModifier = (value: string): number => {
    switch (value.toUpperCase()) {
      case '-': return 0;
      case 'K': return 2;
      case 'J': return 4;
      case 'V': return 6;
      case 'M': return 8;
      default: return 0;
    }
  };

  const calculateSkillTotal = (attribute: string, value: string): string => {
    const attributeModifier = parseInt(getAttributeModifier(attribute));
    const skillModifier = getSkillModifier(value);
    if (isNaN(attributeModifier)) return '';
    return (attributeModifier + skillModifier).toString();
  };

  // Define the table structure for attributes
  const attributeTableData: TableColumn[] = [
    {
      header: "Attribute",
      cells: Array(4).fill(null).map((_, index) => ({
        id: `label-row${index + 1}`,
        placeholder: index === 0 ? "Arcana (ARC)" :
                    index === 1 ? "Discipline (DIS)" :
                    index === 2 ? "Insight (INS)" :
                    "Martial (MAR)",
        isEditable: false
      }))
    },
    {
      header: "Score",
      width: "5rem",
      cells: Array(4).fill(null).map((_, index) => ({
        id: `value-row${index + 1}`,
        placeholder: "10",
        isEditable: true
      }))
    },
    {
      header: "Modifier",
      cells: Array(4).fill(null).map((_, index) => ({
        id: `display-row${index + 1}`,
        placeholder: "Value will appear here",
        isEditable: false
      }))
    }
  ];

  const skillRows = [
    { label: "Athletics", attribute: "MAR" },
    { label: "Crafting", attribute: "ANY" },
    { label: "Diplomacy", attribute: "MAR" },
    { label: "Deception", attribute: "DIS" },
    { label: "Guile", attribute: "DIS" },
    { label: "Healing", attribute: "INS" },
    { label: "Hunting", attribute: "DIS" },
    { label: "Intuition", attribute: "INS" },
    { label: "Lore", attribute: "ARC" },
    { label: "Perception", attribute: "INS" },
    { label: "Machinery", attribute: "ARC" },
    { label: "Song & Story", attribute: "DIS" },
    { label: "Stealth", attribute: "DIS" }
  ];

  // Show loading state while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Show loading state while fetching characters
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading characters...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              placeholder="Enter character name"
              className="bg-black border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={selectedCharacterId}
              onChange={(e) => handleCharacterSelect(e.target.value)}
              className="bg-black border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">New Character</option>
              {characters.map((character) => (
                <option key={character.id} value={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleNewCharacter}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              New Character
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : 'Save Character'}
            </button>
            <button
              onClick={() => setShowResetConfirm(true)}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Reset
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

        {/* Reset Confirmation Dialog */}
        {showResetConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
              <h3 className="text-xl font-bold mb-4">Confirm Reset</h3>
              <p className="mb-6">Are you sure you want to reset all values? This action cannot be undone.</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Name Section */}
        <div className="mb-8">
          <div className="text-xl font-semibold mb-2">Name</div>
          <input
            type="text"
            id="name-input"
            placeholder="Enter character name"
            value={values['name-input'] || ''}
            onChange={(e) => handleValueChange('name-input', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            id="race-input"
            placeholder="Enter character race"
            value={values['race-input'] || ''}
            onChange={(e) => handleValueChange('race-input', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            id="occupation-input"
            placeholder="Enter character occupation"
            value={values['occupation-input'] || ''}
            onChange={(e) => handleValueChange('occupation-input', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            id="level-input"
            placeholder="Enter character level"
            value={values['level-input'] || ''}
            onChange={(e) => handleValueChange('level-input', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Attributes Section */}
            <div className="mb-8">
              <div className="text-xl font-semibold mb-4">Attributes</div>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    {attributeTableData.map((column, colIndex) => (
                      <th 
                        key={`header-${colIndex}`} 
                        className="border border-gray-300 p-2"
                        style={{ width: column.width }}
                      >
                        {column.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...Array(4)].map((_, rowIndex) => (
                    <tr key={`row-${rowIndex}`}>
                      {attributeTableData.map((column, colIndex) => (
                        <td 
                          key={column.cells[rowIndex].id} 
                          className="border border-gray-300 p-2"
                          style={{ width: column.width }}
                        >
                          {column.cells[rowIndex].isEditable ? (
                            <input
                              type="text"
                              id={column.cells[rowIndex].id}
                              placeholder={column.cells[rowIndex].placeholder}
                              value={values[column.cells[rowIndex].id] || ''}
                              onChange={(e) => handleValueChange(column.cells[rowIndex].id, e.target.value)}
                              className="w-full p-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                            />
                          ) : (
                            <div className="w-full p-1 font-medium">
                              {colIndex === 2 ? getDisplayValue(rowIndex, attributeTableData[0].cells[rowIndex].placeholder) : column.cells[rowIndex].placeholder}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Spell Pass Rating Section */}
            <div className="mb-8">
              <div className="text-xl font-semibold mb-4">Spell Pass Rating</div>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">Attribute</th>
                    <th className="border border-gray-300 p-2 text-left">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Spell Pass Rating (ARC)", attribute: "Arcana (ARC)" },
                    { label: "Spell Pass Rating (DIS)", attribute: "Discipline (DIS)" },
                    { label: "Spell Pass Rating (INS)", attribute: "Insight (INS)" },
                    { label: "Spell Pass Rating (MAR)", attribute: "Martial (MAR)" }
                  ].map((row, index) => (
                    <tr key={`spr-row-${index}`}>
                      <td className="border border-gray-300 p-2 font-medium">
                        {row.label}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {calculateSpellPassRating(row.attribute)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Hit Points Section */}
            <div className="mb-8">
              <div className="text-xl font-semibold mb-4">Hit Points</div>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">Label</th>
                    <th className="border border-gray-300 p-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      Max Hit Points
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        id="max-hp-input"
                        placeholder="0"
                        value={values['max-hp-input'] || ''}
                        onChange={(e) => handleValueChange('max-hp-input', e.target.value)}
                        className="w-full p-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      Current Hit Points
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        id="current-hp-input"
                        placeholder="0"
                        value={values['current-hp-input'] || ''}
                        onChange={(e) => handleValueChange('current-hp-input', e.target.value)}
                        className="w-full p-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mana Points Section */}
            <div className="mb-8">
              <div className="text-xl font-semibold mb-4">Mana Points</div>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">Label</th>
                    <th className="border border-gray-300 p-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      Max Mana Points
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        id="max-mp-input"
                        placeholder="0"
                        value={values['max-mp-input'] || ''}
                        onChange={(e) => handleValueChange('max-mp-input', e.target.value)}
                        className="w-full p-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      Current Mana Points
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        id="current-mp-input"
                        placeholder="0"
                        value={values['current-mp-input'] || ''}
                        onChange={(e) => handleValueChange('current-mp-input', e.target.value)}
                        className="w-full p-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Points Section */}
            <div className="mb-8">
              <div className="text-xl font-semibold mb-4">Action Points</div>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">Label</th>
                    <th className="border border-gray-300 p-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      Max Action Points
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        id="max-ap-input"
                        placeholder="0"
                        value={values['max-ap-input'] || ''}
                        onChange={(e) => handleValueChange('max-ap-input', e.target.value)}
                        className="w-full p-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      Current Action Points
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        id="current-ap-input"
                        placeholder="0"
                        value={values['current-ap-input'] || ''}
                        onChange={(e) => handleValueChange('current-ap-input', e.target.value)}
                        className="w-full p-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Abilities Section */}
            <div className="mb-8">
              <div className="text-xl font-semibold text-white mb-4">Abilities</div>
              <div className="grid grid-cols-1 gap-4">
                {abilities.map((ability, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-white">{ability.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-blue-900 text-blue-200 rounded text-sm">
                          Tier {ability.tier}
                        </span>
                        {ability.focus && (
                          <span className="px-2 py-1 bg-purple-900 text-purple-200 rounded text-sm">
                            Focus
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300 mb-2">
                      <div>
                        <span className="font-medium">AP:</span> {ability.ap}
                      </div>
                      <div>
                        <span className="font-medium">MP:</span> {ability.mp}
                      </div>
                      <div>
                        <span className="font-medium">Range:</span> {ability.range}
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> {ability.duration}
                      </div>
                      <div>
                        <span className="font-medium">Damage:</span> {ability.damage}
                      </div>
                      <div>
                        <span className="font-medium">SPR:</span> {ability.spellPassRating}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{ability.description}</p>
                    {ability.upgrades && (
                      <div className="mt-2">
                        <span className="font-medium text-sm text-gray-300">Upgrades:</span>
                        <p className="text-gray-300 text-sm">{ability.upgrades}</p>
                      </div>
                    )}
                  </div>
                ))}
                {abilities.length === 0 && (
                  <div className="text-center text-gray-400 py-8">
                    No abilities added yet. Visit the Abilities page to add some!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Skills Section */}
          <div className="flex-1">
            <div className="text-xl font-semibold mb-4">Skills</div>
            <div className="text-sm text-gray-600 mb-2">
              Skill Levels: - (0), K (+2), J (+4), V (+6), M (+8)
            </div>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Skill</th>
                  <th className="border border-gray-300 p-2 text-left">Attribute</th>
                  <th className="border border-gray-300 p-2 text-left" style={{ width: "5rem" }}>Level</th>
                  <th className="border border-gray-300 p-2 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {skillRows.map((row, index) => (
                  <tr key={`skill-row-${index}`}>
                    <td className="border border-gray-300 p-2 font-medium">
                      {row.label}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {row.label === "Crafting" ? (
                        <input
                          type="text"
                          id={`skill-attribute-${index}`}
                          placeholder="ANY"
                          value={values[`skill-attribute-${index}`] || ''}
                          onChange={(e) => handleValueChange(`skill-attribute-${index}`, e.target.value)}
                          className="w-full p-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                        />
                      ) : (
                        row.attribute
                      )}
                    </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        id={`skill-value-${index}`}
                        placeholder="-"
                        value={values[`skill-value-${index}`] || ''}
                        onChange={(e) => {
                          const value = e.target.value.toUpperCase();
                          if (value === '' || ['-', 'K', 'J', 'V', 'M'].includes(value)) {
                            handleValueChange(`skill-value-${index}`, value);
                          }
                        }}
                        className="w-full p-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-center"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                      {row.label === "Crafting" ? (
                        <input
                          type="text"
                          id={`skill-total-${index}`}
                          placeholder="0"
                          value={values[`skill-total-${index}`] || ''}
                          onChange={(e) => handleValueChange(`skill-total-${index}`, e.target.value)}
                          className="w-full p-1 border border-gray-200 rounded focus:outline-none focus:border-blue-500 text-center"
                        />
                      ) : (
                        row.attribute === "ANY" ? "" : calculateSkillTotal(row.attribute, values[`skill-value-${index}`] || '')
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Equipment Section */}
            <div className="mt-8">
              <div className="text-xl font-semibold text-white mb-4">Equipment</div>
              <div className="grid grid-cols-1 gap-4">
                {equipment.map((item, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <span className="px-2 py-1 bg-blue-900 text-blue-200 rounded text-sm">
                        {item.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                      <div>
                        <span className="font-medium">Quantity:</span> {item.quantity}
                      </div>
                      <div>
                        <span className="font-medium">Weight:</span> {item.weight}
                      </div>
                      <div>
                        <span className="font-medium">Value:</span> {item.value}
                      </div>
                      <div>
                        <span className="font-medium">AV:</span> {item.av}
                      </div>
                      {item.notes && (
                        <div className="col-span-2 text-gray-300">
                          <span className="font-medium">Notes:</span> {item.notes}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {equipment.length === 0 && (
                  <div className="text-center text-gray-400 py-8">
                    No equipment items added yet. Visit the Equipment page to add some!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useState } from 'react';

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

export default function CharacterSheet() {
  const [values, setValues] = useState<{ [key: string]: string }>({});

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

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="text-4xl font-bold text-center py-4">
        Character Sheet
      </div>
      
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

      {/* Additional Section Placeholder */}
      <div>
        <div className="text-xl font-semibold mb-4">Additional Information</div>
        {/* Add your additional table or content here */}
      </div>
    </div>
  );
} 
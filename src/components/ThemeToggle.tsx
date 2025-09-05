import React from 'react';

interface ThemeToggleProps {
  theme: 'xp' | 'vista';
  onThemeChange: (theme: 'xp' | 'vista') => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onThemeChange }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`flex rounded-lg overflow-hidden border ${
        theme === 'xp' 
          ? 'border-gray-400 bg-gray-200' 
          : 'border-white/20 bg-black/20 backdrop-blur-sm'
      }`}>
        <button
          onClick={() => onThemeChange('xp')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            theme === 'xp'
              ? 'bg-blue-500 text-white'
              : theme === 'vista'
              ? 'text-white hover:bg-white/10'
              : 'text-gray-700 hover:bg-gray-300'
          }`}
        >
          Windows XP
        </button>
        <button
          onClick={() => onThemeChange('vista')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            theme === 'vista'
              ? 'bg-blue-500 text-white'
              : theme === 'xp'
              ? 'text-gray-700 hover:bg-gray-300'
              : 'text-white hover:bg-white/10'
          }`}
        >
          Windows Vista
        </button>
      </div>
    </div>
  );
};
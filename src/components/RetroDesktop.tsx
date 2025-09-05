import React, { useState } from 'react';
import { VRLabLauncher } from './VRLabLauncher';
import { RetroTV } from './RetroTV';
import '../styles/retro-theme.css';

interface DesktopIconProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onClick }) => (
  <div className="desktop-icon" onClick={onClick}>
    <div className="text-4xl mb-1">{icon}</div>
    <div className="text-xs">{label}</div>
  </div>
);

interface RetroDesktopProps {
  theme: 'xp' | 'vista';
}

export const RetroDesktop: React.FC<RetroDesktopProps> = ({ theme }) => {
  const [showLauncher, setShowLauncher] = useState(false);
  const [showTV, setShowTV] = useState(false);
  const [time, setTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const desktopIcons = [
    { icon: '🥽', label: 'VR Lab', onClick: () => setShowLauncher(true) },
    { icon: '📺', label: 'YCCC TV', onClick: () => setShowTV(true) },
    { icon: '💻', label: 'My Computer', onClick: () => {} },
    { icon: '🗂️', label: 'My Documents', onClick: () => {} },
    { icon: '🌐', label: 'Internet Explorer', onClick: () => {} },
    { icon: '🎵', label: 'Windows Media Player', onClick: () => {} },
    { icon: '📧', label: 'Outlook Express', onClick: () => {} },
    { icon: '🗑️', label: 'Recycle Bin', onClick: () => {} },
  ];

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Desktop Background */}
      <div 
        className={`absolute inset-0 ${
          theme === 'xp' 
            ? 'bg-gradient-to-br from-blue-400 via-green-400 to-blue-500'
            : 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900'
        }`}
      >
        {/* Windows XP Bliss-style hills */}
        {theme === 'xp' && (
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-500 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-green-600 to-transparent opacity-40" />
          </div>
        )}
        
        {/* Vista Aurora Effect */}
        {theme === 'vista' && (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-400/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-500/20 to-transparent" />
          </div>
        )}
      </div>

      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 grid grid-cols-1 gap-2">
        {desktopIcons.map((icon, index) => (
          <DesktopIcon key={index} {...icon} />
        ))}
      </div>

      {/* Taskbar */}
      <div className={`absolute bottom-0 left-0 right-0 flex items-center px-2 ${
        theme === 'xp' ? 'xp-taskbar' : 'vista-taskbar'
      }`}>
        {/* Start Button */}
        <button 
          className={`mr-2 ${
            theme === 'xp' ? 'xp-start-button' : 'vista-start-button flex items-center justify-center'
          }`}
          onClick={() => setShowLauncher(!showLauncher)}
        >
          {theme === 'xp' ? 'start' : '⊞'}
        </button>

        {/* Quick Launch */}
        <div className="flex space-x-1 mr-4">
          <button 
            className={`p-1 ${theme === 'xp' ? 'xp-button' : 'vista-button'}`}
            onClick={() => setShowTV(true)}
            title="YCCC TV"
          >
            📺
          </button>
          <button className={`p-1 ${
            theme === 'xp' ? 'xp-button' : 'vista-button'
          }`}>🌐</button>
          <button className={`p-1 ${
            theme === 'xp' ? 'xp-button' : 'vista-button'
          }`}>📧</button>
          <button className={`p-1 ${
            theme === 'xp' ? 'xp-button' : 'vista-button'
          }`}>🎵</button>
        </div>

        {/* Taskbar Items */}
        <div className="flex-1 flex space-x-1">
          <button className={`px-3 py-1 ${
            theme === 'xp' ? 'xp-button' : 'vista-button'
          }`}>
            🥽 VR Lab Gateway
          </button>
          {showTV && (
            <button className={`px-3 py-1 ${
              theme === 'xp' ? 'xp-button' : 'vista-button'
            }`}>
              📺 YCCC TV
            </button>
          )}
        </div>

        {/* System Tray */}
        <div className={`flex items-center space-x-2 ${
          theme === 'xp' ? 'text-white text-xs' : 'text-white text-sm'
        }`}>
          <div className="flex space-x-1">
            <span>🔊</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
          <div className={theme === 'xp' ? 'retro-font' : 'vista-font'}>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      {/* VR Lab Launcher Modal */}
      {showLauncher && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className={`relative ${
            theme === 'xp' ? 'xp-window' : 'vista-window vista-glass'
          } w-full max-w-4xl h-3/4 m-4`}>
            <div className={theme === 'xp' ? 'xp-window-header' : 'vista-window-header'}>
              <div className="flex justify-between items-center">
                <span>🥽 YCCC VR Lab Gateway</span>
                <button 
                  onClick={() => setShowLauncher(false)}
                  className={`w-6 h-6 flex items-center justify-center ${
                    theme === 'xp' ? 'bg-red-500 hover:bg-red-600 text-white' : 'hover:bg-red-500 hover:text-white'
                  } transition-colors`}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4 h-full overflow-auto">
              <VRLabLauncher />
            </div>
          </div>
        </div>
      )}

      {/* Retro TV Modal */}
      {showTV && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className={`relative ${
            theme === 'xp' ? 'xp-window' : 'vista-window vista-glass'
          } w-full max-w-6xl h-5/6 m-4`}>
            <div className={theme === 'xp' ? 'xp-window-header' : 'vista-window-header'}>
              <div className="flex justify-between items-center">
                <span>📺 YCCC TV - Retro Broadcasting</span>
                <button 
                  onClick={() => setShowTV(false)}
                  className={`w-6 h-6 flex items-center justify-center ${
                    theme === 'xp' ? 'bg-red-500 hover:bg-red-600 text-white' : 'hover:bg-red-500 hover:text-white'
                  } transition-colors`}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4 h-full overflow-auto flex items-center justify-center">
              <RetroTV theme={theme} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
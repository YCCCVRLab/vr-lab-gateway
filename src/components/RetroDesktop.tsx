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
    <div className="text-3xl mb-1">{icon}</div>
    <div className="text-xs leading-tight">{label}</div>
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
    { icon: '🎵', label: 'Media Player', onClick: () => {} },
    { icon: '📧', label: 'Outlook Express', onClick: () => {} },
    { icon: '🗑️', label: 'Recycle Bin', onClick: () => {} },
  ];

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Desktop Background */}
      <div className={`absolute inset-0 ${theme}-desktop-bg`}>
        {/* Windows XP Bliss-style background */}
        {theme === 'xp' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-green-400 to-blue-500" />
            <div className="absolute inset-0">
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-500 to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-600 to-transparent opacity-40" />
              <div className="absolute top-1/4 left-1/4 w-32 h-16 bg-white/10 rounded-full blur-xl" />
              <div className="absolute top-1/3 right-1/3 w-24 h-12 bg-white/5 rounded-full blur-lg" />
            </div>
          </>
        )}
        
        {/* Windows Vista Aurora background */}
        {theme === 'vista' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-600/20 to-transparent" />
              <div className="absolute top-1/4 left-1/4 w-64 h-32 bg-blue-400/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-24 bg-purple-500/10 rounded-full blur-2xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-gradient-to-r from-blue-400/5 to-purple-500/5 rounded-full blur-3xl" />
            </div>
          </>
        )}
      </div>

      {/* Desktop Icons - Fixed positioning and overflow */}
      <div className="absolute top-4 left-4 bottom-16 w-20 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-1 gap-1">
          {desktopIcons.map((icon, index) => (
            <DesktopIcon key={index} {...icon} />
          ))}
        </div>
      </div>

      {/* Taskbar */}
      <div className={`absolute bottom-0 left-0 right-0 flex items-center px-2 ${
        theme === 'xp' ? 'xp-taskbar' : 'vista-taskbar'
      }`}>
        {/* Start Button */}
        <button 
          className={`mr-2 ${
            theme === 'xp' ? 'xp-start-button' : 'vista-start-orb'
          }`}
          onClick={() => setShowLauncher(!showLauncher)}
        >
          {theme === 'xp' ? (
            <span className="flex items-center gap-1">
              <span className="text-sm font-bold">start</span>
            </span>
          ) : (
            <div className="vista-orb-content">
              <div className="vista-orb-icon">⊞</div>
            </div>
          )}
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
          {showLauncher && (
            <button className={`px-3 py-1 ${
              theme === 'xp' ? 'xp-button-active' : 'vista-button-active'
            }`}>
              🥽 VR Lab Gateway
            </button>
          )}
          {showTV && (
            <button className={`px-3 py-1 ${
              theme === 'xp' ? 'xp-button-active' : 'vista-button-active'
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
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-50 p-6">
          <div className={`relative ${
            theme === 'xp' ? 'xp-window' : 'vista-window vista-glass'
          } w-full max-w-5xl h-full max-h-[80vh] flex flex-col shadow-2xl`}>
            <div className={theme === 'xp' ? 'xp-window-header' : 'vista-window-header'}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span>🥽</span>
                  <span>YCCC VR Lab Gateway</span>
                </div>
                <button 
                  onClick={() => setShowLauncher(false)}
                  className={`window-close-button ${
                    theme === 'xp' ? 'xp-close-button' : 'vista-close-button'
                  }`}
                >
                  ×
                </button>
              </div>
            </div>
            <div className={`flex-1 overflow-hidden ${
              theme === 'xp' ? 'bg-gray-50' : 'bg-white/95'
            }`}>
              <div className="h-full overflow-y-auto custom-scrollbar">
                <VRLabLauncher />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Retro TV Modal */}
      {showTV && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className={`relative ${
            theme === 'xp' ? 'xp-window' : 'vista-window vista-glass'
          } w-full max-w-6xl h-full max-h-[90vh] flex flex-col shadow-2xl`}>
            <div className={theme === 'xp' ? 'xp-window-header' : 'vista-window-header'}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span>📺</span>
                  <span>YCCC TV - Retro Broadcasting</span>
                </div>
                <button 
                  onClick={() => setShowTV(false)}
                  className={`window-close-button ${
                    theme === 'xp' ? 'xp-close-button' : 'vista-close-button'
                  }`}
                >
                  ×
                </button>
              </div>
            </div>
            <div className={`flex-1 overflow-hidden flex items-center justify-center p-6 ${
              theme === 'xp' ? 'bg-gray-50' : 'bg-white/95'
            }`}>
              <div className="w-full h-full flex items-center justify-center">
                <RetroTV theme={theme} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
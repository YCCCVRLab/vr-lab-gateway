import React, { useState } from 'react';
import { RetroDesktop } from '@/components/RetroDesktop';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const [theme, setTheme] = useState<'xp' | 'vista'>('vista');

  return (
    <div className="h-screen overflow-hidden relative">
      <RetroDesktop theme={theme} />
      <ThemeToggle theme={theme} onThemeChange={setTheme} />
    </div>
  );
};

export default Index;
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'nature';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('wbf-theme') as Theme;
    if (savedTheme && ['light', 'dark', 'nature'].includes(savedTheme)) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('wbf-theme', theme);
    
    // Remove all theme classes first
    document.documentElement.classList.remove('dark', 'nature', 'light');
    document.body.classList.remove('dark', 'nature', 'light');
    
    // Apply the current theme to both html and body
    document.documentElement.classList.add(theme);
    document.body.classList.add(theme);
    
    // Apply theme-specific styles to body
    const body = document.body;
    body.style.transition = 'all 0.5s ease';
    
    switch (theme) {
      case 'nature':
        body.style.background = 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 50%, #d1fae5 100%)';
        body.style.color = '#064e3b';
        if (document.documentElement.classList.contains('dark')) {
          body.style.background = 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)';
          body.style.color = '#d1fae5';
        }
        break;
      case 'dark':
        body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)';
        body.style.color = '#f1f5f9';
        break;
      default:
        body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)';
        body.style.color = '#1e293b';
        break;
    }
    
    // Set CSS custom properties for the current theme
    const root = document.documentElement;
    switch (theme) {
      case 'nature':
        root.style.setProperty('--theme-primary', '#059669');
        root.style.setProperty('--theme-secondary', '#0d9488');
        root.style.setProperty('--theme-accent', '#16a34a');
        root.style.setProperty('--theme-bg', document.documentElement.classList.contains('dark') ? '#064e3b' : '#ecfdf5');
        root.style.setProperty('--theme-surface', document.documentElement.classList.contains('dark') ? '#065f46' : '#f0fdf4');
        root.style.setProperty('--theme-text', document.documentElement.classList.contains('dark') ? '#d1fae5' : '#064e3b');
        break;
      case 'dark':
        root.style.setProperty('--theme-primary', '#60a5fa');
        root.style.setProperty('--theme-secondary', '#a78bfa');
        root.style.setProperty('--theme-accent', '#34d399');
        root.style.setProperty('--theme-bg', '#0f172a');
        root.style.setProperty('--theme-surface', '#1e293b');
        root.style.setProperty('--theme-text', '#f1f5f9');
        break;
      default:
        root.style.setProperty('--theme-primary', '#3b82f6');
        root.style.setProperty('--theme-secondary', '#8b5cf6');
        root.style.setProperty('--theme-accent', '#10b981');
        root.style.setProperty('--theme-bg', '#f8fafc');
        root.style.setProperty('--theme-surface', '#ffffff');
        root.style.setProperty('--theme-text', '#1e293b');
        break;
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => {
      switch (prev) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'nature';
        case 'nature':
          return 'light';
        default:
          return 'light';
      }
    });
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
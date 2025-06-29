import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, User, LogOut, Sparkles, Leaf, TreePine, Palette } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Vertical Pillars', path: '/pillars' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'WBFx', path: '/wbfx' },
    { name: 'Join Forum', path: '/join' },
    { name: 'Contact', path: '/contact' }
  ];

  const themeOptions = [
    {
      id: 'light',
      name: 'Light Mode',
      icon: Sun,
      description: 'Clean & bright',
      gradient: 'from-yellow-400 via-orange-400 to-red-400',
      bgColor: 'bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100',
      preview: 'bg-gradient-to-r from-blue-400 to-purple-400'
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      icon: Moon,
      description: 'Easy on eyes',
      gradient: 'from-blue-600 via-purple-600 to-indigo-600',
      bgColor: 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800',
      preview: 'bg-gradient-to-r from-gray-700 to-gray-900'
    },
    {
      id: 'nature',
      name: 'Nature Mode',
      icon: TreePine,
      description: 'Earth inspired',
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      bgColor: 'bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 dark:hover:from-emerald-900/50 dark:hover:to-green-900/50',
      preview: 'bg-gradient-to-r from-emerald-400 to-green-500'
    }
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'nature':
        return {
          header: 'bg-gradient-to-r from-emerald-50/95 via-green-50/95 to-teal-50/95 dark:from-emerald-950/95 dark:via-green-950/95 dark:to-teal-950/95 border-emerald-200/50 dark:border-emerald-800/50',
          text: 'text-emerald-800 dark:text-emerald-200',
          textHover: 'hover:text-emerald-600 dark:hover:text-emerald-300',
          activeLink: 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg',
          inactiveLink: 'text-emerald-700 dark:text-emerald-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 dark:hover:from-emerald-900/30 dark:hover:to-green-900/30 hover:text-emerald-600 dark:hover:text-emerald-400',
          button: 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700',
          accent: 'text-emerald-500'
        };
      case 'dark':
        return {
          header: 'bg-gradient-to-r from-gray-950/95 via-blue-950/95 to-purple-950/95 border-gray-800/50',
          text: 'text-white',
          textHover: 'hover:text-blue-400',
          activeLink: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg',
          inactiveLink: 'text-gray-300 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-purple-900/30 hover:text-blue-400',
          button: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
          accent: 'text-blue-400'
        };
      default:
        return {
          header: 'bg-gradient-to-r from-white/95 via-blue-50/95 to-purple-50/95 border-gray-200/50',
          text: 'text-gray-900',
          textHover: 'hover:text-blue-600',
          activeLink: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg',
          inactiveLink: 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600',
          button: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
          accent: 'text-blue-500'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b shadow-lg transition-all duration-500 ${themeClasses.header}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-gray-300 dark:border-gray-600">
              <img 
                src="/image.png" 
                alt="WBF Logo" 
                className="w-10 h-10 object-contain filter invert"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl transition-colors duration-300 ${themeClasses.text} ${themeClasses.textHover}`}>
                Wisdom Bharati Forum
              </span>
              <div className="flex items-center space-x-1">
                <Sparkles className={`w-3 h-3 ${themeClasses.accent}`} />
                <span className={`text-xs font-medium ${themeClasses.text} opacity-75`}>
                  Enhansive & Colorful
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? themeClasses.activeLink
                    : themeClasses.inactiveLink
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Selector */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className={`group p-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden ${
                  theme === 'nature'
                    ? 'bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 hover:from-emerald-200 hover:to-green-200 dark:hover:from-emerald-900/50 dark:hover:to-green-900/50'
                    : theme === 'dark'
                    ? 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600'
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100'
                }`}
              >
                <div className="flex items-center space-x-2 relative z-10">
                  {theme === 'light' && <Sun className="w-5 h-5 text-yellow-600" />}
                  {theme === 'dark' && <Moon className="w-5 h-5 text-blue-400" />}
                  {theme === 'nature' && <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
                  <Palette className={`w-4 h-4 ${themeClasses.text} opacity-75`} />
                </div>
              </button>

              {/* Enhanced Theme Dropdown */}
              {showThemeMenu && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden z-50">
                  <div className="p-4">
                    <h3 className={`text-sm font-bold mb-4 flex items-center space-x-2 ${themeClasses.text}`}>
                      <Palette className="w-4 h-4" />
                      <span>Choose Your Experience</span>
                    </h3>
                    <div className="space-y-3">
                      {themeOptions.map((option) => {
                        const IconComponent = option.icon;
                        return (
                          <button
                            key={option.id}
                            onClick={() => {
                              setTheme(option.id as any);
                              setShowThemeMenu(false);
                            }}
                            className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                              theme === option.id
                                ? `bg-gradient-to-r ${option.gradient} text-white shadow-lg transform scale-105`
                                : option.bgColor + ` ${themeClasses.text} hover:scale-102`
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              theme === option.id 
                                ? 'bg-white/20 shadow-lg' 
                                : `bg-gradient-to-r ${option.gradient} shadow-md group-hover:shadow-lg`
                            }`}>
                              <IconComponent className={`w-6 h-6 ${
                                theme === option.id ? 'text-white' : 'text-white'
                              }`} />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="font-semibold text-lg">{option.name}</div>
                              <div className={`text-sm ${
                                theme === option.id ? 'text-white/80' : 'opacity-75'
                              }`}>
                                {option.description}
                              </div>
                            </div>
                            <div className={`w-6 h-6 rounded-full ${option.preview} shadow-md`}></div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {currentUser ? (
              <div className="flex items-center space-x-3">
                <div className={`flex items-center space-x-3 px-4 py-2 rounded-xl border transition-all duration-300 ${
                  theme === 'nature'
                    ? 'bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 border-emerald-200 dark:border-emerald-800'
                    : theme === 'dark'
                    ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600'
                    : 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200'
                }`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${themeClasses.button}`}>
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className={`text-sm font-medium max-w-32 truncate ${themeClasses.text}`}>
                    {currentUser.email}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-3 rounded-xl bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 hover:from-red-200 hover:to-pink-200 dark:hover:from-red-900/50 dark:hover:to-pink-900/50 transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <LogOut className="w-4 h-4 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className={`px-6 py-3 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2 ${themeClasses.button}`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 shadow-md ${
              theme === 'nature'
                ? 'bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 hover:from-emerald-200 hover:to-green-200 dark:hover:from-emerald-900/50 dark:hover:to-green-900/50'
                : theme === 'dark'
                ? 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600'
                : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100'
            }`}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${themeClasses.text}`} />
            ) : (
              <Menu className={`w-6 h-6 ${themeClasses.text}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden py-6 border-t backdrop-blur-xl transition-all duration-300 ${themeClasses.header}`}>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? themeClasses.activeLink
                      : themeClasses.inactiveLink
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className={`flex flex-col space-y-4 pt-6 border-t ${
                theme === 'nature' 
                  ? 'border-emerald-200/50 dark:border-emerald-800/50'
                  : theme === 'dark'
                  ? 'border-gray-700/50'
                  : 'border-gray-200/50'
              }`}>
                {/* Mobile Theme Selector */}
                <div className="space-y-3">
                  <h4 className={`text-sm font-semibold ${themeClasses.text}`}>
                    Theme
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {themeOptions.map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <button
                          key={option.id}
                          onClick={() => setTheme(option.id as any)}
                          className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-200 ${
                            theme === option.id
                              ? `bg-gradient-to-r ${option.gradient} text-white shadow-lg`
                              : option.bgColor + ` ${themeClasses.text}`
                          }`}
                        >
                          <IconComponent className="w-6 h-6" />
                          <span className="text-xs font-medium">{option.name.split(' ')[0]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-xl hover:from-red-200 hover:to-pink-200 dark:hover:from-red-900/50 dark:hover:to-pink-900/50 transition-all duration-300 shadow-md"
                  >
                    <LogOut className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <span className="text-sm font-medium text-red-600 dark:text-red-400">Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-6 py-3 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg flex items-center space-x-2 ${themeClasses.button}`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Click outside to close theme menu */}
      {showThemeMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowThemeMenu(false)}
        />
      )}
    </header>
  );
};

export default Header;
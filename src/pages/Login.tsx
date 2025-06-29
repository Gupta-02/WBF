import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Sparkles, Leaf, TreePine, Flower } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login, signup } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      navigate('/');
    } catch (error: any) {
      setError(error.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'nature':
        return {
          bg: 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950 dark:via-green-950 dark:to-teal-950',
          card: 'bg-white/90 dark:bg-emerald-900/90',
          accent: 'text-emerald-600 dark:text-emerald-400',
          button: 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700',
          focus: 'focus:ring-emerald-500 focus:border-emerald-500'
        };
      case 'dark':
        return {
          bg: 'bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950',
          card: 'bg-gray-900/90',
          accent: 'text-blue-400',
          button: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
          focus: 'focus:ring-blue-500 focus:border-blue-500'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-slate-50 via-white to-blue-50',
          card: 'bg-white/90',
          accent: 'text-blue-600',
          button: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
          focus: 'focus:ring-blue-500 focus:border-blue-500'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`min-h-screen ${themeClasses.bg} flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
      {/* Nature Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
          theme === 'nature' 
            ? 'bg-gradient-to-br from-emerald-400/20 to-green-400/20'
            : 'bg-gradient-to-br from-blue-400/20 to-purple-400/20'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
          theme === 'nature'
            ? 'bg-gradient-to-br from-teal-400/20 to-emerald-400/20'
            : 'bg-gradient-to-br from-purple-400/20 to-pink-400/20'
        }`}></div>
        
        {/* Floating Nature Elements */}
        {theme === 'nature' && (
          <>
            <div className="absolute top-20 left-20 opacity-20 animate-pulse">
              <Leaf className="w-12 h-12 text-emerald-400 animate-leaf" />
            </div>
            <div className="absolute bottom-32 right-32 opacity-20 animate-pulse">
              <TreePine className="w-16 h-16 text-emerald-400 animate-tree" />
            </div>
            <div className="absolute top-1/2 left-10 opacity-20 animate-pulse">
              <Flower className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute top-1/3 right-10 opacity-20 animate-pulse">
              <Leaf className="w-10 h-10 text-teal-400" />
            </div>
          </>
        )}
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-3 mb-8 group">
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-gray-300 dark:border-gray-600">
              <img 
                src="/image.png" 
                alt="WBF Logo" 
                className="w-14 h-14 object-contain filter invert"
              />
            </div>
            <div className="text-left">
              <span className={`text-xl font-bold block group-hover:${themeClasses.accent} transition-colors duration-300 ${
                theme === 'nature' 
                  ? 'text-emerald-800 dark:text-emerald-200'
                  : 'text-gray-900 dark:text-white'
              }`}>
                Wisdom Bharati Forum
              </span>
              <div className="flex items-center space-x-1">
                <Sparkles className={`w-3 h-3 ${
                  theme === 'nature' ? 'text-emerald-500' : 'text-blue-500'
                }`} />
                <span className={`text-xs font-medium ${
                  theme === 'nature' 
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  Enhansive & Colorful
                </span>
              </div>
            </div>
          </Link>
          
          <h2 className={`text-3xl font-bold ${
            theme === 'nature' 
              ? 'text-emerald-900 dark:text-emerald-100'
              : 'text-gray-900 dark:text-white'
          }`}>
            {isLogin ? 'Welcome Back' : 'Join WBF'}
          </h2>
          <p className={`mt-2 ${
            theme === 'nature'
              ? 'text-emerald-700 dark:text-emerald-300'
              : 'text-gray-600 dark:text-gray-400'
          }`}>
            {isLogin 
              ? 'Sign in to access your WBF dashboard' 
              : 'Create your account to get started'
            }
          </p>
        </div>

        {/* Form */}
        <div className={`${themeClasses.card} backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 dark:border-gray-800/20 p-8`}>
          {/* Toggle Buttons */}
          <div className={`flex mb-6 rounded-lg p-1 ${
            theme === 'nature'
              ? 'bg-emerald-100 dark:bg-emerald-900/50'
              : 'bg-gray-100 dark:bg-gray-800'
          }`}>
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                isLogin
                  ? theme === 'nature'
                    ? 'bg-white dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 shadow-sm'
                    : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : theme === 'nature'
                    ? 'text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-100'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                !isLogin
                  ? theme === 'nature'
                    ? 'bg-white dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 shadow-sm'
                    : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : theme === 'nature'
                    ? 'text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-100'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 rounded-lg">
              <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                theme === 'nature'
                  ? 'text-emerald-700 dark:text-emerald-300'
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${themeClasses.focus} transition-colors duration-200`}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className={`block text-sm font-medium mb-2 ${
                theme === 'nature'
                  ? 'text-emerald-700 dark:text-emerald-300'
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${themeClasses.focus} transition-colors duration-200`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${themeClasses.button} focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  {theme === 'nature' && <Leaf className="w-4 h-4" />}
                </span>
              )}
            </button>
          </form>

          {/* Additional Options */}
          <div className="mt-6 text-center">
            <p className={`text-sm ${
              theme === 'nature'
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className={`font-medium transition-colors duration-200 ${themeClasses.accent} hover:opacity-80`}
              >
                {isLogin ? 'Sign up here' : 'sign in instead'}
              </button>
            </p>
          </div>
        </div>

        {/* Environment Setup Note */}
        <div className={`border rounded-lg p-4 ${
          theme === 'nature'
            ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
            : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
        }`}>
          <p className={`text-sm ${
            theme === 'nature'
              ? 'text-emerald-800 dark:text-emerald-200'
              : 'text-green-800 dark:text-green-200'
          }`}>
            <strong>Setup Complete:</strong> Firebase authentication is now configured and ready to use with our enhansive theme system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
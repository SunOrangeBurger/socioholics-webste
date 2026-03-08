import { useState, useEffect } from 'react';

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize from DOM on first render
    if (typeof window !== 'undefined') {
      const hasDarkClass = document.documentElement.classList.contains('dark');
      console.log('ThemeSwitch init - dark class present:', hasDarkClass);
      return hasDarkClass;
    }
    return false;
  });

  useEffect(() => {
    // Double-check sync on mount
    const actualIsDark = document.documentElement.classList.contains('dark');
    console.log('ThemeSwitch mounted - actual dark mode:', actualIsDark, 'state:', isDark);
    if (actualIsDark !== isDark) {
      console.log('Syncing state to match DOM');
      setIsDark(actualIsDark);
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    console.log('Toggling theme from', isDark, 'to', newDarkMode);
    setIsDark(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Applied dark mode');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Applied light mode');
    }
    
    // Verify the change
    setTimeout(() => {
      console.log('After toggle - HTML has dark class:', document.documentElement.classList.contains('dark'));
      console.log('localStorage theme:', localStorage.getItem('theme'));
    }, 100);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
      style={{
        backgroundColor: isDark ? '#1e293b' : '#0ea5e9'
      }}
      aria-label="Toggle theme"
    >
      {/* Slider circle */}
      <span
        className="inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-lg"
        style={{
          transform: isDark ? 'translateX(36px)' : 'translateX(4px)'
        }}
      >
        {/* Sun/Moon icon inside circle */}
        <span className="flex items-center justify-center h-full w-full">
          {isDark ? (
            // Moon icon
            <svg className="h-4 w-4 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            // Sun icon
            <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      </span>
      
      {/* Stars for dark mode */}
      {isDark && (
        <>
          <span className="absolute left-2 top-1.5 w-1 h-1 bg-white rounded-full opacity-80" />
          <span className="absolute left-3 top-3 w-1 h-1 bg-white rounded-full opacity-60" />
          <span className="absolute left-1.5 top-4 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
        </>
      )}
      
      {/* Cloud for light mode */}
      {!isDark && (
        <svg viewBox="0 0 24 24" className="absolute right-2 w-5 h-5 text-white opacity-80" fill="currentColor">
          <path d="M6.5 19C4.57 19 3 17.43 3 15.5C3 13.95 4.04 12.63 5.5 12.18V12C5.5 9.24 7.74 7 10.5 7C12.5 7 14.21 8.21 15 10C16.66 10 18 11.34 18 13C18 14.66 16.66 16 15 16H6.5M19.5 16C20.88 16 22 14.88 22 13.5C22 12.12 20.88 11 19.5 11C19.41 11 19.32 11 19.24 11.03C19.08 9.28 17.63 7.93 15.84 7.82C15.94 8.2 16 8.59 16 9C16 9.7 15.87 10.37 15.64 11H19.5Z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitch;

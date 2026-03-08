// Theme utility functions for consistent theme management

export const getInitialTheme = (): boolean => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return false;
  
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  
  // Check system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const applyTheme = (isDark: boolean): void => {
  if (typeof window === 'undefined') return;
  
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

export const getCurrentTheme = (): boolean => {
  if (typeof window === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
};

// Listen for theme changes from other tabs/windows
export const syncThemeAcrossTabs = (callback: (isDark: boolean) => void): (() => void) => {
  if (typeof window === 'undefined') return () => {};
  
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === 'theme' && e.newValue) {
      const isDark = e.newValue === 'dark';
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      callback(isDark);
    }
  };
  
  window.addEventListener('storage', handleStorageChange);
  
  // Return cleanup function
  return () => window.removeEventListener('storage', handleStorageChange);
};

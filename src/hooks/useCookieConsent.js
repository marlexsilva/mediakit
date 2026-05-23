import { useState, useEffect } from 'react';

const DEFAULT_PREFERENCES = {
  essential: true, // Immer true
  analytics: false, // Opt-in needed
  external_media: false, // Opt-in needed
};

export function useCookieConsent() {
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Load preferences from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('cookie-preferences');
    if (stored) {
      try {
        setPreferences(JSON.parse(stored));
        setShowBanner(false);
      } catch (e) {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
    setIsLoaded(true);
  }, []);

  // Save preferences to localStorage
  const savePreferences = (newPrefs) => {
    const updated = { ...preferences, ...newPrefs, essential: true };
    setPreferences(updated);
    localStorage.setItem('cookie-preferences', JSON.stringify(updated));
    setShowBanner(false);
    // notify other parts of the app that preferences changed
    try {
      window.dispatchEvent(new CustomEvent('cookie-preferences-changed', { detail: updated }));
    } catch (e) {}
  };

  // Open banner manually (e.g., from footer button)
  const openBanner = () => {
    setShowBanner(true);
  };

  // Reset preferences (clear stored and reopen banner)
  const resetPreferences = () => {
    localStorage.removeItem('cookie-preferences');
    setPreferences(DEFAULT_PREFERENCES);
    setShowBanner(true);
    try {
      window.dispatchEvent(new CustomEvent('cookie-preferences-changed', { detail: DEFAULT_PREFERENCES }));
    } catch (e) {}
  };

  return {
    preferences,
    savePreferences,
    showBanner,
    isLoaded,
    hasConsent: (category) => preferences[category] === true,
    openBanner,
    resetPreferences,
  };
}

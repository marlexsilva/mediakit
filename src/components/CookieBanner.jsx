import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner({ onSavePreferences, showBanner }) {
  const [expanded, setExpanded] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    external_media: false,
  });

  if (!showBanner) return null;

  const handleAcceptAll = () => {
    onSavePreferences({
      essential: true,
      analytics: true,
      external_media: true,
    });
  };

  const handleRejectAll = () => {
    onSavePreferences({
      essential: true,
      analytics: false,
      external_media: false,
    });
  };

  const handleSavePreferences = () => {
    onSavePreferences(preferences);
  };

  const handleToggle = (key) => {
    if (key !== 'essential') {
      setPreferences((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Privatsphäre-Einstellungen
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              Um meine Website für dich optimal zu gestalten und fortlaufend zu verbessern, verwende ich Cookies. Einige von ihnen sind essenziell für den Betrieb der Seite, während andere mir helfen, Statistiken auszuwerten (z. B. um zu sehen, wie viele Leute mein Portfolio besuchen) oder Social-Media-Inhalte (wie Instagram-Videos) korrekt anzuzeigen. Du kannst selbst entscheiden, welche Kategorien du zulassen möchtest.
            </p>
          </div>
          <button
            onClick={handleRejectAll}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Schließen"
          >
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {/* Expandable Categories */}
        {expanded && (
          <div className="bg-slate-50 rounded-lg p-4 mb-4 space-y-3 border border-slate-200">
            {/* Essential */}
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.essential}
                disabled
                className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 disabled:opacity-50"
              />
              <div className="ml-3 flex-1">
                <div className="font-semibold text-slate-900">Essenziell</div>
                <div className="text-sm text-slate-600">
                  Immer aktiv – notwendig für den technischen Betrieb der Website
                </div>
              </div>
            </label>

            {/* Analytics */}
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handleToggle('analytics')}
                className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 cursor-pointer"
              />
              <div className="ml-3 flex-1">
                <div className="font-semibold text-slate-900">
                  Statistiken & Analyse
                </div>
                <div className="text-sm text-slate-600">
                  Hilft mir zu verstehen, wie Besucher mein Portfolio nutzen
                </div>
              </div>
            </label>

            {/* External Media */}
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.external_media}
                onChange={() => handleToggle('external_media')}
                className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 cursor-pointer"
              />
              <div className="ml-3 flex-1">
                <div className="font-semibold text-slate-900">
                  Externe Medien
                </div>
                <div className="text-sm text-slate-600">
                  Notwendig, um eingebettete Instagram-Reels direkt auf der Website abzuspielen
                </div>
              </div>
            </label>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            {expanded ? 'Weniger anzeigen' : 'Weitere Einstellungen'}
          </button>

          <div className="flex gap-3">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Alle ablehnen
            </button>
            {expanded && (
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Auswahl speichern
              </button>
            )}
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500 flex gap-4 flex-wrap">
          <button
            onClick={() => window.location.hash = '#impressum-modal'}
            className="hover:text-slate-700 transition-colors underline"
          >
            Impressum
          </button>
          <button
            onClick={() => window.location.hash = '#datenschutz-modal'}
            className="hover:text-slate-700 transition-colors underline"
          >
            Datenschutzerklärung
          </button>
          <button
            onClick={() => window.location.hash = '#agb-modal'}
            className="hover:text-slate-700 transition-colors underline"
          >
            AGB
          </button>
        </div>
      </div>
    </div>
  );
}

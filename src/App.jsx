import React, { useState, useEffect, useRef } from "react";
import {
  Instagram,
  MapPin,
  Mail,
  ArrowUpRight,
  TrendingUp,
  Users,
  Share2,
  Video,
  Smartphone,
  Megaphone,
  CheckCircle2,
  Menu,
  X,
  Eye,
  Bookmark,
  BarChart3,
  ExternalLink
} from "lucide-react";

// --- BILDER IMPORTE (Lokal) ---
import portrait from "./assets/portrait.jpg";

// --- DATEN IMPORTE ---
import { partners } from "./data/partners.js";
import { ImpressumText, DatenschutzText, AGBText } from "./data/texts.jsx";

// --- KOMPONENTEN IMPORTE ---
import CookieBanner from "./components/CookieBanner.jsx";
import { useCookieConsent } from "./hooks/useCookieConsent.js";
import ModalOverlay from "./components/ModalOverlay.jsx";

// --- HELPER KOMPONENTEN (Diese haben wahrscheinlich gefehlt!) ---

// 1. TikTok Icon
const TikTokIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// legal texts moved to src/data/texts.jsx

// --- HAUPT APP KOMPONENTE ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const { preferences, savePreferences, showBanner, isLoaded, openBanner, resetPreferences } = useCookieConsent();
  const modalRef = useRef(null);
  const [AnalyticsComp, setAnalyticsComp] = useState(null);
  const [SpeedInsightsComp, setSpeedInsightsComp] = useState(null);

  // Scroll Lock bei offenem Modal
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModal]);

  // Focus management for modal
  useEffect(() => {
    if (!activeModal) return;
    const modal = modalRef.current;
    const previous = document.activeElement;
    const focusable = modal?.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
    const first = focusable && focusable[0];
    if (first) first.focus();

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
      if (e.key === 'Tab' && focusable && focusable.length) {
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      if (previous) previous.focus();
    };
  }, [activeModal]);

  // Dynamically load/unload Vercel analytics based on consent
  useEffect(() => {
    if (!isLoaded) return;
    let mounted = true;
    if (preferences.analytics) {
      Promise.all([
        import('@vercel/analytics/react').catch(() => null),
        import('@vercel/speed-insights/react').catch(() => null),
      ]).then(([analyticsMod, speedMod]) => {
        if (!mounted) return;
        if (analyticsMod && analyticsMod.Analytics) setAnalyticsComp(() => analyticsMod.Analytics);
        if (speedMod && speedMod.SpeedInsights) setSpeedInsightsComp(() => speedMod.SpeedInsights);
      }).catch(() => {});
    } else {
      // unset components so React unmounts them
      setAnalyticsComp(null);
      setSpeedInsightsComp(null);
      // dispatch event to any analytics scripts that want to clean up
      try {
        window.dispatchEvent(new CustomEvent('vercel-analytics-disabled'));
      } catch (e) {}
    }
    return () => { mounted = false; };
  }, [isLoaded, preferences.analytics]);

  // Listen to global preference changes (in case hook events are used elsewhere)
  useEffect(() => {
    const handler = (e) => {
      const prefs = e?.detail;
      if (!prefs) return;
      if (!prefs.analytics) {
        setAnalyticsComp(null);
        setSpeedInsightsComp(null);
        try { window.dispatchEvent(new CustomEvent('vercel-analytics-disabled')); } catch (e) {}
      } else if (prefs.analytics) {
        // re-trigger dynamic import when analytics enabled externally
        Promise.all([
          import('@vercel/analytics/react').catch(() => null),
          import('@vercel/speed-insights/react').catch(() => null),
        ]).then(([analyticsMod, speedMod]) => {
          if (analyticsMod && analyticsMod.Analytics) setAnalyticsComp(() => analyticsMod.Analytics);
          if (speedMod && speedMod.SpeedInsights) setSpeedInsightsComp(() => speedMod.SpeedInsights);
        }).catch(() => {});
      }
    };
    window.addEventListener('cookie-preferences-changed', handler);
    return () => window.removeEventListener('cookie-preferences-changed', handler);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only">Zum Inhalt springen</a>
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter">
            MARLEX SILVA<span className="text-indigo-600">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">Über mich</a>
            <a href="#stats" className="hover:text-indigo-600 transition-colors">Insights</a>
            <a href="#partners" className="hover:text-indigo-600 transition-colors">Partner</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Kontakt</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Schließen' : 'Menü öffnen'}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div id="mobile-nav" role="menu" aria-label="Hauptnavigation" className="md:hidden bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8 py-4 space-y-4">
            <a role="menuitem" href="#about" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <a role="menuitem" href="#stats" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Insights</a>
            <a role="menuitem" href="#partners" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Partner</a>
            <a role="menuitem" href="#contact" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
          </div>
        )}
      </nav>

      <main id="main-content" className="max-w-6xl mx-auto flex-grow w-full">
        {/* --- PAGE 1: HERO & INTRO --- */}
        <section id="about" className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            
            {/* Viral Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-600 text-white text-sm font-bold shadow-lg shadow-indigo-200 transform hover:scale-105 transition-transform cursor-default animate-in fade-in slide-in-from-bottom-2">
              <TrendingUp size={16} className="animate-pulse"/>
              <span>1.1 Million+ Monthly Views 🚀</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-slate-900">
                Marlex <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Silva</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Content Creator & Local Guide
              </h2>
            </div>

            {/* DEIN ORIGINAL TEXT */}
            <div className="text-lg text-slate-600 leading-relaxed max-w-lg space-y-4 font-medium">
                <p>
                    Hallo meine lieben Freunde, ich bin Marlex und dokumentiere mein Studentenleben für mich selbst in der Zukunft.
                </p>
                <p>
                    Dazu gehört alles von Cafés, Restaurants, Partys bis zu lokalen Veranstaltungen. Ich studiere Informatik an der TU Darmstadt und bin Content Creator im Rhein-Main-Gebiet.
                </p>
                <p className="text-indigo-900 font-semibold flex items-center">
                    <span className="mr-2 text-2xl">🐼</span> Mein Markenzeichen: Der kleine Panda auf meiner Schulter, unter anderem mein treuer Begleiter.
                </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 print:hidden">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center"
              >
                Let's Work Together <ArrowUpRight className="ml-2" size={20}/>
              </a>
              {/* Social Icons Hero */}
              {/* Social Icons Hero - Unter die neuen Buttons verschoben */}
            <div className="flex gap-4 items-center pt-2">
              <a href="https://www.instagram.com/marlex.silva/" target="_blank" rel="noopener noreferrer" aria-label="Instagram, öffnet in neuem Tab" className="p-3 bg-slate-50 rounded-full hover:bg-indigo-50 transition-colors">
                <Instagram className="text-slate-600 hover:text-indigo-600 w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@silva.marlex" target="_blank" rel="noopener noreferrer" aria-label="TikTok, öffnet in neuem Tab" className="p-3 bg-slate-50 rounded-full hover:bg-indigo-50 transition-colors">
                <TikTokIcon className="text-slate-600 hover:text-indigo-600 size-6" />
              </a>
            </div>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="order-1 md:order-2 relative group">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60 mix-blend-multiply filter animate-pulse print:hidden"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-60 mix-blend-multiply filter animate-pulse print:hidden" style={{animationDelay: '1s'}}></div>

            <div className="relative aspect-[4/5] md:aspect-[3/4] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 group-hover:rotate-0 transition-all duration-500">
              <picture>
                {/* Prefer WebP when available (fallback will be the imported JPG) */}
                <source type="image/webp" srcSet={portrait} sizes="(max-width:768px) 80vw, 40vw" />
                <img
                  src={portrait}
                  srcSet={`${portrait} 600w`}
                  sizes="(max-width:768px) 80vw, 40vw"
                  alt="Marlex Silva mit Panda"
                  className="w-full h-full object-cover object-center relative z-10"
                  style={{ objectPosition: '50% 30%' }}
                  loading="eager"
                  decoding="async"
                  width={600}
                  height={800}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-20 print:hidden"></div>
            </div>
          </div>
        </section>

        {/* --- PAGE 2: STATS & INSIGHTS --- */}
        <section id="stats" style={{ scrollMarginTop: '5rem' }} className="px-4 sm:px-6 lg:px-8 py-12 bg-slate-50/80 rounded-[2.5rem] my-8 border border-slate-100 backdrop-blur-sm print:bg-white print:border-none print:break-inside-avoid -mt-4 md:-mt-6">
          <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2 flex items-center">
                <TrendingUp size={16} className="mr-2"/> Performance (30 Tage)
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Der virale Durchbruch
              </h2>
            </div>
            <div className="text-sm font-medium bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-slate-500 flex items-center">
              <CheckCircle2 size={16} className="text-green-500 mr-2" /> Stand: Februar 2026
            </div>
          </div>

          {/* Key Stats Grid - 4 COLS NOW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Stat Card 1: Views */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <TrendingUp size={100} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-slate-500 mb-2 font-medium">
                  <TrendingUp size={20} className="text-indigo-500" />
                  <span>Monatliche Reichweite</span>
                </div>
                <div className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                  1.1M<span className="text-indigo-600">+</span>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Video Aufrufe
                </p>
              </div>
            </div>

            {/* Stat Card 2: Reach (Updated from Lokale Zuschauer) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Users size={100} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-slate-500 mb-2 font-medium">
                  <Users size={20} className="text-indigo-500" />
                  <span>Erreichte Konten</span>
                </div>
                <div className="text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight">
                  400k<span className="text-indigo-600">~</span>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Im Rhein-Main Gebiet.
                </p>
              </div>
            </div>

            {/* Stat Card 3: Shares */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Share2 size={100} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-slate-500 mb-2 font-medium">
                  <Share2 size={20} className="text-indigo-500" />
                  <span>Geteilte Inhalte</span>
                </div>
                <div className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                  19.5K<span className="text-indigo-600">+</span>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Hohe Interaktionsrate.
                </p>
              </div>
            </div>

            {/* Stat Card 4: Saves (NEU) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Bookmark size={100} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-slate-500 mb-2 font-medium">
                  <Bookmark size={20} className="text-indigo-500" />
                  <span>Speicherungen</span>
                </div>
                <div className="text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight">
                  5.5k<span className="text-indigo-600">+</span>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Community Favoriten.
                </p>
              </div>
            </div>
          </div>
    

          {/* Zwei Spalten: Top Standorte (links) und Demographics (rechts) */}
          <div className="grid md:grid-cols-2 gap-8 items-start print:break-inside-avoid">
            
            {/* Top Standorte */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full">
                <div className="flex items-center space-x-2 mb-6">
                    <MapPin size={20} className="text-indigo-600" />
                    <h4 className="font-bold text-lg text-slate-900">Top Standorte</h4>
                </div>
                
                <div className="space-y-4">
                    {/* Wiesbaden */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 font-medium w-24">Wiesbaden</span>
                        <div className="flex-1 mx-3 bg-slate-100 rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "100%" }}></div> 
                            {/* 100% Breite optisch, da höchster Wert */}
                        </div>
                        <span className="font-bold w-12 text-right">27,1%</span>
                    </div>

                    {/* Darmstadt */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 font-medium w-24">Darmstadt</span>
                        <div className="flex-1 mx-3 bg-slate-100 rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "50%" }}></div>
                             {/* Relativ zu Wiesbaden (~50% der Breite) */}
                        </div>
                        <span className="font-bold w-12 text-right">13,5%</span>
                    </div>

                    {/* Frankfurt */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 font-medium w-24">Frankfurt</span>
                        <div className="flex-1 mx-3 bg-slate-100 rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "11%" }}></div>
                        </div>
                        <span className="font-bold w-12 text-right">3,0%</span>
                    </div>

                    {/* Mainz */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 font-medium w-24">Mainz</span>
                        <div className="flex-1 mx-3 bg-slate-100 rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "5%" }}></div>
                        </div>
                        <span className="font-bold w-12 text-right">1,4%</span>
                    </div>
                </div>
            </div>

            {/* Demographics (Rechte Seite) - Jetzt auch in einer Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full">
              <div className="flex items-center space-x-2 mb-6">
                <Users size={20} className="text-indigo-600" />
                <h4 className="font-bold text-lg text-slate-900">Demographie</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600 font-medium w-20">
                    Alter 18-24
                  </span>
                  <div className="flex-1 mx-3 bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-slate-800 h-2 rounded-full"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                  <span className="font-bold">35%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600 font-medium w-20">
                    Alter 25-34
                  </span>
                  <div className="flex-1 mx-3 bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "48%" }}
                    ></div>
                  </div>
                  <span className="font-bold">48%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600 font-medium w-20">
                    Alter 35+
                  </span>
                  <div className="flex-1 mx-3 bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-slate-300 h-2 rounded-full"
                      style={{ width: "17%" }}
                    ></div>
                  </div>
                  <span className="font-bold">17%</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4 italic">
                "Meine Community besteht überwiegend aus Young Professionals und
                Studenten, die aktiv nach Lifestyle-Inspiration suchen."
              </p>
            </div>
          </div>
        </section>

        {/* --- PAGE 3: PARTNER & TRUST (Aktualisiert mit neuen Logos) --- */}
        <section id="partners" className="px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-100 print:break-inside-avoid print:py-8">
          <div className="mb-12 text-center">
            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2">
              Referenzen
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Partner & Kooperationen
            </h2>
            <p className="text-slate-500 mt-3 text-lg max-w-2xl mx-auto">
              Vertraut von lokalen Institutionen, Events und globalen Brands im Rhein-Main-Gebiet und darüber hinaus.
            </p>
          </div>

          {/* Logo Grid - Dynamisch generiert aus der Konfiguration oben */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center px-4 md:px-0">
             {partners.map((partner) => {
               // determine numeric height from Tailwind class like 'max-h-16' -> 16*4 = 64px
               let imgHeight;
               const match = partner.scale && partner.scale.match(/max-h-(\d+)/);
               if (match) imgHeight = parseInt(match[1], 10) * 4;
               return (
                 <div key={partner.id} className={`${partner.scale || 'max-h-12'} w-auto`}>
                   {partner.jpg800 ? (
                        <picture>
                          <source type="image/webp" srcSet={`${partner.webp400} 400w, ${partner.webp800} 800w`} sizes="(max-width:640px) 45vw, 120px" />
                          <img
                            src={partner.jpg800}
                            srcSet={`${partner.jpg400} 400w, ${partner.jpg800} 800w`}
                            sizes="(max-width:640px) 45vw, 120px"
                            alt={partner.alt}
                            loading="lazy"
                            decoding="async"
                            className={`${partner.scale || 'max-h-12'} w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110 transform`}
                          />
                        </picture>
                   ) : (
                     <div className="h-12 flex items-center justify-center bg-slate-100 text-slate-400 text-xs p-2 rounded text-center font-bold uppercase tracking-wider border border-slate-200">
                       {partner.alt} Logo Missing
                     </div>
                   )}
                 </div>
               );
             })}
          </div>
        </section>

        {/* --- PAGE 4: SERVICES & CONTACT --- */}
        <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative overflow-hidden print:break-inside-avoid print:py-10">
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHZpZXdCb3g9IjAgMCA0IDQiPjxwYXRoIGZpbGw9IiM5OTlhOTkiIGZpbGwtb3BhY2l0eT0iMC4xIiBkPSJNMSAzaDF2MUgxVjN6bTItMmgxdjFIM1YxeiIvPjwvc3ZnPg==')] opacity-50 mix-blend-multiply pointer-events-none print:hidden"></div>

          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl text-white relative z-10">
            <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-indigo-900/80 via-purple-900/20 to-transparent pointer-events-none print:hidden"></div>

            <div className="relative z-10 grid md:grid-cols-5">
              <div className="md:col-span-3 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-800">
                <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-10 flex items-center">
                  <Megaphone size={18} className="mr-2"/> Meine Leistungen
                </h3>
                
                <ul className="space-y-10">
                  <li className="flex items-start group">
                    <div className="bg-slate-800/80 p-4 rounded-2xl mr-6 group-hover:bg-indigo-600 transition-all shadow-lg shadow-slate-900/20 group-hover:shadow-indigo-600/20 group-hover:scale-110 duration-300">
                      <Video size={28} className="text-indigo-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl mb-2 flex items-center">
                          Viral Reels <ArrowUpRight size={18} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400"/>
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        Konzept, Dreh & Schnitt. Content, der für den Algorithmus optimiert ist und organisch explodiert.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="bg-slate-800/80 p-4 rounded-2xl mr-6 group-hover:bg-indigo-600 transition-all shadow-lg shadow-slate-900/20 group-hover:shadow-indigo-600/20 group-hover:scale-110 duration-300">
                      <Smartphone size={28} className="text-indigo-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl mb-2">Store Traffic</h4>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        Ich verwandle digitale Views in echte Besucher. Messbar mehr Gäste für Restaurants, Cafés & Events.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="bg-slate-800/80 p-4 rounded-2xl mr-6 group-hover:bg-indigo-600 transition-all shadow-lg shadow-slate-900/20 group-hover:shadow-indigo-600/20 group-hover:scale-110 duration-300">
                      <Users size={28} className="text-indigo-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl mb-2">Student Marketing</h4>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        Direkter Zugang zur Gen Z und TU Darmstadt Zielgruppe. Authentisch und auf Augenhöhe.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-slate-800/30 backdrop-blur-md relative overflow-hidden">
                 <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="mb-10 relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Ready to go <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">viral?</span>
                  </h2>
                  <p className="text-slate-300 text-lg font-medium leading-relaxed">
                    Lass uns dein Business im Rhein-Main-Gebiet zur Nr. 1 machen. Schreib mir jetzt für ein unverbindliches Konzept.
                  </p>
                </div>

                <div className="space-y-4 relative z-10">
                  <a
                    href="mailto:contact@marlexsilva.de"
                    className="group block w-full bg-white text-slate-900 text-center py-4 rounded-xl font-bold text-xl hover:bg-indigo-50 hover:scale-[1.02] transition-all shadow-lg relative overflow-hidden"
                  >
                      <span className="relative z-10 flex items-center justify-center">
                        E-Mail schreiben <Mail className="ml-2 group-hover:rotate-12 transition-transform"/>
                      </span>
                  </a>

                  <div className="grid grid-cols-2 gap-4 font-semibold print:hidden">
                    <a
                      href="https://www.instagram.com/marlex.silva/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram, öffnet in neuem Tab"
                      className="flex items-center justify-center space-x-2 bg-slate-800/80 py-4 rounded-xl hover:bg-slate-700 transition-all border border-slate-700 hover:border-indigo-500/50 group"
                    >
                      <Instagram size={22} className="group-hover:text-indigo-400 transition-colors"/>
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@silva.marlex"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok, öffnet in neuem Tab"
                      className="flex items-center justify-center space-x-2 bg-slate-800/80 py-4 rounded-xl hover:bg-slate-700 transition-all border border-slate-700 hover:border-indigo-500/50 group"
                    >
                      <TikTokIcon size={22} className="group-hover:text-indigo-400 transition-colors"/>
                      <span>TikTok</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="mb-4 md:mb-0 flex flex-col md:flex-row items-center font-medium">
            <span className="font-bold text-slate-900 text-base mr-2">MARLEX SILVA.</span> 
            <span>&copy; {new Date().getFullYear()} Made in Germany.</span>
          </div>
          <div className="flex flex-wrap gap-4 font-medium print:hidden items-center max-w-full overflow-x-hidden">
            <button type="button" onClick={() => setActiveModal('impressum')} className="min-w-0 hover:text-indigo-600 transition-colors relative group">
                Impressum
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </button>
            <button type="button" onClick={() => setActiveModal('datenschutz')} className="min-w-0 hover:text-indigo-600 transition-colors relative group">
                Datenschutz
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </button>
            <button type="button" onClick={() => setActiveModal('agb')} className="min-w-0 hover:text-indigo-600 transition-colors relative group">
                AGB
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </button>
            <button type="button" onClick={openBanner} className="min-w-0 hover:text-indigo-600 transition-colors relative group">
                Privatsphäre-Einstellungen
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </button>
            <button type="button" onClick={resetPreferences} className="min-w-0 hover:text-indigo-600 transition-colors relative group">
              Cookies zurücksetzen
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </footer>

      {/* --- MODAL OVERLAY --- */}
      {activeModal && (
        <ModalOverlay onClose={() => setActiveModal(null)}>
          <div ref={modalRef} className="bg-white w-full max-w-full sm:max-w-3xl max-h-[85vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden relative animate-in fade-in duration-300 mx-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-white/80 backdrop-blur sticky top-0 z-10">
              <h2 id="modal-title" className="text-2xl font-bold text-slate-900">
                {activeModal === 'impressum' ? 'Impressum' : activeModal === 'datenschutz' ? 'Datenschutz' : 'AGB'}
              </h2>
              <button 
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors bg-slate-50 border border-slate-100"
                aria-label="Schließen"
              >
                <X size={24} className="text-slate-700" />
              </button>
            </div>
            <div className="p-4 sm:p-8 overflow-y-auto custom-scrollbar break-words">
              {activeModal === 'impressum' && <ImpressumText />}
              {activeModal === 'datenschutz' && <DatenschutzText />}
              {activeModal === 'agb' && <AGBText />}
            </div>
          </div>
        </ModalOverlay>
      )}

      {/* Cookie Banner */}
      {isLoaded && <CookieBanner showBanner={showBanner} onSavePreferences={savePreferences} />}

      {/* Dynamically loaded analytics components (only when consent given) */}
      {AnalyticsComp && <AnalyticsComp />}
      {SpeedInsightsComp && <SpeedInsightsComp />}

    </div>
  );
}
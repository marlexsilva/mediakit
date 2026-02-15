import React, { useState, useEffect } from "react";
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
import portrait from "./assets/portrait.jpeg";
import tuLogo from "./assets/TU_Darmstadt_Logo.png";
import tedxLogo from "./assets/TEDxTUDarmstadt.png";
import cafenini from "./assets/cafenini.webp";
import theRoom from "./assets/TheRoom.png";
import schuknecht from "./assets/Schuknecht.png";
import wellnitz from "./assets/Wellnitz.png";
import schlachthofLogo from "./assets/schlachthof.png"; 
import wiesbadenOnIceLogo from "./assets/wiesbadenOnIce.jpg"; 
import thaiMinistryLogo from "./assets/thaiMinistry.png"; 
import crispycoop from "./assets/crispycoop.png"; 
// import standorte from "./assets/Standorte.png"; // Nicht mehr benötigt, da wir die Grafik jetzt mit Code bauen

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

// 2. Impressum Text
const ImpressumText = () => (
  <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">Angaben gemäß § 5 TMG</h2>
      <p>
        <strong>Marlex Silva</strong><br />
        Mauerstraße 32<br />
        64289 Darmstadt
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:contact@marlexsilva.de" className="text-indigo-600 hover:underline">contact@marlexsilva.de</a><br />
        {/* Telefon: [DEINE TELEFONNUMMER] - Optional */}
      </p>
    </div>

    

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline ml-1">
          https://ec.europa.eu/consumers/odr/
        </a>.<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  </div>
);

// 3. Datenschutz Text
const DatenschutzText = () => (
  <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
    
    {/* 1. Übersicht */}
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">1. Datenschutz auf einen Blick</h2>
      <h3 className="font-bold text-slate-800 mt-2">Allgemeine Hinweise</h3>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
      </p>
      <h3 className="font-bold text-slate-800 mt-2">Datenerfassung auf dieser Website</h3>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li><strong>Wer ist verantwortlich?</strong> Die Datenverarbeitung erfolgt durch den Websitebetreiber (siehe Impressum).</li>
        <li><strong>Wie erfassen wir Daten?</strong> Automatisch beim Besuch durch unsere IT-Systeme (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs) oder wenn Sie uns diese mitteilen (z.B. per E-Mail).</li>
        <li><strong>Wofür nutzen wir Daten?</strong> Um eine fehlerfreie Bereitstellung der Website zu gewährleisten und zur Analyse des Nutzerverhaltens.</li>
      </ul>
    </div>

    {/* 2. Hosting - WICHTIG für Netcup */}
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">2. Hosting</h2>
      <h3 className="font-bold text-slate-800 mt-2">Externes Hosting</h3>
      <p>
        Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Meta- und Kommunikationsdaten, Webseitenzugriffe und sonstige Daten handeln, die über eine Website generiert werden.
      </p>
      <div className="bg-slate-50 p-4 rounded border border-slate-100 mt-3">
        <p><strong>Wir setzen folgenden Hoster ein:</strong></p>
        <p className="mt-1">
          netcup GmbH<br />
          Emmy-Noether-Straße 10<br />
          D-76131 Karlsruhe
        </p>
      </div>
      <p className="mt-3">
        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
    </div>

    {/* 3. Allgemeine Hinweise */}
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h2>
      <h3 className="font-bold text-slate-800 mt-2">Hinweis zur verantwortlichen Stelle</h3>
      <p>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
        <strong>Marlex Silva</strong><br />
        Mauerstraße 32<br />
        64289 Darmstadt<br />
        E-Mail: contact@marlexsilva.de
      </p>
      
      <h3 className="font-bold text-slate-800 mt-4">SSL- bzw. TLS-Verschlüsselung</h3>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
      </p>

      <h3 className="font-bold text-slate-800 mt-4">Widerruf & Rechte</h3>
      <p>
        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Wenden Sie sich dazu jederzeit an uns.
      </p>
    </div>

    {/* 4. Datenerfassung */}
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">4. Datenerfassung auf dieser Website</h2>
      
      <h3 className="font-bold text-slate-800 mt-4">Anfrage per E-Mail oder Telefon</h3>
      <p>
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>
    </div>

    {/* 5. Soziale Medien */}
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">5. Soziale Medien</h2>
      <p>
        Auf dieser Website sind Links zu Social-Media-Plattformen (z.B. Instagram, TikTok) eingebunden. Es handelt sich dabei um statische Links. Es werden keine Daten an die sozialen Netzwerke übertragen, solange Sie nicht aktiv auf die Links klicken.
      </p>
    </div>

  </div>
);

// --- HAUPT APP KOMPONENTE ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  // Scroll Lock bei offenem Modal
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModal]);

  // Konfiguration für die Partner-Logos, um das Rendering sauberer zu machen
  const partners = [
      // Neue Partner (mit individueller Skalierung falls nötig)
      { id: 1, src: thaiMinistryLogo, alt: "Thai Ministry of Commerce", scale: "max-h-16" },
      { id: 2, src: schlachthofLogo, alt: "Kulturzentrum Schlachthof", scale: "max-h-14" },
      { id: 3, src: wiesbadenOnIceLogo, alt: "Wiesbaden On Ice", scale: "max-h-14" },
      // Bestehende Partner
      { id: 4, src: tuLogo, alt: "TU Darmstadt", scale: "max-h-12" },
      { id: 5, src: tedxLogo, alt: "TEDx", scale: "max-h-12" },
      { id: 6, src: theRoom, alt: "The Room", scale: "max-h-12" },
      { id: 7, src: cafenini, alt: "Cafenini", scale: "max-h-10" },
      { id: 8, src: schuknecht, alt: "Schuknecht", scale: "max-h-10" },
      { id: 9, src: wellnitz, alt: "Wellnitz", scale: "max-h-10" },
      { id: 10, src: crispycoop, alt: "Crispy Coop", scale: "max-h-10" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
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
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-4">
            <a href="#about" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#stats" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Insights</a>
            <a href="#partners" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Partner</a>
            <a href="#contact" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto flex-grow w-full">
        {/* --- PAGE 1: HERO & INTRO --- */}
        <section id="about" className="px-6 py-12 md:py-20 lg:py-24 grid md:grid-cols-2 gap-12 items-center">
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

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center"
              >
                Let's Work Together <ArrowUpRight className="ml-2" size={20}/>
              </a>
              {/* Social Icons Hero */}
              <div className="flex gap-4 items-center px-4">
                <a href="https://www.instagram.com/marlex.silva/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors w-7 h-7" />
                </a>
                <a href="https://www.tiktok.com/@silva.marlex" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <TikTokIcon className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors size-7" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative group">
            {/* Artistic Background blobs */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60 mix-blend-multiply filter animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-60 mix-blend-multiply filter animate-pulse" style={{animationDelay: '1s'}}></div>

            {/* Image Placeholder */}
            <div className="relative aspect-[3/4] md:aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 group-hover:rotate-0 transition-all duration-500">
              <img
                src={portrait}
                alt="Marlex Silva mit Panda"
                className="w-full h-full object-cover relative z-10"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-20"></div>
            </div>
          </div>
        </section>

        {/* --- PAGE 2: STATS & INSIGHTS --- */}
        <section id="stats" className="px-6 py-16 bg-slate-50/80 rounded-[2.5rem] my-8 border border-slate-100 backdrop-blur-sm">
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
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
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
        <section id="partners" className="px-6 py-16 border-b border-slate-100">
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
             {partners.map((partner) => (
               // Prüfen ob ein Bild vorhanden ist, sonst Platzhalter anzeigen
               partner.src ? (
                 <img 
                   key={partner.id} 
                   src={partner.src} 
                   alt={partner.alt} 
                   // Nutze die individuelle Skalierungsklasse oder Fallback
                   className={`${partner.scale || 'max-h-12'} w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110 transform`} 
                 />
               ) : (
                 // Fallback falls Bildimport fehlschlägt
                 <div key={partner.id} className="h-12 flex items-center justify-center bg-slate-100 text-slate-400 text-xs p-2 rounded text-center font-bold uppercase tracking-wider border border-slate-200">
                   {partner.alt} Logo Missing
                 </div>
               )
             ))}
          </div>
        </section>

        {/* --- PAGE 4: SERVICES & CONTACT --- */}
        <section id="contact" className="px-6 py-16 md:py-24 relative overflow-hidden">
           {/* Background noise texture */}
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHZpZXdCb3g9IjAgMCA0IDQiPjxwYXRoIGZpbGw9IiM5OTlhOTkiIGZpbGwtb3BhY2l0eT0iMC4xIiBkPSJNMSAzaDF2MUgxVjN6bTItMmgxdjFIM1YxeiIvPjwvc3ZnPg==')] opacity-50 mix-blend-multiply pointer-events-none"></div>

          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl text-white relative z-10">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-indigo-900/80 via-purple-900/20 to-transparent pointer-events-none"></div>

            <div className="relative z-10 grid md:grid-cols-5">
              {/* Left: Services (3/5 width) */}
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

              {/* Right: Contact CTA (2/5 width) */}
              <div className="md:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-slate-800/30 backdrop-blur-md relative overflow-hidden">
                 {/* Glow effect */}
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

                  <div className="grid grid-cols-2 gap-4 font-semibold">
                    <a
                      href="https://www.instagram.com/marlex.silva/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-slate-800/80 py-4 rounded-xl hover:bg-slate-700 transition-all border border-slate-700 hover:border-indigo-500/50 group"
                    >
                      <Instagram size={22} className="group-hover:text-indigo-400 transition-colors"/>
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@silva.marlex"
                      target="_blank"
                      rel="noopener noreferrer"
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
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="mb-4 md:mb-0 flex flex-col md:flex-row items-center font-medium">
            <span className="font-bold text-slate-900 text-base mr-2">MARLEX SILVA.</span> 
            <span>&copy; {new Date().getFullYear()} Made in Germany.</span>
          </div>
          <div className="flex space-x-8 font-medium">
            <button onClick={() => setActiveModal('impressum')} className="hover:text-indigo-600 transition-colors relative group">
                Impressum
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => setActiveModal('datenschutz')} className="hover:text-indigo-600 transition-colors relative group">
                Datenschutz
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </footer>

      {/* --- MODAL OVERLAY --- */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setActiveModal(null)}>
          <div className="bg-white w-full max-w-3xl max-h-[85vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden relative animate-in fade-in slide-in-from-bottom-4 md:zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-white/80 backdrop-blur sticky top-0 z-10">
              <h2 className="text-2xl font-bold text-slate-900">
                {activeModal === 'impressum' ? 'Impressum' : 'Datenschutz'}
              </h2>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors bg-slate-50 border border-slate-100"
              >
                <X size={24} className="text-slate-700" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto custom-scrollbar">
              {activeModal === 'impressum' && <ImpressumText />}
              {activeModal === 'datenschutz' && <DatenschutzText />}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
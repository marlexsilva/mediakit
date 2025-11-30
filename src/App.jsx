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
} from "lucide-react";

// --- BILDER IMPORTE (Lokal) ---
import portrait from "./assets/portrait.jpeg";
import tuLogo from "./assets/TU_Darmstadt_Logo.png";
import tedxLogo from "./assets/TEDxTUDarmstadt.png";
import cafenini from "./assets/cafenini.webp";
import theRoom from "./assets/TheRoom.png";
import schuknecht from "./assets/Schuknecht.png";
import wellnitz from "./assets/Wellnitz.png";
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

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
      {/* Navigation (Sticky for Web view) */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter">
            MARLEX SILVA<span className="text-indigo-600">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a
              href="#about"
              className="hover:text-indigo-600 transition-colors"
            >
              Über mich
            </a>
            <a
              href="#stats"
              className="hover:text-indigo-600 transition-colors"
            >
              Insights
            </a>
            <a
              href="#partners"
              className="hover:text-indigo-600 transition-colors"
            >
              Partner
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-600 transition-colors"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-4">
            <a
              href="#about"
              className="block text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#stats"
              className="block text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </a>
            <a
              href="#partners"
              className="block text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner
            </a>
            <a
              href="#contact"
              className="block text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        )}
      </nav>

      <main className="max-w-5xl mx-auto flex-grow w-full">
        {/* --- PAGE 1: HERO & INTRO --- */}
        <section
          id="about"
          className="px-6 py-12 md:py-20 lg:py-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide">
              <MapPin size={14} />
              <span>Rhein-Main Gebiet</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-slate-900">
              Marlex{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Silva
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-slate-500">
              Content Creator & Local Guide
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Hallo meine lieben Freunde, ich bin Marlex und dokumentiere mein Studentenleben für mich selbst in der Zukunft. 
              <br />
              Dazu gehört alles von Cafés, Restaurants, Partys bis zu lokalen Veranstaltungen.
              Ich studiere Informatik an der TU Darmstadt und bin Content Creator im Rhein-Main-Gebiet.
              <br />
              Mein Markenzeichen: Der kleine Panda auf meiner Schulter, unter anderem mein treuer Begleiter.
            </p>

            <div className="pt-4 flex gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-200"
              >
                Let's Work
              </a>
              {/* Social Icons Hero */}
              <div className="flex gap-4 items-center px-4">
                <a
                  href="https://www.instagram.com/marlex.silva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" />
                </a>
                <a
                  href="https://www.tiktok.com/@silva.marlex"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors" />
                </a>
                <span className="text-slate-300">|</span>
                <span className="text-sm font-semibold text-slate-900">
                  @marlex.silva
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative group">
            {/* Artistic Background blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter"></div>

            {/* Image Placeholder */}
            <div className="relative aspect-[3/4] md:aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-100 z-0 pointer-events-none">
                <Users size={64} className="mb-4 opacity-20" />
                <span className="font-bold text-lg uppercase tracking-widest text-slate-300">
                  Creator Foto
                </span>
                <span className="text-sm text-slate-300">
                  (Hier Portrait einfügen)
                </span>
              </div>
              <img
                src={portrait}
                alt="Marlex Silva"
                className="w-full h-full object-cover relative z-10"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* --- PAGE 2: STATS & INSIGHTS --- */}
        <section id="stats" className="px-6 py-16 bg-slate-50 rounded-3xl my-8">
          <div className="mb-12 text-center md:text-left">
            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2">
              Meine Insights
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Performance & Reichweite
            </h2>
          </div>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Stat Card 1 */}
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
                  500K<span className="text-indigo-600">+</span>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Hohe Sichtbarkeit in Hessen.
                </p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <MapPin size={100} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-slate-500 mb-2 font-medium">
                  <MapPin size={20} className="text-indigo-500" />
                  <span>Lokale Zuschauer</span>
                </div>
                <div className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                  45
                  <span className="text-sm align-top text-slate-400 ml-1">
                    %
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 mt-4 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Im Rhein-Main Gebiet.
                </p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Share2 size={100} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-slate-500 mb-2 font-medium">
                  <Share2 size={20} className="text-indigo-500" />
                  <span>Monatliche Geteilte Inhalte</span>
                </div>
                <div className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                  9K<span className="text-indigo-600">+</span>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Hohe Interaktionsrate.
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

        {/* --- PAGE 3: PARTNER & TRUST --- */}
        <section id="partners" className="px-6 py-16 border-b border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2">
                Bisherige Kollaborationen
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Partnerschaften
              </h2>
            </div>
            <p className="text-slate-500 max-w-md md:text-right">
              Erfolgreiche Kampagnen von Brand Awareness bis zu lokalen Events.
            </p>
          </div>

          {/* Featured Partners (Big) - Jetzt responsiv gestapelt auf Mobile und ohne Hover-Effekt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative h-40 rounded-xl overflow-hidden border border-slate-100 bg-white p-4">
              <img
                src={tuLogo}
                alt="TU Darmstadt"
                className="absolute inset-0 w-full h-full object-contain p-4"
                loading="lazy"
              />
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden border border-slate-100 bg-white p-4">
              <img
                src={tedxLogo}
                alt="TEDx TU Darmstadt"
                className="absolute inset-0 w-full h-full object-contain p-8"
                loading="lazy"
              />
            </div>
          </div>

          {/* Secondary Partners (Small) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[cafenini, theRoom, schuknecht, wellnitz].map((logo, i) => (
              <div
                key={i}
                className="relative h-24 rounded-lg overflow-hidden border border-slate-100 bg-white flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Partner ${i + 1}`}
                  className="max-w-full max-h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- PAGE 4: SERVICES & CONTACT --- */}
        <section id="contact" className="px-6 py-16 md:py-24">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl text-white relative">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/40 to-transparent"></div>

            <div className="relative z-10 grid md:grid-cols-2">
              {/* Left: Services */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-700">
                <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-6">
                  Was ich biete
                </h3>
                <h2 className="text-3xl font-bold mb-8">Services</h2>

                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-indigo-600 p-2 rounded-lg mr-4 mt-1">
                      <Video size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        Social Media Video Production
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Hochwertige Reels & TikToks, Schnitt, Color Grading und
                        Sound Design.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-600 p-2 rounded-lg mr-4 mt-1">
                      <Smartphone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">UGC for Ads</h4>
                      <p className="text-slate-400 text-sm">
                        Authentischer User Generated Content für deine Paid
                        Media Kampagnen.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-600 p-2 rounded-lg mr-4 mt-1">
                      <Megaphone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        Local Brand Activation
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Vor-Ort Events, Store Visits und lokale Promotion im
                        Rhein-Main Gebiet.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right: Contact CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-6">
                    Lass uns Zusammenarbeiten
                  </h3>
                  <h2 className="text-3xl font-bold mb-4">
                    Lust auf den nächsten Schritt?
                  </h2>
                  <p className="text-slate-300 mb-8">
                    Ich freue mich auf spannende Projekte und Partnerschaften.
                    Schreib mir gerne eine E-Mail für ein unverbindliches Angebot.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:contact@marlexsilva.de"
                    className="block w-full bg-white text-slate-900 text-center py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
                  >
                    E-Mail schreiben
                  </a>

                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://www.instagram.com/marlex.silva/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-slate-800 py-3 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                      <Instagram size={18} />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@silva.marlex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-slate-800 py-3 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                      <TikTokIcon size={18} />
                      <span>TikTok</span>
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
                  &copy; {new Date().getFullYear()} Marlex Silva Media. All
                  Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- NEUER FOOTER MIT RECHTSTEXTEN --- */}
      <footer className="bg-white border-t border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-slate-900">MARLEX SILVA</span> &copy; {new Date().getFullYear()}
          </div>
          <div className="flex space-x-6">
            <button onClick={() => setActiveModal('impressum')} className="hover:text-indigo-600 transition-colors">Impressum</button>
            <button onClick={() => setActiveModal('datenschutz')} className="hover:text-indigo-600 transition-colors">Datenschutz</button>
          </div>
        </div>
      </footer>

      {/* --- MODAL OVERLAY FÜR RECHTSTEXTE --- */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-white sticky top-0 z-10">
              <h2 className="text-xl font-bold text-slate-900">
                {activeModal === 'impressum' ? 'Impressum' : 'Datenschutz'}
              </h2>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors bg-slate-50"
              >
                <X size={24} className="text-slate-900" />
              </button>
            </div>
            
            {/* Modal Content (Scrollable) */}
            <div className="p-6 overflow-y-auto">
              {activeModal === 'impressum' && <ImpressumText />}
              {activeModal === 'datenschutz' && <DatenschutzText />}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
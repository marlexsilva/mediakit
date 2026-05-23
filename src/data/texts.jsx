import React from 'react';

export const ImpressumText = () => (
  <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">Angaben gemäß § 5 DDG</h2>
      <p>
        <strong>Marlex Silva</strong><br />
        c/o IP-Management #9541<br />
        Ludwig-Erhard-Straße 18<br />
        20459 Hamburg
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">Kontaktdaten</h2>
      <p>
        E-Mail: <a href="mailto:contact@marlexsilva.de" className="text-indigo-600 hover:underline">contact@marlexsilva.de</a><br />
        Telefon: 015772636802
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">Identifikationsnummern</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        <strong>DE460179181</strong>
      </p>
      <p className="mt-2">
        Wirtschaftsidentifikationsnummer:<br />
        <strong>DE460179181</strong>
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br />
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
          https://ec.europa.eu/consumers/odr/
        </a>.
      </p>
    </div>

    <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
      Quelle: <a href="https://impressum-privatschutz.de" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Impressum-Privatschutz</a>
    </div>
  </div>
);

export const DatenschutzText = () => (
  <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
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

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">2. Hosting - Aktualisiert für Vercel</h2>
      <p>
        Diese Website nutzt Vercel als Hosting‑Provider. Die dabei verarbeiteten Daten sind in der Datenschutzerklärung unter <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Vercel Privacy Policy</a> beschrieben.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h2>
      <h3 className="font-bold text-slate-800 mt-2">Hinweis zur verantwortlichen Stelle</h3>
      <p>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
        <strong>Marlex Silva</strong><br />
        c/o IP-Management #9541<br />
        Ludwig-Erhard-Straße 18<br />
        20459 Hamburg<br />
        E-Mail: contact@marlexsilva.de
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">4. Datenerfassung auf dieser Website</h2>
      <p>
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">5. Soziale Medien</h2>
      <p>
        Auf dieser Website sind Links zu Social-Media-Plattformen (z.B. Instagram, TikTok) eingebunden. Es handelt sich dabei um statische Links. Es werden keine Daten an die sozialen Netzwerke übertragen, solange Sie nicht aktiv auf die Links klicken.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">6. Analytics & Tracking (Vercel)</h2>
      <p>
        Diese Website nutzt folgende Tracking-Dienste von Vercel Inc., um Leistung und Besucherzahlen zu analysieren:
      </p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li><strong>Vercel Analytics:</strong> Erfasst Seitenzugriffe, Besucherzahlen und Interaktionsdaten</li>
        <li><strong>Vercel Speed Insights:</strong> Misst die Website-Performance und Ladezeiten</li>
      </ul>
      <p className="mt-3">
        <strong>Zweck:</strong> Optimierung der Website-Performance und Verständnis des Nutzerverhaltens<br />
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse)<br />
        <strong>Datenempfänger:</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
        <strong>Datentransfer:</strong> Die Daten werden in die USA übermittelt. Diese Übertragung basiert auf den Standardvertragsklauseln der EU-Kommission.
      </p>
      <p className="mt-3">
        Sie können die Verarbeitung dieser Daten jederzeit durch unsere Privatsphäre-Einstellungen ablehnen. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Vercel Privacy Policy</a>
      </p>
    </div>
  </div>
);

export const AGBText = () => (
  <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">§1 Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Geschäftsbeziehung zwischen Marlex Silva (nachfolgend „Dienstleistender") und Kunden (nachfolgend „Auftraggeber") für die Erbringung von Social-Media- und Content-Creation-Dienstleistungen.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">§2 Leistungsumfang</h2>
      <p>
        Der Dienstleistende erbringt auf Basis individueller Vereinbarungen Dienstleistungen im Bereich Content-Creation, Social-Media-Management und verwandter digitaler Dienstleistungen. Der genaue Leistungsumfang wird in einem separaten Angebot oder Vertrag festgehalten.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">§3 Vertragsbedingungen</h2>
      <p>
        Alle Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch schriftliche Bestätigung des Dienstleistenden zustande. Abweichende oder zusätzliche Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Dienstleistende stimmt diesen ausdrücklich schriftlich zu.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">§4 Honorar und Zahlungsbedingungen</h2>
      <p>
        Das Honorar wird entsprechend der vereinbarten Leistung in Rechnung gestellt. Zahlungsfristen: 14 Tage nach Rechnungsdatum. Bei Zahlungsverzug ist der Dienstleistende berechtigt, den Anspruch auf Verzugszinsen geltend zu machen. Der Auftraggeber trägt alle Bankgebühren.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">§5 Lieferzeiten</h2>
      <p>
        Die vereinbarten Lieferzeiten beginnen mit dem Zeitpunkt der Auftragsbestätigung. Lieferzeiten sind keine Fristen, sondern freibleibende Angaben, soweit nicht ausdrücklich etwas anderes vereinbart wurde.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">§6 Urheberrecht und Nutzungsrechte</h2>
      <p>
        Alle von dem Dienstleistenden erstellten Werke (Fotos, Videos, Grafiken, Texte) unterliegen dem Urheberrecht des Dienstleistenden oder seiner Lizenzgeber. Der Auftraggeber erhält das Recht zur Nutzung der vereinbarten Inhalte im vereinbarten Umfang. Weiterverkauf, Vermietung oder Verbreitung ohne ausdrückliche Genehmigung sind untersagt.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">§7 Datenschutz und Haftung</h2>
      <p>
        Der Dienstleistende beachtet alle geltenden Datenschutzbestimmungen. Der Auftraggeber ist verantwortlich für alle rechtlichen Anforderungen bezüglich des bereitgestellten Inhalts. Der Dienstleistende übernimmt keine Haftung für Inhalte, die vom Auftraggeber bereitgestellt werden.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">§8 Geheimhaltung</h2>
      <p>
        Beide Parteien verpflichten sich zur Geheimhaltung von Geschäftsinformationen, die ihnen im Rahmen der Geschäftsbeziehung anvertraut werden, soweit diese nicht öffentlich bekannt sind.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">§9 Gültigkeitsdauer und Kündigung</h2>
      <p>
        Verträge bestehen für den vereinbarten Zeitraum. Eine Kündigung kann mit einer Frist von 30 Tagen zum Ende eines Kalendermonats erfolgen, sofern nichts anderes vereinbart ist.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">§10 Schlussbestimmungen</h2>
      <p>
        Diese AGB und alle weiteren Vereinbarungen werden nach deutschem Recht ausgelegt. Es gelten die Gerichtsstände der Bundesrepublik Deutschland. Sollte eine Bestimmung dieser AGB ungültig sein, bleiben die übrigen Bestimmungen gültig. Änderungen dieser AGB müssen in Schriftform erfolgen.
      </p>
    </div>
  </div>
);

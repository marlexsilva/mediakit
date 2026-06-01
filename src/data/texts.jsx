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
      <h1 className="text-xl font-bold text-slate-900 mb-1">Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p className="font-medium">Content Creation &amp; Brand Strategy — Marlex Silva</p>
      <p className="text-xs text-slate-500">Stand: Juni 2026</p>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 1  Geltungsbereich &amp; Vertragspartner</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge über Video-Produktion, Content-Erstellung, Social-Media-Marketing und strategische Beratung zwischen Marlex Silva – Content Creation &amp; Brand Strategy (nachfolgend „Dienstleister“) und seinen Kunden (nachfolgend „Auftraggeber“).</li>
        <li>Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne des § 14 BGB, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen. Entgegenstehende oder abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Dienstleister stimmt ihrer Geltung ausdrücklich schriftlich zu.</li>
        <li>Maßgeblich ist jeweils die zum Zeitpunkt des Vertragsschlusses gültige Fassung der AGB. Änderungen werden dem Auftraggeber spätestens vier (4) Wochen vor Inkrafttreten in Textform mitgeteilt.</li>
      </ol>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 2  Vertragsschluss &amp; Leistungsumfang</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Die Präsentation von Dienstleistungen auf der Website oder in Angeboten stellt kein bindendes Angebot (invitatio ad offerendum) dar. Ein Vertrag kommt erst durch die schriftliche Bestätigung (E-Mail ausreichend) des Angebots durch den Auftraggeber und die anschließende Auftragsbestätigung des Dienstleisters zustande.</li>
        <li>Der genaue Leistungsumfang (Anzahl der Reels/Stories, Deadlines, Veröffentlichungsrechte, Plattformen) ergibt sich aus dem jeweiligen Einzelvertrag oder dem schriftlichen Angebot.</li>
        <li>Teilleistungen sind zulässig, sofern sie für den Auftraggeber zumutbar sind.</li>
      </ol>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 3  Mitwirkungspflichten des Auftraggebers</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Der Auftraggeber stellt dem Dienstleister alle für die Produktion benötigten Informationen, Logos, Zugänge, Produkte oder firmeninternen Richtlinien rechtzeitig – mindestens fünf (5) Werktage vor geplantem Produktionsbeginn – zur Verfügung.</li>
        <li>Kommt der Auftraggeber seinen Mitwirkungspflichten nicht fristgerecht nach und verzögert sich dadurch die Produktion, gerät der Auftraggeber in Annahmeverzug. Der Vergütungsanspruch des Dienstleisters bleibt in voller Höhe bestehen; entstehende Mehrkosten trägt der Auftraggeber.</li>
        <li>Der Auftraggeber sichert zu, dass die von ihm bereitgestellten Materialien frei von Rechten Dritter sind und stellt den Dienstleister von sämtlichen Ansprüchen Dritter frei.</li>
      </ol>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 4  Korrekturschleifen &amp; Abnahme</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Im vereinbarten Honorar ist eine (1) Korrekturschleife auf den Videoschnitt enthalten, sofern im Einzelvertrag nichts anderes vereinbart ist. Jede weitere Korrekturschleife wird nach dem aktuellen Stundensatz des Dienstleisters gesondert in Rechnung gestellt.</li>
        <li>Änderungswünsche sind innerhalb von fünf (5) Werktagen nach Übermittlung des ersten Entwurfs schriftlich mitzuteilen. Nach Ablauf dieser Frist oder nach eigenständiger Veröffentlichung des Contents durch den Auftraggeber gilt das Werk als mängelfrei abgenommen.</li>
        <li>Nachträgliche Änderungswünsche, die inhaltlich vom ursprünglichen, freigegebenen Briefing abweichen, gelten als neuer Auftrag und werden gesondert vergütet.</li>
      </ol>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 5  Vergütung, Zahlungsbedingungen &amp; Stornierung</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Alle Preise verstehen sich als Nettopreise zzgl. der gesetzlichen Umsatzsteuer. Sofern eine Kooperation ganz oder teilweise bargeldlos als Sachbezug (z. B. Bewirtung, Gutscheine, Übernachtungen) erfolgt, gilt der reguläre Bruttowert der Sachzuwendung als Teil der Vergütung. Der Auftraggeber verpflichtet sich in diesem Fall unwiderruflich, die Pauschalversteuerung nach § 37b EStG zu übernehmen und den Dienstleister hierüber schriftlich zu unterrichten.</li>
        <li>Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen für B2B-Geschäfte (§ 288 Abs. 2 BGB) sowie eine Mahnpauschale von 40,00 EUR.</li>
        <li>Der Dienstleister ist berechtigt, vor Produktionsbeginn eine Anzahlung von bis zu 50 % des vereinbarten Honorars zu verlangen. Bei Neukunden oder ab einem Projektvolumen von 500 € netto kann eine Anzahlung von bis zu 100 % vor Produktionsbeginn verlangt werden.</li>
        <li>Bei leistungs- oder erfolgsbasierten Vergütungen (z. B. NeoTaste-Conversions) ist der Auftraggeber verpflichtet, dem Dienstleister innerhalb von sieben (7) Werktagen nach Ablauf des Kampagnenzeitraums die systemgenerierten Tracking-Daten zur Verfügung zu stellen. Bei Nichtvorlage gilt die vertraglich vereinbarte Höchstpauschale als fällig.</li>
      </ol>

      <div className="pt-2">
        <h3 className="font-semibold">Stornogebühren bei Auftragsabbruch oder Terminabsage durch den Auftraggeber (bezogen auf den vereinbarten Drehtermin):</h3>
        <ul className="list-none pl-0 mt-2 space-y-1">
          <li>Absage mehr als 14 Tage vor dem Termin: 25 % des Gesamthonorars</li>
          <li>Absage 7–14 Tage vor dem Termin: 50 % des Gesamthonorars</li>
          <li>Absage weniger als 7 Tage vor dem Termin: 75 % des Gesamthonorars</li>
          <li>Absage unter 24 Stunden vor dem Termin oder bei Nichterscheinen: 100 % des Gesamthonorars</li>
        </ul>
        <p className="mt-2">Bereits angefallene Auslagen (z. B. Reisekosten, Equipment-Mieten) sind in jedem Fall vollständig zu erstatten.</p>
      </div>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 6  Urheber- &amp; Nutzungsrechte</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Alle Urheberrechte an den produzierten Inhalten (Videos, Bilder, Rohmaterial, Grafiken, Audio) verbleiben beim Dienstleister.</li>
        <li>Mit vollständiger Zahlung der Vergütung räumt der Dienstleister dem Auftraggeber einfache, zeitlich und räumlich unbeschränkte Nutzungsrechte ein, den fertigen Content auf den eigenen organischen Social-Media-Kanälen und der eigenen Website zu nutzen.</li>
      </ol>

      <div className="pt-2">
        <h3 className="font-semibold">Folgende Nutzungsarten sind nicht im Basishonorar enthalten und bedürfen einer gesonderten schriftlichen Vereinbarung (Buyout-Gebühr):</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Nutzung für kostenpflichtige Werbeanzeigen (Meta Ads, TikTok Spark Ads, YouTube Ads, Whitelisting u. Ä.)</li>
          <li>Weitergabe oder Sublizenzierung an Dritte (z. B. Partnerbrands, Verbandsseiten)</li>
          <li>Nutzung außerhalb der digitalen Plattformen (z. B. Print, TV, Out-of-Home)</li>
          <li>Nutzungszeitraum über 24 Monate hinaus</li>
        </ul>
        <p className="mt-2">Die Herausgabe von ungeschnittenem Rohmaterial (B-Roll) ist nicht geschuldet.</p>
        <p className="mt-2">Der Dienstleister ist berechtigt, die Inhalte im Rahmen der Eigenwerbung (Portfolio, Website, Social Media) als Referenz zu nutzen, sofern der Auftraggeber dem nicht aus berechtigten Gründen schriftlich widerspricht.</p>
      </div>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 7  Geheimhaltung</h2>
      <p>Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen vertraulichen Informationen (Geschäftsgeheimnisse, Kampagnenpläne, Preiskonditionen) gegenüber Dritten geheim zu halten. Diese Verpflichtung gilt für die Dauer des Vertragsverhältnisses sowie für zwei (2) Jahre darüber hinaus.</p>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 8  Haftung</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Der Dienstleister haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</li>
        <li>Für leichte Fahrlässigkeit haftet der Dienstleister nur bei der Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht). Die Haftung ist in diesen Fällen auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.</li>
        <li>Die Haftung für mittelbare Schäden, entgangenen Gewinn oder ausgebliebenes Reichweitenwachstum ist – soweit gesetzlich zulässig – ausgeschlossen.</li>
        <li>Die rechtliche Prüfung der produzierten Werbemaßnahmen (insbesondere UWG, Markenrecht, DSGVO, Influencer-Kennzeichnungspflicht nach §§ 5a, 5b UWG) obliegt ausschließlich dem Auftraggeber.</li>
      </ol>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 9  Absagen &amp; Verschiebungen durch den Dienstleister</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Der Dienstleister behält sich das Recht vor, vereinbarte Produktionstermine aus wichtigen Gründen (z. B. akute Krankheit, technische Defekte am Equipment, höhere Gewalt) zu verschieben. Dies gilt ausdrücklich auch für ungeeignete Witterungsverhältnisse bei Außenaufnahmen (z. B. Regen, Sturm, starke Bewölkung bei explizit vereinbartem Schönwetter-Content). In diesen Fällen wird unverzüglich ein adäquater Ersatztermin vereinbart, ohne dass dem Dienstleister oder dem Auftraggeber dadurch Storngebühren oder Schadensersatzansprüche entstehen. Der Vertrag bleibt in vollem Umfang bestehen.</li>
        <li>Bei einer durch den Dienstleister verschobenen Produktion ist die Haftung für mittelbare Schäden oder entgangenen Gewinn des Auftraggebers ausgeschlossen, es sei denn, dem Dienstleister fällt grobe Fahrlässigkeit oder Vorsatz zur Last.</li>
        <li>Die Gesamthaftung des Dienstleisters ist in jedem Fall auf die Höhe des vereinbarten Netto-Honorars des jeweiligen Einzelauftrags begrenzt, soweit nicht Vorsatz oder grobe Fahrlässigkeit vorliegt.</li>
      </ol>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 10  Datenschutz</h2>
      <p>Beide Parteien verpflichten sich, die jeweils geltenden datenschutzrechtlichen Bestimmungen (DSGVO, BDSG) einzuhalten.</p>
    </div>

    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">§ 11  Schlussbestimmungen &amp; Gerichtsstand</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).</li>
        <li>Sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag Wiesbaden.</li>
        <li>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht (salvatorische Klausel).</li>
        <li>Änderungen dieser AGB sowie des jeweiligen Einzelvertrags bedürfen der Schriftform (E-Mail ausreichend).</li>
      </ol>
    </div>
  </div>
);

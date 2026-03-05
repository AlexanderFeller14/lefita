import { PageHero } from "@/components/page-hero";
import { makeMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata = makeMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung nach revDSG für Lefita.",
  path: "/datenschutz"
});

export default function DatenschutzPage() {
  return (
    <div className="page-shell pb-16 pt-8 md:pt-10">
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung (revDSG)"
        intro="Klarer Überblick über die Bearbeitung personenbezogener Daten bei Lefita."
        tone="mist"
        layout="compact"
      />

      <article className="mt-8 fade-in-up rounded-[2rem] border border-pine/15 bg-white p-6 md:p-10">
        <section className="rounded-xl border border-clay/35 bg-white p-4 text-sm text-pine/85">
          <h2 className="text-lg font-semibold text-pine">Verantwortliche Stelle</h2>
          <p className="mt-2">
            {siteConfig.legalBrand}, {siteConfig.owner}, {siteConfig.street}, {siteConfig.postalCode} {siteConfig.city}, Schweiz.
            <br />
            Kontakt: <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>, Telefon{" "}
            <a className="underline" href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>.
          </p>
        </section>

        <div className="mt-6 space-y-6 text-sm text-pine/85">
          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">Allgemeiner Hinweis</h2>
            <p className="mt-2">
              Durch die Nutzung dieser Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten
              gemäss der nachfolgenden Beschreibung einverstanden. Diese Website kann grundsätzlich ohne Registrierung
              besucht werden. Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei,
              Datum und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar
              auf Ihre Person bezogen werden. Personenbezogene Daten, insbesondere Name, Adresse oder E-Mail-Adresse
              werden soweit möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt keine Weitergabe der
              Daten an Dritte.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Cookies</h2>
            <p className="mt-2">
              Diese Website verwendet Cookies. Das sind kleine Textdateien, die es möglich machen, auf dem Endgerät des
              Nutzers spezifische, auf den Nutzer bezogene Informationen zu speichern, während er die Website nutzt.
              Cookies ermöglichen es, insbesondere Nutzungshäufigkeit und Nutzeranzahl der Seiten zu ermitteln,
              Verhaltensweisen der Seitennutzung zu analysieren, aber auch unser Angebot kundenfreundlicher zu gestalten.
              Cookies bleiben über das Ende einer Browser-Sitzung gespeichert und können bei einem erneuten Seitenbesuch
              wieder aufgerufen werden. Wenn Sie das nicht wünschen, sollten Sie Ihren Internetbrowser so einstellen,
              dass er die Annahme von Cookies verweigert.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">SSL-Verschlüsselung</h2>
            <p className="mt-2">
              Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie
              zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf
              &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL-Verschlüsselung
              aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </section>

          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">Server-Log-Files</h2>
            <p className="mt-2">
              Der Provider dieser Website erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p className="mt-2">
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns
              konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Kontaktformular</h2>
            <p className="mt-2">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Recht auf Auskunft, Löschung, Sperrung</h2>
            <p className="mt-2">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,
              deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung
              oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie
              sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </section>

          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">Widerspruch Werbe-Mails</h2>
            <p className="mt-2">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
              ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der
              Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Verwendung von Google Maps</h2>
            <p className="mt-2">
              Diese Website verwendet Google Maps API, um geographische Informationen visuell darzustellen. Bei der
              Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch Besucher
              erhoben, verarbeitet und genutzt. Nähere Informationen über die Datenverarbeitung durch Google können Sie
              den Google-Datenschutzhinweisen entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen
              Datenschutz-Einstellungen verändern.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Verwendung von Google reCAPTCHA</h2>
            <p className="mt-2">
              Diese Website verwendet den Dienst reCAPTCHA der Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA
              94043, USA; &quot;Google&quot;). Die Abfrage dient dem Zweck der Unterscheidung, ob die Eingabe durch einen
              Menschen oder durch automatisierte, maschinelle Verarbeitung erfolgt. Die Abfrage schliesst den Versand der
              IP-Adresse und ggf. weiterer von Google für den Dienst reCAPTCHA benötigter Daten an Google ein. Ihre
              IP-Adresse wird von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
              Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen
              wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Die
              Verarbeitung erfolgt auf Grundlage des Art. 6 (1) lit. a DSGVO mit Ihrer Einwilligung. Sie können Ihre
              Einwilligung jederzeit widerrufen, ohne dass die Rechtmässigkeit der aufgrund der Einwilligung bis zum
              Widerruf erfolgten Verarbeitung berührt wird.
            </p>
          </section>

          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">Google Analytics</h2>
            <p className="mt-2">
              Diese Website verwendet Google Analytics, einen Webanalysedienst von Google Inc., 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA. Google Analytics verwendet Cookies. Die durch den Cookie erfassten
              Informationen über die Nutzung unserer Seiten (einschliesslich Ihrer IP-Adresse) werden in der Regel an
              einen Server von Google in den USA übertragen und dort gespeichert. Auf dieser Website wurde Google
              Analytics um den Code &quot;gat._anonymizeIp();&quot; erweitert, um eine anonymisierte Erfassung von
              IP-Adressen (sog. IP-Masking) zu gewährleisten. Zur Deaktivierung von Google Analytics stellt Google unter{" "}
              <a className="underline" href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">
                tools.google.com/dlpage/gaoptout
              </a>{" "}
              ein Browser-Plug-In zur Verfügung.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Google AdSense</h2>
            <p className="mt-2">
              Diese Website benutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen von Google Inc., 1600
              Amphitheatre Parkway, Mountain View, CA 94043, USA. Google AdSense verwendet sog. &quot;Cookies&quot; und
              so genannte Web Beacons (unsichtbare Grafiken). Die durch Cookies und Web Beacons erzeugten Informationen
              über die Benutzung dieser Website (einschliesslich Ihrer IP-Adresse) und Auslieferung von Werbeformaten
              werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird Ihre IP-Adresse
              jedoch nicht mit anderen von Ihnen gespeicherten Daten zusammenführen. Sie können die Installation der
              Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Facebook</h2>
            <p className="mt-2">
              Diese Website verwendet Funktionen von Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA. Bei
              Aufruf unserer Seiten mit Facebook-Plug-Ins wird eine Verbindung zwischen Ihrem Browser und den Servern von
              Facebook aufgebaut. Dabei werden bereits Daten an Facebook übertragen. Besitzen Sie einen Facebook-Account,
              können diese Daten damit verknüpft werden. Wenn Sie keine Zuordnung dieser Daten zu Ihrem Facebook-Account
              wünschen, loggen Sie sich bitte vor dem Besuch unserer Seite bei Facebook aus.
            </p>
          </section>

          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">Instagram</h2>
            <p className="mt-2">
              Auf unseren Seiten sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten
              durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA. Wenn Sie in Ihrem Instagram-Account
              eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem
              Instagram-Profil verlinken. Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">YouTube</h2>
            <p className="mt-2">
              Diese Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube,
              LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin
              ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Wenn Sie in
              Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen
              Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
            </p>
          </section>

          <section className="border-l-2 border-pine/25 pl-4">
            <h2 className="text-lg font-semibold text-pine">Änderungen</h2>
            <p className="mt-2">
              Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle,
              auf unserer Website publizierte Fassung. Soweit die Datenschutzerklärung Teil einer Vereinbarung mit Ihnen
              ist, werden wir Sie im Falle einer Aktualisierung über die Änderung per E-Mail oder auf andere geeignete
              Weise informieren.
            </p>
          </section>

          <section className="border-l-2 border-clay/35 pl-4">
            <h2 className="text-lg font-semibold text-pine">Fragen an den Datenschutzbeauftragten</h2>
            <p className="mt-2">
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an{" "}
              <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> oder wenden Sie sich
              direkt an die für den Datenschutz zu Beginn der Datenschutzerklärung aufgeführte, verantwortliche Person.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

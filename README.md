\# ioBroker Grow Tent Control (Fan / Licht / Heizmatte + VIS)



Dieses Repository enthält ein kleines, aber mächtiges Paket zur Steuerung eines Grow-Zelts mit \*\*ioBroker\*\*:



\- \*\*Lüfter\*\* (Abluft) – temperatur- und feuchtegesteuert + Geruchs-Purge

\- \*\*Licht\*\* (Grow-Lampe) – schaltbar per Endpoint (später: Timer/“Tag/Nacht”-Logik)

\- \*\*Heizmatte\*\* – z. B. für Keimlinge / Wurzelerwärmung

\- Ein \*\*VIS-Dashboard\*\* (schicke Kachel) zur komfortablen Bedienung:

&nbsp; - Presets: \*Keimling\*, \*Vegetativ\*, \*Blüte\*

&nbsp; - Schalter für Automation \& Purge

&nbsp; - Boost-Button (Geruch / Durchlüften)

&nbsp; - Live-Anzeige von Temperatur, Luftfeuchtigkeit, Status/Grund



> Ziel: Alle relevanten Endpoints (Fan, Licht, Heizmatte, Sensoren) sind \*\*konfigurierbar\*\* und müssen nicht hart im Skript stehen.



---



\## Projektstruktur (geplant)



```text

.

├─ src/

│  └─ grow-controller.js      # JS-Skript für den ioBroker javascript-Adapter

├─ vis/

│  └─ grow-control.html       # HTML-Snippet für VIS / VIS-2 (Dashboard-Kachel)

├─ .gitignore

└─ README.md




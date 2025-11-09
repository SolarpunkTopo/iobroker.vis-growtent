# ioBroker Grow Tent Control (Fan / Licht / Heizmatte + VIS)

Dieses Projekt steuert ein kleines Grow-Zelt über **ioBroker**:

- **Lüfter** (Abluft)
  - temperatur- und feuchtegesteuert
  - Hysterese + Mindestlaufzeiten
  - Geruchs-Purge (Intervall-Lüftung) + Boost-Button
- **Licht** (Grow-Lampe)
  - manuell schaltbar
  - optional **zeitgesteuert pro Phase** (Keimling / Vegetativ / Blüte)  
- **Heizmatte**
  - manuell schaltbar
  - optional einfache Temperatur-Auto-Regelung (Hysterese)
- **VIS-Dashboard** (schicke Kachel)
  - Presets: *Keimling*, *Vegetativ*, *Blüte*
  - Schalter: Automation, Purge, Licht, Heizmatte
  - Slider für Klima-Setpoints & Zeiten
  - Status: Temperatur, Luftfeuchte, Licht/Heiz-Status, Grund, letzte Aktion

> Ziel: Alle relevanten Endpoints (Fan, Licht, Heizmatte, Sensoren) sind **konfigurierbar** über States in `0_userdata.0.grow.config.*`.  
> Keine hart verdrahteten Objekt-IDs im Code.

---

## Projektstruktur

```text
.
├─ src/
│  └─ grow-controller.js      # JS-Skript für den ioBroker javascript-Adapter
├─ vis/
│  └─ grow-control.html       # HTML-Snippet für VIS / VIS-2 (Dashboard-Kachel)
├─ .gitignore
└─ README.md

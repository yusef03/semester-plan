# 🎓 Mission Control: Bachelor

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Tech Stack](https://img.shields.io/badge/tech-HTML5%20|%20CSS3%20|%20Vanilla%20JS-orange.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)

Ein hochmodernes, clientseitiges Web-Dashboard zur effizienten Verwaltung und Planung des Bachelor-Studiums (Angewandte Informatik, Hochschule Hannover). Das Projekt vereint einen Echtzeit-Stundenplan mit einem intelligenten Noten-CMS und verzichtet dabei vollständig auf externe Frameworks oder Backend-Datenbanken.

## 🚀 Core Features

- **Real-Time Live Engine:** Das System gleicht das aktuelle Datum und die Uhrzeit mit der internen Vorlesungs-Datenbank ab. Es berechnet selbstständig laufende Events, anstehende Module und berücksichtigt spezifische Einzeltermine (wie Seminare).
- **Smart Grade CMS:** Ein interaktives Noten-Management-System. Noten werden über ein modales UI eingegeben und persistent im `localStorage` des Browsers gesichert.
- **Auto-GPA Calculation:** Der Notendurchschnitt wird in Echtzeit auf Basis der ECTS-Gewichtung berechnet. Die Logik entspricht der offiziellen Prüfungsordnung (Abschneiden nach der ersten Nachkommastelle, keine Aufrundung).
- **Premium User Interface:** Komplett neues Design-System mit Fokus auf modernes App-Feeling. Implementierung von Glassmorphism (Milchglas-Effekten), smoothen CSS-Animationen und einem augenschonenden Dark Mode.
- **PWA-Ready:** Durch spezifische Meta-Tags ist das Dashboard als "Progressive Web App" (PWA) auf mobilen Endgeräten nativ als Fullscreen-App auf dem Homescreen installierbar.

## 🏗 Architektur

Das Projekt basiert auf einer sauberen Trennung der Verantwortlichkeiten (Separation of Concerns):

```text
semester-plan/
├── index.html    # DOM-Struktur, App-Navigation & PWA Meta-Tags
├── style.css     # Design-System, CSS-Variablen & Keyframe-Animationen
└── app.js        # State Management, JSON-Datenbanken & Live-Engine Logik
```

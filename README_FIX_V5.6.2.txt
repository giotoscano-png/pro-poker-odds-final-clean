PRO Poker Odds V5.6.2 - FIX DEFINITIVO

HO SISTEMATO I 3 FILE CHE DAVANO IL PROBLEMA:

1) src/config/payment.js
   - startDesktopDownload() fa SOLO download.
   - goToSupport() fa SOLO PayPal nella stessa scheda.
   - supportAndStartDownload() NON scarica più nulla: ora manda solo a PayPal, così anche vecchi import non rompono più.

2) src/components/SupportButton.jsx
   - Il tasto Supporta fa SOLO PayPal.
   - Nessun download.
   - Nessun popup: usa window.location.assign, stessa scheda.

3) src/pages/DesktopPage.jsx
   - La sezione Leak Finder ha il tasto download attivo.
   - Il bottone ora scrive SOLO: Download gratis.
   - Il bottone chiama startDesktopDownload().
   - Non importa più supportAndStartDownload().
   - Non usa più Lock come icona del tasto futuro.

COSA FARE:
- Vai su GitHub nel repo:
  giotoscano-png/pro-poker-odds-final-clean

- Sostituisci esattamente questi 3 file:
  src/config/payment.js
  src/components/SupportButton.jsx
  src/pages/DesktopPage.jsx

- Commit:
  Release V5.6.2 - fix Leak Finder download and PayPal support

TEST DOPO DEPLOY VERCEL:
1) Vai su Leak Finder.
2) Clicca Download gratis.
   Deve partire SOLO il download dell'installer.
3) Vai su Supporta.
4) Clicca Supporta 2€.
   Deve aprire SOLO PayPal nella stessa scheda.
5) Non deve più partire il download dal supporto.
6) Non deve più aprirsi nessun popup.

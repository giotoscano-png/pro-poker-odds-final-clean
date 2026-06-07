# Upload pulito GitHub / Vercel

Carica SOLO questi elementi nella root del repository:

- public/
- src/
- index.html
- package.json
- package-lock.json
- README.md
- vercel.json
- .gitignore

NON caricare:

- node_modules/
- dist/
- protected/
- api/
- drop-in/
- docs/
- file .exe

Per il download dell'installer:
1. carica il file .exe come GitHub Release asset;
2. copia il link;
3. incollalo in src/config/payment.js al posto di INSERISCI_LINK_DOWNLOAD_EXE.

// PRO Poker Odds - payment.js
// Site/App Version: V5.6.2
// Fix V5.6.2:
// - "Scarica gratis" = download diretto installer GitHub Release
// - "Supporta 2€" = PayPal diretto nella stessa scheda
// - nessun popup PayPal / nessun window.open

const env = typeof import.meta !== "undefined" && import.meta.env ? import.meta.env : {};

export const SITE_VERSION = "5.6.2";

// 1) INCOLLA QUI il link diretto dell'installer GitHub Release.
// Esempio:
// https://github.com/giotoscano-png/NOME-REPO/releases/latest/download/PRO-Poker-Odds-Installer.exe
export const INSTALLER_URL =
  env.VITE_INSTALLER_URL || "https://github.com/giotoscano-png/pro-poker-odds-final-clean/releases/download/v2.0.0/PRO.Poker.Leak.Finder-Setup-2.0.0.exe";

// 2) INCOLLA QUI il link PayPal diretto.
// Consiglio: PayPal.me, es.
// https://www.paypal.com/paypalme/TUONOME/2
export const SUPPORT_URL =
  env.VITE_SUPPORT_URL || "https://www.paypal.com/paypalme/gt17pp/2";

function isMissingUrl(url) {
  return !url || url.includes("INCOLLA_QUI");
}

export function goDirect(url, missingMessage) {
  if (isMissingUrl(url)) {
    alert(missingMessage || "Link non configurato.");
    return;
  }

  // Apertura nella stessa scheda = niente popup.
  window.location.assign(url);
}

export function goToDownload() {
  goDirect(
    INSTALLER_URL,
    "Link installer non configurato. Apri src/lib/payment.js e incolla il link GitHub Release."
  );
}

export function goToSupport() {
  goDirect(
    SUPPORT_URL,
    "Link supporto non configurato. Apri src/lib/payment.js e incolla il link PayPal diretto."
  );
}

export function handleDownloadClick(event) {
  if (event) event.preventDefault();
  goToDownload();
}

export function handleSupportClick(event) {
  if (event) event.preventDefault();
  goToSupport();
}

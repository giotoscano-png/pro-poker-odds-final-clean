// PRO Poker Odds - src/config/payment.js
// Site/App Version: V5.6.2
// FIX DEFINITIVO:
// - Download gratis = SOLO download installer
// - Supporta 2€ = SOLO PayPal nella stessa scheda
// - Nessun popup PayPal
// - Nessun download dal pulsante Supporta

export const SITE_VERSION = '5.6.2';

export const PAYPAL_ME_USERNAME = 'gt17pp';
export const SUPPORT_AMOUNT_EUR = 2;

export const DESKTOP_INSTALLER_URL =
  'https://github.com/giotoscano-png/pro-poker-odds-final-clean/releases/download/v2.0.0/PRO.Poker.Leak.Finder-Setup-2.0.0.exe';

export const DESKTOP_INSTALLER_FILENAME = 'PRO.Poker.Leak.Finder-Setup-2.0.0.exe';

export function getPaypalSupportUrl() {
  return `https://paypal.me/${PAYPAL_ME_USERNAME}/${SUPPORT_AMOUNT_EUR}EUR`;
}

export function isPaypalConfigured() {
  return Boolean(PAYPAL_ME_USERNAME && PAYPAL_ME_USERNAME !== 'INSERISCI_USERNAME_PAYPALME');
}

export function isDownloadConfigured() {
  return Boolean(DESKTOP_INSTALLER_URL && DESKTOP_INSTALLER_URL !== 'INSERISCI_LINK_DOWNLOAD_EXE');
}

export function startDesktopDownload() {
  if (!isDownloadConfigured()) {
    alert('Download non configurato: controlla src/config/payment.js');
    return;
  }

  // Download diretto, senza PayPal e senza popup.
  window.location.assign(DESKTOP_INSTALLER_URL);
}

export function goToSupport() {
  if (!isPaypalConfigured()) {
    alert('Supporto PayPal non configurato: controlla src/config/payment.js');
    return;
  }

  // PayPal nella stessa scheda, senza popup e senza download.
  window.location.assign(getPaypalSupportUrl());
}

// Compatibilità con vecchi import già presenti nel progetto:
// prima questa funzione faceva download + PayPal popup.
// Ora NON scarica più nulla: manda solo a PayPal nella stessa scheda.
export function supportAndStartDownload() {
  goToSupport();
}

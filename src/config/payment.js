// PRO Poker Odds - src/config/payment.js
// V5.6.2 UI + logic fix
// - Download gratis = SOLO download installer
// - Supporta 2€ = SOLO PayPal nella stessa scheda
// - Nessun popup
// - Compatibilità col vecchio codice mantenuta

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
    alert('Download non configurato.');
    return;
  }

  window.location.assign(DESKTOP_INSTALLER_URL);
}

export function goToSupport() {
  if (!isPaypalConfigured()) {
    alert('Supporto PayPal non configurato.');
    return;
  }

  window.location.assign(getPaypalSupportUrl());
}

// Compatibilità con vecchi import:
// prima faceva download + popup PayPal.
// Adesso manda SOLO a PayPal.
export function supportAndStartDownload() {
  goToSupport();
}

// PRO Poker Odds - src/config/payment.js
// Site/App Version: V5.6.2
// Fix: download separato da supporto PayPal, senza popup

export const SITE_VERSION = '5.6.2';

export const PAYPAL_ME_USERNAME = 'gt17pp';
export const SUPPORT_AMOUNT_EUR = 2;

export const DESKTOP_INSTALLER_URL = 'https://github.com/giotoscano-png/pro-poker-odds-final-clean/releases/download/v2.0.0/PRO.Poker.Leak.Finder-Setup-2.0.0.exe';
export const DESKTOP_INSTALLER_FILENAME = 'PRO.Poker.Leak.Finder-Setup-2.0.0.exe';

export function getPaypalSupportUrl() {
  return 'https://paypal.me/gt17pp/2EUR';
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

  // Niente popup: download diretto
  window.location.assign(DESKTOP_INSTALLER_URL);
}

export function goToSupport() {
  if (!isPaypalConfigured()) {
    alert('Supporto PayPal non configurato.');
    return;
  }

  // Niente popup: PayPal nella stessa scheda
  window.location.assign(getPaypalSupportUrl());
}

// Compatibilità vecchio codice: se qualche vecchio pulsante chiama ancora questa funzione,
// NON apre più PayPal popup e NON mischia più supporto + download.
export function supportAndStartDownload() {
  startDesktopDownload();
}

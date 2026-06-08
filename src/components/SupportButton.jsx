import React from 'react';
import { Heart } from 'lucide-react';
import { isPaypalConfigured, SUPPORT_AMOUNT_EUR, goToSupport } from '../config/payment.js';
import { useLanguage } from '../i18n.jsx';

export default function SupportButton({ compact = false }) {
  const { t } = useLanguage();
  const configured = isPaypalConfigured();

  const handleClick = () => {
    if (!configured) {
      alert(t('notifyPaypal'));
      return;
    }

    // SOLO PayPal nella stessa scheda.
    // NON parte nessun download.
    goToSupport();
  };

  return (
    <button
      type="button"
      className={compact ? 'support-button compact' : 'support-button'}
      onClick={handleClick}
    >
      <Heart size={compact ? 14 : 17} />
      {compact
        ? t('supportCompact', { amount: SUPPORT_AMOUNT_EUR })
        : t('supportButton', { amount: SUPPORT_AMOUNT_EUR })}
    </button>
  );
}

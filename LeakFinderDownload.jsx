// 1) In alto nel file della schermata Leak Finder aggiungi questo import:

import LeakFinderDownload from "@/components/LeakFinderDownload";


// 2) Nel return della schermata Leak Finder, subito sotto il titolo o in alto nella pagina,
// incolla questo componente:

<LeakFinderDownload />


// ESEMPIO:

export default function LeakFinder() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-4 py-6 space-y-5">

        <LeakFinderDownload />

        {/* qui sotto lascia tutto il resto del Leak Finder già esistente */}

      </div>
    </div>
  );
}
import React from "react";
import {
  SITE_VERSION,
  INSTALLER_URL,
  SUPPORT_URL,
  handleDownloadClick,
  handleSupportClick,
} from "@/lib/payment";

export default function LeakFinderDownload() {
  return (
    <div className="rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-950/50 via-background to-background p-4 shadow-lg shadow-emerald-950/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
            PRO Poker Odds V{SITE_VERSION}
          </p>

          <h2 className="text-lg font-bold text-foreground">
            Leak Finder pronto
          </h2>

          <p className="text-sm text-muted-foreground">
            Scarica gratis l&apos;installer oppure supporta il progetto con 2€.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            id="free-download-btn"
            href={INSTALLER_URL}
            onClick={handleDownloadClick}
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-400 active:scale-[0.98]"
          >
            Scarica gratis
          </a>

          <a
            id="support-btn"
            href={SUPPORT_URL}
            onClick={handleSupportClick}
            className="inline-flex items-center justify-center rounded-xl border border-yellow-400/50 bg-yellow-400/10 px-4 py-3 text-sm font-bold text-yellow-300 transition hover:bg-yellow-400/20 active:scale-[0.98]"
          >
            Supporta 2€
          </a>
        </div>
      </div>
    </div>
  );
}

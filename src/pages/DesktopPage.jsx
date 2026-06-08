import React from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  History,
  ListChecks,
  MonitorDown,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { startDesktopDownload, SITE_VERSION } from '../config/payment.js';
import '../styles/leak-finder-v562.css';

const leakTypes = [
  {
    icon: Target,
    title: 'Preflop leaks',
    text: 'Mani giocate troppo larghe, limp passivi, call marginali e raise mancati.',
  },
  {
    icon: Activity,
    title: 'Postflop passivo',
    text: 'Linee troppo passive, bet piccole senza piano o check che perdono valore.',
  },
  {
    icon: BarChart3,
    title: 'Draw pagati male',
    text: 'Call con progetti senza pot odds sufficienti o implied odds realistiche.',
  },
  {
    icon: AlertTriangle,
    title: 'River call larghi',
    text: 'Call finali troppo frequenti quando il range avversario è forte.',
  },
  {
    icon: Brain,
    title: 'Varianza vs errore',
    text: 'Separare i bad beat dagli errori veri, per evitare analisi solo sul risultato.',
  },
  {
    icon: TrendingUp,
    title: 'Value missed',
    text: 'Spot in cui la mano era abbastanza forte per puntare o estrarre più valore.',
  },
];

const workflow = [
  {
    icon: FileText,
    title: 'Import sessione',
    text: 'Carichi un file hand history esportato dal software di gioco.',
  },
  {
    icon: ListChecks,
    title: 'Classificazione spot',
    text: 'Ogni mano viene classificata: errore, spot da rivedere, corretto o varianza.',
  },
  {
    icon: History,
    title: 'Pattern ricorrenti',
    text: 'Il report evidenzia leak ripetuti, non solo singole mani isolate.',
  },
  {
    icon: Download,
    title: 'Report esportabile',
    text: 'Session report più chiaro, storico sessioni e confronto progressivo dei leak.',
  },
];

const previewMetrics = [
  { value: '75', label: 'mani analizzate' },
  { value: '14', label: 'spot da rivedere' },
  { value: '8', label: 'possibili errori' },
  { value: '53', label: 'ok / varianza' },
];

export default function DesktopPage({ setPage }) {
  const scrollToPreview = () => {
    const element = document.getElementById('leak-report-preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="page-card leak-pro-page leak-pro-page-v562">
      <div className="leak-pro-hero">
        <div className="leak-pro-copy">
          <span className="eyebrow">
            <MonitorDown size={14} /> LEAK FINDER DESKTOP
          </span>

          <h2>Poker Leak Finder</h2>
          <p>
            La versione desktop di Analizza Mani per importare sessioni intere,
            trovare pattern ricorrenti e trasformare le hand history in un report
            chiaro su errori, leak e varianza.
          </p>

          <div className="leak-pro-actions leak-pro-actions-strong">
            <button className="download-primary-cta" type="button" onClick={startDesktopDownload}>
              <Download size={18} />
              Download gratis
            </button>

            <button className="secondary-action" type="button" onClick={scrollToPreview}>
              Guarda report preview
            </button>

            {typeof setPage === 'function' && (
              <button className="ghost-action" type="button" onClick={() => setPage('tester')}>
                Prova Analizza Mani <ArrowRight size={16} />
              </button>
            )}
          </div>

          <div className="leak-trust-row">
            <span>
              <CheckCircle2 size={14} /> Studio post-sessione
            </span>
            <span>
              <CheckCircle2 size={14} /> Report leak ricorrenti
            </span>
            <span>
              <CheckCircle2 size={14} /> Nessun popup o passaggio extra
            </span>
          </div>
        </div>

        <div className="leak-pro-device leak-pro-device-clean" id="leak-report-preview">
          <div className="device-topline">
            <span>
              <Zap size={14} /> SESSION REPORT PREVIEW
            </span>
            <strong>DESKTOP BETA</strong>
          </div>

          <div className="device-main-score">
            <span>LEAK PRINCIPALE RILEVATO</span>
            <strong>River call troppo larghi</strong>
            <p>
              Pattern simulato: diversi call al river sembrano poco giustificati
              da equity, pot odds o range avversario.
            </p>
          </div>

          <div className="device-metrics">
            {previewMetrics.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="device-leak-list">
            <div className="risk-high">
              <AlertTriangle size={15} /> Priorità alta: river call costosi
            </div>
            <div className="risk-mid">
              <Clock3 size={15} /> Da monitorare: call preflop marginali
            </div>
            <div className="risk-good">
              <ShieldCheck size={15} /> Linee premium spesso difendibili
            </div>
          </div>
        </div>
      </div>

      <section className="desktop-download-strip">
        <div className="desktop-download-copy">
          <span className="eyebrow">
            <Download size={14} /> DOWNLOAD DESKTOP
          </span>
          <h3>Scarica subito Leak Finder PRO</h3>
          <p>
            Un unico download per lavorare sulle hand history con report di sessione,
            classificazione degli spot e analisi dei leak più ricorrenti.
          </p>
        </div>

        <div className="desktop-download-actions">
          <div className="desktop-download-badges">
            <span><CheckCircle2 size={14} /> Import hand history</span>
            <span><CheckCircle2 size={14} /> Leak Finder completo</span>
            <span><CheckCircle2 size={14} /> Report sessione e storico</span>
            <span><CheckCircle2 size={14} /> Interfaccia desktop dedicata</span>
          </div>

          <button className="download-primary-cta large" type="button" onClick={startDesktopDownload}>
            <Download size={18} />
            Download gratis
          </button>
        </div>
      </section>

      <section className="leak-section">
        <div className="section-header compact">
          <div>
            <span className="eyebrow">
              <Brain size={14} /> LEAK RILEVABILI
            </span>
            <h2>Cosa trova la versione desktop</h2>
            <p>
              L&apos;obiettivo è andare oltre la singola mano: individuare abitudini
              ripetute che, nel tempo, possono costare valore.
            </p>
          </div>
        </div>

        <div className="leak-type-grid">
          {leakTypes.map(({ icon: Icon, title, text }) => (
            <article key={title} className="leak-type-card">
              <div className="feature-icon">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leak-section">
        <div className="section-header compact">
          <div>
            <span className="eyebrow">
              <ListChecks size={14} /> WORKFLOW REPORT
            </span>
            <h2>Da hand history a report sessione</h2>
            <p>
              Un flusso più chiaro e più credibile, con focus sullo studio e non sul
              semplice effetto “coming soon”.
            </p>
          </div>
        </div>

        <div className="leak-workflow">
          {workflow.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="workflow-step">
              <div className="workflow-number">{index + 1}</div>
              <div className="feature-icon">
                <Icon size={18} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="leak-disclaimer">
        <ShieldCheck size={18} />
        <p>
          Poker Leak Finder è pensato per studio post-sessione. Non offre assistenza
          live durante il gioco, non garantisce vincite e non sostituisce un solver
          professionale.
        </p>
      </div>

      <div className="leak-bottom-cta">
        <div>
          <span>PRO Poker Odds V{SITE_VERSION}</span>
          <h3>Vuoi il download sempre in evidenza? Ora è qui.</h3>
          <p>Nessun bottone sbiadito: il download principale resta visibile e attivo.</p>
        </div>

        <button className="download-primary-cta" type="button" onClick={startDesktopDownload}>
          <Download size={18} />
          Download gratis
        </button>
      </div>
    </section>
  );
}

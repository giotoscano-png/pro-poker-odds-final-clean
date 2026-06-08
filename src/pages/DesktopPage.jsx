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
import { useLanguage } from '../i18n.jsx';
import { startDesktopDownload, SITE_VERSION } from '../config/payment.js';
import { getLeakFinderCopy } from '../config/leakFinderTranslations.js';
import '../styles/leak-finder-v562.css';

export default function DesktopPage({ setPage }) {
  const { language } = useLanguage();
  const L = getLeakFinderCopy(language);

  const previewMetrics = [
    { value: '75', label: L.metricHands },
    { value: '14', label: L.metricReview },
    { value: '8', label: L.metricErrors },
    { value: '53', label: L.metricVariance },
  ];

  const leakTypes = [
    { icon: Target, title: L.leak1Title, text: L.leak1Text },
    { icon: Activity, title: L.leak2Title, text: L.leak2Text },
    { icon: BarChart3, title: L.leak3Title, text: L.leak3Text },
    { icon: AlertTriangle, title: L.leak4Title, text: L.leak4Text },
    { icon: Brain, title: L.leak5Title, text: L.leak5Text },
    { icon: TrendingUp, title: L.leak6Title, text: L.leak6Text },
  ];

  const workflow = [
    { icon: FileText, title: L.step1Title, text: L.step1Text },
    { icon: ListChecks, title: L.step2Title, text: L.step2Text },
    { icon: History, title: L.step3Title, text: L.step3Text },
    { icon: Download, title: L.step4Title, text: L.step4Text },
  ];

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
            <MonitorDown size={14} /> {L.heroEyebrow}
          </span>

          <h2>{L.title}</h2>
          <p>{L.subtitle}</p>

          <div className="leak-pro-actions leak-pro-actions-strong">
            <button className="download-primary-cta" type="button" onClick={startDesktopDownload}>
              <Download size={18} />
              {L.download}
            </button>

            <button className="secondary-action" type="button" onClick={scrollToPreview}>
              {L.previewCta}
            </button>

            {typeof setPage === 'function' && (
              <button className="ghost-action" type="button" onClick={() => setPage('tester')}>
                {L.tryAnalyzer} <ArrowRight size={16} />
              </button>
            )}
          </div>

          <div className="leak-trust-row">
            <span>
              <CheckCircle2 size={14} /> {L.trust1}
            </span>
            <span>
              <CheckCircle2 size={14} /> {L.trust2}
            </span>
            <span>
              <CheckCircle2 size={14} /> {L.trust3}
            </span>
          </div>
        </div>

        <div className="leak-pro-device leak-pro-device-clean" id="leak-report-preview">
          <div className="device-topline">
            <span>
              <Zap size={14} /> {L.previewEyebrow}
            </span>
            <strong>{L.previewBadge}</strong>
          </div>

          <div className="device-main-score">
            <span>{L.mainLeakLabel}</span>
            <strong>{L.mainLeakValue}</strong>
            <p>{L.mainLeakText}</p>
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
              <AlertTriangle size={15} /> {L.rowHigh}
            </div>
            <div className="risk-mid">
              <Clock3 size={15} /> {L.rowMid}
            </div>
            <div className="risk-good">
              <ShieldCheck size={15} /> {L.rowGood}
            </div>
          </div>
        </div>
      </div>

      <section className="desktop-download-strip">
        <div className="desktop-download-copy">
          <span className="eyebrow">
            <Download size={14} /> {L.downloadEyebrow}
          </span>
          <h3>{L.downloadTitle}</h3>
          <p>{L.downloadText}</p>
        </div>

        <div className="desktop-download-actions">
          <div className="desktop-download-badges">
            <span><CheckCircle2 size={14} /> {L.badge1}</span>
            <span><CheckCircle2 size={14} /> {L.badge2}</span>
            <span><CheckCircle2 size={14} /> {L.badge3}</span>
            <span><CheckCircle2 size={14} /> {L.badge4}</span>
          </div>

          <button className="download-primary-cta large" type="button" onClick={startDesktopDownload}>
            <Download size={18} />
            {L.download}
          </button>
        </div>
      </section>

      <section className="leak-section">
        <div className="section-header compact">
          <div>
            <span className="eyebrow">
              <Brain size={14} /> {L.detectEyebrow}
            </span>
            <h2>{L.detectTitle}</h2>
            <p>{L.detectText}</p>
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
              <ListChecks size={14} /> {L.workflowEyebrow}
            </span>
            <h2>{L.workflowTitle}</h2>
            <p>{L.workflowText}</p>
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
        <p>{L.disclaimer}</p>
      </div>

      <div className="leak-bottom-cta">
        <div>
          <span>{L.bottomSmall.replace('{version}', SITE_VERSION)}</span>
          <h3>{L.bottomTitle}</h3>
          <p>{L.bottomText}</p>
        </div>

        <button className="download-primary-cta" type="button" onClick={startDesktopDownload}>
          <Download size={18} />
          {L.download}
        </button>
      </div>
    </section>
  );
}

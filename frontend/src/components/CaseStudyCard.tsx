import { ExternalLink } from 'lucide-react';
import MetricBlock from './MetricBlock';

interface CaseStudy {
  title: string;
  industry: string;
  market?: string;
  budget: string;
  platforms: string[];
  objective: string;
  strategy: string[];
  results: string[];
  metrics: { value: string; label: string; highlight?: boolean }[];
  logoUrl?: string;
  websiteUrl?: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="bg-white border border-divider rounded-lg overflow-hidden shadow-xs hover:shadow-sm transition-shadow flex flex-col">
      {/* Card Header */}
      <div className="bg-navy px-6 py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {study.logoUrl && (
              <div className="mb-2">
                <img
                  src={study.logoUrl}
                  alt={`${study.title} logo`}
                  className="h-8 w-auto max-w-[140px] object-contain brightness-0 invert opacity-90"
                />
              </div>
            )}
            <h3 className="text-lg font-bold text-white leading-tight">{study.title}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
              <span className="text-xs text-white/70 font-medium">{study.industry}</span>
              {study.market && (
                <span className="text-xs text-white/60">📍 {study.market}</span>
              )}
            </div>
          </div>
          {study.websiteUrl && (
            <a
              href={study.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors shrink-0 mt-0.5 group"
              title="Visit website"
            >
              <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Visit</span>
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Meta info */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-1">Budget</p>
            <p className="text-sm font-medium text-ink">{study.budget}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-1">Platforms</p>
            <div className="flex flex-wrap gap-1">
              {study.platforms.map((p) => (
                <span key={p} className="text-xs bg-surface border border-divider rounded px-2 py-0.5 text-ink font-medium">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Objective */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-1.5">Objective</p>
          <p className="text-sm text-ink leading-relaxed">{study.objective}</p>
        </div>

        {/* Strategy */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-2">Strategy</p>
          <ul className="space-y-1.5">
            {study.strategy.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        {study.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {study.metrics.map((m, i) => (
              <MetricBlock
                key={i}
                value={m.value}
                label={m.label}
                variant={m.highlight ? 'navy' : 'light'}
              />
            ))}
          </div>
        )}

        {/* Results */}
        <div className="bg-surface border-l-4 border-navy rounded-r px-4 py-3 mt-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy mb-2">Results</p>
          <ul className="space-y-1.5">
            {study.results.map((result, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ink leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" />
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* Website link (footer) */}
        {study.websiteUrl && (
          <div className="mt-4 pt-4 border-t border-divider">
            <a
              href={study.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-navy hover:text-navy/70 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {study.websiteUrl.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

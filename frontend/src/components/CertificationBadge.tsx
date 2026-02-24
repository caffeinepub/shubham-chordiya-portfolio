import { Award } from 'lucide-react';

interface CertificationBadgeProps {
  name: string;
  issuer: string;
}

export default function CertificationBadge({ name, issuer }: CertificationBadgeProps) {
  return (
    <div className="flex items-center gap-3 bg-white border border-divider rounded px-4 py-3 shadow-xs">
      <div className="flex-shrink-0 w-8 h-8 bg-navy/8 rounded flex items-center justify-center">
        <Award size={16} className="text-navy" />
      </div>
      <div>
        <p className="text-sm font-semibold text-ink leading-tight">{name}</p>
        <p className="text-xs text-slate mt-0.5">{issuer}</p>
      </div>
    </div>
  );
}

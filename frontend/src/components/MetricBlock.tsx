interface MetricBlockProps {
  value: string;
  label: string;
  variant?: 'navy' | 'light' | 'outline';
}

export default function MetricBlock({ value, label, variant = 'navy' }: MetricBlockProps) {
  if (variant === 'light') {
    return (
      <div className="bg-navy/6 border border-navy/15 rounded px-4 py-3 text-center">
        <div className="text-xl font-bold text-navy leading-tight">{value}</div>
        <div className="text-xs text-slate mt-0.5 font-medium">{label}</div>
      </div>
    );
  }

  if (variant === 'outline') {
    return (
      <div className="border-2 border-navy rounded px-4 py-3 text-center">
        <div className="text-xl font-bold text-navy leading-tight">{value}</div>
        <div className="text-xs text-slate mt-0.5 font-medium">{label}</div>
      </div>
    );
  }

  return (
    <div className="bg-navy rounded px-4 py-3 text-center">
      <div className="text-xl font-bold text-white leading-tight">{value}</div>
      <div className="text-xs text-white/70 mt-0.5 font-medium">{label}</div>
    </div>
  );
}

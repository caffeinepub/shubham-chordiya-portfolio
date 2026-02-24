import { SiGoogleads, SiMeta, SiLinkedin, SiGoogleanalytics } from 'react-icons/si';
import { BarChart2, Target, TrendingUp, Users, FlaskConical, DollarSign, FileText, MessageSquare, Layers, Globe, Tag, Eye } from 'lucide-react';

const platformSkills = [
  {
    name: 'Google Ads',
    sub: 'Search, Shopping, Display, YouTube, PMax',
    icon: <SiGoogleads size={22} className="text-[#4285F4]" />,
  },
  {
    name: 'Meta Ads',
    sub: 'Facebook & Instagram',
    icon: <SiMeta size={22} className="text-[#0866FF]" />,
  },
  {
    name: 'LinkedIn Ads',
    sub: 'B2B & Professional Targeting',
    icon: <SiLinkedin size={22} className="text-[#0A66C2]" />,
  },
  {
    name: 'Quora Ads',
    sub: 'Intent-Based Discovery',
    icon: (
      <span className="w-[22px] h-[22px] flex items-center justify-center font-bold text-[#B92B27] text-base leading-none">Q</span>
    ),
  },
];

const analyticsSkills = [
  { name: 'Google Analytics 4', sub: 'GA4', icon: <SiGoogleanalytics size={20} className="text-[#E37400]" /> },
  { name: 'Microsoft Clarity', sub: 'Heatmaps & Session Recording', icon: <Eye size={20} className="text-navy" /> },
  { name: 'Looker Studio', sub: 'Data Visualization & Reporting', icon: <BarChart2 size={20} className="text-navy" /> },
  { name: 'Agency Analytics', sub: 'Client Reporting Dashboards', icon: <FileText size={20} className="text-navy" /> },
  { name: 'Advanced Excel', sub: 'Data Analysis & Modeling', icon: <Layers size={20} className="text-navy" /> },
  { name: 'Conversion Tracking', sub: 'GTM, Pixel, CAPI', icon: <Tag size={20} className="text-navy" /> },
];

const performanceSkills = [
  { name: 'Funnel Strategy Design', icon: <Target size={18} className="text-navy" /> },
  { name: 'Campaign Scaling Frameworks', icon: <TrendingUp size={18} className="text-navy" /> },
  { name: 'A/B Testing', icon: <FlaskConical size={18} className="text-navy" /> },
  { name: 'ROAS & CPL Optimization', icon: <DollarSign size={18} className="text-navy" /> },
  { name: 'Reporting & Dashboarding', icon: <BarChart2 size={18} className="text-navy" /> },
];

const professionalSkills = [
  { name: 'Client Communication', icon: <MessageSquare size={18} className="text-navy" /> },
  { name: 'Strategic Planning', icon: <Target size={18} className="text-navy" /> },
  { name: 'Budget Allocation', icon: <DollarSign size={18} className="text-navy" /> },
  { name: 'Cross-functional Collaboration', icon: <Users size={18} className="text-navy" /> },
  { name: 'Global Market Experience', icon: <Globe size={18} className="text-navy" /> },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/hero-bg.dim_1440x500.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">Open to Opportunities</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Performance Marketing Leader Driving Scalable & Profitable Growth{' '}
              <span className="text-white/60 font-normal text-2xl sm:text-3xl lg:text-4xl block mt-2">| 6+ Years of Experience</span>
            </h1>

            <p className="text-lg text-white/75 font-medium mb-6 leading-relaxed">
              Specializing in Google Ads, Meta Ads, and data-driven acquisition systems across global markets.
            </p>

            <p className="text-base text-white/60 leading-relaxed max-w-2xl">
              I am a results-driven performance marketer with over six years of experience building scalable acquisition systems across e-commerce, real estate, fintech, healthcare, QSR, SaaS, and media industries. I have managed advertising budgets ranging from ₹500/day to ₹50,000/day across India, USA, Canada, and Australia.
            </p>
            <p className="text-base text-white/60 leading-relaxed max-w-2xl mt-3">
              My expertise includes high-intent search capture, competitor interception strategies, funnel optimization, advanced conversion tracking, and sustainable campaign scaling.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
              {[
                { value: '6+', label: 'Years Experience' },
                { value: '4', label: 'Global Markets' },
                { value: '10+', label: 'Industries' },
                { value: '14×', label: 'Max Budget Scale' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/8 border border-white/15 rounded px-4 py-3 text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/55 mt-0.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate mb-2">Expertise</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-ink">Core Competencies</h2>
            <div className="w-12 h-0.5 bg-navy mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Advertising Platforms */}
            <div className="bg-white border border-divider rounded-lg p-6 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-5 flex items-center gap-2">
                <span className="w-1 h-4 bg-navy rounded-full inline-block" />
                Advertising Platforms
              </h3>
              <div className="space-y-3">
                {platformSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 rounded bg-surface border border-divider/60 hover:border-navy/20 transition-colors">
                    <div className="w-9 h-9 flex items-center justify-center bg-white border border-divider rounded flex-shrink-0">
                      {skill.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{skill.name}</p>
                      <p className="text-xs text-slate">{skill.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics & Tracking */}
            <div className="bg-white border border-divider rounded-lg p-6 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-5 flex items-center gap-2">
                <span className="w-1 h-4 bg-navy rounded-full inline-block" />
                Analytics & Tracking
              </h3>
              <div className="space-y-3">
                {analyticsSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 rounded bg-surface border border-divider/60 hover:border-navy/20 transition-colors">
                    <div className="w-9 h-9 flex items-center justify-center bg-white border border-divider rounded flex-shrink-0">
                      {skill.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{skill.name}</p>
                      <p className="text-xs text-slate">{skill.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance & Optimization */}
            <div className="bg-white border border-divider rounded-lg p-6 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-5 flex items-center gap-2">
                <span className="w-1 h-4 bg-navy rounded-full inline-block" />
                Performance & Optimization
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {performanceSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 rounded bg-surface border border-divider/60 hover:border-navy/20 transition-colors">
                    <div className="w-8 h-8 flex items-center justify-center bg-navy/8 rounded flex-shrink-0">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-ink">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bg-white border border-divider rounded-lg p-6 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-5 flex items-center gap-2">
                <span className="w-1 h-4 bg-navy rounded-full inline-block" />
                Professional Skills
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {professionalSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 rounded bg-surface border border-divider/60 hover:border-navy/20 transition-colors">
                    <div className="w-8 h-8 flex items-center justify-center bg-navy/8 rounded flex-shrink-0">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-ink">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

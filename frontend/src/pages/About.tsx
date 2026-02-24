import MetricBlock from '../components/MetricBlock';
import CertificationBadge from '../components/CertificationBadge';
import { Target, Crosshair, Layers } from 'lucide-react';

const strategicPillars = [
  {
    icon: <Target size={22} className="text-navy" />,
    title: 'Intent-Based Targeting',
    description:
      'Capturing bottom-funnel demand through high-intent keyword and placement strategies. Focusing on users who are actively searching for solutions, ensuring maximum conversion efficiency.',
  },
  {
    icon: <Crosshair size={22} className="text-navy" />,
    title: 'Competitor Interception',
    description:
      'Leveraging comparison-stage behavior to capture decision-ready users. Positioning campaigns at the exact moment prospects are evaluating alternatives, intercepting high-value traffic.',
  },
  {
    icon: <Layers size={22} className="text-navy" />,
    title: 'Funnel Engineering',
    description:
      'Designing structured awareness, retargeting, and conversion layers to maximize efficiency. Building cohesive multi-stage systems that guide prospects from discovery to acquisition.',
  },
];

const achievements = [
  { value: '14×', label: 'Budget Scaled While Maintaining Profitability' },
  { value: '70%+', label: 'CPL Reduction Through Targeting Refinement' },
  { value: '1,000+', label: 'Fintech Signups Under ₹50 Per Acquisition' },
  { value: '<₹6', label: 'YouTube Cost Per Subscriber at ₹50K/day Budget' },
  { value: '₹1Cr+', label: 'Monthly Revenue Scaled for QSR Brand' },
];

const certifications = [
  { name: 'Google Ads Certified', issuer: 'Google' },
  { name: 'Microsoft Ads Certified', issuer: 'Microsoft' },
  { name: 'GA4 Certified', issuer: 'Google Analytics' },
  { name: 'Google Tag Manager Certified', issuer: 'Google' },
];

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-14 lg:py-18">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">About</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-white">Shubham Chordiya</h1>
          <p className="text-white/65 mt-2 text-base">Performance Marketing Specialist · 6+ Years</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-14 lg:py-18 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* Profile Photo */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start">
              <div className="w-56 sm:w-64 lg:w-72 overflow-hidden rounded-lg shadow-md border border-divider">
                <img
                  src="/assets/generated/profile-photo.dim_600x800.png"
                  alt="Shubham Chordiya"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Bio + Sidebar */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate mb-3">Background</p>
                  <h2 className="text-2xl font-bold text-ink mb-5">About Me</h2>
                </div>
                <p className="text-base text-ink/80 leading-relaxed">
                  I am a Performance Marketing Specialist with 6+ years of hands-on experience in planning, executing, and optimizing paid acquisition campaigns across Google Ads, Meta Ads, YouTube, Shopping, and multi-channel growth funnels.
                </p>
                <p className="text-base text-ink/80 leading-relaxed">
                  I have worked across international markets including USA, Canada, Australia, and India, managing both e-commerce scaling and high-intent lead generation systems.
                </p>
                <p className="text-base text-ink/80 leading-relaxed">
                  My work spans diverse industries — e-commerce, real estate, fintech, healthcare, QSR, SaaS, and media — giving me a broad strategic perspective and the ability to adapt acquisition frameworks to any vertical or market.
                </p>
              </div>

              {/* Sidebar stats */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate mb-4">At a Glance</p>
                {[
                  { label: 'Experience', value: '6+ Years' },
                  { label: 'Markets', value: 'India, USA, Canada, Australia' },
                  { label: 'Industries', value: '8+ Verticals' },
                  { label: 'Specialization', value: 'Paid Acquisition & Growth' },
                ].map((item) => (
                  <div key={item.label} className="bg-white border border-divider rounded px-4 py-3 shadow-xs">
                    <p className="text-xs text-slate font-medium">{item.label}</p>
                    <p className="text-sm font-semibold text-ink mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-14 lg:py-18 bg-surface border-t border-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate mb-2">Methodology</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-ink">Strategic Approach</h2>
            <div className="w-12 h-0.5 bg-navy mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategicPillars.map((pillar) => (
              <div key={pillar.title} className="bg-white border border-divider rounded-lg p-6 shadow-xs hover:border-navy/25 transition-colors">
                <div className="w-10 h-10 bg-navy/8 rounded flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-ink mb-3">{pillar.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Achievements */}
      <section className="py-14 lg:py-18 bg-navy">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">Track Record</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">Career Achievements</h2>
            <div className="w-12 h-0.5 bg-white/30 mt-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {achievements.map((a) => (
              <div key={a.label} className="bg-white/8 border border-white/15 rounded-lg px-4 py-5 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white leading-tight">{a.value}</div>
                <div className="text-xs text-white/60 mt-2 leading-snug font-medium">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-lg p-5">
            <p className="text-sm text-white/70 leading-relaxed">
              Throughout my career, I have consistently delivered measurable results — scaling budgets up to 14× while maintaining profitability, reducing CPL by over 70% through targeting refinement, and building hyperlocal offline scaling systems for QSR brands.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-14 lg:py-18 bg-surface border-t border-divider">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate mb-2">Credentials</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-ink">Certifications</h2>
            <div className="w-12 h-0.5 bg-navy mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <CertificationBadge key={cert.name} name={cert.name} issuer={cert.issuer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

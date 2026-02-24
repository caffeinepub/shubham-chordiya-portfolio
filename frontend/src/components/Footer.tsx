import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'shubham-chordiya-portfolio');

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Identity */}
          <div>
            <p className="text-lg font-bold tracking-tight">Shubham Chordiya</p>
            <p className="text-sm text-white/70 mt-0.5">Performance Marketing & Growth Specialist</p>
            <p className="text-xs text-white/50 mt-2 max-w-sm">
              Building scalable, profitable acquisition systems across global markets.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Navigation</p>
            {['Home', 'About', 'Portfolio'].map((page) => (
              <a
                key={page}
                href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {page}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {year} Shubham Chordiya. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with <Heart size={12} className="text-rose-400 fill-rose-400 mx-0.5" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

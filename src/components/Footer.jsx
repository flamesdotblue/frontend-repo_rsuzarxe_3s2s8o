import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="legal" className="relative bg-[#0B0B0C] border-t border-[#C9A94E]/20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-x-0 -top-24 h-24" style={{
          background: 'radial-gradient(600px 80px at 50% 100%, rgba(201,169,78,0.18), transparent 60%)'
        }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#C9A94E] to-[#AD8A43] shadow-[0_0_20px_rgba(201,169,78,0.6)]" />
            <span className="tracking-widest font-semibold text-[#C9A94E]">OutRich</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-300">
            <a href="#about" className="hover:text-[#C9A94E]">About</a>
            <span className="text-zinc-500">•</span>
            <a href="#membership" className="hover:text-[#C9A94E]">Membership</a>
            <span className="text-zinc-500">•</span>
            <a href="#subscribe" className="hover:text-[#C9A94E]">Subscribe</a>
            <span className="text-zinc-500">•</span>
            <a href="#privacy" className="hover:text-[#C9A94E]">Privacy</a>
            <span className="text-zinc-500">•</span>
            <a href="#terms" className="hover:text-[#C9A94E]">Terms</a>
          </nav>
          <div className="flex items-center gap-4">
            <a aria-label="Instagram" href="#" className="text-zinc-300 hover:text-[#C9A94E]">
              <Instagram size={18} />
            </a>
            <a aria-label="LinkedIn" href="#" className="text-zinc-300 hover:text-[#C9A94E]">
              <Linkedin size={18} />
            </a>
            <a aria-label="X" href="#" className="text-zinc-300 hover:text-[#C9A94E]">
              <Twitter size={18} />
            </a>
            <a aria-label="YouTube" href="#" className="text-zinc-300 hover:text-[#C9A94E]">
              <Youtube size={18} />
            </a>
          </div>
          <p className="text-xs text-zinc-500">
            © 2025 OutRich Community | Rise Beyond Ordinary.
          </p>
        </div>
      </div>
    </footer>
  );
}

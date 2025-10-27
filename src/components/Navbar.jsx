import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Membership', href: '#membership' },
  { label: 'Community', href: '#community' },
  { label: 'Subscribe', href: '#subscribe' },
  { label: 'Contact', href: '#contact' },
  { label: 'Legal', href: '#legal' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      scrolled ? 'bg-[#0B0B0C]/80 backdrop-blur-md' : 'bg-transparent'
    }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#C9A94E] to-[#AD8A43] shadow-[0_0_20px_rgba(201,169,78,0.6)]" />
            <span className="text-sm sm:text-base tracking-widest font-semibold text-[#C9A94E]">OutRich</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-200 hover:text-[#C9A94E] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#membership"
              className="ml-2 inline-flex items-center rounded-full border border-[#C9A94E]/40 px-4 py-1.5 text-sm text-zinc-100 shadow-[0_0_20px_rgba(201,169,78,0.15)] hover:shadow-[0_0_30px_rgba(201,169,78,0.35)] hover:border-[#C9A94E]/60 transition-all"
              style={{ background: 'linear-gradient(135deg, rgba(201,169,78,0.12), rgba(173,138,67,0.08))' }}
            >
              Apply
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md border border-[#C9A94E]/40 text-zinc-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-lg border border-[#C9A94E]/30 p-3 bg-[#0B0B0C]/80">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-zinc-200 hover:bg-[#1B1B1E] hover:text-[#C9A94E]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#membership"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md border border-[#C9A94E]/40 px-4 py-2 text-sm text-zinc-100"
                style={{ background: 'linear-gradient(135deg, rgba(201,169,78,0.12), rgba(173,138,67,0.08))' }}
              >
                Apply
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A94E]/30 to-transparent" />
    </header>
  );
}

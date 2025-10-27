import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    const valid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    if (!valid) {
      setError('Please enter a valid email address.');
      return;
    }
    // Simulate success for now; integrate with API later.
    setSubmitted(true);
  };

  return (
    <section id="subscribe" className="relative bg-[#0B0B0C] py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -inset-40 opacity-70" style={{
          background: 'radial-gradient(700px 300px at 50% 0%, rgba(201,169,78,0.16), transparent 60%)'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(173,138,67,0.12), transparent 30%)'
        }} />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-zinc-100" style={{ fontFamily: 'Cinzel Decorative, serif' }}>Stay Connected with OutRich</h2>
        <p className="mt-3 text-zinc-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Be the first to receive updates, announcements, and insider access.
        </p>

        <div className="mx-auto mt-8 rounded-2xl border border-[#C9A94E]/30 bg-[#101012]/70 p-6 shadow-[0_0_40px_rgba(201,169,78,0.12)]">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                onSubmit={onSubmit}
                className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
              >
                <div className="relative">
                  <Mail size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#C9A94E]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-full border border-[#C9A94E]/40 bg-transparent py-3 pl-10 pr-4 text-zinc-100 placeholder:text-zinc-500 focus:border-[#C9A94E] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full px-6 py-3 text-sm font-medium text-black shadow-[0_0_25px_rgba(201,169,78,0.35)] hover:shadow-[0_0_40px_rgba(201,169,78,0.55)] transition-shadow"
                  style={{ background: 'linear-gradient(135deg, #C9A94E, #AD8A43)' }}
                >
                  Subscribe Now
                </button>
                {error && <p className="col-span-full text-left text-sm text-red-400">{error}</p>}
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="py-6"
              >
                <p className="text-lg text-[#C9A94E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Welcome to OutRich — Rise Beyond Ordinary!
                </p>
                <p className="mt-1 text-sm text-zinc-400">You will receive our next insider update.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

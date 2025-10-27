import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0B0B0C]">
      {/* Gold particle glow backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -inset-40 opacity-70" style={{
          background: 'radial-gradient(800px 400px at 50% 30%, rgba(201,169,78,0.15), transparent 60%)'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(201,169,78,0.12) 0, transparent 25%), radial-gradient(circle at 90% 20%, rgba(173,138,67,0.10) 0, transparent 22%), radial-gradient(circle at 50% 90%, rgba(201,169,78,0.08) 0, transparent 25%)'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide text-zinc-100"
          style={{ fontFamily: 'Cinzel Decorative, serif' }}
        >
          Rise Beyond Ordinary.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-zinc-300"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          A community for those who don’t follow trends — they set them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#membership"
            className="rounded-full px-6 py-3 text-sm font-medium text-black shadow-[0_0_25px_rgba(201,169,78,0.35)] hover:shadow-[0_0_40px_rgba(201,169,78,0.55)] transition-shadow"
            style={{ background: 'linear-gradient(135deg, #C9A94E, #AD8A43)' }}
          >
            Join the Movement
          </a>
          <a
            href="#about"
            className="rounded-full px-6 py-3 text-sm font-medium text-zinc-100 border border-[#C9A94E]/50 hover:border-[#C9A94E] transition-colors"
            style={{ background: 'linear-gradient(135deg, rgba(201,169,78,0.12), rgba(173,138,67,0.08))' }}
          >
            Discover the Vision
          </a>
        </motion.div>
      </div>

      {/* Crown silhouette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 opacity-20" aria-hidden>
        <div className="mx-auto h-full max-w-5xl" style={{
          background: 'radial-gradient(400px 120px at 50% 100%, rgba(201,169,78,0.2), transparent 60%)'
        }} />
      </div>
    </section>
  );
}

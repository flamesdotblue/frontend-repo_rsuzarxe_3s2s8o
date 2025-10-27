import { motion } from 'framer-motion';
import { Crown, Infinity, Shield } from 'lucide-react';

const values = [
  {
    title: 'Empowerment',
    Icon: Crown,
    desc: 'Fueling leaders with knowledge, access, and conviction to build empires.',
  },
  {
    title: 'Connection',
    Icon: Infinity,
    desc: 'Where creators, founders, and investors converge to collaborate with intention.',
  },
  {
    title: 'Legacy',
    Icon: Shield,
    desc: 'Crafting a timeless network that multiplies value across generations.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#0B0B0C] py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(800px 300px at 0% 10%, rgba(201,169,78,0.12), transparent 60%)'
        }} />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#C9A94E]/20"
          style={{ background: 'linear-gradient(135deg, rgba(201,169,78,0.08), rgba(173,138,67,0.06))' }}
        >
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,78,0.15),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(173,138,67,0.12),transparent_40%)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-zinc-100" style={{ fontFamily: 'Cinzel Decorative, serif' }}>OutRich is a Statement.</h2>
          <p className="mt-4 text-zinc-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
            A declaration that ambition deserves luxury, and connection deserves legacy. Here, entrepreneurs, influencers, and creators converge to build empires together.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {values.map(({ title, Icon, desc }) => (
              <div
                key={title}
                className="group rounded-xl border border-[#C9A94E]/20 bg-[#0E0E10]/60 p-4 transition-all hover:border-[#C9A94E]/50 hover:shadow-[0_0_30px_rgba(201,169,78,0.25)]"
              >
                <Icon className="text-[#C9A94E] mb-2" size={22} />
                <h3 className="text-zinc-100 font-medium">{title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#membership"
              className="inline-flex items-center rounded-full border border-[#C9A94E]/50 px-5 py-2 text-sm text-zinc-100 hover:border-[#C9A94E]"
              style={{ background: 'linear-gradient(135deg, rgba(201,169,78,0.12), rgba(173,138,67,0.08))' }}
            >
              Apply for Membership
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

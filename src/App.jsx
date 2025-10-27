import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';

function SectionShell({ id, title, subtitle }) {
  return (
    <section id={id} className="bg-[#0B0B0C] py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-zinc-100" style={{ fontFamily: 'Cinzel Decorative, serif' }}>{title}</h2>
        {subtitle && (
          <p className="mt-3 text-zinc-300" style={{ fontFamily: 'Poppins, sans-serif' }}>{subtitle}</p>
        )}
        <div className="mt-8 rounded-2xl border border-[#C9A94E]/20 bg-[#101012]/60 p-8 text-zinc-400">
          <p className="mx-auto max-w-2xl">
            Crafted for a royal, modern experience. This section is a preview shell you can expand into full content blocks (events, forms, galleries) while keeping the luxury black-gold aesthetic consistent.
          </p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white selection:bg-[#C9A94E] selection:text-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <AboutSection />

        {/* Membership preview */}
        <SectionShell
          id="membership"
          title="Become a Member"
          subtitle="Step into a world where ambition meets influence."
        />

        {/* Community / Events preview */}
        <SectionShell
          id="community"
          title="The Empire of Visionaries"
          subtitle="Where collaboration meets celebration."
        />

        {/* Subscribe feature (functional with validation + success state) */}
        <SubscribeSection />

        {/* Contact preview */}
        <SectionShell
          id="contact"
          title="Every empire begins with a conversation."
          subtitle="Reach out and our team will connect with you."
        />

        {/* Legal pages shells */}
        <SectionShell id="privacy" title="Privacy Policy" />
        <SectionShell id="terms" title="Terms of Use" />
      </main>
      <Footer />
    </div>
  );
}

export default App;

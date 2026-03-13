import Image from 'next/image';

const ServiceCard = ({ icon, title, description, color }: { icon: string, title: string, description: string, color: string }) => (
  <div className="relative group p-12 rounded-[40px] bg-black/40 border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-xl overflow-hidden">
    <div className={`absolute -right-10 -top-10 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color === 'blue' ? 'bg-blue-600' : 'bg-yellow-500'}`}></div>
    <div className="relative z-10">
      <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-3xl font-black mb-4 tracking-tighter text-white uppercase italic">{title}</h3>
      <p className="text-zinc-300 leading-relaxed text-lg font-medium">{description}</p>
      <div className={`mt-8 h-1.5 w-16 ${color === 'blue' ? 'bg-blue-600' : 'bg-[#f1c40f]'} rounded-full`}></div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30">
      
      {/* --- LE FOND FIXE ET ÉCLAIRCI --- */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-70 scale-100" // Opacité montée à 60% pour éclaircir
          priority
        />
        {/* Overlay pour lier le tout sans boucher les détails */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5 px-10 py-6">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Image src="/text-logo.png" alt="VOSG'OC" width={280} height={80} className="h-10 md:h-12 w-auto object-contain" />
            <span className="hidden lg:block text-[11px] font-black uppercase tracking-[0.6em] text-[#f1c40f] border-l border-white/10 pl-6">
              L'énergie d'ici
            </span>
          </div>
          <div className="hidden md:flex gap-12 items-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 uppercase">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* CONTENU (Scrollable au-dessus du fond fixe) */}
      <div className="relative z-10">
        
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto text-center mt-20">
            <div className="mb-10 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full scale-150"></div>
                <Image 
                  src="/blason.png" 
                  alt="Blason" 
                  width={350} 
                  height={350} 
                  className="relative h-48 md:h-64 w-auto object-contain mix-blend-lighten"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-black/60 mb-12 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-100">Disponibilité Immédiate</span>
            </div>

            <h1 className="text-6xl md:text-[115px] font-[950] leading-[0.82] mb-12 tracking-[-0.05em] uppercase italic">
              <span className="block">La force des</span>
              <span className="block">origines,</span>
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] via-[#fff3ad] to-[#f1c40f]">
                L'énergie d'ici.
              </span>
            </h1>

            <p className="text-zinc-200 text-xl md:text-2xl max-w-3xl mx-auto mb-20 leading-relaxed font-semibold px-4 drop-shadow-md">
              L'expertise vosgienne rencontre la convivialité occitane pour vos projets d'électricité et climatisation.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button className="w-full sm:w-auto bg-[#f1c40f] hover:bg-yellow-400 text-black font-black py-7 px-20 rounded-[24px] transition-all shadow-xl uppercase text-sm tracking-[0.2em]">
                Devis gratuit
              </button>
              <button className="w-full sm:w-auto border-2 border-white/20 bg-black/20 hover:bg-black/40 py-7 px-20 rounded-[24px] font-black transition-all text-sm uppercase tracking-[0.2em]">
                Nos réalisations
              </button>
            </div>
          </div>
        </section>

        {/* SERVICES (Avec fond qui laisse transparaître l'image) */}
        <section id="services" className="py-40 px-10">
           <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
              <ServiceCard 
                icon="⚡"
                title="Électricité"
                description="Solutions complètes en neuf et rénovation. Mise en conformité NFC 15-100 et dépannage."
                color="blue"
              />
              <ServiceCard 
                icon="❄️"
                title="Climatisation"
                description="Installation de pompes à chaleur et climatisations réversibles haute performance."
                color="yellow"
              />
           </div>
        </section>

        {/* PIED DE PAGE SIMPLE POUR FINIR PRO */}
        <footer className="py-20 text-center border-t border-white/5 bg-black/80 backdrop-blur-md">
          <Image src="/text-logo.png" alt="VOSG'OC" width={150} height={50} className="mx-auto opacity-50 mb-6" />
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
            © 2026 VOSG'OC ELEC — Tous droits réservés
          </p>
        </footer>
      </div>
    </main>
  );
}
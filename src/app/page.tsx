import Image from 'next/image';

const ServiceCard = ({ icon, title, items, color, technicalNote }: { icon: string, title: string, items: string[], color: string, technicalNote?: string }) => (
  <div className="relative group p-8 md:p-12 rounded-[40px] bg-black/40 border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-xl overflow-hidden flex flex-col h-full">
    <div className={`absolute -right-10 -top-10 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color === 'blue' ? 'bg-blue-600' : 'bg-yellow-500'}`}></div>
    <div className="relative z-10">
      <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-3xl font-black mb-4 tracking-tighter text-white uppercase italic">{title}</h3>
      <ul className="space-y-4 mb-8">
        {items.map((item, idx) => (
          <li key={idx} className="text-zinc-300 flex items-start gap-3 leading-tight">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${color === 'blue' ? 'bg-blue-500' : 'bg-yellow-500'}`} />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
      {technicalNote && (
        <div className="mt-auto p-4 rounded-2xl bg-white/5 border border-white/10 italic text-sm text-zinc-400">
          {technicalNote}
        </div>
      )}
      <div className={`mt-8 h-1.5 w-16 ${color === 'blue' ? 'bg-blue-600' : 'bg-[#f1c40f]'} rounded-full`} />
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
          <div className="hidden md:flex gap-12 items-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-100">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#zone" className="hover:text-white transition-colors">Secteur</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 uppercase">
              Contact
            </a>
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
                title="Électricité Générale & Industrielle"
                items={[
                  "Rénovation : Remise aux normes et modernisation (Matériel Legrand)",
                  "Neuf : Étude et réalisation selon la norme NF C 15-100",
                  "Industriel : Installations et maintenance avec Schneider Electric",
                  "Dépannage Urgent : Intervention prioritaire panne totale ou partielle"
                ]}
                color="blue"
              />
              <ServiceCard 
                icon="❄️"
                title="Génie Climatique & Clim"
                items={[
                  "Expertise en confort thermique et économies d'énergie",
                  "Pose de systèmes mono-split et multi-split",
                  "Partenaire Mitsubishi Electric, Toshiba, LG...",
                  "Maintenance & Entretien : Nettoyage et optimisation",
                  "Dépannage : Intervention rapide toutes pannes"
                ]}
                technicalNote="Détenteur de l’Attestation de Capacité (ADC) pour la manipulation des fluides frigorigènes."
                color="yellow"
              />
           </div>
        </section>

        {/* ZONE D'INTERVENTION */}
        <section id="zone" className="py-32 px-10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter">
              Secteur <span className="text-[#f1c40f]">d'intervention</span>
            </h2>
            <p className="text-zinc-300 text-lg mb-12 font-medium">
              Basé à Congénies, j'interviens sur un large secteur couvrant le Gard, l'Hérault et le Vaucluse.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-black uppercase tracking-widest text-white">
              {['Congénies', 'Bagnols-sur-Cèze', 'Montpellier', 'Alès', 'Avignon'].map((city) => (
                <span key={city} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 px-10 bg-zinc-900/50 backdrop-blur-md border-t border-white/5 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-16 uppercase italic">Contactez <span className="text-blue-500">Vosg'OC Elec</span></h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Téléphone</p>
                <a href="tel:0607505366" className="text-2xl font-black hover:text-[#f1c40f] transition-colors italic">06 07 50 53 66</a>
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">E-mail</p>
                <a href="mailto:vosgocelec@outlook.com" className="text-xl font-black hover:text-[#f1c40f] transition-colors break-all italic">vosgocelec@outlook.com</a>
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Siège Social</p>
                <p className="text-xl font-black italic">Congénies (30111)</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center border-t border-white/5 bg-black">
          <Image src="/text-logo.png" alt="VOSG'OC" width={150} height={50} className="mx-auto opacity-50 mb-6" />
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
            © 2026 VOSG'OC ELEC — Tous droits réservés
          </p>
        </footer>
      </div>
    </main>
  );
}
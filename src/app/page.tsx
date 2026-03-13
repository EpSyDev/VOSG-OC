"use client";

import { useState } from 'react';
import Image from 'next/image';

const ServiceCard = ({ icon, title, description, color, onClick }: { icon: string, title: string, description: string, color: string, onClick?: () => void }) => (
  <button onClick={onClick} className="w-full text-left relative group p-10 rounded-[40px] bg-black/40 border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-xl overflow-hidden focus:outline-none">
    <div className={`absolute -right-10 -top-10 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color === 'blue' ? 'bg-blue-600' : 'bg-yellow-500'}`}></div>
    <div className="relative z-10">
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-black mb-3 tracking-tighter text-white uppercase italic">{title}</h3>
      <p className="text-zinc-400 leading-relaxed font-medium">{description}</p>
      <div className={`mt-6 h-1 w-12 ${color === 'blue' ? 'bg-blue-600' : 'bg-[#f1c40f]'} rounded-full`}></div>
    </div>
  </button>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30">
      
      {/* FOND FIXE */}
      <div className="fixed inset-0 z-0">
        <Image src="/hero-bg.png" alt="Background" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      {/* NAVBAR (Épurée) */}
      <nav className="fixed w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5 px-10 py-6">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Image src="/text-logo.png" alt="VOSG'OC" width={280} height={80} className="h-10 md:h-12 w-auto object-contain" />
          <button onClick={() => toggleSection('contact')} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-2xl transition-all uppercase text-[10px] font-black tracking-widest shadow-lg shadow-blue-600/20">
            Contact
          </button>
        </div>
      </nav>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
          <div className="max-w-7xl mx-auto text-center">
            
            {/* BLASON */}
            <div className="mb-8 flex justify-center">
              <Image src="/blason.png" alt="Blason" width={300} height={300} className="h-40 md:h-52 w-auto object-contain mix-blend-lighten" />
            </div>

            {/* TITRE (Fixé pour éviter les coupures) */}
            <h1 className="text-5xl md:text-[90px] font-[950] leading-tight mb-12 tracking-[-0.03em] uppercase italic">
              La force des origines,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">
                l'énergie d'ici.
              </span>
            </h1>

            {/* LES 4 ONGLETS (GRILLE) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <button onClick={() => toggleSection('histoire')} className={`w-full sm:w-auto font-black py-6 px-16 rounded-[24px] shadow-xl uppercase text-xs tracking-widest transition-all duration-300 ${activeSection === 'contact' ? 'bg-green-500 text-white' : 'bg-[#f1c40f] text-black'}`}
              >
                Notre Histoire
              </button>
              <button onClick={() => toggleSection('quals')} className={`py-6 px-4 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all border ${activeSection === 'quals' ? 'bg-[#f1c40f] text-black border-[#f1c40f]' : 'bg-black/40 border-white/10 text-white hover:bg-white/5'}`}>
                Qualifications
              </button>
              <button onClick={() => toggleSection('projets')} className={`py-6 px-4 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all border ${activeSection === 'projets' ? 'bg-[#f1c40f] text-black border-[#f1c40f]' : 'bg-black/40 border-white/10 text-white hover:bg-white/5'}`}>
                Réalisations
              </button>
              <button onClick={() => toggleSection('contact')} className={`py-6 px-4 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all border ${activeSection === 'contact' ? 'bg-[#f1c40f] text-black border-[#f1c40f]' : 'bg-black/40 border-white/10 text-white hover:bg-white/5'}`}>
                Devis Gratuit
              </button>
            </div>
          </div>

          {/* ZONE DYNAMIQUE (Collée aux boutons) */}
          <div id="dynamic-content" className={`w-full max-w-5xl transition-all duration-500 ease-in-out ${activeSection ? 'opacity-100 translate-y-0 mt-12' : 'opacity-0 translate-y-10 pointer-events-none h-0'}`}>
            <div className="bg-black/60 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-3xl shadow-2xl relative">
              <button onClick={() => setActiveSection(null)} className="absolute top-6 right-8 text-zinc-500 hover:text-white text-xl">✕</button>

              {activeSection === 'histoire' && (
                <div className="animate-in fade-in slide-in-from-bottom-2">
                  <h2 className="text-3xl font-black uppercase italic mb-6 text-[#f1c40f]">Notre Histoire</h2>
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    VOSG'OC ELEC est née d'une fusion entre la rigueur technique des montagnes vosgiennes et le dynamisme ensoleillé de l'Occitanie. Fort de 15 ans d'expérience, nous mettons notre savoir-faire au service des particuliers et des professionnels. Une expertise forgée dans le froid du Nord-Est, adaptée à la chaleur du Sud.
                  </p>
                </div>
              )}

              {activeSection === 'quals' && (
                <div className="animate-in fade-in slide-in-from-bottom-2">
                  <h2 className="text-3xl font-black uppercase italic mb-8 text-blue-500">Qualifications & Agréments</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Qualifelec', 'Bornes IRVE', 'Habilitations BT/HT', 'RGE QualiPAC', 'Consuel', 'Sécurité Incendie'].map((q) => (
                      <div key={q} className="p-4 bg-white/5 rounded-2xl border border-white/5 font-bold uppercase tracking-widest text-[9px] text-center flex items-center justify-center aspect-square md:aspect-auto">
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'contact' && (
                <div className="animate-in fade-in slide-in-from-bottom-2">
                  <h2 className="text-3xl font-black uppercase italic mb-6">Contact & Devis</h2>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Nom" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#f1c40f] outline-none" />
                      <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#f1c40f] outline-none" />
                    </div>
                    <select className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 focus:border-[#f1c40f] outline-none text-zinc-400">
                      <option value="" disabled selected>Objet de la demande</option>
                      <option value="info">Demande d'informations</option>
                      <option value="rdv">Prise de Rendez-vous</option>
                      <option value="devis">Demande de devis gratuit</option>
                    </select>
                    <textarea placeholder="Votre message..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#f1c40f] outline-none"></textarea>
                    <button className="w-full bg-[#f1c40f] text-black font-black py-4 rounded-xl uppercase tracking-widest hover:bg-yellow-400 transition-all">
                      Envoyer
                    </button>
                  </form>
                </div>
              )}

              {activeSection === 'projets' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 text-center">
                  <h2 className="text-3xl font-black uppercase italic mb-8 text-white">Nos Réalisations</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="aspect-video bg-white/5 rounded-3xl border border-dashed border-white/10 flex items-center justify-center text-zinc-500 italic">Chantier Résidentiel - Montpellier</div>
                    <div className="aspect-video bg-white/5 rounded-3xl border border-dashed border-white/10 flex items-center justify-center text-zinc-500 italic">Installation IRVE - Nîmes</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-32 px-10">
           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
              <ServiceCard icon="⚡" title="Électricité" description="Installation, rénovation et mise aux normes." color="blue" onClick={() => toggleSection('contact')} />
              <ServiceCard icon="❄️" title="Climatisation" description="Pompes à chaleur et climatisations réversibles." color="yellow" onClick={() => toggleSection('contact')} />
           </div>
        </section>

        <footer className="py-20 text-center border-t border-white/5 bg-black/80">
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-black">© 2026 VOSG'OC ELEC</p>
        </footer>
      </div>
    </main>
  );
}

"use client";

import { useState } from 'react';
import Image from 'next/image';

// --- COMPOSANT SERVICE CARD ---
const ServiceCard = ({ icon, title, description, color, onClick }: { icon: string, title: string, description: string, color: 'green' | 'yellow', onClick?: () => void }) => (
  <button onClick={onClick} className="w-full text-left relative group p-10 rounded-[40px] bg-black/40 border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-xl overflow-hidden focus:outline-none">
    <div className={`absolute -right-10 -top-10 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color === 'green' ? 'bg-green-600' : 'bg-yellow-500'}`}></div>
    <div className="relative z-10">
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-black mb-3 tracking-tighter text-white uppercase italic">{title}</h3>
      <p className="text-zinc-400 leading-relaxed font-medium">{description}</p>
      <div className={`mt-6 h-1 w-12 ${color === 'green' ? 'bg-green-500' : 'bg-[#f1c40f]'} rounded-full`}></div>
    </div>
  </button>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30">
      
      {/* FOND FIXE */}
      <div className="fixed inset-0 z-0">
        <Image src="/hero-bg.png" alt="Background" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      {/* NAVBAR ÉPURÉE (Mode Luxe) */}
      <nav className="fixed w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5 px-10 py-6">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Image src="/text-logo.png" alt="VOSG'OC" width={280} height={80} className="h-10 md:h-12 w-auto object-contain" />
          
          <button 
            onClick={() => toggleSection('contact')} 
            className={`px-8 py-3 rounded-2xl transition-all uppercase text-[10px] font-black tracking-widest shadow-lg ${activeSection === 'contact' ? 'bg-green-600 shadow-green-600/20' : 'bg-blue-600 shadow-blue-600/20 hover:bg-blue-500'}`}
          >
            Contact
          </button>
        </div>
      </nav>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
          <div className="max-w-7xl mx-auto text-center mt-20">
            <div className="mb-10 flex justify-center">
              <Image src="/blason.png" alt="Blason" width={300} height={300} className="h-48 md:h-60 w-auto object-contain mix-blend-lighten" />
            </div>

            <h1 className="text-6xl md:text-[100px] font-[950] leading-[0.85] mb-12 tracking-[-0.05em] uppercase italic text-white">
              La force des <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">Origines.</span>
            </h1>

            <p className="text-zinc-200 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-semibold px-4 drop-shadow-md">
              L'expertise vosgienne rencontre la réactivité occitane pour vos projets d'électricité et climatisation.
            </p>

            {/* LES 4 ONGLETS REGROUPÉS (CHARTE JAUNE/VERT) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <button 
                onClick={() => toggleSection('histoire')} 
                className={`font-black py-5 px-6 rounded-2xl transition-all uppercase text-[10px] tracking-widest border-2 ${activeSection === 'histoire' ? 'bg-green-500 border-green-500 text-white' : 'bg-transparent border-[#f1c40f] text-[#f1c40f] hover:bg-[#f1c40f]/10'}`}
              >
                Notre Histoire
              </button>
              
              <button 
                onClick={() => toggleSection('quals')} 
                className={`font-black py-5 px-6 rounded-2xl transition-all uppercase text-[10px] tracking-widest border-2 ${activeSection === 'quals' ? 'bg-green-500 border-green-500 text-white' : 'bg-transparent border-[#f1c40f] text-[#f1c40f] hover:bg-[#f1c40f]/10'}`}
              >
                Qualifications
              </button>

              <button 
                onClick={() => toggleSection('projets')} 
                className={`font-black py-5 px-6 rounded-2xl transition-all uppercase text-[10px] tracking-widest border-2 ${activeSection === 'projets' ? 'bg-green-500 border-green-500 text-white' : 'bg-transparent border-[#f1c40f] text-[#f1c40f] hover:bg-[#f1c40f]/10'}`}
              >
                Réalisations
              </button>

              <button 
                onClick={() => toggleSection('contact')} 
                className={`font-black py-5 px-6 rounded-2xl transition-all uppercase text-[10px] tracking-widest border-2 ${activeSection === 'contact' ? 'bg-green-500 border-green-500 text-white' : 'bg-transparent border-[#f1c40f] text-[#f1c40f] hover:bg-[#f1c40f]/10'}`}
              >
                Devis Gratuit
              </button>
            </div>
          </div>
        </section>

        {/* ZONE DE CONTENU DYNAMIQUE */}
        <div id="dynamic-content" className={`transition-all duration-700 ease-in-out px-6 ${activeSection ? 'opacity-100 max-h-[2000px] py-10' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[50px] p-12 backdrop-blur-3xl shadow-2xl relative">
            <button onClick={() => setActiveSection(null)} className="absolute top-8 right-8 text-zinc-500 hover:text-white text-2xl">✕</button>

            {activeSection === 'histoire' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-4xl font-black uppercase italic mb-8 text-[#f1c40f]">Notre Histoire</h2>
                <p className="text-xl text-zinc-300 leading-relaxed italic">Texte en cours de rédaction...</p>
              </div>
            )}

            {activeSection === 'quals' && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-4xl font-black uppercase italic mb-10 text-green-500">Qualifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {['Qualifelec', 'IRVE', 'Habilitation', 'RGE QualiPAC'].map((q) => (
                    <div key={q} className="p-6 bg-white/5 rounded-3xl border border-white/5 font-bold uppercase tracking-widest text-[10px] text-center text-[#f1c40f]">{q}</div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="animate-in zoom-in-95 duration-500">
                <h2 className="text-4xl font-black uppercase italic mb-8 text-white">Contact & Devis</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Nom Complet" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-green-500 outline-none transition" />
                    <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-green-500 outline-none transition" />
                  </div>
                  <select className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 focus:border-green-500 outline-none transition text-zinc-400">
                    <option value="" disabled selected>Objet de la demande</option>
                    <option value="info">Demande d'informations</option>
                    <option value="rdv">Prise de Rendez-vous</option>
                    <option value="devis">Demande de devis gratuit</option>
                  </select>
                  <textarea placeholder="Votre projet..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-green-500 outline-none transition"></textarea>
                  <button className="w-full bg-green-500 text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] hover:bg-green-400 transition-all">
                    Envoyer la demande
                  </button>
                </form>
              </div>
            )}

            {activeSection === 'projets' && (
              <div className="text-center">
                <h2 className="text-4xl font-black uppercase italic mb-8 text-left text-white">Nos Réalisations</h2>
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-video bg-white/5 rounded-3xl flex items-center justify-center border border-white/5 italic text-zinc-600">Prochainement...</div>
                   <div className="aspect-video bg-white/5 rounded-3xl flex items-center justify-center border border-white/5 italic text-zinc-600">Prochainement...</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SERVICES */}
        <section id="services" className="py-32 px-10">
           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
              <ServiceCard icon="⚡" title="Électricité" description="Installation et mise aux normes." color="green" onClick={() => toggleSection('contact')} />
              <ServiceCard icon="❄️" title="Climatisation" description="Pompes à chaleur et clim." color="yellow" onClick={() => toggleSection('contact')} />
           </div>
        </section>

        <footer className="py-20 text-center border-t border-white/5 bg-black/80">
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-black">© 2026 VOSG'OC ELEC</p>
        </footer>
      </div>
    </main>
  );
}

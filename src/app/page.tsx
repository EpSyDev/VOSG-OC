"use client";

import { useState } from 'react';
import Image from 'next/image';

// --- COMPOSANT : CARTE DE SERVICE ---
const ServiceCard = ({ icon, title, description, color, onClick }: { icon: string, title: string, description: string, color: 'green' | 'yellow', onClick?: () => void }) => (
  <button onClick={onClick} className="w-full text-left relative group p-10 rounded-[40px] bg-black/40 border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-500/50">
    <div className={`absolute -right-10 -top-10 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color === 'green' ? 'bg-green-600' : 'bg-yellow-500'}`}></div>
    <div className="relative z-10">
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-black mb-3 tracking-tighter text-white uppercase italic">{title}</h3>
      <p className="text-zinc-400 leading-relaxed font-medium">{description}</p>
      <div className={`mt-6 h-1 w-12 ${color === 'green' ? 'bg-green-500' : 'bg-[#f1c40f]'} rounded-full`}></div>
    </div>
  </button>
);

// --- COMPOSANT : ITEM DE LA GALERIE ---
const GalleryItem = ({ category }: { category: string }) => (
  <div className="relative aspect-video rounded-[30px] bg-white/5 border border-white/5 overflow-hidden group cursor-pointer shadow-2xl">
    <div className="absolute inset-0 flex items-center justify-center italic text-zinc-600 group-hover:scale-110 transition-transform duration-500 font-bold uppercase tracking-tighter">
      {category}
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
       <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
         Détails
       </span>
    </div>
  </div>
);

// --- COMPOSANT : BOUTON DE NAVIGATION ---
const NavButton = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick} 
    className={`font-black py-5 px-6 rounded-2xl transition-all duration-300 uppercase text-[10px] tracking-widest border-2 shadow-lg
      ${isActive 
        ? 'bg-green-500 border-green-500 text-white shadow-green-500/20 scale-105' 
        : 'bg-transparent border-[#f1c40f] text-[#f1c40f] hover:bg-[#f1c40f]/10'}`}
  >
    {label}
  </button>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (id: string) => setActiveSection(activeSection === id ? null : id);

  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      
      {/* BACKGROUND FIXE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image src="/hero-bg.png" alt="Background" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5 px-10 py-6">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center text-white">
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

            <h1 className="text-6xl md:text-[100px] font-[950] leading-[0.85] mb-12 tracking-[-0.05em] uppercase italic">
              La force des origines, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">l'énergie d'ici.</span>
            </h1>

            <p className="text-zinc-200 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-semibold px-4 drop-shadow-md">
              L'expertise vosgienne rencontre la convivialité occitane pour vos projets d'électricité et climatisation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <NavButton label="Notre Histoire" isActive={activeSection === 'histoire'} onClick={() => toggleSection('histoire')} />
              <NavButton label="Qualifications" isActive={activeSection === 'quals'} onClick={() => toggleSection('quals')} />
              <NavButton label="Réalisations" isActive={activeSection === 'projets'} onClick={() => toggleSection('projets')} />
              <NavButton label="Devis Gratuit" isActive={activeSection === 'contact'} onClick={() => toggleSection('contact')} />
            </div>
          </div>
        </section>

        {/* CONTENU DYNAMIQUE */}
        <div id="dynamic-content" className={`transition-all duration-700 ease-in-out px-6 ${activeSection ? 'opacity-100 max-h-[4000px] py-10' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[50px] p-8 md:p-16 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
            <button onClick={() => setActiveSection(null)} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors z-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* SECTION HISTOIRE : STRUCTURE DÉSTRUCTURÉE INTÉGRÉE (LES VRAIES PHOTOS) */}
            {activeSection === 'histoire' && (
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 relative z-10">
                <div className="flex flex-col gap-24">
                  
                  {/* Premier bloc : Texte Gauche / Image Droite (Vosges, droite) */}
                  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="lg:w-1/2 space-y-6">
                      <h2 className="text-5xl font-black uppercase italic text-green-500 leading-none">Des cimes <br/> Vosgiennes...</h2>
                      <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                        C'est au cœur de cette nature puissante, de ces montagnes de sapins et de ces vallées silencieuses que tout a commencé. La rigueur du climat vosgien nous a appris une chose essentielle : la fiabilité d'une installation électrique n'est pas une option, c'est une nécessité vitale.
                      </p>
                    </div>
                    <div className="lg:w-1/2 relative group">
                      <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full group-hover:bg-green-500/20 transition-all"></div>
                      <Image 
                        src="/vosges.png" 
                        alt="Cœur des Vosges - VOSG'OC ELEC" 
                        width={600} height={400} 
                        className="relative rounded-[40px] border border-white/10 shadow-2xl object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Deuxième bloc : Image Gauche (Occitanie, Décalée) / Texte Droite */}
                  <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 mt-16 relative">
                    <div className="lg:w-1/2 space-y-6 lg:pl-12">
                      <h2 className="text-5xl font-black uppercase italic text-[#f1c40f] leading-none lg:text-left">...Au soleil de <br/> l'Occitanie</h2>
                      <p className="text-xl text-zinc-300 leading-relaxed font-medium lg:text-left">
                        Aujourd'hui, c'est sous cette lumière dorée, face au Pont du Gard, symbole d'une ingénierie qui défie le temps, que VOSG'OC ELEC déploie son savoir-faire. Nous marions cette exigence montagnarde à la réactivité locale pour offrir des solutions de climatisation et d'énergie durable adaptées à notre région d'adoption.
                      </p>
                    </div>
                    {/* DA : On utilise une marge négative pour faire "chevaucher" visuellement les deux blocs */}
                    <div className="lg:w-1/2 relative lg:-mt-32 group">
                      <div className="absolute -inset-4 bg-yellow-500/10 blur-3xl rounded-full group-hover:bg-yellow-500/20 transition-all"></div>
                       <Image 
                        src="/occitanie.png" 
                        alt="Pont du Gard Occitanie - VOSG'OC ELEC" 
                        width={600} height={400} 
                        className="relative rounded-[50px] border border-white/10 shadow-2xl object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION QUALIFICATIONS */}
            {activeSection === 'quals' && (
              <div className="animate-in fade-in duration-500 relative z-10">
                <h2 className="text-4xl font-black uppercase italic mb-10 text-green-500">Qualifications & Agréments</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Qualifelec', 'IRVE', 'Habilitation', 'RGE QualiPAC'].map((q) => (
                    <div key={q} className="p-8 bg-white/5 rounded-3xl border border-white/5 font-bold uppercase tracking-widest text-[11px] text-center text-[#f1c40f] hover:bg-white/10 transition-all hover:scale-105 cursor-default">
                      {q}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION CONTACT */}
            {activeSection === 'contact' && (
              <div className="animate-in zoom-in-95 duration-500 relative z-10">
                <h2 className="text-4xl font-black uppercase italic mb-8 text-white">Contact & Devis</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Nom Complet" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-zinc-600 hover:bg-white/10" />
                    <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-zinc-600 hover:bg-white/10" />
                  </div>
                  <div className="relative">
                    <select className="w-full bg-white/10 border border-white/10 rounded-2xl p-5 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all text-zinc-400 appearance-none cursor-pointer">
                      <option value="" disabled selected>Objet de la demande</option>
                      <option value="info">Demande d'informations</option>
                      <option value="rdv">Prise de Rendez-vous</option>
                      <option value="devis">Demande de devis gratuit</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  <textarea placeholder="Décrivez votre besoin..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-zinc-600 hover:bg-white/10"></textarea>
                  <button className="w-full bg-green-500 text-white font-black py-6 rounded-2xl uppercase tracking-[0.3em] hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300 active:scale-[0.98]">
                    Envoyer le message
                  </button>
                </form>
              </div>
            )}

            {activeSection === 'projets' && (
              <div className="animate-in fade-in duration-500 relative z-10">
                <h2 className="text-4xl font-black uppercase italic mb-8 text-white">Nos Réalisations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   <GalleryItem category="Électricité" />
                   <GalleryItem category="Climatisation" />
                   <GalleryItem category="Installation" />
                   <GalleryItem category="Maintenance" />
                   <GalleryItem category="Tertiaire" />
                   <GalleryItem category="Rénovation" />
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

        <footer className="py-20 text-center border-t border-white/5 bg-black/80 backdrop-blur-md">
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.5em] font-black italic">© 2026 VOSG'OC ELEC — L'excellence artisanale</p>
        </footer>
      </div>
    </main>
  );
}

"use client";

import { useState } from 'react';
import Image from 'next/image';

const ServiceCard = ({ icon, title, items, color, technicalNote, onClick }: { icon: string, title: string, items: string[], color: 'blue' | 'yellow' | 'green', technicalNote?: string, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className="relative group p-8 md:p-12 rounded-[40px] bg-black/40 border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-xl overflow-hidden flex flex-col h-full cursor-default"
  >
    <div className={`absolute -right-10 -top-10 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color === 'blue' ? 'bg-blue-600' : 'bg-yellow-500'}`}></div>
    <div className="relative z-10">
      <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-3xl font-black mb-4 tracking-tighter text-white uppercase italic">{title}</h3>
      <ul className="space-y-3 mb-8">
        {items.map((item, idx) => (
          <li key={idx} className="text-zinc-300 flex items-start gap-3 leading-tight">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`} />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
      {technicalNote && (
        <div className="mt-auto p-4 rounded-2xl bg-white/5 border border-white/10 italic text-xs text-zinc-400">
          {technicalNote}
        </div>
      )}
      <div className={`mt-8 h-1.5 w-16 ${color === 'blue' ? 'bg-blue-600' : color === 'green' ? 'bg-green-600' : 'bg-[#f1c40f]'} rounded-full`} />
    </div>
  </div>
);

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
            <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 uppercase">Contact</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
          <div className="max-w-7xl mx-auto text-center mt-20">
            <div className="mb-10 flex justify-center">
              <Image src="/blason.png" alt="Blason" width={300} height={300} className="h-48 md:h-60 w-auto object-contain mix-blend-lighten" />
            </div>

            <h1 className="text-6xl md:text-[100px] font-[950] leading-tight mb-12 tracking-[-0.05em] uppercase italic">
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

        <div id="dynamic-content" className={`transition-all duration-700 ease-in-out px-6 relative z-20 ${activeSection ? 'opacity-100 max-h-[4000px] py-10' : 'opacity-0 max-h-0 overflow-hidden'}`}>
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

        {/* SERVICES (Avec les nouvelles listes) */}
        <section id="services" className="py-40 px-10 relative z-10">
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
        <section id="zone" className="py-32 px-10 relative overflow-hidden z-10">
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
        <section id="contact" className="py-32 px-10 bg-zinc-900/50 backdrop-blur-md border-t border-white/5 text-center relative z-10">
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

        <footer className="py-20 text-center border-t border-white/5 bg-black relative z-10">
          <Image src="/text-logo.png" alt="VOSG'OC" width={150} height={50} className="mx-auto opacity-50 mb-6" />
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.5em] font-black italic">© 2026 VOSG'OC ELEC — L'excellence artisanale</p>
        </footer>
      </div>
    </main>
  );
}

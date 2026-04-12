"use client";

import { useState } from 'react';
import Image from 'next/image';
import zoneImg from './zone.png';

const ServiceCard = ({ icon, title, items, color, technicalNote, onClick }: { icon: string, title: string, items: string[], color: 'green' | 'yellow', technicalNote?: string, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className="relative group p-6 md:p-12 rounded-[32px] md:rounded-[40px] bg-black/40 border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-xl overflow-hidden flex flex-col h-full cursor-default"
  >
    <div className={`absolute -right-10 -top-10 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color === 'green' ? 'bg-green-600' : 'bg-yellow-500'}`}></div>
    <div className="relative z-10">
      <div className="text-5xl md:text-6xl mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-3xl font-black mb-4 tracking-tighter text-white uppercase italic">{title}</h3>
      <ul className="space-y-4 mb-8">
        {items.map((item, idx) => (
          <li key={idx} className="text-zinc-300 flex items-start gap-3 leading-tight">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`} />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
      <div className={`h-1 w-12 md:h-1.5 md:w-16 mb-6 ${color === 'green' ? 'bg-[#f1c40f]' : 'bg-blue-600'} rounded-full`} />
      {technicalNote && (
        <div className="mt-auto p-4 rounded-2xl bg-white/5 border border-white/10 italic text-[11px] text-zinc-400 leading-snug">
          {technicalNote}
        </div>
      )}
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

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      
      {/* BACKGROUND FIXE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image src="/hero-bg.png" alt="Background" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5 px-6 md:px-10 py-4 md:py-6">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Image src="/text-logo.png" alt="VOSG'OC" width={280} height={80} className="h-8 md:h-12 w-auto object-contain" />
            <a href="tel:0607505366" className="hidden lg:block text-[20px] font-black uppercase tracking-[0.4em] text-[#f1c40f] border-l border-white/10 pl-6 hover:text-white transition-colors">
              06 07 50 53 66
            </a>
          </div>
          <div className="hidden md:flex gap-12 items-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-100">
            <a href="#histoire" className="hover:text-white transition-colors">Histoire</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#zone" className="hover:text-white transition-colors">Secteur</a>
            <a href="#projets" className="hover:text-white transition-colors">Réalisations</a>
            <a href="#contact" className="bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-2xl transition-all shadow-lg shadow-green-600/20 uppercase">Contact</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
          <div className="max-w-7xl mx-auto text-center py-20 md:py-0">
            <div className="mb-8 md:mb-10 flex justify-center">
              <Image src="/blason.png" alt="Blason" width={300} height={300} className="h-32 md:h-60 w-auto object-contain mix-blend-lighten" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[100px] font-[950] leading-[1.1] mb-8 md:mb-12 tracking-[-0.02em] md:tracking-[-0.05em] uppercase italic">
              La force des origines, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">l'énergie d'ici.</span>
            </h1>

            <p className="text-zinc-200 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-semibold px-4 drop-shadow-md">
              L'expertise vosgienne rencontre la convivialité occitane pour vos projets d'électricité et climatisation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#contact" className="w-full sm:w-auto bg-zinc-100 hover:bg-white text-black font-black py-5 md:py-6 px-10 md:px-12 rounded-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] uppercase tracking-widest text-xs">
                Demander un devis
              </a>
              <a href="#services" className="w-full sm:w-auto border-2 border-[#f1c40f] text-[#f1c40f] hover:bg-[#f1c40f]/10 font-black py-5 md:py-6 px-10 md:px-12 rounded-2xl transition-all uppercase tracking-widest text-xs">
                Nos Services
              </a>
            </div>
          </div>
        </section>

        {/* BARRE DE CONFIANCE (QUALIFICATIONS) - Directement après le Hero */}
        <section className="py-8 md:py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
              {[
                { title: 'Expertise Électrique', certif: 'Qualifelec' },
                { title: 'Garantie Clim', certif: 'ADC Fluides' },
                { title: 'Économies d\'énergie', certif: 'RGE QualiPAC' },
                { title: 'Installation aux normes', certif: 'NF C 15-100' }
              ].map((q) => (
                <div key={q.title} className="text-center group">
                  <div className="text-[#f1c40f] font-black text-base md:text-xl uppercase italic tracking-tighter mb-1 group-hover:scale-105 transition-transform">{q.title}</div>
                  <div className="text-zinc-400 text-[11px] md:text-xs uppercase font-bold tracking-[0.2em]">{q.certif}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION HISTOIRE : L'ADN DE LA MARQUE - PLUS SERRÉ */}
        <section id="histoire" className="py-16 md:py-20 px-6 md:px-10 bg-zinc-900/30">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-20">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              <div className="lg:w-1/2 space-y-4">
                <h2 className="text-3xl md:text-5xl font-black uppercase italic text-green-500 leading-none tracking-tighter">Des cimes <br/> Vosgiennes...</h2>
                <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-medium">
                  C'est au cœur de cette nature puissante que tout a commencé. La rigueur du climat vosgien nous a appris que la fiabilité d'une installation électrique n'est pas une option, c'est une nécessité vitale.
                </p>
              </div>
              <div className="w-full lg:w-1/3 relative group overflow-hidden rounded-[24px] md:rounded-[30px] lg:ml-auto">
                <Image src="/vosges.png" alt="Vosges" width={500} height={350} className="w-full h-auto object-cover aspect-video group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2 space-y-4">
                <h2 className="text-4xl md:text-5xl font-black uppercase italic text-[#f1c40f] leading-none tracking-tighter">...Au soleil de <br/> l'Occitanie</h2>
                <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                  Nous marions cette exigence montagnarde à la convivialité locale pour offrir des solutions de climatisation adaptées au Gard et à l'Hérault. Un savoir-faire qui défie le temps.
                </p>
              </div>
              <div className="w-full lg:w-1/3 relative group overflow-hidden rounded-[24px] md:rounded-[30px] lg:mr-auto">
                <Image src="/occitanie.png" alt="Occitanie" width={500} height={350} className="w-full h-auto object-cover aspect-video group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col mb-20">
              <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">Expertises</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <ServiceCard 
                icon="⚡"
                title="Électricité Générale & Industrielle"
                items={[
                  "Solutions électriques fiables pour particuliers et professionnels",
                  "Rénovation : Remise aux normes et modernisation (Matériel Legrand privilégié)",
                  "Neuf : Étude et réalisation selon la norme NF C 15-100",
                  "Industriel : Installations et maintenance avec Schneider Electric",
                  "Dépannage Urgent : Intervention prioritaire pour toute panne totale ou partielle"
                ]}
                color="green"
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
                technicalNote="Détenteur de l’Attestation de Capacité (ADC) indispensable pour la manipulation des fluides frigorigènes et la garantie constructeur."
                color="yellow"
              />
            </div>
          </div>
        </section>

        {/* ZONE D'INTERVENTION */}
        <section id="zone" className="py-16 md:py-24 px-6 md:px-10 relative overflow-hidden z-10">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 md:mb-8 uppercase italic tracking-tighter">
                  Zone <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">d'intervention</span>
                </h2>
                <p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 lg:mb-0">
                  Basé à Congénies, j'interviens rapidement sur un large secteur couvrant le Gard, l'Hérault et le Vaucluse.
                </p>
              </div>
              <div className="relative group overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                <Image 
                  src={zoneImg} 
                  alt="Zone d'intervention VOSG'OC ELEC" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* RÉALISATIONS - PLACÉES AVANT LE CONTACT */}
        <section id="projets" className="py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-12 md:mb-16">Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">dernières réalisations</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <GalleryItem category="Électricité" />
              <GalleryItem category="Climatisation" />
              <GalleryItem category="Installation" />
              <GalleryItem category="Maintenance" />
              <GalleryItem category="Tertiaire" />
              <GalleryItem category="Rénovation" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 md:py-32 px-6 md:px-10 bg-zinc-900 relative z-10 text-white overflow-hidden border-t border-white/5">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-green-600/10 blur-[100px] rounded-full"></div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black mb-12 md:mb-16 uppercase italic tracking-tighter text-center">Parlons de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">projet</span></h2>
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

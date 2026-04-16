"use client";

import { useState } from 'react';
import Image from 'next/image';
import zoneImg from './zone.png';
import legrandLogo from './legrand.png';
import schneiderLogo from './schneider.png';
import toshibaLogo from './toshiba.webp';
import daikinLogo from './daikin.webp';
import mitsubishiLogo from './mitsubishi.png';
import lgLogo from './lg.png';

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

const BrandLogo = ({ name, src, className = "" }: { name: string, src: any, className?: string }) => (
  <div className="flex items-center justify-center p-4 transition-all duration-500 hover:scale-110">
    <div className={`relative w-full h-20 md:h-24 ${className}`}>
      <Image 
        src={src} 
        alt={name} 
        fill 
        className="object-contain" 
      />
    </div>
  </div>
);

const ReviewCard = ({ author, rating, text, date }: { author: string, rating: number, text: string, date: string }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex flex-col h-full backdrop-blur-sm group hover:border-[#f1c40f]/30 transition-all duration-500 shadow-2xl">
    <div className="flex gap-1 mb-4 text-[#f1c40f] text-lg">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "opacity-100" : "opacity-20"}>★</span>
      ))}
    </div>
    <p className="text-zinc-300 italic mb-8 leading-relaxed text-sm md:text-base flex-grow">"{text}"</p>
    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center font-black text-[#f1c40f] text-sm shadow-inner">{author.charAt(0)}</div>
      <div>
        <h4 className="font-black uppercase tracking-widest text-[10px] text-white">{author}</h4>
        <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter">{date}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', service: 'electricite', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (!res.ok) throw new Error('Erreur lors de l\'envoi');
      setSubmitted(true);
    } catch {
      setSubmitError('Une erreur est survenue. Merci de réessayer ou de nous contacter par téléphone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Electrician", "HVACBusiness"],
    "name": "VOSG'OC ELEC",
    "description": "Électricien professionnel et expert en climatisation basé à Congénies. Installation et dépannage dans le Gard et l'Hérault.",
    "image": "https://vosgoc-elec.fr/blason.png", // À adapter avec votre vrai domaine
    "telephone": "0607505366",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Congénies",
      "postalCode": "30111",
      "addressRegion": "Gard",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7772,
      "longitude": 4.1601
    },
    "areaServed": ["Gard", "Hérault", "Vaucluse"],
    "priceRange": "$$"
  };

  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* BACKGROUND FIXE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image src="/hero-bg.png" alt="Background" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5 px-4 md:px-10 py-3 md:py-6">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-6">
            <Image src="/text-logo.png" alt="VOSG'OC" width={280} height={80} className="h-6 md:h-12 w-auto object-contain" />
            <a href="tel:0607505366" className="block text-sm md:text-[20px] font-black uppercase tracking-tight md:tracking-[0.4em] text-[#f1c40f] md:border-l md:border-white/10 md:pl-6 hover:text-white transition-colors whitespace-nowrap">
              06 07 50 53 66
            </a>
          </div>
          
          <div className="flex items-center gap-2 md:gap-8">
            <div className="hidden md:flex gap-12 items-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-100">
              <a href="#histoire" className="hover:text-white transition-colors">Histoire</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#zone" className="hover:text-white transition-colors">Secteur</a>
              <a href="#projets" className="hover:text-white transition-colors">Réalisations</a>
            </div>
            
            <a href="#contact" className="hidden md:block bg-green-600 hover:bg-green-500 text-white px-4 md:px-10 py-2 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase transition-all shadow-lg shadow-green-600/20">
              Contact
            </a>

            {/* BURGER MENU MOBILE */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1 text-[#f1c40f]"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 p-8 flex flex-col gap-8 text-center text-xs font-black uppercase tracking-[0.4em]">
            <a href="#histoire" onClick={() => setIsMenuOpen(false)} className="hover:text-[#f1c40f] transition-colors">Histoire</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#f1c40f] transition-colors">Services</a>
            <a href="#zone" onClick={() => setIsMenuOpen(false)} className="hover:text-[#f1c40f] transition-colors">Secteur</a>
            <a href="#projets" onClick={() => setIsMenuOpen(false)} className="hover:text-[#f1c40f] transition-colors">Réalisations</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-green-500 transition-colors">Contact</a>
          </div>
        )}
      </nav>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
          <div className="max-w-7xl mx-auto text-center py-20 md:py-0">
            <div className="mb-8 md:mb-10 flex justify-center">
              <Image src="/blason.png" alt="Blason" width={300} height={300} className="h-32 md:h-60 w-auto object-contain mix-blend-lighten" />
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-[100px] font-[950] leading-[1.1] mb-8 md:mb-12 tracking-tight md:tracking-[-0.05em] uppercase italic">
              La force des origines, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">l'énergie d'ici.</span>
            </h1>

            <p className="text-zinc-200 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-semibold px-4 drop-shadow-md">
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
                  <div className="text-zinc-500 text-[9px] md:text-xs uppercase font-bold tracking-[0.2em]">{q.certif}</div>
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
                <h2 className="text-3xl md:text-5xl font-black uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 leading-none tracking-tighter">Des cimes <br/> Vosgiennes...</h2>
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
                <h2 className="text-4xl md:text-5xl font-black uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#f39c12] leading-none tracking-tighter">...Au soleil de <br/> l'Occitanie</h2>
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
              <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">SERVICES <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">ÉLECTRICITÉ & CLIMATISATION</span></h2>
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

        {/* MARQUES PARTENAIRES */}
        <section className="py-12 border-y border-white/5 bg-black/20">
          <div className="max-w-[1400px] mx-auto px-6">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 mb-10">Partenaires & Matériel privilégié</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <BrandLogo name="Legrand" src={legrandLogo} />
              <BrandLogo name="Schneider" src={schneiderLogo} className="scale-150" />
              <BrandLogo name="Mitsubishi" src={mitsubishiLogo} />
              <BrandLogo name="Daikin" src={daikinLogo} />
              <BrandLogo name="Toshiba" src={toshibaLogo} className="scale-125" />
              <BrandLogo name="LG" src={lgLogo} />
            </div>
          </div>
        </section>

        <section id="zone" className="py-16 md:py-24 px-6 md:px-10 relative overflow-hidden z-10">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 uppercase italic tracking-tighter">
                  Zone <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">D'INTERVENTION</span>
                </h2>
                <p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 lg:mb-0">
                  Basé à Congénies, j'interviens rapidement sur un large secteur couvrant le Gard, l'Hérault et le Vaucluse.
                </p>
              </div>
              <div 
                onClick={() => setIsMapOpen(true)}
                className="relative group overflow-hidden rounded-[40px] border border-white/10 shadow-2xl cursor-zoom-in"
              >
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
            <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-12 md:mb-16">Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">DERNIÈRES RÉALISATIONS</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-6">
              <GalleryItem category="Projet Électricité (en cours)" />
              <GalleryItem category="Climatisation (en cours)" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 md:py-32 px-6 md:px-10 bg-zinc-900 relative z-10 text-white overflow-hidden border-t border-white/5">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-green-600/10 blur-[100px] rounded-full"></div>
          <div className="max-w-5xl mx-auto">
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

            {/* FORMULAIRE DE CONTACT */}
            <div className="mt-20 max-w-3xl mx-auto">
              {submitted ? (
                <div className="bg-green-600/20 border border-green-500/30 p-10 rounded-[32px] text-center backdrop-blur-md animate-in fade-in zoom-in duration-500">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-2xl font-black uppercase italic mb-2">Message envoyé !</h3>
                  <p className="text-zinc-300">Merci {formState.name}, je vous recontacte dans les plus brefs délais.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-[10px] font-black uppercase tracking-widest text-[#f1c40f] hover:underline cursor-pointer">Envoyer un autre message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10 backdrop-blur-sm shadow-2xl">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Nom complet</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#f1c40f]/50 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">E-mail</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Ex: jean@exemple.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#f1c40f]/50 transition-all" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Besoin principal</label>
                    <select 
                      value={formState.service}
                      onChange={(e) => setFormState({...formState, service: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#f1c40f]/50 transition-all appearance-none cursor-pointer text-zinc-300"
                    >
                      <option value="electricite" className="bg-zinc-900">Électricité Générale / Rénovation</option>
                      <option value="climatisation" className="bg-zinc-900">Climatisation / Chauffage</option>
                      <option value="depannage" className="bg-zinc-900">Dépannage Urgent</option>
                      <option value="devis" className="bg-zinc-900">Demande de Devis Gratuit</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Décrivez votre projet..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#f1c40f]/50 transition-all resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 mt-4">
                    {submitError && (
                      <p className="text-red-400 text-xs font-bold mb-4 text-center">{submitError}</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-500 disabled:bg-zinc-700 text-white font-black py-5 rounded-2xl transition-all shadow-lg shadow-green-600/20 uppercase tracking-widest text-xs flex items-center justify-center gap-3 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Envoi en cours...
                        </>
                      ) : "Envoyer ma demande"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* SECTION AVIS GOOGLE */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-zinc-900/50">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-4 tracking-tighter">
                ILS NOUS FONT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1c40f] to-[#fff3ad]">CONFIANCE</span>
              </h2>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">Avis authentiques Google Maps</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ReviewCard 
                author="Mickael sanchez"
                rating={5}
                text="Un artisan professionnel et réactif, il est venu pour me remplacer mon vieux tableau électrique de 1975.. avec le tout mise aux normes d'aujourd'hui, un travail très qualitatif."
                date="Avril 2026"
              />
              <ReviewCard 
                author="Jordan Chm"
                rating={5}
                text="Je recommande vivement cette jeune entreprise d’électricité ! Le gérant est un entrepreneur sérieux, ponctuel et très professionnel. Il est intervenu chez moi pour l’installation d’une borne de recharge électrique, et tout s’est parfaitement déroulé du début à la fin. Le travail est soigné, les explications sont claires, et on sent qu’il est passionné par ce qu’il fait. Installation propre, délais respectés et tarif honnête."
                date="Février 2026"
              />
            </div>
          </div>
        </section>

        <footer className="py-20 text-center border-t border-white/5 bg-black relative z-10">
          <Image src="/text-logo.png" alt="VOSG'OC" width={150} height={50} className="mx-auto opacity-50 mb-6" />
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.5em] font-black italic">© 2026 VOSG'OC ELEC — L'excellence artisanale</p>
        </footer>
      </div>

      {/* LIGHTBOX POUR LA CARTE */}
      <div 
        className={`fixed inset-0 z-[200] bg-black/80 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 transition-all duration-500 cursor-zoom-out ${isMapOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMapOpen(false)}
      >
        <div className={`relative w-full max-w-7xl h-full flex items-center justify-center transition-all duration-500 ease-out ${isMapOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
          <div className="relative w-full h-full max-h-[85vh]">
            <Image 
              src={zoneImg} 
              alt="Zone d'intervention" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <button className="absolute top-0 right-0 md:-top-10 md:-right-10 text-white/70 hover:text-[#f1c40f] transition-colors p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </main>
  );
}

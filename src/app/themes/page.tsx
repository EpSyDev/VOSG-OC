"use client";

import { useState } from "react";
import Link from "next/link";

type Theme = {
  id: string;
  label: string;
  emoji: string;
  tagline: string;
  gradient: string;
  swatches: string[];
  accent: string;
  bg: string;
  text: string;
  border: string;
  badge: string;
};

const themes: Theme[] = [
  {
    id: "chic",
    label: "Chic",
    emoji: "🖤",
    tagline: "Luxe, minimalisme absolu",
    gradient: "from-[#1a1a1a] via-[#b8922a] to-[#f5e6c8]",
    swatches: ["#0d0d0d", "#1a1a1a", "#b8922a", "#d4af6e", "#f5e6c8"],
    accent: "#b8922a",
    bg: "bg-[#0d0d0d]",
    text: "text-[#f5e6c8]",
    border: "border-[#b8922a]/30",
    badge: "bg-[#b8922a]/20 text-[#d4af6e] border-[#b8922a]/40",
  },
  {
    id: "elegant",
    label: "Élégant",
    emoji: "🌙",
    tagline: "Marine profond & champagne",
    gradient: "from-[#0b1c3d] via-[#1a3a6b] to-[#c9a84c]",
    swatches: ["#0b1c3d", "#1a3a6b", "#2d5fa0", "#c9a84c", "#f0e6c8"],
    accent: "#c9a84c",
    bg: "bg-[#0b1c3d]",
    text: "text-[#f0e6c8]",
    border: "border-[#c9a84c]/30",
    badge: "bg-[#c9a84c]/20 text-[#f0e6c8] border-[#c9a84c]/40",
  },
  {
    id: "pro",
    label: "Pro",
    emoji: "💼",
    tagline: "Corporate, autorité, clarté",
    gradient: "from-[#0f172a] via-[#1e3a8a] to-[#38bdf8]",
    swatches: ["#0f172a", "#1e3a8a", "#2563eb", "#38bdf8", "#e0f2fe"],
    accent: "#2563eb",
    bg: "bg-[#0f172a]",
    text: "text-[#e0f2fe]",
    border: "border-[#2563eb]/40",
    badge: "bg-[#2563eb]/20 text-[#38bdf8] border-[#2563eb]/40",
  },
  {
    id: "nature",
    label: "Nature",
    emoji: "🌿",
    tagline: "Organique, terre, respiration",
    gradient: "from-[#0f2b1b] via-[#1a5c3a] to-[#8fbc6f]",
    swatches: ["#0f2b1b", "#1a5c3a", "#2d7a4f", "#6aab50", "#c8e6a0"],
    accent: "#4a9a38",
    bg: "bg-[#0f2b1b]",
    text: "text-[#c8e6a0]",
    border: "border-[#4a9a38]/40",
    badge: "bg-[#4a9a38]/20 text-[#8fbc6f] border-[#4a9a38]/40",
  },
  {
    id: "commercial",
    label: "Commercial",
    emoji: "🔥",
    tagline: "Impact, urgence, conversion",
    gradient: "from-[#1a0500] via-[#b91c1c] to-[#f97316]",
    swatches: ["#1a0500", "#7f1d1d", "#b91c1c", "#ea580c", "#fbbf24"],
    accent: "#ef4444",
    bg: "bg-[#1a0500]",
    text: "text-[#fef9c3]",
    border: "border-[#ef4444]/40",
    badge: "bg-[#ef4444]/20 text-[#fb923c] border-[#ef4444]/40",
  },
  {
    id: "cosmetique",
    label: "Cosmétique",
    emoji: "🌸",
    tagline: "Rose, éclat, féminité douce",
    gradient: "from-[#1a0a15] via-[#831843] to-[#f9a8d4]",
    swatches: ["#1a0a15", "#831843", "#be185d", "#ec4899", "#fbcfe8"],
    accent: "#ec4899",
    bg: "bg-[#1a0a15]",
    text: "text-[#fbcfe8]",
    border: "border-[#ec4899]/40",
    badge: "bg-[#ec4899]/20 text-[#f9a8d4] border-[#ec4899]/40",
  },
  {
    id: "cyber",
    label: "Cyber",
    emoji: "⚡",
    tagline: "Tech, néon, futuriste",
    gradient: "from-[#000000] via-[#0d0d1a] to-[#00f5d4]",
    swatches: ["#000000", "#0d0d1a", "#7c3aed", "#06b6d4", "#00f5d4"],
    accent: "#06b6d4",
    bg: "bg-black",
    text: "text-[#e0fffe]",
    border: "border-[#06b6d4]/40",
    badge: "bg-[#06b6d4]/10 text-[#00f5d4] border-[#06b6d4]/40",
  },
  {
    id: "sunset",
    label: "Sunset",
    emoji: "🌅",
    tagline: "Chaleur, évasion, émotion",
    gradient: "from-[#1a0a00] via-[#c2410c] to-[#fbbf24]",
    swatches: ["#1a0a00", "#7c2d12", "#c2410c", "#f97316", "#fbbf24"],
    accent: "#f97316",
    bg: "bg-[#1a0a00]",
    text: "text-[#fff7ed]",
    border: "border-[#f97316]/40",
    badge: "bg-[#f97316]/20 text-[#fdba74] border-[#f97316]/40",
  },
  {
    id: "ocean",
    label: "Océan",
    emoji: "🌊",
    tagline: "Profondeur, sérénité, confiance",
    gradient: "from-[#020b18] via-[#0c4a6e] to-[#22d3ee]",
    swatches: ["#020b18", "#0c4a6e", "#0369a1", "#0ea5e9", "#7dd3fc"],
    accent: "#0ea5e9",
    bg: "bg-[#020b18]",
    text: "text-[#e0f7ff]",
    border: "border-[#0ea5e9]/40",
    badge: "bg-[#0ea5e9]/20 text-[#7dd3fc] border-[#0ea5e9]/40",
  },
  {
    id: "minimal",
    label: "Minimaliste",
    emoji: "◻️",
    tagline: "Silence, espace, clarté absolue",
    gradient: "from-[#ffffff] via-[#e5e7eb] to-[#111827]",
    swatches: ["#ffffff", "#f3f4f6", "#9ca3af", "#374151", "#111827"],
    accent: "#111827",
    bg: "bg-white",
    text: "text-[#111827]",
    border: "border-gray-200",
    badge: "bg-gray-100 text-gray-700 border-gray-200",
  },
  {
    id: "royal",
    label: "Royal",
    emoji: "👑",
    tagline: "Pourpre, prestige, noblesse",
    gradient: "from-[#0d0015] via-[#4c1d95] to-[#c084fc]",
    swatches: ["#0d0015", "#2e1065", "#4c1d95", "#7c3aed", "#c084fc"],
    accent: "#7c3aed",
    bg: "bg-[#0d0015]",
    text: "text-[#ede9fe]",
    border: "border-[#7c3aed]/40",
    badge: "bg-[#7c3aed]/20 text-[#c4b5fd] border-[#7c3aed]/40",
  },
  {
    id: "nordic",
    label: "Nordic",
    emoji: "❄️",
    tagline: "Froid, épuré, scandinave",
    gradient: "from-[#0a1520] via-[#1e3a5f] to-[#93c5fd]",
    swatches: ["#0a1520", "#1e3a5f", "#2d5fa0", "#60a5fa", "#bfdbfe"],
    accent: "#60a5fa",
    bg: "bg-[#0a1520]",
    text: "text-[#dbeafe]",
    border: "border-[#60a5fa]/30",
    badge: "bg-[#60a5fa]/10 text-[#93c5fd] border-[#60a5fa]/30",
  },
];

export default function ThemesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = themes.find((t) => t.id === selected);

  return (
    <main className="min-h-screen bg-[#080810] text-white font-sans">
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
          ← Retour au site
        </Link>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
          Palette Explorer — Tendances Webdesign 2026
        </span>
      </div>

      {/* HERO */}
      <div className="relative overflow-hidden py-20 px-6 text-center border-b border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-purple-700/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 mb-4">
            Inspirations &amp; Palettes
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">
            Thèmes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Webdesign
            </span>
          </h1>
          <p className="text-zinc-400 text-lg font-medium leading-relaxed">
            Explorez les palettes de couleurs tendance. Cliquez sur un thème pour voir un aperçu immersif.
          </p>
        </div>
      </div>

      {/* GRID THEMES */}
      <div className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelected(theme.id === selected ? null : theme.id)}
              className={`group relative rounded-[28px] border overflow-hidden text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                selected === theme.id
                  ? "border-white/40 ring-2 ring-white/20"
                  : "border-white/8 hover:border-white/20"
              }`}
            >
              {/* GRADIENT BAR */}
              <div className={`h-28 w-full bg-gradient-to-r ${theme.gradient}`}></div>

              {/* SWATCHES */}
              <div className="flex absolute top-4 right-4 gap-1">
                {theme.swatches.map((color) => (
                  <div
                    key={color}
                    className="w-5 h-5 rounded-full border border-white/20 shadow-lg"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* CONTENT */}
              <div className="p-6 bg-white/3 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-2xl mr-2">{theme.emoji}</span>
                    <span className="text-lg font-black uppercase italic tracking-tighter">{theme.label}</span>
                  </div>
                  {selected === theme.id && (
                    <span className="text-[9px] font-black uppercase tracking-widest bg-white/10 px-2 py-1 rounded-full border border-white/20">
                      Sélectionné
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 text-xs font-medium leading-relaxed">{theme.tagline}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* PREVIEW PANEL */}
      {active && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-2xl flex items-end md:items-center justify-center p-4 md:p-8" onClick={() => setSelected(null)}>
          <div
            className={`relative w-full max-w-4xl rounded-[40px] overflow-hidden border shadow-2xl ${active.border} ${active.bg}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* GRADIENT HEADER */}
            <div className={`h-48 bg-gradient-to-r ${active.gradient} relative`}>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-6xl">{active.emoji}</span>
              </div>
            </div>

            <div className={`p-8 md:p-12 ${active.text}`}>
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter">{active.label}</h2>
                  <p className="text-sm opacity-60 mt-1 font-medium">{active.tagline}</p>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${active.badge}`}>
                  Tendance 2026
                </span>
              </div>

              {/* SWATCHES DETAIL */}
              <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3">Palette complète</p>
                <div className="flex gap-3 flex-wrap">
                  {active.swatches.map((color) => (
                    <div key={color} className="flex flex-col items-center gap-2">
                      <div
                        className="w-12 h-12 rounded-2xl border border-white/10 shadow-lg"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[9px] font-mono opacity-50">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* APERÇU UI */}
              <div className={`rounded-[24px] border ${active.border} p-6 bg-white/3`}>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">Aperçu composants</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <button
                    className="px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest text-white transition-all"
                    style={{ backgroundColor: active.accent }}
                  >
                    Bouton Principal
                  </button>
                  <button
                    className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest border ${active.border} bg-white/5 ${active.text}`}
                  >
                    Secondaire
                  </button>
                </div>
                <div className={`rounded-xl border ${active.border} p-4 bg-white/3`}>
                  <p className="font-black text-sm uppercase italic tracking-tighter mb-1">Titre de carte</p>
                  <p className="text-xs opacity-50 leading-relaxed">
                    Exemple de texte de contenu dans ce thème. La typographie et les espaces définissent autant le style que la couleur.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
              >
                Fermer ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="border-t border-white/5 py-10 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">
          VOSG&apos;OC ELEC — Palette Explorer 2026
        </p>
        <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-colors mt-2 block">
          ← Retour au site principal
        </Link>
      </div>
    </main>
  );
}

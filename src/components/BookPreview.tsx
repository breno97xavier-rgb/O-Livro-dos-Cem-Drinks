import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Eye, BookOpen, Layers, Maximize2, X, Sparkles } from "lucide-react";
import Ornamento from "./Ornamento";

interface PageSample {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
  badge: string;
  pageNumber: string;
}

const samples: PageSample[] = [
  { id: "sumario", title: "Sumário", subtitle: "Visão geral da obra", imageUrl: "/assets/amostra_sumario.png", description: "Conheça os oito capítulos, organizados por famílias de destilados, e os conteúdos de consulta que completam o livro.", badge: "Organização", pageNumber: "4" },
  { id: "abertura-gin", title: "Abertura do capítulo Gin", subtitle: "Identidade visual dos capítulos", imageUrl: "/assets/amostra_abertura_gin.png", description: "Cada capítulo começa com uma abertura própria e apresenta os coquetéis que serão explorados ao longo da seção.", badge: "Capítulo", pageNumber: "9" },
  { id: "receita-negroni", title: "Negroni", subtitle: "Receita ilustrada", imageUrl: "/assets/amostra_receita_negroni.png", description: "Uma ficha completa com ilustração do drink, ingredientes, medidas, modo de preparo e nota do bartender.", badge: "Receita", pageNumber: "10" },
  { id: "dossie-negroni", title: "Dossiê do Negroni", subtitle: "História e referências", imageUrl: "/assets/amostra_dossie_negroni.png", description: "Além da receita, o livro aprofunda a história, o perfil sensorial, as curiosidades, as variações e as harmonizações.", badge: "Dossiê", pageNumber: "11" },
  { id: "aperol-spritz", title: "Aperol Spritz", subtitle: "Outra receita ilustrada", imageUrl: "/assets/amostra_receita_aperol_spritz.png", description: "Veja outra ficha real do livro, com a apresentação visual do coquetel, proporções e instruções de preparo.", badge: "Receita", pageNumber: "191" }
];

interface BookPreviewProps {
  onAdquirir?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export default function BookPreview({ onAdquirir }: BookPreviewProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [checkoutUrl, setCheckoutUrl] = useState("https://pay.wiapy.com/5nFt5iAoDz");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = window.location.search;
      if (search) {
        setCheckoutUrl(`https://pay.wiapy.com/5nFt5iAoDz${search}`);
      }
    }
  }, []);

  const activeSample = samples[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % samples.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + samples.length) % samples.length);
  };

  return (
    <section className="py-20 md:py-28 px-4 border-t border-gold/10 bg-gradient-to-b from-[#141414]/30 via-black to-[#0A0A0A] relative" id="amostras-por-dentro">
      {/* Background soft glowing lights */}
      <div className="absolute top-[30%] left-1/3 w-[350px] h-[350px] bg-vinho/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[250px] h-[250px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans-alt tracking-[0.4em] uppercase text-gold block mb-2 font-semibold">
            Exclusividade Gráfica
          </span>
          <h2 className="text-3.5xl md:text-5xl font-serif-display text-marfim-light">
            Veja as Páginas por Dentro
          </h2>
          <div className="flex justify-center mt-4">
            <Ornamento width="w-32" />
          </div>
          <p className="text-sm md:text-base text-marfim/60 font-serif-body max-w-xl mx-auto mt-4 leading-relaxed">
            Uma mostra real do primor estético e rigor editorial que você receberá imediatamente após a aquisição do arquivo digital PDF de alta definição.
          </p>
        </div>

        {/* Master Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Information Card & Navigation Controls (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Index Tracker Tabs */}
            <div className="hidden lg:flex flex-col gap-3 mb-8">
              {samples.map((sample, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={sample.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex items-center gap-4 p-3.5 rounded text-left border transition-all duration-300 group cursor-pointer ${
                      isActive 
                        ? "bg-gold/10 border-gold/40 text-gold-light" 
                        : "bg-black/30 border-gold/5 text-marfim/60 hover:bg-gold/5 hover:border-gold/25 hover:text-marfim-light"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                      isActive 
                        ? "bg-gold text-black" 
                        : "bg-[#1A1A1A] text-marfim/40 group-hover:bg-gold/20 group-hover:text-gold"
                    }`}>
                      0{idx + 1}
                    </span>
                    <div className="truncate">
                      <span className="block text-xs font-sans-alt uppercase tracking-widest font-semibold">{sample.title}</span>
                      <span className="block text-[10px] text-marfim/40 font-serif-body italic group-hover:text-marfim/60 mt-0.5">{sample.subtitle}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Content Description Card */}
            <div className="bg-[#141414] border border-gold/15 p-6 md:p-8 rounded-xl relative shadow-2xl">
              <div className="absolute inset-1 border border-gold/5 pointer-events-none rounded-lg" />
              
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-0.5 border border-gold/20 bg-gold/5 text-[9px] font-sans-alt uppercase tracking-[0.2em] font-semibold text-gold rounded-full">
                  {activeSample.badge}
                </span>
                <span className="text-[10px] font-mono text-bold-dark text-gold/65 uppercase tracking-widest">
                  Páginas {activeSample.pageNumber}
                </span>
              </div>

              <h3 className="text-2xl font-serif-display text-marfim-light mb-1">
                {activeSample.title}
              </h3>
              <p className="text-xs font-sans-alt uppercase tracking-widest text-[#B8924A]/70 mb-4">
                {activeSample.subtitle}
              </p>

              <p className="text-xs md:text-sm text-marfim/75 font-serif-body leading-relaxed mb-6 block text-justify min-h-[90px]">
                {activeSample.description}
              </p>

              {/* Slider controls for Mobile and Desktop helper */}
              <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-black border border-gold/20 hover:border-gold/50 text-gold flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                    aria-label="Amostra anterior"
                  >
                    <ChevronLeft className="w-5 h-5 shrink-0" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-black border border-gold/20 hover:border-gold/50 text-gold flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                    aria-label="Próxima amostra"
                  >
                    <ChevronRight className="w-5 h-5 shrink-0" />
                  </button>
                </div>

                <div className="text-[10px] font-mono text-marfim/40 tracking-wider">
                  MOSTRANDO <span className="text-gold font-bold">{currentIndex + 1}</span> DE <span className="text-gold-dark">{samples.length}</span>
                </div>
              </div>
            </div>

            {/* Quick action beneath */}
            <div className="mt-6 text-center lg:text-left flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={checkoutUrl}
                onClick={onAdquirir}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gold-dark to-gold text-black font-sans-alt text-[10px] font-bold uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(184,146,74,0.3)] hover:scale-[1.01] inline-flex items-center justify-center gap-1.5"
              >
                Garantir O Livro Clássico
                <Sparkles className="w-3.5 h-3.5 text-black shrink-0" />
              </a>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="text-xs text-gold hover:text-gold-light border-b border-gold/20 hover:border-gold/60 pb-0.5 tracking-wider transition-all duration-300 cursor-pointer inline-flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 shrink-0" />
                Ampliar esta página
              </button>
            </div>

          </div>

          {/* RIGHT SIDE: Gorgeous Book Frame & Pages View (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[440px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px] aspect-[1/1.41] bg-black/40 rounded-xl p-3 md:p-5 border border-gold/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex items-center justify-center group overflow-hidden">
              
              {/* Golden corner corners for premium editorial look */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/45 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/45 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/45 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/45 pointer-events-none" />
              <div className="absolute inset-2 border border-gold/5 rounded pointer-events-none block" />

              {/* Interactive background light splash on hover */}
              <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-gold/5 via-transparent to-vinho/5 opacity-50 blur-[50px] pointer-events-none" />

              {/* Sliding and fading pages viewport with AnimatePresence */}
              <div className="relative w-full h-full flex items-center justify-center z-10 cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSample.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {/* Page mockups drop shadow frame styling */}
                    <img src={activeSample.imageUrl} alt={`Página ${activeSample.pageNumber}: ${activeSample.title}`} loading="lazy" className="w-full h-full object-contain rounded border border-gold/10" />

                    {/* Hover glass action button overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded">
                      <div className="px-4 py-2 bg-black/85 border border-gold/40 text-gold-light text-xs font-sans-alt tracking-widest uppercase font-semibold rounded flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 className="w-3.5 h-3.5 shrink-0 text-gold" />
                        Ampliar Amostra
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Aesthetic print note */}
            <p className="text-[10px] text-marfim/35 font-mono uppercase tracking-widest mt-4">
              ✨ Layout real em alta fidelidade · Proporções 100% autênticas da obra
            </p>
          </div>

        </div>

      </div>

      {/* DYNAMIC LIGHTBOX / FULLSCREEN DIALOG */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-50 flex flex-col items-center justify-between p-4 md:p-8 backdrop-blur-xl"
            id="book-preview-lightbox"
          >
            {/* Header control */}
            <div className="w-full max-w-7xl flex items-center justify-between border-b border-gold/15 pb-4 mt-2">
              <div className="text-left">
                <span className="text-[10px] font-mono text-gold-dark font-bold uppercase tracking-wider block">
                  Página {activeSample.pageNumber} · Livro dos Cem Drinks
                </span>
                <span className="text-lg md:text-xl font-serif-display text-marfim-light block mt-0.5">
                  {activeSample.title} <span className="text-gold italic font-normal text-sm md:text-base ml-1">({activeSample.subtitle})</span>
                </span>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 border border-gold/20 hover:border-gold/60 text-gold-light hover:text-gold rounded transition-colors duration-200 uppercase font-sans-alt text-xs tracking-wider cursor-pointer"
              >
                ✕ Fechar
              </button>
            </div>

            {/* Central focused image container */}
            <div className="flex-1 w-full flex items-center justify-center p-3 relative max-h-[75vh]">
              
              {/* Screen left arrow control */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-6 w-11 h-11 rounded-full bg-black/70 border border-gold/30 hover:border-gold/60 text-gold flex items-center justify-center transition-all cursor-pointer z-15 hover:scale-105"
                content-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 shrink-0" />
              </button>

              <motion.img
                key={activeSample.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={activeSample.imageUrl}
                alt={activeSample.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-[0_0_50px_rgba(184,146,74,0.15)] border border-gold/20 cursor-zoom-in"
              />

              {/* Screen right arrow control */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-6 w-11 h-11 rounded-full bg-black/70 border border-gold/30 hover:border-gold/60 text-gold flex items-center justify-center transition-all cursor-pointer z-15 hover:scale-105"
                content-label="Próxima"
              >
                <ChevronRight className="w-6 h-6 shrink-0" />
              </button>
            </div>

            {/* Footer details inside lightbox */}
            <div className="w-full max-w-2xl bg-[#141414]/90 border border-gold/15 rounded-lg p-4 text-center mt-3 mb-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-marfim/70 font-serif-body text-left max-w-md">
                Imagem real de uma página do livro. Use o zoom do navegador para examinar os detalhes da edição.
              </p>
              <a
                href={checkoutUrl}
                onClick={(e) => {
                  setIsLightboxOpen(false);
                  if (onAdquirir) onAdquirir(e);
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-gold-dark to-gold text-black font-sans-alt text-[9px] md:text-[10px] tracking-widest font-bold uppercase rounded hover:shadow-[0_0_15px_rgba(184,146,74,0.4)] transition-all shrink-0 cursor-pointer"
              >
                Garantir Acesso Imediato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

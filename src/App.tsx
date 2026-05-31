import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  ChevronDown, 
  Clock, 
  HelpCircle, 
  ArrowRight, 
  Bookmark, 
  Award, 
  CheckCircle2, 
  Volume2, 
  Lock,
  Instagram,
  Compass,
  FileText,
  Flame,
  Wine
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { chapters, benefits, faqItems, sampleRecipes } from "./data";
import Ornamento from "./components/Ornamento";
import InteractiveQuiz from "./components/InteractiveQuiz";
import HostCalculator from "./components/HostCalculator";
// Author and book assets
const authorPhotoUrl = "https://i.ibb.co/Vp954Q1F/Chat-GPT-Image-31-de-mai-de-2026-00-18-06.png";
const bookMockupUrl = "https://i.ibb.co/ksRcgH89/C-pia-de-Design-sem-nome.png";

export default function App() {
  // Frequently Asked Questions state
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  
  // Interactive chapter zoom state
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  
  // Checkout simulator modal state
  const [showCheckoutSimulator, setShowCheckoutSimulator] = useState<boolean>(false);
  const [checkoutStatus, setCheckoutStatus] = useState<string>("init"); // init, success

  // Real-time limited offer countdown state
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 45 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to create soft recurring urgency
          return { hours: 2, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format countdown numbers
  const padZero = (num: number) => num.toString().padStart(2, "0");

  const openCheckout = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setShowCheckoutSimulator(true);
    setCheckoutStatus("init");
  };

  const handleSimulatePayment = () => {
    setCheckoutStatus("processing");
    setTimeout(() => {
      setCheckoutStatus("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2EBD9] font-serif-body relative selection:bg-gold selection:text-black overflow-x-hidden">
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-vinho/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[20%] right-10 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-5 w-[600px] h-[600px] bg-vinho/5 rounded-full blur-[180px] pointer-events-none" />
      
      {/* HEADER / FLYING NAVIGATION BAR (Sleek minimalist bar) */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-gold/15 px-3 py-3.5 sm:px-4 sm:py-4" id="premium-header">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="text-lg sm:text-xl font-serif-display text-gold tracking-widest font-semibold shrink-0">AV</span>
            <div className="h-4 w-[1px] bg-gold/20" />
            <span className="text-[9px] sm:text-xs font-sans-alt tracking-[0.25em] text-marfim-light uppercase font-medium truncate max-w-[120px] xs:max-w-none">
              <span className="hidden sm:inline">Augusto Valverde</span>
              <span className="sm:hidden">Cem Drinks</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-sans-alt uppercase tracking-[0.2em] text-marfim/70">
            <a href="#promessa" className="hover:text-gold transition-colors duration-300">A Obra</a>
            <a href="#capitulos" className="hover:text-gold transition-colors duration-300">Sumário</a>
            <a href="#beneficios" className="hover:text-gold transition-colors duration-300">Conteúdo</a>
            <a href="#autor" className="hover:text-gold transition-colors duration-300">O Historiador</a>
          </nav>

          <div className="shrink-0">
            <a
              href="#LINK-CHECKOUT"
              onClick={openCheckout}
              className="px-3.5 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-gold-dark to-gold text-black uppercase font-sans-alt text-[9px] sm:text-[10px] font-bold tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(184,146,74,0.3)] hover:scale-[1.03] active:scale-95 inline-flex items-center justify-center"
              id="cta-mini-nav"
            >
              <span className="hidden sm:inline">Adquirir — </span>R$ 47
            </a>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION (Títulos + Métricas + CTA + Mockup) */}
      <section className="relative pt-12 pb-20 md:py-28 px-4 border-b border-gold/10" id="hero-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="px-3 py-1 border border-gold/30 text-gold font-sans-alt text-[9px] tracking-[0.35em] uppercase rounded-full bg-gold/5 font-semibold">
                Lançamento Oficial
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-vinho" />
              <span className="text-xs font-sans-alt text-marfim/60 uppercase tracking-widest font-mono">Volume I</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-serif-display text-marfim-light leading-tight font-medium tracking-tight mb-4" id="hero-main-title">
              O Livro dos <br className="hidden md:inline" />
              <span className="text-gold italic font-normal">Cem Drinks</span>
            </h1>

            <h2 className="text-lg md:text-xl text-marfim/90 font-serif-body italic font-light max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Um compêndio das receitas clássicas que moldaram a coquetelaria mundial, com ensaios históricos e ilustrações luxuosas.
            </h2>

            {/* Quick Metrics Tagline */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 mb-8 border-y border-gold/10 py-5">
              <div className="text-center lg:text-left border-r border-[#1e1a18]">
                <span className="block text-xl md:text-2xl font-serif-display text-gold font-semibold">101</span>
                <span className="text-[10px] font-sans-alt text-marfim/60 uppercase tracking-widest font-medium">Drinks Clássicos</span>
              </div>
              <div className="text-center lg:text-left border-r border-[#1e1a18] pl-2">
                <span className="block text-xl md:text-2xl font-serif-display text-gold font-semibold">8</span>
                <span className="text-[10px] font-sans-alt text-marfim/60 uppercase tracking-widest font-medium">Categorias</span>
              </div>
              <div className="text-center lg:text-left pl-2">
                <span className="block text-xl md:text-2xl font-serif-display text-gold font-semibold">230</span>
                <span className="text-[10px] font-sans-alt text-marfim/60 uppercase tracking-widest font-medium">Páginas de Luxo</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <a
                href="#LINK-CHECKOUT"
                onClick={openCheckout}
                className="w-full sm:w-auto px-8 py-4.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-sans-alt text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(184,146,74,0.45)] hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 text-center"
                id="cta-hero-primary"
              >
                Garantir Meu Livro — R$ 47
                <ArrowRight className="w-4 h-4 text-black shrink-0" />
              </a>
              <a
                href="#capitulos"
                className="w-full sm:w-auto px-8 py-4.5 border border-gold/30 hover:border-gold/60 text-marfim font-sans-alt text-xs font-semibold uppercase tracking-widest rounded transition-all duration-300 hover:bg-gold/5 flex items-center justify-center gap-1.5"
                id="cta-hero-secondary"
              >
                Explorar Capítulos
              </a>
            </div>

            {/* Guarantee Tag */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs text-marfim/50">
              <ShieldCheck className="w-4.5 h-4.5 text-gold" />
              <span>Garantia incondicional de 7 dias · Acesso imediato vitalício</span>
            </div>
          </div>

          {/* Right Column (Book Mockup) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Visual background circle decorative */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-vinho/30 to-gold/10 blur-3xl opacity-50 -z-10 animate-pulse duration-5000" />
            
            <div className="relative group">
              {/* Dynamic light rays or subtle glow behind book */}
              <div className="absolute -inset-10 bg-gold/5 blur-2xl group-hover:bg-gold/10 transition-all duration-[600ms] rounded-full pointer-events-none" />
              
              {/* Beautiful pre-rendered 3D physical book cover mockup with transparent background */}
              <img
                src={bookMockupUrl}
                alt="Mockup do Livro dos Cem Drinks"
                referrerPolicy="no-referrer"
                className="w-full max-w-[260px] xs:max-w-[300px] md:max-w-[340px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] hover:scale-105 transition-all duration-500 relative z-10"
                id="mockup-hero-img"
              />
              
              {/* Overlay Ribbon */}
              <div className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-vinho to-vinho-light border border-gold/40 text-marfim-light font-sans-alt text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                e-book PDF de Luxo
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PROOF STRIP (Ponto de Prova - 4 Números de Destaque) */}
      <section className="bg-[#141414] py-8 border-y border-gold/15" id="proof-strip">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center">
            
            <div className="text-center border-r border-gold/10 last:border-0">
              <div className="text-2xl md:text-3.5xl font-serif-display text-gold font-bold">101</div>
              <p className="text-[10px] md:text-xs font-sans-alt text-marfim/60 uppercase tracking-widest font-medium mt-1">Coquetéis Testados</p>
            </div>

            <div className="text-center border-r border-gold/10 last:border-0">
              <div className="text-2xl md:text-3.5xl font-serif-display text-gold font-bold">8</div>
              <p className="text-[10px] md:text-xs font-sans-alt text-marfim/60 uppercase tracking-widest font-medium mt-1">Grandes Categorias</p>
            </div>

            <div className="text-center border-r border-gold/10 last:border-0">
              <div className="text-2xl md:text-3.5xl font-serif-display text-gold font-bold">230</div>
              <p className="text-[10px] md:text-xs font-sans-alt text-marfim/60 uppercase tracking-widest font-medium mt-1">Páginas Ilustradas</p>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3.5xl font-serif-display text-gold font-bold italic">Vitalício</div>
              <p className="text-[10px] md:text-xs font-sans-alt text-marfim/60 uppercase tracking-widest font-medium mt-1">Acesso Sem Mensalidade</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROMESSA SECTION (Conexão Emocional) */}
      <section className="py-20 md:py-28 px-4 relative overflow-hidden" id="promessa">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-xs font-sans-alt tracking-[0.4em] uppercase text-gold/80 block mb-3 font-semibold">O Paradoxo do Balcão</span>
          
          <h2 className="text-3xl md:text-4xl font-serif-display text-marfim-light font-medium tracking-tight mb-8">
            Você já gastou o preço deste compêndio inteiro <span className="text-gold italic">em um único drink</span> em um sábado à noite.
          </h2>
          
          <div className="flex justify-center mb-8">
            <Ornamento width="w-24" />
          </div>

          <div className="space-y-6 text-base md:text-lg text-marfim/80 font-serif-body leading-relaxed text-justify max-w-2xl mx-auto">
            <p>
              Ao sentar-se em um balcão moderno de coquetelaria, você paga pela atmosfera, pela garrafa importada e pelo conhecimento técnico do bartender. Mas e quando você decide receber convidados em casa?
            </p>
            <p>
              O que restava era a tentativa frustrada através de vídeos superficiais e receitas genéricas de internet, desprovidas de padronização, de medidas corretas de acidez e de respeito à diluição do gelo.
            </p>
            <p className="text-gold-light italic">
              <strong>"O Livro dos Cem Drinks"</strong> rompe esse bloqueio. Ele traz o ensaio lírico, a história de cada ingrediente e fichas gráficas ultra-didáticas pensadas para quem exige excelência estética e degustativa no conforto do próprio lar.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DRINK CURATOR - INTERACTIVE QUIZ SECTION INCLUDED FOR LUXURY ENGAGEMENT */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#141414] border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <InteractiveQuiz onAdquirir={openCheckout} />
        </div>
      </section>

      {/* 4. CAPÍTULOS SECTION (Grid dos 8 Capítulos por Categoria) */}
      <section className="py-20 md:py-28 px-4 border-t border-gold/10 bg-[#141414]/40" id="capitulos">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-sans-alt tracking-[0.4em] uppercase text-gold block mb-2 font-semibold">Sumário de Luxo</span>
            <h2 className="text-3.5xl md:text-5xl font-serif-display text-marfim-light">8 Capítulos de Pura História</h2>
            <div className="flex justify-center mt-4">
              <Ornamento width="w-32" />
            </div>
            <p className="text-sm md:text-base text-marfim/60 font-serif-body max-w-xl mx-auto mt-4 leading-relaxed">
              Clique em qualquer capítulo para visualizar os drinks destaques contidos em cada seção da obra.
            </p>
          </div>

          {/* Grid de 8 cards (2 colunas em mobile escalável para 4 colunas em desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {chapters.map((chapter) => {
              const isSelected = selectedChapterId === chapter.id;
              
              return (
                <div
                  key={chapter.id}
                  onClick={() => setSelectedChapterId(isSelected ? null : chapter.id)}
                  className={`group relative p-5 md:p-6 border rounded-lg transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? "border-gold bg-[#141414] shadow-[0_15px_30px_rgba(184,146,74,0.15)] scale-[1.01]" 
                      : "border-gold/15 bg-black/40 hover:border-gold/40 hover:bg-black/60 hover:-translate-y-1"
                  }`}
                  id={`chapter-card-${chapter.id}`}
                >
                  {/* Subtle outer double border when active */}
                  {isSelected && (
                    <div className="absolute inset-1 border border-gold/15 pointer-events-none rounded" />
                  )}

                  <div>
                    {/* Chapter Number small capital space style */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-gold-dark font-bold">CAPÍTULO</span>
                      <span className="text-lg md:text-xl font-serif-display text-gold italic font-semibold">{chapter.roman}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif-display text-marfim-light group-hover:text-gold transition-colors duration-300">
                      {chapter.title}
                    </h3>
                    
                    <p className="text-[10px] uppercase tracking-widest font-sans-alt text-gold/70 mt-1 mb-3">
                      {chapter.count} Drinks Clássicos
                    </p>

                    <p className="text-xs text-marfim/60 font-serif-body leading-relaxed mb-4 line-clamp-3">
                      {chapter.description}
                    </p>
                  </div>

                  {/* Toggle state Indicator */}
                  <div className="text-xs font-sans-alt text-gold/40 group-hover:text-gold tracking-widest uppercase mt-4 flex items-center justify-between">
                    <span>{isSelected ? "Ocultar catálogo" : "Ver catálogo"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? "rotate-180 text-gold" : ""}`} />
                  </div>

                  {/* Expandable Box inside card */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gold/20 overflow-hidden"
                      >
                        <span className="text-[9px] uppercase font-sans-alt tracking-wider text-gold-light font-semibold block mb-2">Exemplos Inclusos:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {chapter.featuredDrinks.map((drink, idx) => (
                            <span 
                              key={idx} 
                              className="text-[10px] font-sans-alt px-2 py-0.5 rounded bg-gold/5 border border-gold/10 text-marfim-light"
                            >
                              {drink}
                            </span>
                          ))}
                        </div>
                        <p className="text-[10px] text-gold/40 mt-3 font-mono">Páginas duplas exclusivas</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick taste note */}
          <div className="text-center mt-10">
            <p className="text-xs text-gold/60 italic font-serif-body">
              *Cada um dos 101 drinks é contemplado em página dupla (História, Ficha Técnica Ilustrada, Variações e Guia de Marcas).
            </p>
          </div>

        </div>
      </section>

      {/* 5. BENEFÍCIOS SECTION (O que torna o livro especial - 6 cards) */}
      <section className="py-20 md:py-28 px-4 border-t border-gold/10 relative" id="beneficios">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-sans-alt tracking-[0.4em] uppercase text-gold block mb-2 font-semibold">Curadoria e Detalhe</span>
            <h2 className="text-3.5xl md:text-5xl font-serif-display text-marfim-light">O Que Torna Este Compêndio Eterno</h2>
            <div className="flex justify-center mt-4">
              <Ornamento width="w-32" />
            </div>
            <p className="text-sm text-marfim/60 font-serif-body max-w-xl mx-auto mt-4 leading-relaxed">
              O autor Augusto Valverde refinou o processo editorial para entregar mais que uma lista: um acervo completo de arte de vestir copos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit) => (
              <div 
                key={benefit.id} 
                className="relative p-7 border border-gold/15 bg-black/60 rounded-lg group hover:border-gold/50 transition-all duration-300 shadow-lg relative"
                id={`benefit-${benefit.id}`}
              >
                {/* Thin golden internal margin */}
                <div className="absolute inset-1.5 border border-gold/5 rounded pointer-events-none group-hover:border-gold/15 transition-colors duration-300" />
                
                {/* Premium exclusive badge layout */}
                {benefit.badge && (
                  <span className="absolute top-4 right-4 bg-gold/10 border border-gold/30 text-[9px] font-sans-alt uppercase tracking-[0.2em] font-semibold text-gold px-1.5 py-0.5 rounded">
                    {benefit.badge}
                  </span>
                )}

                <div className="w-10 h-10 rounded bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/20 transition-all duration-300">
                  <Wine className="w-5 h-5 text-gold-light" />
                </div>

                <h3 className="text-xl font-serif-display text-marfim-light group-hover:text-gold transition-colors duration-300 mb-3 font-semibold">
                  {benefit.title}
                </h3>

                <p className="text-xs md:text-sm text-marfim/70 font-serif-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOST PARTY ESTIMATOR/CALCULATOR ATTACHED FOR ENGAGEMENT */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-t from-[#0A0A0A] to-[#141414] border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <HostCalculator />
        </div>
      </section>

      {/* 6. AUTOR SECTION (FOTO DO AUTOR + BIOGRAFIA) */}
      <section className="py-20 md:py-28 px-4 border-t border-gold/10 bg-[#141414]/30 relative overflow-hidden" id="autor">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Author photo with elegant framing) */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              {/* Decorative behind glow */}
              <div className="absolute w-64 h-64 rounded-full bg-vinho/30 blur-3xl opacity-40 pointer-events-none" />
              
              <div className="relative group max-w-sm">
                {/* Luxury Double Outline */}
                <div className="absolute -inset-4 border border-gold/10 group-hover:border-gold/20 transition-colors duration-300 rounded-lg pointer-events-none" />
                <div className="absolute -inset-2 border border-gold/25 group-hover:border-gold/40 transition-colors duration-300 rounded pointer-events-none" />
                
                <img
                  src={authorPhotoUrl}
                  alt="Augusto Valverde Bartender e Historiador"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.73)] brightness-95 group-hover:brightness-100 transition-all duration-300 grayscale-[20%] group-hover:grayscale-0 rounded"
                  id="author-augusto-img"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-black/80 border border-gold/30 p-4 rounded backdrop-blur-md text-center">
                  <span className="block text-sm font-serif-display text-gold font-bold">Augusto Valverde</span>
                  <span className="text-[9px] font-sans-alt text-marfim/65 uppercase tracking-widest">Bartender, Escritor & Pesquisador</span>
                </div>
              </div>
            </div>

            {/* Right Column (Biography Text) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-sans-alt tracking-[0.4em] uppercase text-gold/90 block mb-2 font-semibold text-center lg:text-left">A Mente por Trás da Obra</span>
              <h2 className="text-3xl md:text-4.5xl font-serif-display text-marfim-light font-medium mb-6 text-center lg:text-left">Augusto Valverde</h2>
              
              <div className="flex justify-center lg:justify-start mb-6">
                <Ornamento width="w-20" />
              </div>

              <div className="space-y-5 text-sm md:text-base text-marfim/80 font-serif-body leading-relaxed text-justify">
                <p>
                  Minha jornada na coquetelaria iniciou-se há vinte anos nos balcões mais exigentes de São Paulo antes de cruzar caminhos em residências aristocráticas de Nova York e Milão. Percebi logo que coquetéis não são mero álcool misturado. São fórmulas alquímicas, registradas por cronistas do cotidiano, reis exilados e marinheiros audazes.
                </p>
                <p>
                  Como historiador e gastrônomo de berço, dediquei os últimos cinco anos a catalogar raras literaturas dos séculos XIX e XX, traduzindo e testando proporções de forma científica com as matérias-primas e gelo acessíveis no varejo moderno.
                </p>
                <p>
                  Meu objetivo com <strong>"O Livro dos Cem Drinks"</strong> é tirar o véu de frescura do bar de alta coqueteleira e levar para sua bancada de cozinha ou armário de bar o protocolo absoluto para que cada drink servido faça jus à história da garrafa que você adquiriu.
                </p>
              </div>

              {/* Author signature footer quote */}
              <blockquote className="mt-8 p-4 bg-gold/5 border-l-2 border-gold text-xs italic text-gold-light font-serif-body leading-relaxed rounded-r shadow-sm">
                "Não nos reunimos apenas para beber, mas para ritualizar o tempo. Que o seu copo sempre guarde respeito pelas mãos do destilador original."
              </blockquote>
            </div>

          </div>

        </div>
      </section>

      {/* 7. OFERTA SECTION (Mockups 3D + Preço + CTA + Garantia) */}
      <section className="py-20 md:py-28 px-4 border-t border-gold/10 relative overflow-hidden" id="oferta">
        {/* Subtle red background touch */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vinho/5 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="text-center mb-12">
            <span className="text-xs font-sans-alt tracking-[0.4em] uppercase text-gold block mb-2 font-semibold">Oferta por Tempo Limitado</span>
            <h2 className="text-3.5xl md:text-5xl font-serif-display text-marfim-light">Adquira o Seu Acervo Hoje</h2>
            <div className="flex justify-center mt-3">
              <Ornamento width="w-32" />
            </div>
            
            {/* Real-time limited countdown block */}
            <div className="inline-flex items-center gap-1.5 bg-vinho/10 border border-vinho/30 rounded px-4 py-1.5 text-xs text-vinho-light font-sans-alt uppercase tracking-widest mt-6">
              <Clock className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span>O desconto de lançamento expira em: </span>
              <span className="font-mono font-bold text-gold-light ml-1">
                {padZero(timeLeft.hours)}:{padZero(timeLeft.minutes)}:{padZero(timeLeft.seconds)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#141414] border border-gold/30 rounded-xl p-6 md:p-10 shadow-2xl relative">
            <div className="absolute inset-1 border border-gold/10 pointer-events-none rounded-lg" />
            
            {/* Left side: Book Mockup */}
            <div className="md:col-span-5 flex justify-center py-4">
              <div className="relative group">
                <img
                  src={bookMockupUrl}
                  alt="Mockup do Livro dos Cem Drinks Oferta"
                  referrerPolicy="no-referrer"
                  className="w-full max-w-[190px] md:max-w-[220px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] hover:scale-105 transition-all duration-500 relative z-10"
                  id="mockup-offer-img"
                />
                
                {/* Vintage gold stamp */}
                <div className="absolute -bottom-4 -left-4 z-20 w-16 h-16 rounded-full bg-gold text-black flex flex-col items-center justify-center border-2 border-black rotate-12 shadow-lg hover:rotate-3 transition-transform duration-300">
                  <span className="text-[8px] font-sans-alt font-bold leading-none tracking-tighter uppercase">Compêndio</span>
                  <span className="text-sm font-serif-display font-black leading-none">101</span>
                  <span className="text-[7px] font-sans-alt font-bold uppercase">Drinks</span>
                </div>
              </div>
            </div>

            {/* Right side: Price details & checkout CTAs */}
            <div className="md:col-span-7 flex flex-col justify-center text-center md:text-left">
              <span className="text-gold uppercase tracking-[0.25em] font-sans-alt text-[10px] font-bold block mb-1">E-BOOK DIGITAL · ACESSO VITALÍCIO</span>
              
              <h3 className="text-2xl md:text-3xl font-serif-display text-marfim-light mb-4">
                O Livro dos Cem Drinks (PDF)
              </h3>

              <div className="space-y-2 text-xs md:text-sm text-marfim/70 font-serif-body mb-6">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  <span>Ficha completa de 101 coquetéis com ilustrações exclusivas</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  <span>Glossário do Bartender com passo a passo de técnicas</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  <span>Guia de marcas brasileiras de excelente custo-benefício</span>
                </div>
              </div>

              {/* Price bracket cards */}
              <div className="flex items-baseline justify-center md:justify-start gap-4 mb-6">
                <div className="text-sm text-marfim/40 line-through">R$ 97,00</div>
                <div className="text-4xl md:text-5xl font-serif-display text-gold font-bold">R$ 47,00</div>
                <div className="text-xs text-marfim/60 font-sans-alt uppercase tracking-widest pl-1">à vista</div>
              </div>

              <div className="text-xs text-marfim/80 mb-6 bg-black/40 p-3 rounded border-l-2 border-gold/40 inline-block max-w-sm mx-auto md:mx-0">
                Ou em até <strong>5x no cartão</strong> de crédito com liberação imediata de download.
              </div>

              {/* Secure checkout button action */}
              <a
                href="#LINK-CHECKOUT"
                onClick={openCheckout}
                className="w-full px-8 py-4.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-sans-alt text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(184,146,74,0.5)] hover:scale-[1.01] text-center flex items-center justify-center gap-2"
                id="btn-checkout-offer"
              >
                Garantir Meu Acesso Imediato
                <Lock className="w-4 h-4 text-black shrink-0" />
              </a>

              {/* Trust seals spacing */}
              <div className="mt-4 flex items-center justify-center md:justify-start gap-3 text-[10px] text-marfim/40 uppercase tracking-widest font-mono">
                <span>⚡ Entrega Imediata</span>
                <span>•</span>
                <span>🔒 Pagamento Seguro</span>
                <span>•</span>
                <span>💎 Compra 100% Garantida</span>
              </div>
            </div>
          </div>

          {/* 7 Days Guarantee Badge box */}
          <div className="mt-10 p-6 md:p-8 bg-black/40 border border-gold/15 rounded-lg flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-gold" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-serif-display text-lg text-marfim-light font-bold">Garantia Blindada Incondicional</h4>
              <p className="text-xs text-marfim/70 font-serif-body leading-relaxed mt-1">
                Adquira O Livro dos Cem Drinks sem medo. Se num período de até 7 dias da sua compra, você sentir que os ensaios históricos ou os métodos de diluição não elevaram seu conhecimento no bar doméstico, reembolsamos cada centavo pago de forma integral e amigável.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION (Acordeão de Perguntas com details nativos aprimorados) */}
      <section className="py-20 md:py-28 px-4 border-t border-gold/10 bg-[#141414]/15" id="faq">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-sans-alt tracking-[0.4em] uppercase text-gold block mb-2 font-semibold">Tire Suas Dúvidas</span>
            <h2 className="text-3.5xl md:text-5xl font-serif-display text-marfim-light">Perguntas Frequentes</h2>
            <div className="flex justify-center mt-4">
              <Ornamento width="w-24" />
            </div>
          </div>

          {/* FAQs List */}
          <div className="space-y-4">
            {faqItems.map((faq) => {
              const isOpen = activeFaq === faq.id;
              
              return (
                <div 
                  key={faq.id}
                  className="border border-gold/15 bg-[#141414] rounded-lg transition-colors duration-300 hover:border-gold/30"
                  id={`faq-${faq.id}`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between text-base md:text-lg font-serif-display text-marfim-light hover:text-gold transition-colors duration-300"
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 shrink-0 text-gold-light text-xl font-mono leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 md:p-6 pt-0 border-t border-gold/10 text-xs md:text-sm text-marfim/75 font-serif-body leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. RODAPÉ (Marca, Autoria, Aviso de Saúde/Maioridade) */}
      <footer className="bg-black py-16 px-4 border-t border-gold/15 relative z-10" id="global-footer">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#1e1a18]">
            {/* Logo details */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xl font-serif-display text-gold tracking-widest font-semibold">O LIVRO DOS CEM DRINKS</span>
              <span className="text-[9px] font-sans-alt text-marfim/50 uppercase tracking-[0.3em] mt-1">O Acervo Clássico da Coquetelaria</span>
            </div>

            {/* Author social indicators */}
            <div className="flex items-center gap-6">
              <span className="text-xs text-marfim/40 font-mono">© 2026 Augusto Valverde. Todos os direitos reservados.</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 text-[10px] text-marfim/40 font-serif-body leading-relaxed">
            
            <div className="md:col-span-8">
              <p>
                <strong>AVISO LEGAL & RESPONSABILIDADE:</strong> O conteúdo deste guia possui finalidade puramente gastronômica, cultural e histórica. O preparo e consumo de bebidas alcoólicas são proibidos para menores de 18 anos. Beba com extrema moderação, cultive o paladar e nunca dirija sob o efeito de álcool.
              </p>
              <p className="mt-3">
                Este site é oficial e exclusivo. Certifique-se de realizar o download de forma lícita através da plataforma de pagamento oficial recomendada acima para garantir updates e suporte das receitas.
              </p>
            </div>

            <div className="md:col-span-4 flex md:justify-end items-center">
              <div className="inline-flex gap-4 border border-gold/10 px-4 py-2 bg-gradient-to-r from-black via-[#141414] to-black rounded">
                <span className="text-gold font-sans-alt font-bold tracking-[0.2em] uppercase text-[9px]">+18 ANOS</span>
                <span className="text-marfim/45">•</span>
                <span className="text-marfim/65 font-serif-body italic">BEBA COM MODERAÇÃO</span>
              </div>
            </div>

          </div>

        </div>
      </footer>

      {/* CHECKOUT SIMULATOR OVERLAY MODAL */}
      <AnimatePresence>
        {showCheckoutSimulator && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            id="checkout-modal-overlay"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="w-full max-w-md bg-[#141414] border-2 border-gold/40 p-6 md:p-8 rounded-xl shadow-2xl relative"
            >
              <div className="absolute inset-1 border border-gold/10 pointer-events-none rounded-lg" />
              
              <button 
                onClick={() => setShowCheckoutSimulator(false)}
                className="absolute top-4 right-4 text-marfim/50 hover:text-gold text-sm font-sans font-bold cursor-pointer transition-colors duration-200"
              >
                ✕ Fechar
              </button>

              {checkoutStatus === "init" && (
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto text-gold mb-4">
                    <Lock className="w-5 h-5 text-gold-light" />
                  </div>
                  <h4 className="text-xl font-serif-display text-marfim-light mb-2">Checkout Seguro Premium</h4>
                  <p className="text-xs text-marfim/60 font-serif-body px-2 mb-6">
                    Você está iniciando a compra do e-book <strong>"O Livro dos Cem Drinks"</strong> por apenas R$ 47,00 (Preço Original R$ 97,00). Detalhes processados via canal criptografado.
                  </p>

                  <div className="bg-black/60 border border-gold/15 p-4 rounded text-left mb-6">
                    <span className="text-[9px] text-gold uppercase tracking-wider block font-semibold mb-1">Produto Selecionado</span>
                    <span className="text-sm text-marfim font-serif-display font-bold">O Livro dos Cem Drinks + Bônus</span>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-gold/10 text-xs font-mono">
                      <span className="text-marfim/50">Total Seguro:</span>
                      <span className="text-gold-light font-bold">R$ 47,00 à vista</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSimulatePayment}
                    className="w-full px-6 py-3.5 bg-gradient-to-r from-gold-dark to-gold text-black uppercase font-sans-alt text-xs font-bold tracking-widest rounded transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(184,146,74,0.3)] cursor-pointer"
                  >
                    Simular Pagamento Seguro
                  </button>
                  <p className="text-[10px] text-marfim/45 mt-3 font-mono">Simulador de ambiente de desenvolvimento seguro</p>
                </div>
              )}

              {checkoutStatus === "processing" && (
                <div className="py-12 text-center">
                  <div className="w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gold text-xs tracking-widest uppercase font-sans-alt">Criptografando Dados...</p>
                  <p className="text-xs text-marfim/60 font-serif-body mt-1">Conectando ao gateway de pagamento (simulação Kiwi/Hotmart)</p>
                </div>
              )}

              {checkoutStatus === "success" && (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif-display text-marfim-light mb-2">Compra Concluída!</h4>
                  <p className="text-xs text-marfim/70 font-serif-body px-4 mb-6">
                    Seu pagamento fictício de <strong>R$ 47,00</strong> foi processado com absoluto sucesso no simulador.
                  </p>
                  
                  <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded text-xs text-emerald-300/80 mb-6 font-serif-body max-w-sm mx-auto leading-relaxed">
                    <strong>Acesso Imediato:</strong> Nós enviamos o PDF completo com as 230 páginas de luxo de coquetelaria para o seu e-mail de teste.
                  </div>

                  <button
                    onClick={() => setShowCheckoutSimulator(false)}
                    className="w-full px-5 py-3 border border-gold/40 hover:border-gold text-gold font-sans-alt text-xs uppercase tracking-widest rounded transition-colors duration-300 cursor-pointer"
                  >
                    Retornar ao Livro dos Drinks
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

import React from "react";
import { MessageSquare, Quote, BookOpen, Clock, Heart } from "lucide-react";
import Ornamento from "./Ornamento";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  relationship: string;
  quote: string;
  context: string;
  avatarInitials: string;
  color: string;
  imageUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Seu Waldir",
    role: "Relojoeiro aposentado",
    location: "Curitiba - PR",
    relationship: "Parceiro de oficina do falecido pai de Augusto",
    quote: "O Augusto herdou do pai a precisão cerimoniosa de guiar as mãos. Ver esse livro pronto me fez lembrar o velho rito de calibração de um relógio de corda de luxo: não há um miligrama de destilado fora do lugar, cada proporção é uma engrenagem exata. É a devoção familiar reencarnada em líquido.",
    context: "Recebeu uma das primeiras cópias impressas de teste",
    avatarInitials: "SW",
    color: "from-amber-600/20 to-gold/10",
    imageUrl: "https://i.ibb.co/0pzpXJR3/download-40.jpg"
  },
  {
    name: "Helena Prestes",
    role: "Tradutora & Crítica de Arte",
    location: "Curitiba - PR",
    relationship: "Colega da faculdade de Letras (Turma de 2006)",
    quote: "Quando nos formamos em Letras, a maioria seguiu para as salas de aula. Augusto foi para o balcão. Lembro-me de dizerem que ele estava desperdiçando sua inteligência. Que engano. Ele apenas mudou de biblioteca. Augusto analisa a estrutura de um Daiquiri como quem interpreta um soneto de Camões. É lindo, lírico e cirúrgico.",
    context: "Acompanhou as primeiras anotações em guardanapos há 15 anos",
    avatarInitials: "HP",
    color: "from-[#7a2426]/20 to-vinho/10",
    imageUrl: "https://i.ibb.co/CK9zCj8w/download-41.jpg"
  },
  {
    name: "Mestre Eduardo (Lalo)",
    role: "Cantineiro e Memória Viva do Cocktail",
    location: "Havana - Cuba",
    relationship: "Mentor de viagens de Augusto por Havana",
    quote: "Este rapaz brasileiro me encontrou em Havana com um caderno surrado, perguntando sobre a densidade exata do limão no Daiquiri. Ele não tinha pressa. Ele queria ouvir. Quando me enviou as páginas desse livro traduzidas pelo correio, me emocionei. É o guardião mais devoto da nossa história que já conheci.",
    context: "Conversas regadas a rum e história caribenha",
    avatarInitials: "EL",
    color: "from-blue-900/20 to-slate-800/10",
    imageUrl: "https://i.ibb.co/S79JV4Nj/Chat-GPT-Image-2-de-jun-de-2026-21-11-30.png"
  },
  {
    name: "Clarice Menezes",
    role: "Arquiteta e Colecionadora de Histórias",
    location: "Curitiba - PR",
    relationship: "Cliente fidelíssima de balcão por 12 anos",
    quote: "O bar do Augusto era um refúgio. Ele nunca entregava apenas uma taça; entregava um compasso de tempo desacelerado e gestos gentis. Ter este manual em casa é mais do que aprender receitas — é reencontrar o companheiro paciente que sempre sabe exatamente como acolher nossas noites mais longas.",
    context: "Sentou-se na cadeira nº 4 do balcão todas as quintas-feiras",
    avatarInitials: "CM",
    color: "from-emerald-950/20 to-teal-900/10",
    imageUrl: "https://i.ibb.co/xtyfQbZ5/download-43.jpg"
  }
];

export default function AcquaintanceTestimonials() {
  return (
    <section className="py-20 md:py-28 px-4 border-t border-gold/10 bg-gradient-to-b from-[#0A0A0A] via-[#121111] to-[#0A0A0A] relative overflow-hidden" id="provas-sociais-amigos">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-1/12 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-[350px] h-[350px] bg-vinho/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header decoration as watch mechanism rings */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-alt tracking-[0.4em] uppercase text-gold block mb-2 font-semibold">
            Testemunhos de Afeto e Ofício
          </span>
          <h2 className="text-3.5xl md:text-5xl font-serif-display text-marfim-light leading-tight max-w-2xl">
            As vozes de quem compartilhou o tempo e o balcão
          </h2>
          <div className="flex justify-center mt-4">
            <Ornamento width="w-28" />
          </div>
          <p className="text-sm md:text-base text-marfim/60 font-serif-body max-w-xl mx-auto mt-4 leading-relaxed">
            Muito além de depoimentos comerciais tradicionais, estas são as palavras sinceras de amigos, confidentes de longa data e mentores rústicos de Augusto Valverde.
          </p>
        </div>

        {/* 2x2 grid of beautiful letters/cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((test, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#141414] to-[#0C0C0C] border border-gold/10 rounded-xl p-6 md:p-8 relative hover:border-gold/30 transition-all duration-500 shadow-2xl flex flex-col justify-between group"
            >
              {/* Inner decorative frame line */}
              <div className="absolute inset-1.5 border border-gold/5 pointer-events-none rounded-lg" />
              
              {/* Top quotes badge and decorative initials */}
              <div className="flex justify-between items-start gap-4 mb-6 relative">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full overflow-hidden bg-gradient-to-tr ${test.color} border border-gold/25 flex items-center justify-center font-serif-display text-base font-bold text-gold-light shadow-inner shrink-0`}>
                    {test.imageUrl ? (
                      <img 
                        src={test.imageUrl} 
                        alt={test.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      test.avatarInitials
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif-display text-lg text-marfim-light leading-snug">
                      {test.name}
                    </h3>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-gold-dark/80">
                      {test.role}
                    </p>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-gold/10 group-hover:text-gold/25 transition-colors shrink-0" />
              </div>

              {/* Central Letter text styled with serif elegance */}
              <div className="relative mb-6">
                <p className="text-sm md:text-[15px] text-marfim/80 font-serif-body italic leading-relaxed text-left pl-3 border-l border-gold/20">
                  "{test.quote}"
                </p>
              </div>

              {/* Bottom Metadata context badge and relationship with elegant separator */}
              <div className="pt-4 border-t border-gold/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-[11px] font-mono">
                <div className="text-marfim/45 text-left">
                  <span className="text-gold/45 uppercase mr-1.5 font-bold">Origem:</span>
                  <span className="italic">{test.relationship}</span>
                </div>
                
                <div className="bg-[#121111] border border-gold/10 px-2.5 py-1 rounded text-gold/75 flex items-center gap-1.5 text-[10px] w-fit">
                  <Clock className="w-3 h-3 text-gold shrink-0" />
                  <span>{test.context}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Vintage-inspired narrative text footer */}
        <div className="mt-14 max-w-2xl mx-auto bg-black/40 border border-gold/10 p-6 rounded-lg text-center">
          <p className="text-xs md:text-sm text-marfim/50 font-serif-body leading-relaxed">
            "Este livro não é sobre mim, mas sobre todos aqueles que um dia estenderam as mãos sobre a madeira escura de um balcão esperando por calma. Cada palavra foi lida, revisada e abençoada pelas mentes que me ensinaram a decifrar a vida."
          </p>
          <span className="block text-xs font-mono tracking-widest text-gold uppercase mt-2 font-semibold">
            — Augusto Valverde
          </span>
        </div>

      </div>
    </section>
  );
}

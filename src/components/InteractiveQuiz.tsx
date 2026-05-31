import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlassWater, Flame, Compass, HelpCircle, Check, RotateCcw, ArrowRight } from "lucide-react";
import Ornamento from "./Ornamento";

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    value: string;
    desc: string;
    icon: string;
  }[];
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Qual perfil de sabor agrada mais o seu paladar?",
    options: [
      { label: "Amargo & Herbáceo", value: "amargo", desc: "Complexidade, raízes e botânicos expressivos.", icon: "🌿" },
      { label: "Seco & Alcoólico", value: "seco", desc: "Perfis fortes, onde o espírito do destilado brilha puro.", icon: "🥃" },
      { label: "Cítrico & Refrescante", value: "citrico", desc: "Acidez equilibrada com dulçor leve.", icon: "🍋" },
      { label: "Doce & Cremoso", value: "doce", desc: "Frutado marcante, especiarias ou toques aveludados.", icon: "🍍" },
    ],
  },
  {
    id: 2,
    text: "Como você prefere a intensidade alcoólica do coquetel?",
    options: [
      { label: "Intensa & Decidida", value: "intenso", desc: "Drinks robustos do estilo 'stirred' (mexido).", icon: "🔥" },
      { label: "Equilibrada & Macia", value: "medio", desc: "A harmonia perfeita entre frescor e graduação alcoólica.", icon: "⚖️" },
      { label: "Leve & Festiva", value: "leve", desc: "Refrescância máxima e fácil de beber.", icon: "☀️" },
    ],
  },
  {
    id: 3,
    text: "Qual é a sua atmosfera ou ocasião perfeita?",
    options: [
      { label: "Conversas Intelectuais", value: "bar", desc: "Um lounge de jazz à noite debaixo de luz suave.", icon: "🎶" },
      { label: "Final de Tarde com Amigos", value: "tarde", desc: "Sentado à beira da piscina ou em um terraço ao pôr do sol.", icon: "🌇" },
      { label: "Jantar Sofisticado", value: "jantar", desc: "Uma refeição formal onde os coquetéis abrem o apetite.", icon: "🍽️" },
    ],
  },
];

interface QuizResult {
  name: string;
  category: string;
  celsius: string;
  history: string;
  ingredients: string[];
  tips: string;
  imageAlt: string;
  glassware: string;
  pages: string;
}

const resultsList: QuizResult[] = [
  {
    name: "Negroni Clássico",
    category: "Aperitivo Italiano",
    celsius: "I",
    history: "Nascido em Florença em 1919 para o Conde Camillo Negroni, que desejava um drink mais forte que seu costumeiro Americano. O auge absoluto do equilíbrio entre o doce, o amargo e o herbanal.",
    ingredients: ["30ml de London Dry Gin", "30ml de Campari Bitter", "30ml de Vermute Doce Carpano Formidável"],
    tips: "Mexa com bastante gelo para obter a diluição perfeita e perfume o copo com óleos essenciais da laranja-bahia fresca.",
    imageAlt: "Negroni de tons avermelhados com casca de laranja",
    glassware: "Copo Baixo Clássico (Double Old Fashioned)",
    pages: "42-43"
  },
  {
    name: "Old Fashioned Clássico",
    category: "O Rei de Bourbon",
    celsius: "II",
    history: "A definição primitiva do próprio termo 'cocktail': destilado, açúcar, água e bitters. Apreciado vagarosamente pelo passar das décadas em reuniões privadas.",
    ingredients: ["60ml de Kentucky Bourbon Whiskey", "3 dashes de Angostura Bitters", "1 Cubo de Açúcar", "Casca de Laranja Bahia"],
    tips: "Use um cubo de açúcar cristal umedecido com angostura bitters no fundo do copo antes de adicionar um belo bloco de gelo translúcido.",
    imageAlt: "Copo baixo com gelo translúcido, bourbon dourado escuro e casca de laranja",
    glassware: "Copo Baixo de Whisky (Double Old Fashioned)",
    pages: "44-45"
  },
  {
    name: "Manhattan",
    category: "Aristocracia Novaiorquina",
    celsius: "III",
    history: "Criado no Manhattan Club de Nova York na década de 1870. Um blend sofisticado, encorpado e caloroso onde o centeio encontra o vermute doce de forma sublime.",
    ingredients: ["60ml de Rye Whiskey ou Bourbon", "30ml de Vermute Doce Carpano", "2 dashes de Angostura Bitters"],
    tips: "Nunca bata na coqueteleira. Mexa suavemente em um mixing glass gelado e decore com uma cereja marrasquino de alta qualidade.",
    imageAlt: "Taça cupê com coquetel de tom âmbar e cereja",
    glassware: "Taça Cupê ou de Martini (Coupe Glass)",
    pages: "48-49"
  },
  {
    name: "Margarita",
    category: "Tesouro Mexicano",
    celsius: "IV",
    history: "Um clássico refrescante que equilibra perfeitamente a força da tequila, a doçura do licor de laranja e o punch cítrico do limão fresco, finalizado com um anel de sal.",
    ingredients: ["50ml de Tequila 100% Agave", "20ml de Licor Triple Sec", "25ml de Suco de Limão Taiti fresco"],
    tips: "Agite energeticamente com bastante gelo e sirva em um copo com a borda sutilmente crustada de sal fino ou flor de sal.",
    imageAlt: "Taça margarita com anel de sal fino na borda",
    glassware: "Taça Margarita ou Cupê Clássica",
    pages: "52-53"
  },
  {
    name: "Mojito",
    category: "Sabor Tropical Cubano",
    celsius: "V",
    history: "Um dos long-drinks mais icônicos do mundo, amado por Hemingway no bar La Bodeguita del Medio em Havana. Uma explosão direta de hortelã fresca e o calor do rum.",
    ingredients: ["50ml de Rum Branco Ligeiro", "10 a 12 folhas de Hortelã Fresca", "15ml de Xarope Simples", "25ml de Suco de Limão", "Completar com Club Soda"],
    tips: "Amasse delicadamente a hortelã com o xarope de açúcar para liberar os óleos sem despedaçar as folhas, mantendo o copo limpo e estético.",
    imageAlt: "Copo longo com gelo, fatias de limão e hortelã vibrante",
    glassware: "Copo Longo (Highball / Collins)",
    pages: "58-59"
  },
  {
    name: "Daiquiri de Havana",
    category: "Clássico Cubano",
    celsius: "VI",
    history: "Simplicidade genial que deu origem à coquetelaria caribenha. O equilíbrio absoluto da Santíssima Trindade barman: destilado premium, acidez fresca da lima e o acento suave do açúcar.",
    ingredients: ["60ml de Rum Branco Cubano", "22.5ml de Suco de Limão Taiti fresco", "15ml de Xarope de Açúcar 1:1"],
    tips: "Bata energeticamente com pedras grandes de gelo. O copo precisa estar muito frio ao servir para sustentar a temperatura glacial.",
    imageAlt: "Daiquiri em taça coupe elegantemente servido",
    glassware: "Taça Cupê Elegante (Coupe Glass)",
    pages: "62-63"
  },
  {
    name: "Espresso Martini",
    category: "Energia Contemporânea",
    celsius: "VII",
    history: "Criado por Dick Bradsell em Londres em 1983 para uma supermodelo que pediu um drink para 'acordá-la e animá-la'. Elegância escura coroada por uma espuma aveludada.",
    ingredients: ["50ml de Vodka Premium", "30ml de Café Espresso fresco e quente", "15ml de Licor de Café Kahlúa", "7.5ml de Xarope Simples"],
    tips: "Agite com vigor redobrado para garantir uma espuma espessa e consistente. Decore com três grãos de café simbolizando saúde, riqueza e felicidade.",
    imageAlt: "Taça de martini preenchida com líquido escuro e espuma aveludada",
    glassware: "Taça de Martini ou Taça de Coupê Glacial",
    pages: "68-69"
  },
  {
    name: "Aperol Spritz",
    category: "Frescor Veneziano",
    celsius: "VIII",
    history: "O rei absoluto dos terraços europeus. Nascido da tradição italiana do 'Spritz' de adicionar água com gás ao vinho, aperfeiçoado com o amargo leve e frutado do Aperol.",
    ingredients: ["90ml de Espumante Prosecco", "60ml de Aperol", "30ml de Club Soda ou Água com gás"],
    tips: "Monte direto no copo cheio de gelo. Adicione o prosecco antes do Aperol para que as densidades se misturem harmoniosamente por conta própria.",
    imageAlt: "Taça gigante de vinho com drink alaranjado, gelo e fatia de laranja",
    glassware: "Taça Gigante de Vinho tinto",
    pages: "74-75"
  },
  {
    name: "Caipirinha de Três Madeiras",
    category: "Alma e Tradição Brasileira",
    celsius: "IX",
    history: "Declarada patrimônio cultural brasileiro. Nascida no interior do estado de São Paulo no início do século XX como remédio popular, hoje é o maior ícone nacional.",
    ingredients: ["60ml de Cachaça de Alambique Premium", "1 Limão Taiti cortado em gomos", "2 colheres rasas de Açúcar Refinado", "Gelo Moído ou em Cubos"],
    tips: "Nunca macere a casca branca interna do limão. Pressione levemente a polpa e monte o copo artesanalmente sem usar coqueteleira.",
    imageAlt: "Caipirinha montada em copo baixo rústico",
    glassware: "Copo Baixo Tradicional (Old Fashioned)",
    pages: "80-81"
  },
  {
    name: "French 75",
    category: "Sofisticação Parisiense",
    celsius: "X",
    history: "Batizado com o nome de um canhão de artilharia rápida de 75 milímetros da Primeira Guerra Mundial, devido ao seu efeito potente. A união nobre de gin e champagne.",
    ingredients: ["30ml de London Dry Gin", "15ml de Suco de Limão Siciliano", "15ml de Xarope Simples", "Completar com Champagne de Luxo"],
    tips: "Coe primeiro o gin, o limão e o xarope gelados na taça e, em seguida, complete calmamente com o champagne bem gelado para preservar as borbulhas.",
    imageAlt: "Taça de flute estreita com efervescência e casca de limão",
    glassware: "Taça de Champagne (Flute)",
    pages: "86-87"
  }
];

interface InteractiveQuizProps {
  onAdquirir?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export default function InteractiveQuiz({ onAdquirir }: InteractiveQuizProps) {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 = intro, 1,2,3 = questions, 4 = result
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const startQuiz = () => {
    setAnswers({});
    setCurrentStep(1);
  };

  const handleSelectOption = (value: string) => {
    const updated = { ...answers, [currentStep]: value };
    setAnswers(updated);

    if (currentStep < quizQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete!
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCurrentStep(4);
      }, 1000);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(1);
  };

  const getMatchedDrink = (): QuizResult => {
    const flavor = answers[1] || "citrico";
    const intensity = answers[2] || "medio";
    const occasion = answers[3] || "tarde";

    // Score sheet initialized to 0 for all 10 drinks
    const scores: Record<string, number> = {
      "Negroni Clássico": 0,
      "Old Fashioned Clássico": 0,
      "Manhattan": 0,
      "Margarita": 0,
      "Mojito": 0,
      "Daiquiri de Havana": 0,
      "Espresso Martini": 0,
      "Aperol Spritz": 0,
      "Caipirinha de Três Madeiras": 0,
      "French 75": 0,
    };

    // Q1 (Flavor Profile)
    if (flavor === "amargo") {
      scores["Negroni Clássico"] += 10;
      scores["Aperol Spritz"] += 8;
      scores["Manhattan"] += 4;
    } else if (flavor === "seco") {
      scores["Old Fashioned Clássico"] += 10;
      scores["Manhattan"] += 8;
      scores["Margarita"] += 5;
      scores["French 75"] += 3;
    } else if (flavor === "citrico") {
      scores["Caipirinha de Três Madeiras"] += 10;
      scores["Daiquiri de Havana"] += 8;
      scores["Margarita"] += 8;
      scores["Mojito"] += 8;
      scores["French 75"] += 6;
    } else if (flavor === "doce") {
      scores["Espresso Martini"] += 10;
      scores["Mojito"] += 2;
      scores["Caipirinha de Três Madeiras"] += 2;
    }

    // Q2 (Alcoholic Intensity)
    if (intensity === "intenso") {
      scores["Negroni Clássico"] += 10;
      scores["Old Fashioned Clássico"] += 10;
      scores["Manhattan"] += 10;
    } else if (intensity === "medio") {
      scores["Daiquiri de Havana"] += 10;
      scores["Margarita"] += 10;
      scores["Espresso Martini"] += 10;
      scores["French 75"] += 6;
      scores["Caipirinha de Três Madeiras"] += 4;
    } else if (intensity === "leve") {
      scores["Mojito"] += 10;
      scores["Aperol Spritz"] += 10;
      scores["Caipirinha de Três Madeiras"] += 9;
      scores["French 75"] += 8;
    }

    // Q3 (Occasion/Atmosphere)
    if (occasion === "bar") {
      scores["Old Fashioned Clássico"] += 10;
      scores["Manhattan"] += 10;
      scores["Negroni Clássico"] += 8;
      scores["Espresso Martini"] += 8;
      scores["French 75"] += 5;
    } else if (occasion === "tarde") {
      scores["Mojito"] += 10;
      scores["Caipirinha de Três Madeiras"] += 10;
      scores["Aperol Spritz"] += 10;
      scores["Margarita"] += 6;
    } else if (occasion === "jantar") {
      scores["Daiquiri de Havana"] += 10;
      scores["Margarita"] += 8;
      scores["French 75"] += 8;
      scores["Negroni Clássico"] += 5;
      scores["Manhattan"] += 5;
    }

    // Find the drink with the maximum score
    let bestDrinkName = "Old Fashioned Clássico";
    let maxScore = -1;

    // Order for deterministic tie-breaking
    const order = [
      "Negroni Clássico",
      "Old Fashioned Clássico",
      "Manhattan",
      "Margarita",
      "Mojito",
      "Daiquiri de Havana",
      "Espresso Martini",
      "Aperol Spritz",
      "Caipirinha de Três Madeiras",
      "French 75"
    ];

    for (const name of order) {
      if (scores[name] > maxScore) {
        maxScore = scores[name];
        bestDrinkName = name;
      }
    }

    return resultsList.find(d => d.name === bestDrinkName) || resultsList[0];
  };

  const matchedResult = getMatchedDrink();

  return (
    <div className="w-full max-w-3xl mx-auto" id="interactive-quiz-section">
      {/* Moldura Dourada Dupla de Luxo */}
      <div className="relative p-6 md:p-10 border border-gold/40 bg-black/80 backdrop-blur-md rounded-lg shadow-2xl">
        <div className="absolute inset-1 border border-gold/15 pointer-events-none rounded" />
        
        <AnimatePresence mode="wait">
          {/* INTRO SCREEN */}
          {currentStep === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-center py-6"
            >
              <span className="text-xs font-sans-alt tracking-[0.4em] uppercase text-gold block mb-2">Curadoria Interativa</span>
              <h3 className="text-4xl font-serif-display text-marfim-light mb-4">Descubra sua Alma Coqueteleira</h3>
              <p className="text-marfim/80 leading-relaxed font-serif-body text-base max-w-xl mx-auto mb-8">
                Responda a 3 breves reflexões sobre seus hábitos sensoriais e revele o cocktail clássico perfeito para o seu momento.
              </p>
              
              <div className="flex justify-center mb-10">
                <Ornamento width="w-24" />
              </div>

              <button
                onClick={startQuiz}
                className="px-8 py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-sans-alt text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,146,74,0.4)] hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-2 mx-auto"
                id="btn-iniciar-quiz"
              >
                Descobrir Meu Drink Próprio
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </motion.div>
          )}

          {/* QUESTIONS */}
          {currentStep >= 1 && currentStep <= 3 && !loading && (
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="py-2"
            >
              {/* Progress bar */}
              <div className="flex items-center justify-between mb-6 text-xs text-gold/60 font-mono">
                <span>Passo {currentStep} de 3</span>
                <span className="text-gold">{Math.round((currentStep / 3) * 100)}%</span>
              </div>
              <div className="w-full h-[1px] bg-gold/10 mb-8 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-gold transition-all duration-300 shadow-[0_0_8px_rgba(184,146,74,0.6)]" 
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>

              <h4 className="text-2xl md:text-3xl font-serif-display text-marfim-light mb-8 text-center md:text-left h-auto md:h-16 flex items-center">
                {quizQuestions[currentStep - 1].text}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quizQuestions[currentStep - 1].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.value)}
                    className="group relative p-5 border border-gold/20 hover:border-gold/60 bg-white/[0.02] hover:bg-gold/[0.04] text-left rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(184,146,74,0.1)] active:scale-[0.98] cursor-pointer flex items-start gap-4"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 rounded border border-gold/15 text-2xl transition-all duration-300">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <span className="font-serif-display text-lg text-marfim-light group-hover:text-gold transition-colors duration-300 block mb-1">
                        {option.label}
                      </span>
                      <p className="text-xs text-marfim/60 font-serif-body leading-relaxed">
                        {option.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* LOADING STATE */}
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 text-center flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full animate-spin mb-4" />
              <p className="text-gold font-sans-alt text-xs tracking-widest uppercase">Consultando Augusto Valverde...</p>
              <p className="text-marfim/60 text-sm mt-1 font-serif-body">Pesquisando correspondências clássicas na coquetelaria mundial.</p>
            </motion.div>
          )}

          {/* RESULT SCREEN */}
          {currentStep === 4 && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-2"
            >
              <div className="text-center mb-6">
                <span className="text-xs font-sans-alt tracking-[0.4em] uppercase text-gold block mb-1">Seu Perfil Sugere</span>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-3xl md:text-4xl font-serif-display text-gold-light italic">
                    {matchedResult.name}
                  </h3>
                </div>
                <div className="text-xs font-mono text-gold/60 uppercase tracking-widest">{matchedResult.category}</div>
              </div>

              {/* Replica Page Layout of Book */}
              <div className="bg-[#141414] border border-gold/25 p-5 md:p-8 rounded-lg mt-6 relative overflow-hidden">
                {/* Decorative retro texture */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(92,26,27,0.15),transparent_60%)] pointer-events-none" />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
                  {/* Left Column: Ingredients */}
                  <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-gold/10 pb-6 md:pb-0 md:pr-6">
                    <span className="text-[10px] font-sans-alt tracking-widest uppercase text-gold/80 block mb-3 font-semibold">Ingredientes</span>
                    <ul className="space-y-2.5 font-serif-body text-marfim/90">
                      {matchedResult.ingredients.map((ing, i) => (
                        <li key={i} className="text-sm flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <span className="text-[10px] font-sans-alt tracking-widest uppercase text-gold/80 block mb-2 font-semibold">Copo Recomendado</span>
                      <p className="text-xs text-marfim/70 italic font-serif-body">{matchedResult.glassware}</p>
                    </div>
                  </div>

                  {/* Right Column: Mini description and Instructions */}
                  <div className="md:col-span-7">
                    <span className="text-[10px] font-sans-alt tracking-widest uppercase text-gold/80 block mb-2 font-semibold">Origem & Alma</span>
                    <p className="text-xs text-marfim/70 font-serif-body leading-relaxed mb-4 italic">
                      "{matchedResult.history}"
                    </p>

                    <span className="text-[10px] font-sans-alt tracking-widest uppercase text-gold/80 block mb-1.5 font-semibold">Dica do Augusto</span>
                    <p className="text-xs text-marfim-light font-serif-body leading-relaxed bg-black/40 p-2.5 rounded border-l-2 border-gold/60">
                      {matchedResult.tips}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-gold/10 text-center text-[10px] text-marfim/30 font-serif-body">
                  Páginas {matchedResult.pages} de "O Livro dos Cem Drinks"
                </div>
              </div>

              {/* Call out on book and reset */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={resetQuiz}
                  className="font-sans-alt text-xs tracking-widest text-gold hover:text-gold-light uppercase flex items-center gap-1.5 py-2 px-3 hover:bg-white/[0.02] rounded transition-all duration-300 cursor-pointer"
                  id="btn-refazer-quiz"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Refazer Reflexão
                </button>

                <a
                  href="#LINK-CHECKOUT"
                  onClick={onAdquirir}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-vinho to-vinho-light hover:from-vinho-light hover:to-gradient-to-r text-marfim-light border border-gold/30 hover:border-gold/60 font-sans-alt text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(122,36,38,0.4)] text-center cursor-pointer"
                  id="btn-adquirir-via-quiz"
                >
                  Garantir Livro Completo (R$ 47)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
